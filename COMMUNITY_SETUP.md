# Community Platform Setup Guide

This guide explains how to set up the community features for the Government as a Service framework.

## Architecture Overview

The GaaS community uses a **hybrid approach**:

1. **Giscus (Page-level discussions)** - Integrated into every documentation page
2. **GitHub Discussions (Forum)** - Broad community discussions and Q&A

---

## Part 1: Enable GitHub Discussions

### Step 1: Enable Discussions on GitHub

1. Go to your GitHub repository: https://github.com/Happy-Technologies-LLC/Government-as-a-Service
2. Click **Settings** tab
3. Scroll down to **Features** section
4. Check ✅ **Discussions**
5. Click **Set up Discussions**

### Step 2: Create Discussion Categories

GitHub will create default categories. Customize them:

**Recommended Categories:**
- 📣 **Announcements** - Framework updates, new releases
- 💡 **Ideas** - Feature requests, improvements
- ❓ **Q&A** - Questions about implementation
- 🏛️ **Implementation Showcase** - Countries/orgs sharing their implementations
- 🤝 **General** - Everything else
- 🐛 **Issues & Bugs** - Problems with documentation or framework

### Step 3: Pin Welcome Discussion

Create a pinned welcome post:

```markdown
# 👋 Welcome to the GaaS Community!

Government as a Service is a global framework for digital government transformation.
This community is where practitioners, policymakers, and technologists collaborate.

## 🗂️ Discussion Categories

- 📣 **Announcements** - Stay updated with framework releases
- ❓ **Q&A** - Get help with implementation questions
- 💡 **Ideas** - Suggest improvements to the framework
- 🏛️ **Implementation Showcase** - Share your success stories
- 🤝 **General** - Everything else

## 📚 Resources

- [Framework Documentation](https://happy-technologies-llc.github.io/Government-as-a-Service/)
- [Downloads & PDFs](https://happy-technologies-llc.github.io/Government-as-a-Service/downloads)
- [GitHub Repository](https://github.com/Happy-Technologies-LLC/Government-as-a-Service)

## 🤝 Community Guidelines

- Be respectful and constructive
- Search before posting duplicate questions
- Share your implementation experiences
- Help others when you can

Looking forward to building the future of digital government together! 🚀
```

---

## Part 2: Set Up Giscus (Page Comments)

### Step 1: Get Giscus Configuration

1. Go to https://giscus.app
2. Enter your repo: `Happy-Technologies-LLC/Government-as-a-Service`
3. Choose category: **General** (or create "Page Discussions")
4. Copy the generated configuration values:
   - `data-repo-id`
   - `data-category-id`

### Step 2: Update Giscus Component

Edit `docs/.vitepress/theme/components/GiscusComments.vue`:

```typescript
const REPO = 'Happy-Technologies-LLC/Government-as-a-Service'
const REPO_ID = 'R_YOUR_REPO_ID_HERE' // From giscus.app
const CATEGORY = 'General' // Your chosen category
const CATEGORY_ID = 'DIC_YOUR_CATEGORY_ID_HERE' // From giscus.app
```

### Step 3: Enable Giscus in Theme

Edit `docs/.vitepress/theme/index.ts`:

```typescript
import GiscusComments from './components/GiscusComments.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-top': () => h(PrintButton),
      'doc-after': () => h(GiscusComments) // Add comments at bottom of pages
    })
  },
  enhanceApp({ app }) {
    app.component('GiscusComments', GiscusComments)
  }
}
```

---

## Part 3: Update Community Pages

### Update Navigation

Edit `docs/.vitepress/config.mts`:

```typescript
nav: [
  // ...
  {
    text: 'Community',
    items: [
      { text: 'Forum & Discussions', link: 'https://github.com/Happy-Technologies-LLC/Government-as-a-Service/discussions' },
      { text: 'Community Hub', link: '/tier5-community/community-platform-overview' }
    ]
  }
]
```

### Update Community Page

Create a banner on community pages linking to GitHub Discussions.

---

## Alternative Options Considered

### ✅ **Recommended: Giscus + GitHub Discussions**
- **Cost:** Free
- **Hosting:** None needed
- **Maintenance:** Minimal
- **Integration:** Native VitePress
- **Best for:** Documentation sites with GitHub repos

### ⚠️ **Discourse** (Alternative for larger communities)
- **Cost:** Free (self-hosted) or $100/month (cloud)
- **Hosting:** Requires server (2GB RAM minimum)
- **Maintenance:** Moderate (updates, backups)
- **Features:** Most comprehensive (SSO, plugins, analytics)
- **Best for:** Large communities (1,000+ active users)
- **Setup:** https://github.com/discourse/discourse/blob/main/docs/INSTALL.md

### ⚠️ **Flarum** (Lightweight alternative)
- **Cost:** Free (self-hosted)
- **Hosting:** Requires PHP server
- **Maintenance:** Low
- **Features:** Modern, extensible
- **Best for:** Medium communities (100-1,000 users)

---

## Testing Checklist

After setup:

- [ ] GitHub Discussions enabled and accessible
- [ ] Discussion categories created
- [ ] Welcome post pinned
- [ ] Giscus showing on documentation pages
- [ ] Comments load properly
- [ ] Dark mode theme switches correctly
- [ ] Comments persist across page reloads
- [ ] Navigation links work
- [ ] Community page updated

---

## Moderation

### GitHub Discussions Moderation

**Moderator Actions:**
- Edit or delete comments
- Lock discussions
- Pin important discussions
- Mark answers as "accepted"
- Move discussions between categories

**Access Control:**
- Repository collaborators automatically get moderation access
- Can add additional moderators via Settings → Collaborators

### Giscus Moderation

Since Giscus uses GitHub Discussions, moderation is handled through GitHub:
1. Go to repository Discussions
2. Find the discussion (mapped by page path)
3. Use GitHub's moderation tools

---

## Privacy & GDPR Compliance

Both solutions are GDPR-friendly:

- ✅ No third-party tracking cookies
- ✅ User data stored by GitHub (GDPR compliant)
- ✅ Users can delete their own comments
- ✅ No email harvesting
- ✅ Open source and auditable

**Privacy Notice Template:**

> This site uses GitHub Discussions for community features. By participating, you agree to GitHub's [Terms of Service](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service) and [Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement).

---

## Next Steps

1. **Enable GitHub Discussions** (5 minutes)
2. **Get Giscus credentials** from https://giscus.app (2 minutes)
3. **Update GiscusComments.vue** with your repo/category IDs (2 minutes)
4. **Enable in theme** (1 minute)
5. **Test** (5 minutes)
6. **Create welcome post** (10 minutes)

**Total setup time: ~25 minutes** 🚀

---

## Support

Questions about setup?
- Open an issue: https://github.com/Happy-Technologies-LLC/Government-as-a-Service/issues
- Ask in discussions: https://github.com/Happy-Technologies-LLC/Government-as-a-Service/discussions
