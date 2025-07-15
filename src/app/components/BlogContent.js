export default function BlogContent({ content }) {
  return (
    <article className="prose max-w-none prose-lg prose-blue prose-headings:font-bold prose-a:text-blue-600 hover:prose-a:text-blue-800 prose-img:rounded-lg prose-img:shadow-md">
      <div dangerouslySetInnerHTML={{ __html: content }} />
      
      {/* Callout Box */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8 rounded-r">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-bold text-blue-800">Pro Tip</h3>
            <div className="mt-2 text-blue-700">
              <p>Before making any major changes to your WordPress site, always create a complete backup. Many optimization plugins offer backup features, or you can use a dedicated backup solution.</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}