# AJ Blog

Personal blog by **Aaditya Jain** — essays on engineering, design, AI, and building things that matter.

**Live site:** (https://blogsbyaadityajain.netlify.app/)

---

## Design

Built on the **Swiss International Typographic Style** — mathematical grids, massive Inter typography, pure black borders, and Swiss Red (`#FF3000`) as the only accent. No gradients, no rounded corners, no shadows. Structure is made visible.

---

## Stack

| Layer | Tech |
|---|---|
| Structure | Vanilla HTML5 |
| Styling | Vanilla CSS (design tokens via CSS custom properties) |
| Logic | Vanilla JavaScript (ES6+) |
| Fonts | Inter via Google Fonts |
| Hosting | Netlify |
| Admin | Client-side, password-protected (`/admin.html`) |

Zero dependencies. Zero build step. Deploys as-is.

---

## File Structure

```
Blog/
├── index.html          # Homepage — hero, featured post, recent posts
├── blog.html           # All posts listing with tag filter
├── post.html           # Individual post reader (slug-based routing)
├── about.html          # About page
├── admin.html          # Password-protected admin panel (CRUD)
├── css/
│   └── style.css       # Full design system
└── js/
    ├── data.js         # Posts data store + localStorage CRUD
    └── main.js         # Nav, rendering, tag filtering, post reader
```

---

## Writing a New Post

### Option A — Admin Panel (recommended)

1. Go to `/admin.html`
2. Log in with your password
3. Click **+ New Post**, fill in the form, save
4. Changes persist in `localStorage` on your device
5. When ready to publish permanently: click **Export data.js** → copy the output → paste into `js/data.js` → push to GitHub → Netlify redeploys automatically

### Option B — Edit `data.js` directly

Add a new object to the `POSTS_DEFAULT` array in `js/data.js`:

```js
{
  id: 7,                              // Increment from last post
  slug: "my-new-post",               // URL-safe, unique
  title: "My New Post Title",
  date: "August 17, 2026",
  dateISO: "2026-08-17",
  tags: ["Engineering", "Design"],   // Comma-separated array
  readTime: "5 min",
  excerpt: "One or two sentences summarising the post.",
  featured: false,                   // true = appears in hero on homepage
  content: `<p>Your HTML content...</p><h2>Section</h2><p>More text.</p>`
}
```

Commit and push — Netlify handles the rest.

---

## Admin Panel

Located at `/admin.html`. Protected by a client-side password.

> **Default password:** `aaditya2026`  
> Change it on line 1 of the `<script>` block in `admin.html`:
> ```js
> const ADMIN_PASSWORD = 'your-new-password';
> ```

| Action | Description |
|---|---|
| **New Post** | Create a post with title, date, tags, excerpt, content, featured flag |
| **Edit** | Update any field of an existing post |
| **Delete** | Remove a post with confirmation |
| **Export data.js** | Copy updated posts array to clipboard for redeployment |
| **Reset to Defaults** | Restore original posts from `data.js` |

> **Note:** Admin changes are stored in `localStorage` and are local to your browser. Use **Export data.js** to make them permanent across all visitors.

---

## Content Format

Post content is written as an **HTML string** in the `content` field. Supported elements:

| Element | Usage |
|---|---|
| `<p>` | Body paragraph |
| `<h2>` | Section heading (styled with border-top) |
| `<h3>` | Sub-heading |
| `<blockquote>` | Pull quote (red left border) |
| `<ul>` / `<ol>` | Lists |
| `<code>` | Inline code |
| `<pre><code>` | Code block (dark background) |
| `<a href="">` | Link (red underline, inverts on hover) |
| `<strong>` | Bold (900 weight) |
| `<hr>` | Section divider (4px black line) |

---

## Deployment (Netlify)

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select the repository
4. Build settings:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.` (root)
5. Click **Deploy** — done

For custom domain: **Site settings → Domain management → Add custom domain**.

---

## Design Tokens

Defined in `css/style.css` under `:root`:

```css
--bg:     #FFFFFF   /* Canvas */
--fg:     #000000   /* Text, borders */
--muted:  #F2F2F2   /* Secondary backgrounds */
--accent: #FF3000   /* Swiss Red — CTAs, section numbers, hover states */
--font:   'Inter'   /* Grotesque sans-serif, 900/700 weight only */
```

---

## License

Personal blog — content © Aaditya Jain. Code is unlicensed; use freely.
