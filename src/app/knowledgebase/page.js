import PageHeader from '../components/PageHeader';
import SearchBar from '../components/KnowledgeBase/SearchBar';
import CategoryCard from '../components/KnowledgeBase/CategoryCard';
import PopularArticles from '../components/KnowledgeBase/PopularArticles';
import TutorialCard from '../components/KnowledgeBase/TutorialCard';
import FAQAccordion from '../components/KnowledgeBase/FAQAccordion';

async function getKnowledgeBaseData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/knowledgebase`, {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch knowledge base data');
  }
  
  return res.json();
}

export default async function KnowledgeBase() {
  const { data } = await getKnowledgeBaseData();
  const { categories, popularArticles, tutorials, faqs } = data;

  return (
    <main>
      <PageHeader 
        title="Knowledge Base"
        subtitle="Guides, tutorials and FAQs to help you get the most from your hosting"
      />
      
      <div className="container mx-auto px-4 py-4">
        <nav className="flex text-sm" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-500 ml-1">Knowledge Base</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <SearchBar />
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <CategoryCard 
                  key={category.id}
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  count={category.article_count}
                  link={`/knowledgebase/${category.slug}`}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Popular Articles</h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <PopularArticles
                    key={article.id}
                    title={article.title}
                    views={article.views}
                    link={`/knowledgebase/article/${article.slug}`}
                    delay={index * 0.05}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Video Tutorials</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tutorials.map((tutorial, index) => (
                  <TutorialCard
                    key={tutorial.id}
                    title={tutorial.title}
                    description={tutorial.description}
                    duration={tutorial.duration}
                    level={tutorial.level}
                    link={tutorial.video_url}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQAccordion
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any questions or issues.
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
              Live Chat
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}