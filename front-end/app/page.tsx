import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Bem-vindo ao Arch Games
        </h1>
        <p className="text-gray-600">
          Selecione uma das opções abaixo ou use o menu lateral para navegar.
        </p>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link
          href="/form"
          className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
        >
          <div className="p-6">
            <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Upload de Imagens
            </h2>
            <p className="text-gray-600">
              Envie imagens dos competidores com seus dados completos.
            </p>
          </div>
        </Link>

        {/* Add more quick access cards here as needed */}
      </div>

      {/* Stats or Additional Info */}
      <div className="mt-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Informações do Sistema
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">Upload de Imagens</div>
            <div className="text-sm text-gray-500">Disponível</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">Relatórios</div>
            <div className="text-sm text-gray-500">Em breve</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-400">Configurações</div>
            <div className="text-sm text-gray-500">Em breve</div>
          </div>
        </div>
      </div>
    </div>
  );
} 