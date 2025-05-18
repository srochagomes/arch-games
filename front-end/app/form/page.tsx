'use client';

import React, { useState, FormEvent, ChangeEvent, ClipboardEvent, DragEvent, useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';

interface ActivityDataType {
  description: string;
  points: number;
  language?: string;
  level?: string;
  start?: string;
  end?: string;
  streak_days?: number;
  xp_goal?: number;
  platform?: string;
  screenshot_provided?: boolean;
  duration_minutes?: number;
  distance_km?: number;
  calories_burned?: number | null;
  tracker?: string | null;
  location?: string | null;
  institution?: string | null;
  duration_hours?: number | null;
  certificate?: string | null;
  certificate_url?: string | null;
  topics?: string[] | null;
  title?: string | null;
  participants?: string[] | null;
  meeting_type?: string | null;
  summary?: string | null;
  attendees?: string[] | null;
  photo_provided?: boolean | null;
  author?: string | null;
  pages?: number | null;
  summary_submitted?: boolean | null;
  summary_text?: string | null;
  format?: string | null;
  game_title?: string | null;
  type?: string | null;
  rank?: string | null;
  recognized_by?: string | null;
  feedback_given?: boolean | null;
  certificate_provided?: boolean | null;
  photo_taken?: boolean | null;
  event_name?: string | null;
  position?: string | null;
  tabs_collected?: number | null;
}

interface ParticipantData {
  name: string;
  type: 'participant' | 'captain' | 'governance';
}

interface FormDataType {
  team: string;
  date: string;
  time: string;
  participants: ParticipantData[];
}

interface ValidationErrorsType {
  team?: string;
  images?: string;
  date?: string;
  time?: string;
  participants?: string;
}

export default function Page() {
  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  const [formData, setFormData] = useState<FormDataType>({
    team: '',
    date: new Date().toISOString().slice(0, 10),
    time: getCurrentTime(),
    participants: [{ name: '', type: 'participant' as const }]
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrorsType>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleParticipantChange = (index: number, field: keyof ParticipantData, value: string) => {
    setFormData(prev => ({
      ...prev,
      participants: prev.participants.map((participant, i) => 
        i === index 
          ? { ...participant, [field]: value }
          : participant
      )
    }));
  };

  const addParticipant = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFormData((prev) => ({
      ...prev,
      participants: [
        ...prev.participants,
        { name: '', type: 'participant' as const }
      ]
    }));
  };

  const removeParticipant = (index: number) => {
    if (formData.participants.length > 1) {
      setFormData(prev => ({
        ...prev,
        participants: prev.participants.filter((_, i) => i !== index)
      }));
    }
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
    console.log('Paste event triggered');
    
    // Handle pasted files
    const items = Array.from(e.clipboardData.items);
    let imageAdded = false;
    
    console.log('Clipboard items:', items.map(item => ({ type: item.type, kind: item.kind })));
    
    for (const item of items) {
      if (item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file) {
          console.log('Image file found:', file.name, file.type, file.size);
          const newFile = new File([file], `pasted-image-${Date.now()}.${item.type.split('/')[1]}`, {
            type: item.type,
            lastModified: new Date().getTime()
          });
          addFiles([newFile]);
          imageAdded = true;
          console.log('Image added to files state');
          break; // Only add the first image found
        }
      }
    }

    // If no image was added through the first method, try the clipboard API
    if (!imageAdded) {
      try {
        console.log('Trying Clipboard API');
        const permission = await navigator.permissions.query({ name: 'clipboard-read' as PermissionName });
        console.log('Clipboard permission:', permission.state);
        
        if (permission.state === 'granted' || permission.state === 'prompt') {
          const clipboardItems = await navigator.clipboard.read();
          for (const clipboardItem of clipboardItems) {
            for (const type of clipboardItem.types) {
              if (type.startsWith('image/')) {
                const blob = await clipboardItem.getType(type);
                console.log('Image blob found:', blob.type, blob.size);
                const newFile = new File([blob], `pasted-image-${Date.now()}.${type.split('/')[1]}`, {
                  type: type,
                  lastModified: new Date().getTime()
                });
                addFiles([newFile]);
                console.log('Image added via Clipboard API');
                break;
              }
            }
          }
        }
      } catch (error) {
        console.error('Clipboard API error:', error);
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

    if (!formData.team.trim()) {
      errors.team = 'A equipe é obrigatória';
      isValid = false;
    }

    if (!formData.date) {
      errors.date = 'A data da atividade é obrigatória';
      isValid = false;
    }

    if (!formData.time) {
      errors.time = 'O horário da atividade é obrigatório';
      isValid = false;
    }

    if (!formData.participants.some(p => p.name.trim())) {
      errors.participants = 'Pelo menos um participante é obrigatório';
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
    
    setIsSubmitting(true);
    const submitData = new FormData();
    submitData.append('team', formData.team);
    submitData.append('activityDate', `${formData.date}T${formData.time}`);
    
    // Create participants array with proper structure and send as JSON string
    const participantsData = formData.participants
      .filter(participant => participant.name.trim() !== '') // Remove empty participants
      .map(participant => ({
        name: participant.name.trim(),
        type: participant.type
      }));
    
    submitData.append('participants', JSON.stringify(participantsData));
    
    if (files) {
      Array.from<File>(files).forEach(file => {
        submitData.append('imageFiles', file);
      });
    }

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: submitData,
        signal: AbortSignal.timeout(20000)
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || 'Error uploading files');
      }

      const result = await response.json();
      toast.success('Atividade registrada com sucesso!');
      handleReset();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      // Handle timeout error
      if (error instanceof DOMException && error.name === 'TimeoutError') {
        toast.error(
          <div className="flex flex-col gap-1">
            <span className="font-bold">Tempo Limite Excedido</span>
            <span className="text-sm whitespace-normal">
              A requisição demorou mais que 20 segundos para completar. Por favor:
              <ul className="list-disc pl-4 mt-1">
                <li>Tente enviar menos imagens por vez (máximo recomendado: 3 imagens)</li>
                <li>Verifique sua conexão com a internet</li>
                <li>Se o problema persistir, contate o suporte</li>
              </ul>
            </span>
          </div>,
          {
            duration: 8000,
            style: {
              background: '#dc2626',
              color: '#fff',
              maxWidth: '400px',
            },
            icon: '⏱️',
          }
        );
      }
      // Enhanced N8N error handling
      else if (errorMessage.includes('NodeApiError') || errorMessage.includes('refused the connection')) {
        toast.error(
          <div className="flex flex-col gap-1">
            <span className="font-bold">Serviço N8N Indisponível</span>
            <span className="text-sm whitespace-normal">
              O serviço N8N está fora do ar no momento. Por favor:
              <ul className="list-disc pl-4 mt-1">
                <li>Verifique se o serviço N8N está rodando</li>
                <li>Aguarde alguns minutos e tente novamente</li>
                <li>Contate o administrador do sistema se o problema persistir</li>
              </ul>
            </span>
          </div>,
          {
            duration: 8000,
            style: {
              background: '#dc2626',
              color: '#fff',
              maxWidth: '400px',
            },
            icon: '🔌',
          }
        );
      } else {
        toast.error(
          <div className="flex flex-col">
            <span className="font-bold">Erro ao enviar o formulário</span>
            <span className="text-sm">{errorMessage}</span>
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
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      team: '',
      date: new Date().toISOString().slice(0, 10),
      time: getCurrentTime(),
      participants: [{ name: '', type: 'participant' as const }]
    });
    setFiles(null);
    previewUrls.forEach(url => URL.revokeObjectURL(url));
    setPreviewUrls([]);
    setValidationErrors({});
    const form = document.getElementById('uploadForm') as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      {isSubmitting && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-xl flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-600"></div>
            <span className="text-gray-700 font-medium">Enviando...</span>
          </div>
        </div>
      )}
      <div className="max-w-3xl mx-auto">
        <form id="uploadForm" onSubmit={handleSubmit} className="space-y-6 bg-white shadow-sm rounded-lg p-6">
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Registro de Atividade
              </h3>
              
              {/* Basic Information */}
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-8">
                <div className="sm:col-span-4">
                  <label htmlFor="team" className="block text-sm font-medium text-gray-700">
                    Equipe
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="team"
                      id="team"
                      value={formData.team}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                    {validationErrors.team && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.team}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                    Data
                  </label>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                    {validationErrors.date && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.date}</p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                    Horário
                  </label>
                  <div className="mt-1">
                    <input
                      type="time"
                      name="time"
                      id="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                    {validationErrors.time && (
                      <p className="mt-1 text-sm text-red-600">{validationErrors.time}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Participants Section */}
              <div className="mt-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-gray-700">Participantes</h4>
                  <button
                    type="button"
                    onClick={addParticipant}
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="mr-2">+</span>
                    Adicionar Participante
                  </button>
                </div>
                
                {formData.participants.map((participant, index) => (
                  <div key={index} className="flex items-start space-x-4 mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-grow grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Nome do Participante
                        </label>
                        <input
                          type="text"
                          value={participant.name}
                          onChange={(e) => handleParticipantChange(index, 'name', e.target.value)}
                          className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Tipo
                        </label>
                        <select
                          value={participant.type}
                          onChange={(e) => handleParticipantChange(index, 'type', e.target.value)}
                          className="mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="participant">Participante</option>
                          <option value="captain">Capitão</option>
                          <option value="governance">Governança</option>
                        </select>
                      </div>
                    </div>
                    {formData.participants.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeParticipant(index)}
                        className="mt-6 text-red-600 hover:text-red-800"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
                {validationErrors.participants && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.participants}</p>
                )}
              </div>

              {/* Image Upload */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700">
                  Fotos
                </label>
                <div
                  className={`mt-2 flex justify-center px-6 pt-5 pb-6 border-2 ${
                    isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300'
                  } border-dashed rounded-md relative`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragEnter={() => setIsDragging(true)}
                  onDragLeave={() => setIsDragging(false)}
                  onClick={handleZoneClick}
                >
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <span>Envie uma foto</span>
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          accept="image/*"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">ou arraste e solte</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF até 10MB</p>

                    {/* Paste Area */}
                    <div className="mt-4 w-full max-w-sm mx-auto">
                      <div
                        className="w-full h-[60px] border-2 border-dashed rounded-md bg-gray-50 p-2 text-center flex items-center justify-center cursor-text"
                        onClick={(e) => {
                          e.stopPropagation();
                          const textarea = e.currentTarget.querySelector('textarea');
                          if (textarea) textarea.focus();
                        }}
                      >
                        <textarea
                          className="w-full h-full resize-none bg-transparent border-none focus:outline-none focus:ring-0 text-center text-sm text-gray-500 placeholder-gray-500"
                          placeholder="Clique aqui e use Ctrl+V para colar uma imagem"
                          onPaste={handlePaste}
                          onClick={(e) => e.stopPropagation()}
                          spellCheck={false}
                        />
                      </div>
                      <p className="text-xs text-gray-400 text-center mt-1">
                        Cole sua imagem aqui usando Ctrl+V ou botão direito → Colar
                      </p>
                    </div>
                  </div>
                </div>
                {validationErrors.images && (
                  <p className="mt-1 text-sm text-red-600">{validationErrors.images}</p>
                )}

                {/* Image Preview Grid */}
                {previewUrls.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {previewUrls.map((url, index) => (
                      <div key={url} className="relative group">
                        <div className="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden">
                          <img
                            src={url}
                            alt={`Preview ${index + 1}`}
                            className="object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-0 right-0 p-1 bg-red-500 text-white rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleReset}
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Limpar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                  isSubmitting ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster position="top-right" />
    </div>
  );
} 