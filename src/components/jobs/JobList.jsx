import { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { JobCard } from './JobCard';
import { Loading } from '../common/Loading';
import { Error } from '../common/Error';

export function JobList({ candidate, repoUrl }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await api.getJobs();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) return <Loading message="Buscando posiciones disponibles..." />;
  if (error) return <Error message={error} onRetry={fetchJobs} />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {jobs.map((job) => (
        <JobCard 
          key={job.id} 
          job={job} 
          candidate={candidate} 
          defaultRepoUrl={repoUrl}
        />
      ))}
      {jobs.length === 0 && (
        <div className="col-span-full text-center p-12 bg-gray-50 dark:bg-gray-900 rounded-3xl border border-dashed border-gray-300 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400">No se encontraron posiciones abiertas en este momento.</p>
        </div>
      )}
    </div>
  );
}
