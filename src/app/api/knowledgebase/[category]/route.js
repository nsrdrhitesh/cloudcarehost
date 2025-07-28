import { NextResponse } from 'next/server';
import { query } from '../../lib/db';
import { queries} from '../../lib/queries';

export async function GET(request, context) {
  try {
    const { params } = context;
    const resolvedParams = await params; // ✅ Await params
    const { category } = resolvedParams;

    // Get category details
    const [categoryData] = await query(queries.getCategoryBySlug, [category]);

    if (!categoryData) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }

    // Get subcategories with articles
    const subcategories = await query(queries.getSubcategoriesWithArticles, [categoryData.id]);

    // Get articles for each subcategory
    for (const subcategory of subcategories) {
      subcategory.articles = await query(
        queries.getArticlesBySubcategory,
        [subcategory.id]
      );
    }

    // Get popular articles in this category
    const popularArticles = await query(queries.getPopularArticlesByCategory, [categoryData.id]);

    // Get video tutorials for this category
    const videoTutorials = await query(queries.getVideoTutorialsByCategory, [categoryData.id]);

    return NextResponse.json({
      success: true,
      data: {
        category: categoryData,
        subcategories,
        popularArticles,
        videoTutorials
      }
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
