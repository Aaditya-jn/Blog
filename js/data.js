
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
  },
  {
    id: 2,
    slug: "the-cost-of-premature-abstraction",
    title: "The Cost of Premature Abstraction",
    date: "August 8, 2026",
    dateISO: "2026-08-08",
    tags: ["Engineering", "Architecture"],
    readTime: "8 min",
    excerpt: "Every abstraction you add before you need it is a bet against the future. Most of those bets are losing ones.",
    featured: false,
    content: `<p>There is a seductive appeal to the perfectly engineered system. Clean interfaces, reusable components, deeply layered abstractions — it looks like craftsmanship. In many cases, it is the opposite.</p><p>Premature abstraction is one of the most common and costly mistakes in software. It manifests as an architectural decision made before the problem is well-understood, locking the system into a structure that must be fought rather than used.</p><h2>Why We Abstract Too Early</h2><p>The impulse is understandable. We have seen the same pattern appear twice and we anticipate a third. We extrapolate from past projects. We have read about SOLID principles and DRY and we want to apply them.</p><p>But most abstractions are not derived from deep understanding of the problem — they are derived from the fear of writing the same thing twice. That is not the same thing.</p><blockquote>Duplication is far cheaper than the wrong abstraction. — Sandi Metz</blockquote><h2>The Three Appearances Rule</h2><p>A practical heuristic: do not abstract until you have seen the pattern at least three times, in genuinely similar contexts. Two appearances might be coincidence. Three is a signal. By the third appearance, you also understand the variation — what changes and what stays constant — which is the knowledge you need to build an abstraction that actually helps.</p><h2>The Cost Compounds</h2><p>A premature abstraction does not just create technical debt — it creates conceptual debt. The next engineer has to understand both the abstraction and the underlying problem it was trying to solve. If the abstraction is wrong, they also have to fight it.</p><h2>Concrete Before Abstract</h2><p>The antidote is straightforward in principle and difficult in practice: stay concrete until the abstraction reveals itself. Write the specific thing. Then write the specific thing again when you need it again. On the third occurrence, you will know exactly what to abstract and why.</p>`
  },
  {
    id: 3,
    slug: "on-learning-in-public",
    title: "On Learning in Public: A Year of Notes",
    date: "July 28, 2026",
    dateISO: "2026-07-28",
    tags: ["Learning", "Mindset"],
    readTime: "5 min",
    excerpt: "What happens when you commit to writing about what you are learning as you learn it, mistakes included.",
    featured: false,
    content: `<p>A year ago I started keeping a public learning log. Not a polished tutorial series — a genuine log. Things I was figuring out in real time, dead ends included.</p><p>What I expected: minor embarrassment, occasional useful feedback. What actually happened was more interesting.</p><h2>The Feynman Effect at Scale</h2><p>The act of writing about a concept forces you to surface the gaps in your understanding that reading alone conceals. When I was learning about distributed systems, I could follow an explanation. When I tried to write one, I immediately discovered what I did not actually understand. Writing is a much stricter test than reading.</p><p>This is the Feynman technique, but with an added layer: doing it in public means your gaps are visible to people who might know better. I have had strangers correct my mental models in ways that would have taken months to discover on my own.</p><h2>Compounding Returns</h2><p>The other thing that happens: notes compound. An idea documented six months ago becomes a reference. References become frameworks. Frameworks become the foundation of new work. The compounding is slow and invisible until suddenly it is not.</p><p>Start the log. Write it badly. Publish it anyway. The quality improves, but the important thing is that the habit exists.</p>`
  },
  {
    id: 4,
    slug: "designing-for-clarity-not-cleverness",
    title: "Designing for Clarity, Not Cleverness",
    date: "July 15, 2026",
    dateISO: "2026-07-15",
    tags: ["Design", "Engineering"],
    readTime: "7 min",
    excerpt: "The cleverest solution is rarely the clearest one. And clarity is almost always more valuable than cleverness.",
    featured: false,
    content: `<p>There is a particular kind of engineer who optimises for impressing other engineers. You can identify their code by how long it takes to understand. The indirection is elegant; the abstractions are deep; the actual problem being solved is buried somewhere underneath.</p><h2>Cleverness Is Not a Virtue</h2><p>Cleverness is a signal, not a goal. It signals that the engineer understood the domain well enough to find a non-obvious solution. That is genuinely useful. But cleverness optimised for display — complexity that exists to demonstrate competence rather than to solve the problem — is actively harmful.</p><p>The most respected engineers I know write code that looks obvious in retrospect. The insight is in the design decision, not in the implementation complexity.</p><h2>Clarity as Respect</h2><p>Writing clear code is a form of respect for the next person who reads it. That person might be you. It almost certainly will be, at some point, and future you will not remember why current you made the choices you made.</p><blockquote>Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.</blockquote><h2>The Test</h2><p>Before shipping anything, I now apply a simple test: can I explain this to a competent engineer who is unfamiliar with the codebase in under two minutes? If not, it is probably too clever. Simplify it until you can.</p>`
  },
  {
    id: 5,
    slug: "notes-on-ai-assisted-development",
    title: "Notes on AI-Assisted Development in 2026",
    date: "July 3, 2026",
    dateISO: "2026-07-03",
    tags: ["AI", "Engineering"],
    readTime: "9 min",
    excerpt: "What changes when an AI can write most of your boilerplate — and what does not change at all.",
    featured: false,
    content: `<p>A common narrative about AI-assisted development frames it as either a productivity revolution or an existential threat to engineering craft. After using these tools daily for over a year, my view is more nuanced and probably more boring than either story.</p><h2>What Actually Changed</h2><p>The first-order effect is real: the cost of generating working code for well-understood problems dropped dramatically. Boilerplate, standard patterns, common algorithms — all of these became significantly cheaper to produce. Time that used to go into scaffolding now goes into design decisions.</p><p>The second-order effect is subtler. Because generation is cheap, the bottleneck shifted. Good taste — knowing which thing to build and why — became relatively more valuable, not less.</p><h2>What Did Not Change</h2><p>Systems thinking did not get easier. Understanding the constraints of a production environment, anticipating failure modes, designing for observability — these require deep contextual knowledge that current AI systems do not carry reliably. The engineer still needs to hold the full system in their head.</p><blockquote>AI generates the sentence. The engineer writes the paragraph. The architect writes the chapter. Judgment still sits at every level.</blockquote><h2>The Craft Argument</h2><p>Some engineers worry that using AI assistance degrades craft — that not writing every line by hand means not truly understanding the system. I think this conflates means with ends. A craftsperson is defined by the quality of their judgment and output, not by the tools they refuse to use.</p>`
  },
  {
    id: 6,
    slug: "on-rest-and-productive-boredom",
    title: "On Rest and the Productivity of Boredom",
    date: "June 20, 2026",
    dateISO: "2026-06-20",
    tags: ["Mindset", "Productivity"],
    readTime: "4 min",
    excerpt: "Boredom is not the absence of productivity. It is often the precondition for the most important thinking.",
    featured: false,
    content: `<p>We have built an environment of zero boredom. Phones exist precisely to fill the gaps. Gaps that used to be occupied by letting the mind wander are now occupied by content. This is framed as productivity, but I suspect it is the opposite.</p><h2>The Idle Mind Is Doing Work</h2><p>Neuroscience has a name for the mental state that occurs during unfocused rest: the default mode network. It is active when we are not directing attention at a task, and it is responsible for some of the most important cognitive processes we perform — integrating experience, forming connections between disparate ideas, consolidating memory.</p><blockquote>The mind needs fallow periods the same way fields do. Constant use without rest degrades the substrate.</blockquote><h2>Scheduling Boredom</h2><p>This sounds paradoxical, but it works: deliberately schedule time with no input. Walk without headphones. Sit without a screen. Let the mind do what it does when you are not directing it.</p><p>The resistance to this is real. It feels unproductive. It feels like wasted time. Push through the first few minutes of discomfort and notice what happens. The thoughts that arise are usually the important ones — the things your conscious attention has been too busy to address.</p>`
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
