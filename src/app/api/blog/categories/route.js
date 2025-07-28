import { NextResponse } from 'next/server';
import { query } from '../../hosting/lib/db';
import { queries } from '../../hosting/lib/queries';

export async function GET() {
  try {
    const categories = await query(queries.getAllCategories);

    return NextResponse.json(categories || []);

  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}