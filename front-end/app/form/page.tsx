'use client';

import React, { useState, FormEvent, ChangeEvent, ClipboardEvent, DragEvent, useRef, useEffect } from 'react';
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

interface Team {
  id: number;
  name: string;
}

interface Participant {
  id: string;
  name: string;
  email: string;
  type: string;
  team_id: number;
}

interface FormDataType {
  team_id: number;
  participant_selections: string[];
  date: string;
  time: string;
}

interface ValidationErrorsType {
  team?: string;
  participants?: string;
  images?: string;
  date?: string;
  time?: string;
}

export default function Page() {
  const getCurrentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  };

  const [formData, setFormData] = useState<FormDataType>({
    team_id: 0,
    participant_selections: [''],
    date: new Date().toISOString().slice(0, 10),
    time: getCurrentTime(),
  });

  const [teams, setTeams] = useState<Team[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [files, setFiles] = useState<FileList | null>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrorsType>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchTeams();
  }, []);

  useEffect(() => {
    if (!formData.team_id) {
      setParticipants([]);
      setFormData(prev => ({ 
        ...prev, 
        participant_selections: [''] 
      }));
      return;
    }
    
    fetchParticipants(formData.team_id);
  }, [formData.team_id]);

  const fetchTeams = async () => {
    try {
      const response = await fetch('/api/teams');
      if (!response.ok) throw new Error('Failed to fetch teams');
      const data = await response.json();
      setTeams(data.teams);
      if (data.teams.length > 0) {
        const firstTeamId = data.teams[0].id;
        setFormData(prev => ({ ...prev, team_id: firstTeamId }));
        fetchParticipants(firstTeamId);
      }
    } catch (error) {
      toast.error('Error loading teams');
      console.error('Error:', error);
    }
  };

  const fetchParticipants = async (teamId: number) => {
    try {
      const response = await fetch(`/api/participants?team_id=${teamId}`);
      if (!response.ok) throw new Error('Failed to fetch participants');
      const data = await response.json();
      setParticipants(data);
      // Reset participant selections when team changes
      setFormData(prev => ({
        ...prev,
        participant_selections: ['']
      }));
    } catch (error) {
      toast.error('Error loading participants');
      console.error('Error:', error);
      setParticipants([]);
      setFormData(prev => ({
        ...prev,
        participant_selections: ['']
      }));
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'team_id') {
      const teamId = parseInt(value) || 0;
      setFormData(prev => ({
        ...prev,
        [name]: teamId,
        participant_selections: ['']
      }));
      if (teamId === 0) {
        setParticipants([]);
      }
    } else if (name.startsWith('participant_')) {
      const index = parseInt(name.split('_')[1]);
      setFormData(prev => {
        const newSelections = [...prev.participant_selections];
        newSelections[index] = value;
        return {
          ...prev,
          participant_selections: newSelections
        };
      });
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const addParticipantField = () => {
    setFormData(prev => ({
      ...prev,
      participant_selections: [...prev.participant_selections, '']
    }));
  };

  const removeParticipantField = (index: number) => {
    setFormData(prev => ({
      ...prev,
      participant_selections: prev.participant_selections.filter((_, i) => i !== index)
    }));
  };

  const validateForm = (): boolean => {
    const errors: ValidationErrorsType = {};
    let isValid = true;

    if (!formData.team_id) {
      errors.team = 'A equipe é obrigatória';
      isValid = false;
    }

    const validParticipants = formData.participant_selections.filter(p => p !== '');
    if (validParticipants.length === 0) {
      errors.participants = 'Selecione pelo menos um participante';
      isValid = false;
    }

    // Check for duplicate participants
    const uniqueParticipants = new Set(validParticipants);
    if (uniqueParticipants.size !== validParticipants.length) {
      errors.participants = 'Não é permitido selecionar o mesmo participante mais de uma vez';
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
    
    const selectedTeam = teams.find(t => t.id === formData.team_id);
    const selectedParticipants = formData.participant_selections
      .filter(id => id !== '')
      .map(id => participants.find(p => p.id === id))
      .filter((p): p is Participant => p !== undefined);
    
    if (!selectedTeam || selectedParticipants.length === 0) {
      toast.error('Equipe ou participantes inválidos');
      setIsSubmitting(false);
      return;
    }

    submitData.append('team', selectedTeam.name);
    submitData.append('team_id', formData.team_id.toString());
    submitData.append('participants', JSON.stringify(selectedParticipants.map(p => ({
      id: p.id,
      name: p.name,
      type: p.type
    }))));
    submitData.append('activityDate', `${formData.date}T${formData.time}`);
    
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
      } else {
        toast.error(`Erro ao enviar atividade: ${errorMessage}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      team_id: teams.length > 0 ? teams[0].id : 0,
      participant_selections: [''],
      date: new Date().toISOString().slice(0, 10),
      time: getCurrentTime(),
    });
    setFiles(null);
    setPreviewUrls([]);
    setValidationErrors({});
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
            type: item.type,
            lastModified: new Date().getTime()
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
                  type: type,
                  lastModified: new Date().getTime()
                });
                addFiles([newFile]);
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
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-sm rounded-lg p-6">
          <div className="space-y-8 divide-y divide-gray-200">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Registro de Atividade
              </h3>
              
              {/* Team, Date and Time Selection */}
              <div className="mt-6 grid grid-cols-12 gap-4">
                <div className="col-span-6">
                  <label htmlFor="team_id" className="block text-sm font-medium text-gray-700">
                    Equipe
                  </label>
                  <div className="mt-1">
                    <select
                      id="team_id"
                      name="team_id"
                      value={formData.team_id}
                      onChange={handleInputChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    >
                      <option value="">Selecione uma equipe</option>
                      {teams.map((team) => (
                        <option key={team.id} value={team.id}>
                          {team.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  {validationErrors.team && (
                    <p className="mt-2 text-sm text-red-600">{validationErrors.team}</p>
                  )}
                </div>

                <div className="col-span-3">
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
                  </div>
                  {validationErrors.date && (
                    <p className="mt-2 text-sm text-red-600">{validationErrors.date}</p>
                  )}
                </div>

                <div className="col-span-3">
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
                  </div>
                  {validationErrors.time && (
                    <p className="mt-2 text-sm text-red-600">{validationErrors.time}</p>
                  )}
                </div>
              </div>

              {/* Participant Selections */}
              <div className="mt-6">
                <div className="flex justify-between items-center mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Participantes
                  </label>
                  <button
                    type="button"
                    onClick={addParticipantField}
                    className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <svg className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Adicionar Participante
                  </button>
                </div>

                <div className="space-y-3">
                  {formData.participant_selections.map((selection, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="flex-grow">
                        <select
                          name={`participant_${index}`}
                          value={selection}
                          onChange={handleInputChange}
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        >
                          <option value="">Selecione um participante</option>
                          {participants
                            .filter(p => !formData.participant_selections.includes(p.id) || p.id === selection)
                            .map((participant) => (
                              <option key={participant.id} value={participant.id}>
                                {participant.name}
                              </option>
                            ))}
                        </select>
                      </div>
                      {index > 0 && (
                        <button
                          type="button"
                          onClick={() => removeParticipantField(index)}
                          className="p-2 text-red-600 hover:text-red-800 focus:outline-none"
                        >
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {validationErrors.participants && (
                  <p className="mt-2 text-sm text-red-600">{validationErrors.participants}</p>
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
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
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
                type="submit"
                disabled={isSubmitting}
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
          </div>
        </form>
      </div>
      <Toaster />
    </div>
  );
} 