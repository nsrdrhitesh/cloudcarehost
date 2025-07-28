import { NextResponse } from 'next/server';
import { query } from '../../lib/db';
import { queries } from '../../lib/queries';

export async function POST(request) {
  try {
    const formData = await request.formData();

    const post_id = formData.get('post_id');
    const author_name = formData.get('author_name');
    const author_email = formData.get('author_email');
    const content = formData.get('content');
    const is_approved = 1;

    if (!post_id || !author_name || !author_email || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const posts = await query(
      'SELECT id, slug FROM posts WHERE id = ? AND status = "published"',
      [post_id]
    );

    if (posts.length === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const result = await query(queries.createComment, [
      post_id,
      author_name,
      author_email,
      content,
      is_approved
    ]);

    return new Response(null, {
      status: 303,
      headers: {
        Location: `/blog/${posts[0].slug}?comment=success`
      }
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
