// src/app/api/hosting/lib/queries.js
export const queries = {
  getAllPlans: `
    SELECT 
      hp.id, hp.name, hp.description, hp.popular, hp.cta,
      ht.title AS hosting_type, ht.description AS hosting_description,
      GROUP_CONCAT(hpf.feature SEPARATOR '|||') AS features
    FROM h_plans hp
    JOIN h_hosting_types ht ON hp.hosting_type_id = ht.id
    LEFT JOIN h_plan_features hpf ON hp.id = hpf.plan_id
    GROUP BY hp.id
    ORDER BY ht.title, hp.id
  `,
  
  getPlansByType: `
    SELECT 
      hp.id, hp.name, hp.description, hp.popular, hp.cta,
      ht.title AS hosting_type, ht.description AS hosting_description,
      GROUP_CONCAT(hpf.feature SEPARATOR '|||') AS features
    FROM h_plans hp
    JOIN h_hosting_types ht ON hp.hosting_type_id = ht.id
    LEFT JOIN h_plan_features hpf ON hp.id = hpf.plan_id
    WHERE ht.title = ?
    GROUP BY hp.id
    ORDER BY hp.id
  `,
  
  getPlanById: `
    SELECT 
      hp.id, hp.name, hp.description, hp.popular, hp.cta,
      ht.title AS hosting_type, ht.description AS hosting_description,
      GROUP_CONCAT(hpf.feature SEPARATOR '|||') AS features
    FROM h_plans hp
    JOIN h_hosting_types ht ON hp.hosting_type_id = ht.id
    LEFT JOIN h_plan_features hpf ON hp.id = hpf.plan_id
    WHERE hp.id = ?
    GROUP BY hp.id
  `,
  
  getPricingByPlanId: `
    SELECT 
      hp.monthly_price, hp.monthly_discount_price, hp.monthly_discount_percent,
      hp.yearly_price, hp.yearly_discount_price, hp.yearly_discount_percent,
      hp.biennially_price, hp.biennially_discount_price, hp.biennially_discount_percent,
      hc.code AS currency_code, hc.name AS currency_name, hc.symbol AS currency_symbol
    FROM h_pricing hp
    JOIN h_currencies hc ON hp.currency_id = hc.id
    WHERE hp.plan_id = ?
    ORDER BY hc.code
  `,

  getAllCurrencies: `
    SELECT id, code, name, symbol 
    FROM h_currencies
    ORDER BY code
  `,

  getPlansWithPricingByType: `
    SELECT 
      hp.id, hp.name, hp.description, hp.popular, hp.cta,
      ht.title AS hosting_type, ht.description AS hosting_description,
      GROUP_CONCAT(hpf.feature SEPARATOR '|||') AS features,
      JSON_ARRAYAGG(
        JSON_OBJECT(
          'currency_code', hc.code,
          'currency_name', hc.name,
          'currency_symbol', hc.symbol,
          'monthly_price', p.monthly_price,
          'monthly_discount_price', p.monthly_discount_price,
          'monthly_discount_percent', p.monthly_discount_percent,
          'yearly_price', p.yearly_price,
          'yearly_discount_price', p.yearly_discount_price,
          'yearly_discount_percent', p.yearly_discount_percent,
          'biennially_price', p.biennially_price,
          'biennially_discount_price', p.biennially_discount_price,
          'biennially_discount_percent', p.biennially_discount_percent
        )
      ) AS pricing
    FROM h_plans hp
    JOIN h_hosting_types ht ON hp.hosting_type_id = ht.id
    LEFT JOIN h_plan_features hpf ON hp.id = hpf.plan_id
    LEFT JOIN h_pricing p ON hp.id = p.plan_id
    LEFT JOIN h_currencies hc ON p.currency_id = hc.id
    WHERE ht.title = ?
    GROUP BY hp.id
    ORDER BY hp.id
  `,
  getAllPosts: `
    SELECT 
      p.id, p.title, p.slug, p.excerpt, p.content, p.image_url, 
      p.is_featured, p.status, p.read_time, p.published_at,
      c.id AS category_id, c.name AS category_name, c.slug AS category_slug,
      a.id AS author_id, a.name AS author_name, a.avatar AS author_avatar,
      a.bio AS author_bio, a.twitter_handle, a.linkedin_url, a.website_url
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN authors a ON p.author_id = a.id
    WHERE p.status = 'published'
    ORDER BY p.published_at DESC
    LIMIT ? OFFSET ?
  `,
  
  getPostsByCategory: `
    SELECT 
      p.id, p.title, p.slug, p.excerpt, p.content, p.image_url, 
      p.is_featured, p.status, p.read_time, p.published_at,
      c.id AS category_id, c.name AS category_name, c.slug AS category_slug,
      a.id AS author_id, a.name AS author_name, a.avatar AS author_avatar
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN authors a ON p.author_id = a.id
    WHERE p.status = 'published' AND c.slug = ?
    ORDER BY p.published_at DESC
    LIMIT ? OFFSET ?
  `,
  
  getFeaturedPost: `
    SELECT 
      p.id, p.title, p.slug, p.excerpt, p.content, p.image_url, 
      p.is_featured, p.status, p.read_time, p.published_at,
      c.id AS category_id, c.name AS category_name, c.slug AS category_slug,
      a.id AS author_id, a.name AS author_name, a.avatar AS author_avatar
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN authors a ON p.author_id = a.id
    WHERE p.status = 'published' AND p.is_featured = TRUE
    ORDER BY p.published_at DESC
    LIMIT 1
  `,
  
  getPostBySlug: `
    SELECT 
      p.id, p.title, p.slug, p.excerpt, p.content, p.image_url, 
      p.is_featured, p.status, p.read_time, p.published_at,
      c.id AS category_id, c.name AS category_name, c.slug AS category_slug,
      a.id AS author_id, a.name AS author_name, a.avatar AS author_avatar,
      a.bio AS author_bio, a.twitter_handle, a.linkedin_url, a.website_url
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN authors a ON p.author_id = a.id
    WHERE p.slug = ? AND p.status = 'published'
  `,
  
  getPostTags: `
    SELECT t.id, t.name, t.slug 
    FROM tags t
    JOIN post_tags pt ON t.id = pt.tag_id
    WHERE pt.post_id = ?
  `,
  
  getRelatedPosts: `
    SELECT 
      p.id, p.title, p.slug, p.excerpt, p.image_url, p.published_at, p.read_time
    FROM posts p
    WHERE p.category_id = ? AND p.id != ? AND p.status = 'published'
    ORDER BY p.published_at DESC
    LIMIT 3
  `,
  
  getPostComments: `
    SELECT * FROM comments 
    WHERE post_id = ? AND is_approved = TRUE
    ORDER BY created_at DESC
  `,
  
  getAllCategories: `
    SELECT c.*, COUNT(p.id) as post_count
    FROM categories c
    LEFT JOIN posts p ON c.id = p.category_id AND p.status = 'published'
    GROUP BY c.id
    ORDER BY post_count DESC
  `,
  
  createComment: `
    INSERT INTO comments 
    (post_id, author_name, author_email, content,is_approved)
    VALUES (?, ?, ?, ?,?)
  `,

  countAllPosts: `
    SELECT COUNT(*) as total FROM posts WHERE status = 'published'
  `,
  
  countPostsByCategory: `
    SELECT COUNT(*) as total 
    FROM posts 
    WHERE status = 'published' AND category_id = (SELECT id FROM categories WHERE slug = ?)
  `,
  getPostsByTag: `
  SELECT p.*, c.name as category_name, c.slug as category_slug, a.name as author_name, a.avatar as author_avatar
  FROM posts p
  JOIN categories c ON p.category_id = c.id
  JOIN authors a ON p.author_id = a.id
  JOIN post_tags pt ON p.id = pt.post_id
  JOIN tags t ON pt.tag_id = t.id
  WHERE t.slug = ? AND p.status = 'published'
  ORDER BY p.published_at DESC
  LIMIT ? OFFSET ?
`,

countPostsByTag: `
  SELECT COUNT(*) as total
  FROM posts p
  JOIN post_tags pt ON p.id = pt.post_id
  JOIN tags t ON pt.tag_id = t.id
  WHERE t.slug = ? AND p.status = 'published'
`,
// Knowledge Base Queries
getAllKnowledgeBaseData:`
  SELECT c.*, COUNT(a.id) as article_count
  FROM k_categories c
  LEFT JOIN articles a ON a.category_id = c.id
  GROUP BY c.id
  ORDER BY c.title
`,

getPopularArticles:`
  SELECT * FROM articles 
  WHERE is_popular = 1 
  ORDER BY views DESC 
  LIMIT 5
`,

getVideoTutorials : `
  SELECT * FROM video_tutorials 
  ORDER BY created_at DESC 
  LIMIT 4
`,

getFAQs :`
  SELECT * FROM faqs 
  ORDER BY created_at DESC 
  LIMIT 5
`,

getCategoryBySlug : `
  SELECT * FROM k_categories WHERE slug = ?
`,

getSubcategoriesWithArticles :`
  SELECT s.*, 
    (SELECT COUNT(*) FROM articles a WHERE a.subcategory_id = s.id) as article_count
  FROM k_subcategories s
  WHERE s.category_id = ?
  ORDER BY s.name
`,

getArticlesBySubcategory : `
  SELECT id, slug, title, excerpt, views, updated_at 
  FROM articles 
  WHERE subcategory_id = ? 
  ORDER BY title
`,

getPopularArticlesByCategory : `
  SELECT id, slug, title, excerpt, views, updated_at 
  FROM articles 
  WHERE category_id = ? AND is_popular = 1
  ORDER BY views DESC 
  LIMIT 4
`,

getVideoTutorialsByCategory : `
  SELECT * FROM video_tutorials 
  WHERE category_id = ? 
  ORDER BY created_at DESC 
  LIMIT 3
`,

getArticleBySlug :`
  SELECT a.*, c.slug as category_slug, c.title as category_title 
  FROM articles a 
  JOIN k_categories c ON a.category_id = c.id 
  WHERE a.slug = ?
`,

getRelatedArticles : `
  SELECT id, slug, title, excerpt, views, updated_at
  FROM articles 
  WHERE category_id = ? AND id != ? 
  ORDER BY views DESC 
  LIMIT 3
`,

incrementArticleViews : `
  UPDATE articles 
  SET views = views + 1 
  WHERE id = ?
`,
getPreviousArticle: `
  SELECT id, slug, title 
  FROM articles 
  WHERE category_id = ? AND id < ? 
  ORDER BY id DESC 
  LIMIT 1
`,

getNextArticle: `
  SELECT id, slug, title 
  FROM articles 
  WHERE category_id = ? AND id > ? 
  ORDER BY id ASC 
  LIMIT 1
`,
searchArticles :`
  SELECT id, slug, title, excerpt, views, updated_at, 'article' as type
  FROM articles 
  WHERE title LIKE ? OR excerpt LIKE ? OR content LIKE ?
  ORDER BY views DESC
  LIMIT 10
`,
searchCategories : `
  SELECT id, slug, title, description, icon, 'category' as type
  FROM k_categories
  WHERE title LIKE ? OR description LIKE ?
  LIMIT 5
`,

searchTutorials :`
  SELECT *
  FROM video_tutorials
  WHERE title LIKE ? OR description LIKE ?
  LIMIT 5
`,

searchFAQs : `
  SELECT id, question, answer, 'faq' as type
  FROM faqs
  WHERE question LIKE ? OR answer LIKE ?
  LIMIT 5
`,
searchBlogPosts :`
  SELECT 
    p.id, 
    p.slug, 
    p.title, 
    p.excerpt, 
    p.image_url,
    p.published_at,
    p.read_time,
    c.name as category_name,
    c.slug as category_slug,
    'post' as type
  FROM posts p
  LEFT JOIN categories c ON p.category_id = c.id
  WHERE p.status = 'published' 
    AND (p.title LIKE ? OR p.excerpt LIKE ? OR p.content LIKE ?)
  ORDER BY p.published_at DESC
  LIMIT 10
`,
searchBlogCategories : `
  SELECT 
    id, 
    slug, 
    name as title, 
    description, 
    'category' as type
  FROM categories
  WHERE name LIKE ? OR description LIKE ?
  LIMIT 5
`,
searchBlogTags :`
  SELECT 
    id, 
    slug, 
    name as title, 
    'tag' as type
  FROM tags
  WHERE name LIKE ?
  LIMIT 5
`

};