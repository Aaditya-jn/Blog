
// ─── Blog Posts Data Store ────────────────────────────────────────────────────
// Admin panel: /admin.html
// Data flow: localStorage 'aj_posts' overrides POSTS_DEFAULT on this device.
// After editing, use Export in admin panel → update this file → push to Netlify.

const POSTS_DEFAULT = [
  {
    id: 1,
    slug: "building-in-public-why-it-matters",
    title: "Building in Public: Why It Matters More Than You Think",
    date: "August 14, 2026",
    dateISO: "2026-08-14",
    tags: ["Mindset", "Building"],
    readTime: "6 min",
    excerpt: "Sharing your work before it is ready is terrifying. That discomfort is precisely the signal you should lean into.",
    featured: true,
    content: `<p>There is a peculiar kind of courage required to share work that is not finished. In a culture that celebrates polished outcomes and viral launch moments, the act of showing your rough edges feels almost subversive.</p><p>But after building several projects in public over the past year, I have become convinced that the process itself is the product. The journey matters more than the destination — not as a platitude, but as a structural truth about how good work gets made.</p><h2>The Feedback Flywheel</h2><p>When you build in private, you operate on assumptions. When you build in public, you operate on data. The difference is not subtle — it is the difference between guessing what your users need and actually watching them tell you.</p><blockquote>The market does not care about your intentions. It only responds to your output.</blockquote><p>Every post, every screenshot, every half-finished prototype you share creates a micro-feedback loop. Someone will tell you you're solving the wrong problem. Someone will tell you they have been waiting for exactly this. Both signals are invaluable, and you cannot get them in a closed room.</p><h2>Accountability Without a Manager</h2><p>Solo builders have a particular problem: there is no one to report to. No standup, no deadline from above, no social contract of showing up. Public building creates an artificial accountability structure that substitutes for the organisational pressure most people rely on without realising it.</p><p>Once you have told the internet you are building X, stopping feels like a public failure. That friction is useful. It is not guilt — it is commitment made tangible.</p><h2>The Documentation Dividend</h2><p>Every post you write about what you are building is also documentation. Not just for users — for your future self. The posts I wrote six months ago about my architectural decisions have saved me hours of re-derivation. Building in public forces you to externalise your reasoning, and externalised reasoning is a compounding asset.</p><h2>Starting Is the Hard Part</h2><p>The first post is the most difficult. It requires you to accept that your current state of imperfection is worth sharing. It is. Not because imperfection is noble, but because everyone who is good at anything was once bad at it and had to start somewhere visible.</p><p>Ship the thing. Write the post. Show the screenshot. The compound interest on public work accrues slowly, then all at once.</p>`
  }
];

// ─── localStorage Integration ─────────────────────────────────────────────────
const STORAGE_KEY = 'aj_posts';

function loadPosts() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (e) { /* ignore */ }
  return JSON.parse(JSON.stringify(POSTS_DEFAULT)); // deep clone
}

function savePosts(posts) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

function resetToDefaults() {
  localStorage.removeItem(STORAGE_KEY);
  return JSON.parse(JSON.stringify(POSTS_DEFAULT));
}

// Active posts (localStorage if available, else defaults)
let POSTS = loadPosts();

// ─── CRUD ─────────────────────────────────────────────────────────────────────
function createPost(data) {
  const maxId = POSTS.reduce((m, p) => Math.max(m, p.id), 0);
  const slug = data.title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim().replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  const post = { ...data, id: maxId + 1, slug };
  POSTS.unshift(post);
  savePosts(POSTS);
  return post;
}

function updatePost(slug, data) {
  const idx = POSTS.findIndex(p => p.slug === slug);
  if (idx === -1) return null;
  POSTS[idx] = { ...POSTS[idx], ...data };
  savePosts(POSTS);
  return POSTS[idx];
}

function deletePost(slug) {
  const prev = POSTS.length;
  POSTS = POSTS.filter(p => p.slug !== slug);
  if (POSTS.length !== prev) { savePosts(POSTS); return true; }
  return false;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getAllTags() {
  const tags = new Set();
  POSTS.forEach(p => p.tags.forEach(t => tags.add(t)));
  return ['All', ...Array.from(tags).sort()];
}

function getPostBySlug(slug) {
  return POSTS.find(p => p.slug === slug) || null;
}

function getPostsByTag(tag) {
  if (!tag || tag === 'All') return [...POSTS];
  return POSTS.filter(p => p.tags.includes(tag));
}

function getFeaturedPost() {
  return POSTS.find(p => p.featured) || POSTS[0];
}

function getRecentPosts(limit = 3, excludeSlug = null) {
  return POSTS.filter(p => p.slug !== excludeSlug).slice(0, limit);
}

function generateDataJs() {
  return `const POSTS_DEFAULT = ${JSON.stringify(POSTS, null, 2)};`;
}
