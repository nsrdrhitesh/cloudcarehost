import ArticleHeader from '@/app/components/KnowledgeBase/ArticleHeader';
import ArticleContent from '@/app/components/KnowledgeBase/ArticleContent';
import ArticleMeta from '@/app/components/KnowledgeBase/ArticleMeta';
import RelatedArticles from '@/app/components/KnowledgeBase/RelatedArticles';
import ArticleNavigation from '@/app/components/KnowledgeBase/ArticleNavigation';
import Breadcrumb from '@/app/components/KnowledgeBase/Breadcrumb';

async function getArticleData(slug) {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/knowledgebase/article/${slug}`;

  const res = await fetch(apiUrl, {
    cache: 'no-store' // Temporarily to prevent caching issues
  });

  
  if (!res.ok) {
    throw new Error('Failed to fetch article data');
  }

  const json = await res.json();
  return json;
}

export default async function ArticlePage({ params }) {
  
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const result = await getArticleData(slug);
  
  const { article, relatedArticles, prevArticle, nextArticle } = result.data || {};

  if (!article) {
    return <div className="text-center text-red-600 py-20">Article not found or failed to load.</div>;
  }

  return (
    <main>
      <ArticleHeader title={article.title} excerpt={article.excerpt} />

      <div className="container mx-auto px-4 py-6">
        <Breadcrumb 
          items={[
            { name: "Knowledge Base", link: "/knowledgebase" },
            { name: article.category_title || "Category", link: `/knowledgebase/${article.category_slug}` },
            { name: article.title }
          ]}
        />
      </div>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ArticleMeta views={article.views} lastUpdated={article.updated_at} />
            <ArticleContent content={article.content} />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <h3 className="text-xl font-bold text-blue-900">Was this article helpful?</h3>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-100 text-green-800 rounded-lg hover:bg-green-200 transition flex items-center">
                    ✅ Yes
                  </button>
                  <button className="px-4 py-2 bg-red-100 text-red-800 rounded-lg hover:bg-red-200 transition flex items-center">
                    ❌ No
                  </button>
                </div>
              </div>

              <ArticleNavigation prevArticle={prevArticle} nextArticle={nextArticle} />
            </div>
          </div>
        </div>
      </section>

      {relatedArticles?.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <RelatedArticles articles={relatedArticles.map(a => ({
              title: a.title,
              excerpt: a.excerpt,
              link: `/knowledgebase/article/${a.slug}`
            }))} />
          </div>
        </section>
      )}

      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need More Personalized Help?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our expert support team is available 24/7 to assist you with any questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-bold transition shadow-lg hover:shadow-xl">
              Contact Support
            </a>
            <a href="/live-chat" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-bold transition">
              Start Live Chat
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
