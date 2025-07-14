import Link from 'next/link'

export default function CategoryCard({ title, description, icon, count, link, delay = 0 }) {
  return (
    <Link href={link}>
      <div 
        className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer h-full animate-fadeIn"
        style={{ animationDelay: `${delay}s` }}
      >
        <div className="flex items-start">
          <div className="text-3xl mr-4">{icon}</div>
          <div>
            <h3 className="text-xl font-bold text-blue-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-3">{description}</p>
            <span className="text-sm text-blue-600">{count} articles</span>
          </div>
        </div>
      </div>
    </Link>
  )
}