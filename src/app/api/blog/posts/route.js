import { NextResponse } from 'next/server';
import { query } from '../../lib/db';
import { queries } from '../../lib/queries';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const category = searchParams.get('category');
    const tag = searchParams.get('tag'); 
    const search = searchParams.get('search');
    const featured = searchParams.get('featured');
    const offset = (page - 1) * limit;

    let posts = [];
    let totalCount = 0;

    console.log("Fetching posts with parameters:",featured)
    if (featured) {
      console.log("Running getFeaturedPosts query:", queries.getFeaturedPost);
      posts = await query(queries.getFeaturedPost, [limit]);
      console.log("Featured posts fetched:", posts);
      totalCount = posts.length;
    } else if (category) {
      const [postRows, countRows] = await Promise.all([
        query(queries.getPostsByCategory, [category, limit, offset]),
        query(queries.countPostsByCategory, [category])
      ]);
      posts = postRows;
      totalCount = countRows[0]?.total ?? 0;
    } else if (tag) { 
      const [postRows, countRows] = await Promise.all([
        query(queries.getPostsByTag, [tag, limit, offset]),
        query(queries.countPostsByTag, [tag])
      ]);
      posts = postRows;
      totalCount = countRows[0]?.total ?? 0;
    }else if (search) {
      const searchQuery = `%${search}%`;
      const [postRows, countRows] = await Promise.all([
        query(
          queries.getAllPosts.replace(
            `WHERE p.status = 'published'`,
            `WHERE p.status = 'published' AND (p.title LIKE ? OR p.excerpt LIKE ? OR p.content LIKE ?)`
          ),
          [searchQuery, searchQuery, searchQuery, limit, offset]
        ),
        query(
          queries.countAllPosts.replace(
            `WHERE status = 'published'`,
            `WHERE status = 'published' AND (title LIKE ? OR excerpt LIKE ? OR content LIKE ?)`
          ),
          [searchQuery, searchQuery, searchQuery]
        )
      ]);
      posts = postRows;
      totalCount = countRows[0]?.total ?? 0;
    } else {
      const [postRows, countRows] = await Promise.all([
        query(queries.getAllPosts, [limit, offset]),
        query(queries.countAllPosts)
      ]);
      posts = postRows;
      totalCount = countRows[0]?.total ?? 0;
    }

    const totalPages = Math.ceil(totalCount / limit);

    return NextResponse.json({
      posts: Array.isArray(posts) ? posts : [],
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages
      }
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const data = await request.json();

    if (!data.title || !data.slug || !data.content) {
      return NextResponse.json({ error: "Title, slug, and content are required." }, { status: 400 });
    }

    const result = await query(
      `INSERT INTO posts 
       (title, slug, excerpt, content, image_url, category_id, author_id, is_featured, read_time, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.title,
        data.slug,
        data.excerpt || "",
        data.content,
        data.image_url || null,
        data.category_id || null,
        data.author_id || null,
        data.is_featured ? 1 : 0,
        data.read_time || "5 min",
        data.status || "published"
      ]
    );

    const insertId = result?.insertId || result?.[0]?.insertId;

    if (data.tags && data.tags.length > 0 && insertId) {
      const placeholders = data.tags.map(() => "(?, ?)").join(", ");
      const values = data.tags.flatMap(tagId => [insertId, tagId]);

      await query(`INSERT INTO post_tags (post_id, tag_id) VALUES ${placeholders}`, values);
    }

    return NextResponse.json({ id: insertId, message: "Post created successfully" }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
