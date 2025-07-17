import { query } from '../hosting/lib/db';
import { queries } from '../hosting/lib/queries';

export async function GET() {
  try {
    const currencies = await query(queries.getAllCurrencies);
    
    return Response.json({
      success: true,
      data: currencies
    });
    
  } catch (error) {
    console.error('Error fetching currencies:', error);
    return Response.json({
      success: false,
      error: 'Failed to fetch currencies'
    }, { status: 500 });
  }
}