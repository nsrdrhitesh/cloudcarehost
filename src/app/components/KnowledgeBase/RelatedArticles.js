import Link from 'next/link'

export default function RelatedArticles({ articles }) {
  return (
    <div className="max-w-4xl mx-auto animate-fadeIn delay-200">
      <h2 className="text-2xl font-bold text-blue-900 mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link href={article.link} key={index}>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer h-full">
              <h3 className="font-bold text-blue-900 mb-2">{article.title}</h3>
              <p className="text-gray-600 text-sm">{article.excerpt}</p>
              <div className="mt-4 flex items-center text-blue-600 text-sm font-medium">
                <span>Read more</span>
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}