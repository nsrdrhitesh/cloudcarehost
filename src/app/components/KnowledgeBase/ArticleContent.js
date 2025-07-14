export default function ArticleContent({ content }) {
  return (
    <article 
      className="prose max-w-none prose-blue prose-lg animate-fadeIn delay-100"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}