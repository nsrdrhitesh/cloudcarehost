import { NextResponse } from 'next/server';
import { query } from '../../lib/db';
import {queries} from '../../lib/queries';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const queryTerm = searchParams.get('q');
    
    if (!queryTerm) {
      return NextResponse.json({
        success: true,
        data: {
          articles: [],
          categories: [],
          tutorials: [],
          faqs: []
        }
      });
    }

    const searchTerm = `%${queryTerm}%`;
    
    const [articles, categories, tutorials, faqs] = await Promise.all([
      query(queries.searchArticles, [searchTerm, searchTerm, searchTerm]),
      query(queries.searchCategories, [searchTerm, searchTerm]),
      query(queries.searchTutorials, [searchTerm, searchTerm]),
      query(queries.searchFAQs, [searchTerm, searchTerm])
    ]);

    return NextResponse.json({
      success: true,
      data: {
        articles: articles || [],
        categories: categories || [],
        tutorials: tutorials || [],
        faqs: faqs || []
      }
    });

  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'An error occurred during search'
      },
      { status: 500 }
    );
  }
}