import ArticleCard from './ArticleCard';


export default function SubcategorySection({ name, description, articles, delay = 0 }) {
  return (
    <div 
      className="mb-12 animate-fadeIn"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="mb-6 pb-2 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-blue-900">{name}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            excerpt={article.excerpt}
            views={article.views}
            lastUpdated={article.updated_at}
            link={`/knowledgebase/article/${article.slug}`}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  )
}