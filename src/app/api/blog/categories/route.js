import { NextResponse } from 'next/server';
import { query } from '../../lib/db';
import { queries } from '../../lib/queries';

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