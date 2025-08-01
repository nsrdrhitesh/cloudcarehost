import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import ArticleCard from '@/app/components/KnowledgeBase/ArticleCard';
import CategoryCard from '@/app/components/KnowledgeBase/CategoryCard';
import TutorialCard from '@/app/components/KnowledgeBase/TutorialCard';
import FAQAccordion from '@/app/components/KnowledgeBase/FAQAccordion';

async function getSearchResults(searchTerm) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/knowledgebase/search?q=${encodeURIComponent(searchTerm)}`, {
    next: { revalidate: 3600 }
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch search results');
  }
  
  return res.json();
}

export default async function SearchPage({ searchParams }) {
  // Get search term safely
  const resolvedParams = await searchParams; // ✅ Fix for Next.js 15 dynamic API
  const searchTerm = resolvedParams?.q || '';
  
  // Only fetch results if there's a search term
  const { data } = searchTerm ? await getSearchResults(searchTerm) : { data: null };
  
  const articles = data?.articles || [];
  const categories = data?.categories || [];
  const tutorials = data?.tutorials || [];
  const faqs = data?.faqs || [];

  return (
    <main>
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
              {searchTerm ? `Search Results for "${searchTerm}"` : 'Search Knowledge Base'}
            </h1>
            {searchTerm && (
              <p className="text-gray-600">
                Found {articles.length + categories.length + tutorials.length + faqs.length} results
              </p>
            )}
          </div>

          {!searchTerm ? (
            <div className="text-center py-12">
              <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">Enter a search term</h3>
              <p className="mt-1 text-gray-500">
                Try searching for articles, categories, or FAQs.
              </p>
            </div>
          ) : (
            <>
              {articles.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-blue-900 mb-6">Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {articles.map((article,index) => (
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
              )}

              {categories.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-blue-900 mb-6">Categories</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category,index) => (
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
              )}

              {tutorials.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-blue-900 mb-6">Tutorials</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tutorials.map((tutorial,index) => (
                      <TutorialCard
                        key={tutorial.id}
                        title={tutorial.title}
                        description={tutorial.description}
                        duration={tutorial.duration}
                        level={tutorial.level}
                        link={tutorial.video_url || '#'}
                        delay={index * 0.1}
                      />
                    ))}
                  </div>
                </div>
              )}

              {faqs.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-xl font-bold text-blue-900 mb-6">FAQs</h2>
                  <div className="space-y-4 max-w-3xl mx-auto">
                    {faqs.map((faq,index) => (
                      <FAQAccordion
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        delay={index * 0.1}
                      />
                    ))}
                  </div>
                </div>
              )}

              {articles.length === 0 && categories.length === 0 && tutorials.length === 0 && faqs.length === 0 && (
                <div className="text-center py-12">
                  <MagnifyingGlassIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-lg font-medium text-gray-900">No results found</h3>
                  <p className="mt-1 text-gray-500">
                    Try searching for something else or browse our knowledge base categories.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </main>
  )
}