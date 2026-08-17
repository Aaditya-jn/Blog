
// ─── Navigation ───────────────────────────────────────────────────────────────
function initNav() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.textContent = menu.classList.contains('open') ? '✕' : '☰';
    });
  }
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) a.classList.add('active');
  });
}

// ─── Post Card ────────────────────────────────────────────────────────────────
function renderPostCard(post) {
  return `
    <article class="post-card" onclick="location.href='post.html?slug=${post.slug}'" style="cursor:pointer;">
      <div class="post-card-header">
        <span class="post-card-date">${post.date}</span>
        <span class="post-card-tag">${post.tags[0]}</span>
      </div>
      <div class="post-card-body">
        <h3 class="post-card-title">${post.title}</h3>
        <p class="post-card-excerpt">${post.excerpt}</p>
      </div>
      <div class="post-card-footer">
        <span class="post-card-read">${post.readTime} read</span>
        <span class="post-card-arrow">→</span>
      </div>
    </article>`;
}

function renderFeaturedCard(post) {
  return `
    <article class="post-featured" onclick="location.href='post.html?slug=${post.slug}'" style="cursor:pointer;">
      <div class="post-featured-body">
        <span class="section-number">Featured</span>
        <h2 class="post-featured-title">${post.title}</h2>
        <p style="font-size:15px;line-height:1.7;opacity:.8;margin-bottom:32px;">${post.excerpt}</p>
        <a href="post.html?slug=${post.slug}" class="btn btn-primary" style="align-self:flex-start;" onclick="event.stopPropagation()">Read Essay →</a>
      </div>
      <div class="post-featured-sidebar">
        <div class="label label-accent" style="margin-bottom:12px;">Tags</div>
        ${post.tags.map(t => `<div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px;">${t}</div>`).join('')}
        <div class="label" style="margin-top:24px;opacity:.5;">${post.readTime} read</div>
      </div>
    </article>`;
}

// ─── Index ────────────────────────────────────────────────────────────────────
function initIndex() {
  const featuredEl = document.getElementById('featured-post');
  const recentEl = document.getElementById('recent-posts');
  const countEl = document.getElementById('post-stat');
  if (countEl) countEl.textContent = POSTS.length;
  if (featuredEl) featuredEl.innerHTML = renderFeaturedCard(getFeaturedPost());
  if (recentEl) recentEl.innerHTML = getRecentPosts(3, getFeaturedPost().slug).map(renderPostCard).join('');
}

// ─── Blog ─────────────────────────────────────────────────────────────────────
function initBlog() {
  const grid = document.getElementById('posts-grid');
  const tagFilter = document.getElementById('tag-filter');
  const countEl = document.getElementById('post-count');
  if (!grid) return;

  function renderGrid(tag) {
    const posts = getPostsByTag(tag);
    if (countEl) countEl.textContent = `${posts.length} Post${posts.length !== 1 ? 's' : ''}`;
    if (!posts.length) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1;"><h2>No Posts</h2><p>No posts found for "${tag}".</p></div>`;
      return;
    }
    grid.innerHTML = posts.map(renderPostCard).join('');
    grid.querySelectorAll('.post-card').forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(8px)';
      setTimeout(() => {
        card.style.transition = 'opacity .25s ease-out,transform .25s ease-out,background .2s,color .2s';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, i * 60);
    });
  }

  if (tagFilter) {
    tagFilter.innerHTML = getAllTags().map(t =>
      `<button class="tag-btn${t === 'All' ? ' active' : ''}" data-tag="${t}">${t}</button>`
    ).join('');
    tagFilter.addEventListener('click', e => {
      const btn = e.target.closest('.tag-btn');
      if (!btn) return;
      tagFilter.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGrid(btn.dataset.tag);
    });
  }

  // Handle URL tag param
  const tag = new URLSearchParams(window.location.search).get('tag');
  if (tag) {
    setTimeout(() => {
      const btn = document.querySelector(`.tag-btn[data-tag="${tag}"]`);
      if (btn) btn.click();
      else renderGrid('All');
    }, 50);
  } else {
    renderGrid('All');
  }
}

// ─── Post Reader ──────────────────────────────────────────────────────────────
function initPost() {
  const container = document.getElementById('post-container');
  if (!container) return;

  const slug = new URLSearchParams(window.location.search).get('slug');
  if (!slug) { container.innerHTML = `<div class="empty-state"><h2>No Post</h2><p>No slug provided.</p></div>`; return; }

  const post = getPostBySlug(slug);
  if (!post) { container.innerHTML = `<div class="empty-state"><h2>404</h2><p>Post not found.</p></div>`; return; }

  document.title = `${post.title} — AJ Blog`;

  container.innerHTML = `
    <div class="post-reader">
      <div class="post-reader-header">
        <div class="post-reader-meta" style="margin-bottom:24px;">
          ${post.tags.map(t => `<span class="accent">${t}</span>`).join('<span style="opacity:.3;"> · </span>')}
        </div>
        <h1 class="post-reader-title">${post.title}</h1>
        <div class="post-reader-meta">
          <span>${post.date}</span>
          <span style="opacity:.4;">·</span>
          <span>${post.readTime} read</span>
        </div>
      </div>
      <div class="prose">${post.content}</div>
      <div style="margin-top:64px;padding-top:32px;border-top:4px solid #000;display:flex;gap:16px;flex-wrap:wrap;">
        <a href="blog.html" class="btn btn-secondary">← All Posts</a>
      </div>
    </div>`;
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initIndex();
  initBlog();
  initPost();
});
