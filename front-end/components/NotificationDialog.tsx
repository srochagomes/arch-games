'use client';

interface NotificationDialogProps {
  open: boolean;
  title: string;
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export default function NotificationDialog({
  open,
  title,
  message,
  type,
  onClose,
}: NotificationDialogProps) {
  if (!open) return null;

  const bgColor = type === 'success' ? 'bg-green-50' : 'bg-red-50';
  const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
  const iconColor = type === 'success' ? 'text-green-400' : 'text-red-400';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${bgColor} rounded-lg p-6 max-w-md w-full mx-4 shadow-xl`}>
        <div className="flex items-center mb-4">
          {type === 'success' ? (
            <svg className={`w-6 h-6 ${iconColor} mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className={`w-6 h-6 ${iconColor} mr-2`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
          <h2 className={`text-xl font-semibold ${textColor}`}>{title}</h2>
        </div>
        <p className={`${textColor} mb-6`}>{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className={`px-4 py-2 ${type === 'success' ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} text-white rounded-md font-medium transition-colors duration-200`}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
} 