import { NextResponse } from 'next/server';
import { query } from '../../../lib/db';
import { queries } from '../../../lib/queries';

export async function GET(request, { params }) {
  try {
    const { slug } = params;

    const posts = await query(queries.getPostBySlug, [slug]);
    if (!posts || posts.length === 0) {
      return NextResponse.json({ error: 'Post not found' }, { status: 404 });
    }

    const post = posts[0];
    const tags = await query(queries.getPostTags, [post.id]);
    const relatedPosts = await query(queries.getRelatedPosts, [post.category_id, post.id]);
    const comments = await query(queries.getPostComments, [post.id]);
    const [prevPostRows] = await query(
      'SELECT slug, title, image_url FROM posts WHERE id < ? AND status = "published" ORDER BY id DESC LIMIT 1',
      [post.id]
    );
    const [nextPostRows] = await query(
      'SELECT slug, title, image_url FROM posts WHERE id > ? AND status = "published" ORDER BY id ASC LIMIT 1',
      [post.id]
    );

    const prevPost = prevPostRows || null;
    const nextPost = nextPostRows || null;

    return NextResponse.json({
      post,
      tags: tags || [],
      relatedPosts: relatedPosts || [],
      comments: comments || [],
      prevPost,
      nextPost
    });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
