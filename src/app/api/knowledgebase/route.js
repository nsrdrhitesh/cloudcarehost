import { NextResponse } from 'next/server';
import { query } from '../hosting/lib/db';
import {queries} from '../hosting/lib/queries';

export async function GET() {
  try {
    const categories = await query(queries.getAllKnowledgeBaseData);
    const popularArticles = await query(queries.getPopularArticles);
    const tutorials = await query(queries.getVideoTutorials);
    const faqs = await query(queries.getFAQs);


    console.log(categories, popularArticles, tutorials, faqs);
    return NextResponse.json({
      success: true,
      data: {
        categories,
        popularArticles,
        tutorials,
        faqs
      }
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}