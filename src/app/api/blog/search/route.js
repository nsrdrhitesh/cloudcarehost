import { NextResponse } from 'next/server';
import { query } from '../../hosting/lib/queries';
import {queries} from '../../hosting/lib/queries';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const queryTerm = searchParams.get('q');
    
    if (!queryTerm) {
      return NextResponse.json({
        success: true,
        data: {
          posts: [],
          categories: [],
          tags: []
        }
      });
    }

    const searchTerm = `%${queryTerm}%`;
    
    const [posts, categories, tags] = await Promise.all([
      query(queries.searchBlogPosts, [searchTerm, searchTerm, searchTerm]),
      query(queries.searchBlogCategories, [searchTerm, searchTerm]),
      query(queries.searchBlogTags, [searchTerm])
    ]);

    return NextResponse.json({
      success: true,
      data: {
        posts: posts || [],
        categories: categories || [],
        tags: tags || []
      }
    });

  } catch (error) {
    console.error('Blog search error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'An error occurred during search'
      },
      { status: 500 }
    );
  }
}