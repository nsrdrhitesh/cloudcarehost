import Link from 'next/link'

export default function ArticleNavigation({ prevArticle, nextArticle }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 animate-fadeIn delay-300">
      {prevArticle && (
        <Link 
          href={`/knowledgebase/article/${prevArticle.slug}`} 
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Previous: {prevArticle.title}
        </Link>
      )}
      {nextArticle && (
        <Link 
          href={`/knowledgebase/article/${nextArticle.slug}`} 
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium sm:ml-auto"
        >
          Next: {nextArticle.title}
          <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </Link>
      )}
    </div>
  )
}