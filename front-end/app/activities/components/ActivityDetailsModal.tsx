'use client';

import { Activity } from '@/types/activities';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ImageRecord {
  id: number;
  hash: string;
  name: string;
  team: string;
  type: string;
  activity_date: string;
  upload_date: string;
  filename: string;
}

interface ActivityDetailsModalProps {
  activity: Activity;
  onClose: () => void;
}

export default function ActivityDetailsModal({ activity, onClose }: ActivityDetailsModalProps) {
  const [images, setImages] = useState<ImageRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Fetching images for activity:', activity.key_process);
        const response = await fetch(`/api/activities/${activity.key_process}/images`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Images data:', data);
        
        if (data.success) {
          setImages(data.images);
        } else {
          console.error('API returned error:', data.message);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
        if (error instanceof Error) {
          console.error('Error details:', error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [activity.key_process]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-3xl w-full mx-4 shadow-2xl h-[90vh] flex flex-col">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-2xl font-bold text-gray-900">Detalhes da Atividade</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-2">
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Dados Básicos</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-base font-bold text-gray-700">Participante</p>
                  <p className="text-base text-gray-600">{activity.participant}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold text-gray-700">Time</p>
                  <p className="text-base text-gray-600">{activity.team}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold text-gray-700">Tipo</p>
                  <p className="text-base text-gray-600 capitalize">{activity.type}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold text-gray-700">Categoria</p>
                  <p className="text-base text-gray-600 capitalize">{activity.category}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Pontuação</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-1">
                  <p className="text-base font-bold text-gray-700">Score Base</p>
                  <p className="text-base text-gray-600">{activity.base_score}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold text-gray-700">Multiplicador</p>
                  <p className="text-base text-gray-600">{activity.multiplier}x</p>
                </div>
                <div className="space-y-1">
                  <p className="text-base font-bold text-gray-700">Score Final</p>
                  <p className="text-base text-blue-600">{activity.calculated_score}</p>
                </div>
              </div>
            </div>

            {images.length > 0 && (
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Imagens</h3>
                <div className="grid grid-cols-2 gap-4">
                  {images.map((image) => (
                    <div key={image.id} className="relative w-full h-[200px] rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        src={`/api/uploads${image.filename.replace('/uploads', '')}`}
                        alt={image.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Detalhes da Atividade</h3>
              <div className="bg-white rounded-lg border border-gray-200 p-4">
                <pre className="text-sm text-gray-800 overflow-auto max-h-60">
                  <code>{JSON.stringify(activity.activity, null, 2)}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 border-t mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
} 