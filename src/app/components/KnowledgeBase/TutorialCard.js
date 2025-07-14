import Link from 'next/link'

export default function TutorialCard({ title, description, duration, level, link, delay = 0 }) {
  const levelColors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-blue-100 text-blue-800',
    Advanced: 'bg-purple-100 text-purple-800'
  }

  return (
    <Link href={link}>
      <div 
        className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer h-full animate-fadeIn"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-lg mb-3 overflow-hidden">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        <h3 className="font-bold text-blue-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500">{duration} read</span>
          <span className={`px-2 py-1 rounded-full ${levelColors[level]}`}>
            {level}
          </span>
        </div>
      </div>
    </Link>
  )
}