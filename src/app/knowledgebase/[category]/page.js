import CategoryHeader from '@/app/components/KnowledgeBase/CategoryHeader';
import Breadcrumb from '@/app/components/KnowledgeBase/Breadcrumb';
import ArticleCard from '@/app/components/KnowledgeBase/ArticleCard';
import SubcategorySection from '@/app/components/KnowledgeBase/SubcategorySection';

async function getCategoryData(categorySlug) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/knowledgebase/${categorySlug}`, {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch category data');
  }
  
  return res.json();
}

export default async function CategoryPage({ params }) {
  const resolvedParams = await params; 
  const categorySlug = resolvedParams.category;

  const { data } = await getCategoryData(categorySlug);
  const { category, subcategories, popularArticles, videoTutorials } = data;
  return (
    <main>
      <CategoryHeader 
        title={category.title}
        description={category.description}
        icon={category.icon}
      />
      
      <div className="container mx-auto px-4 py-6">
        <Breadcrumb 
          items={[
            { name: "Knowledge Base", link: "/knowledgebase" },
            { name: category.title }
          ]}
        />
      </div>
      
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-900 mb-8">Popular in {category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  excerpt={article.excerpt}
                  views={article.views}
                  lastUpdated={article.updated_at}
                  link={`/knowledgebase/article/${article.slug}`}
                  delay={index * 0.1}
                  popular
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {subcategories.map((subcategory, index) => (
            <SubcategorySection
              key={subcategory.id}
              name={subcategory.name}
              description={subcategory.description}
              articles={subcategory.articles}
              delay={index * 0.1}
            />
          ))}
        </div>
      </section>
      
      {videoTutorials.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center">Video Tutorials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {videoTutorials.map((tutorial, index) => (
                <div 
                  key={tutorial.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200 relative">
                    <img 
                      src={tutorial.thumbnail} 
                      alt={tutorial.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-blue-900 mb-2">{tutorial.title}</h3>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{tutorial.duration}</span>
                      <span className={`px-2 py-1 rounded-full ${
                        tutorial.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        tutorial.level === 'Intermediate' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {tutorial.level}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need More Help?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our support team is ready to assist you 24/7.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition shadow-lg hover:shadow-xl"
            >
              Contact Support
            </a>
            <a 
              href="/live-chat" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-bold transition"
            >
              Live Chat Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}