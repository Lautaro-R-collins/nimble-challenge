import { useState, useEffect } from 'react'
import { api } from './services/api'
import { JobList } from './components/jobs/JobList'
import { Loading } from './components/common/Loading'
import { Error } from './components/common/Error'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'

const CANDIDATE_EMAIL = 'lautarodevelops@gmail.com'
const REPO_URL = 'https://github.com/Lautaro-R-collins/nimble-challenge.git'

function App() {
  const [candidate, setCandidate] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCandidate = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await api.getCandidateByEmail(CANDIDATE_EMAIL)
      setCandidate(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCandidate()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <Header candidate={candidate} />

        <main>
          {loading ? (
            <Loading message="Obteniendo detalles del candidato..." />
          ) : error ? (
            <Error message={error} onRetry={fetchCandidate} />
          ) : (
            <>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Posiciones Abiertas</h2>
                <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800 ml-6"></div>
              </div>
              <JobList candidate={candidate} repoUrl={REPO_URL} />
            </>
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
