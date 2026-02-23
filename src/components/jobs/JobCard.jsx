import { useState } from 'react';
import { api } from '../../services/api';

export function JobCard({ job, candidate, defaultRepoUrl }) {
  const [repoUrl, setRepoUrl] = useState(defaultRepoUrl || '');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!repoUrl) {
      setError('Por favor, ingresa la URL de tu repositorio de GitHub');
      return;
    }

    setStatus('loading');
    setError(null);

    try {
      await api.applyToJob({
        uuid: candidate.uuid,
        jobId: job.id,
        candidateId: candidate.candidateId,
        applicationId: candidate.applicationId,
        repoUrl: repoUrl,
      });
      setStatus('success');
    } catch (err) {
      setError(err.message);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mb-4">
          <svg className="w-6 h-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-green-900 dark:text-green-100 mb-2">¡Postulación Enviada!</h3>
        <p className="text-green-700 dark:text-green-300">Éxito para {job.title}</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-4 text-green-600 dark:text-green-400 font-semibold hover:underline"
        >
          Postular a otra posición
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{job.title}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            URL del Repositorio de GitHub
          </label>
          <input
            type="url"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            placeholder="https://github.com/..."
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none text-gray-900 dark:text-white"
            disabled={status === 'loading'}
          />
        </div>

        {error && (
          <p className="text-sm text-red-600 dark:text-red-400 font-medium">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full cursor-pointer py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl flex items-center justify-center"
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Enviando...
            </>
          ) : (
            'Enviar Postulación'
          )}
        </button>
      </form>
    </div>
  );
}
