export function Header({ candidate }) {
  return (
    <header className="text-center mb-16">
      <div className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/40 dark:text-blue-400">
        Desafío Técnico
      </div>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
        Nimble Gravity Challenge
      </h1>
      
      {candidate && (
        <div className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          <div className="mr-4 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
            {candidate.firstName[0]}{candidate.lastName[0]}
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-none mb-1">CANDIDATO</p>
            <p className="text-lg font-bold text-gray-900 dark:text-white">{candidate.firstName} {candidate.lastName}</p>
          </div>
        </div>
      )}
    </header>
  );
}
