import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';
import {queries} from '../../../lib/queries';

export async function GET(request, context) {
  try {
    const params = await context.params;
    const { slug } = params;

    const [article] = await query(queries.getArticleBySlug, [slug]);
    if (!article) {
      return NextResponse.json(
        { success: false, error: 'Article not found' },
        { status: 404 }
      );
    }

    const [prevArticle] = await query(queries.getPreviousArticle, [article.category_id, article.id]);
    const [nextArticle] = await query(queries.getNextArticle, [article.category_id, article.id]);

    const relatedArticles = await query(queries.getRelatedArticles, [article.category_id, article.id]);
    await query(queries.incrementArticleViews, [article.id]);

    return NextResponse.json({
      success: true,
      data: {
        article,
        relatedArticles,
        prevArticle: prevArticle || null,
        nextArticle: nextArticle || null
      }
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
