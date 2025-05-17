'use client';

import React, { useState, FormEvent, ChangeEvent, ClipboardEvent, DragEvent, useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';

interface FormDataType {
  name: string;
  team: string;
  type: 'Participante' | 'Capitão' | 'Governança';
  activityDate: string;
}

interface ValidationErrorsType {
  name?: string;
  team?: string;
  images?: string;
  activityDate?: string;
}

export default function Page() {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    team: '',
    type: 'Participante',
    activityDate: new Date().toISOString().slice(0, 16), // Format: YYYY-MM-DDThh:mm
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrorsType>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev: FormDataType) => ({
      ...prev,
      [name]: value as FormDataType[keyof FormDataType]
    }));
  };

  const addFiles = (newFiles: File[]) => {
    const dataTransfer = new DataTransfer();
    
    // Add existing files
    if (files) {
      Array.from(files).forEach(file => {
        dataTransfer.items.add(file);
      });
    }
    
    // Add new files
    newFiles.forEach(file => {
      dataTransfer.items.add(file);
    });
    
    const updatedFiles = dataTransfer.files;
    setFiles(updatedFiles);
    
    // Create and add preview URLs
    const newUrls = newFiles.map(file => URL.createObjectURL(file));
    setPreviewUrls(prev => [...prev, ...newUrls]);

    // Clear image validation error when files are added
    setValidationErrors(prev => ({
      ...prev,
      images: undefined
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(Array.from(e.target.files));
    }
  };

  const handlePaste = async (e: ClipboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    
    // Handle pasted files
    const items = Array.from(e.clipboardData.items);
    let imageAdded = false;
    
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) {
          const newFile = new File([file], `pasted-image-${Date.now()}.${item.type.split('/')[1]}`, {
            type: item.type
          });
          addFiles([newFile]);
          imageAdded = true;
          break; // Only add the first image found
        }
      }
    }

    // If no image was added through the first method, try the clipboard API
    if (!imageAdded) {
      try {
        const permission = await navigator.permissions.query({ name: 'clipboard-read' as PermissionName });
        if (permission.state === 'granted' || permission.state === 'prompt') {
          const clipboardItems = await navigator.clipboard.read();
          for (const clipboardItem of clipboardItems) {
            for (const type of clipboardItem.types) {
              if (type.startsWith('image/')) {
                const blob = await clipboardItem.getType(type);
                const newFile = new File([blob], `pasted-image-${Date.now()}.${type.split('/')[1]}`, {
                  type: type
                });
                addFiles([newFile]);
                break; // Only add the first image found
              }
            }
          }
        }
      } catch (error) {
        // Ignore clipboard read errors as they're expected in some cases
        console.log('Clipboard API not available or denied:', error);
      }
    }
  };

  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files)
      .filter(file => file.type.startsWith('image/'));

    if (droppedFiles.length > 0) {
      addFiles(droppedFiles);
    }
  };

  const handleZoneClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = (index: number) => {
    if (files) {
      const dataTransfer = new DataTransfer();
      Array.from(files).forEach((file, i) => {
        if (i !== index) {
          dataTransfer.items.add(file);
        }
      });
      setFiles(dataTransfer.files);
    }
    
    setPreviewUrls(prev => prev.filter((_, i) => i !== index));
    URL.revokeObjectURL(previewUrls[index]);
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrorsType = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'O nome é obrigatório';
      isValid = false;
    }

    if (!formData.team.trim()) {
      errors.team = 'A equipe é obrigatória';
      isValid = false;
    }

    if (!formData.activityDate) {
      errors.activityDate = 'A data da atividade é obrigatória';
      isValid = false;
    }

    if (!files || files.length === 0) {
      errors.images = 'Pelo menos uma foto é obrigatória';
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('team', formData.team);
    submitData.append('type', formData.type);
    submitData.append('activityDate', formData.activityDate);
    
    if (files) {
      Array.from<File>(files).forEach(file => {
        submitData.append('images', file);
      });
    }

    // Show loading toast
    const loadingToast = toast.loading('Enviando dados...', {
      style: {
        background: '#1e40af',
        color: '#fff',
      },
    });

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: submitData,
      });
      
      const result = await response.json();
      
      if (response.ok) {
        // Dismiss loading toast and show success
        toast.dismiss(loadingToast);
        toast.success(
          <div className="flex flex-col">
            <span className="font-bold">Upload realizado com sucesso!</span>
            <span className="text-sm">Suas imagens foram salvas.</span>
          </div>,
          {
            duration: 4000,
            style: {
              background: '#059669',
              color: '#fff',
            },
            icon: '🎉',
          }
        );
        handleReset();
      } else {
        throw new Error(result.error || 'Falha ao enviar o formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      // Dismiss loading toast and show error
      toast.dismiss(loadingToast);

      // Check if it's a duplicate image error
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      if (errorMessage.includes('já foi enviada')) {
        toast.error(
          <div className="flex flex-col gap-1">
            <span className="font-bold">Imagem duplicada detectada</span>
            <span className="text-sm whitespace-normal">{errorMessage}</span>
          </div>,
          {
            duration: 6000,
            style: {
              background: '#dc2626',
              color: '#fff',
              maxWidth: '400px',
            },
            icon: '⚠️',
          }
        );
      } else {
        toast.error(
          <div className="flex flex-col">
            <span className="font-bold">Erro ao enviar o formulário</span>
            <span className="text-sm">Por favor, tente novamente.</span>
          </div>,
          {
            duration: 5000,
            style: {
              background: '#dc2626',
              color: '#fff',
            },
            icon: '❌',
          }
        );
      }
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      team: '',
      type: 'Participante',
      activityDate: new Date().toISOString().slice(0, 16),
    });
    setFiles(null);
    previewUrls.forEach(url => URL.revokeObjectURL(url));
    setPreviewUrls([]);
    setValidationErrors({});
    const form = document.getElementById('uploadForm') as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            borderRadius: '10px',
            padding: '16px',
          },
        }}
      />
      <div className="max-w-md mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Insira os dados do competidor
          </h1>
          
          <form id="uploadForm" onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Nome *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                  validationErrors.name 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
              />
              {validationErrors.name && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="team" className="block text-sm font-medium text-gray-700">
                Equipe *
              </label>
              <input
                type="text"
                id="team"
                name="team"
                value={formData.team}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                  validationErrors.team 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
              />
              {validationErrors.team && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.team}</p>
              )}
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Tipo
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              >
                <option value="Participante">Participante</option>
                <option value="Capitão">Capitão</option>
                <option value="Governança">Governança</option>
              </select>
            </div>

            <div>
              <label htmlFor="activityDate" className="block text-sm font-medium text-gray-700">
                Data e Hora da Atividade *
              </label>
              <input
                type="datetime-local"
                id="activityDate"
                name="activityDate"
                value={formData.activityDate}
                onChange={handleInputChange}
                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm ${
                  validationErrors.activityDate 
                    ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                }`}
              />
              {validationErrors.activityDate && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.activityDate}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Imagens *
              </label>
              <div
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
                  relative cursor-pointer min-h-[200px] p-4
                  border-2 ${isDragging ? 'border-blue-500 bg-blue-50' : 
                    validationErrors.images ? 'border-red-300' : 'border-dashed border-gray-300'}
                  rounded-lg transition-colors duration-200 ease-in-out
                  flex flex-col items-center justify-center gap-4
                  focus:outline-none focus:ring-2 
                  ${validationErrors.images ? 'focus:ring-red-500' : 'focus:ring-blue-500'}
                `}
                role="button"
                aria-label="Upload zone - click to select files or paste images"
              >
                <div className="flex flex-col items-center gap-2" onClick={handleZoneClick}>
                  <input
                    ref={fileInputRef}
                    type="file"
                    id="images"
                    name="images"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm text-gray-500 text-center">
                    Clique para selecionar ou arraste suas imagens aqui
                  </p>
                </div>

                <div className="w-full max-w-sm">
                  <textarea
                    className="w-full h-[60px] resize-none border rounded-md bg-gray-50 p-2 text-center text-sm"
                    onPaste={handlePaste}
                    onClick={(e) => e.stopPropagation()}
                    placeholder="Clique aqui e use Ctrl+V para colar uma imagem"
                    spellCheck={false}
                  />
                  <p className="text-xs text-gray-400 text-center mt-1">
                    Cole sua imagem aqui usando Ctrl+V ou botão direito → Colar
                  </p>
                </div>
              </div>

              {validationErrors.images && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.images}</p>
              )}

              {previewUrls.length > 0 && (
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {previewUrls.map((url, index) => (
                    <div key={url} className="relative group">
                      <img
                        src={url}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Enviar
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="flex-1 bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Limpar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 