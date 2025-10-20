# GaaS Framework - VitePress Setup Instructions

## ✅ What's Been Done

I've created all the files and configuration you need to launch the GaaS website with VitePress:

### Files Created:
- ✅ `package.json` - Node.js dependencies and scripts
- ✅ `.gitignore` - Git ignore rules
- ✅ `docs/.vitepress/config.mts` - VitePress configuration
- ✅ `docs/index.md` - Home page
- ✅ `docs/framework.md` - Framework overview page
- ✅ `docs/downloads.md` - Downloads page
- ✅ `docs/contact.md` - Contact page
- ✅ `.github/workflows/deploy.yml` - GitHub Actions auto-deployment
- ✅ `scripts/generate-pdfs.sh` - PDF generation script
- ✅ All markdown files copied to docs/ directory
- ✅ `press-kit/` folder with all templates

---

## 🚀 Next Steps - You Need To Do

### Step 1: Install Node.js (if not installed)

```bash
# Check if you have Node.js
node --version

# If not installed, download from:
# https://nodejs.org (get v20 or higher)
```

### Step 2: Install Dependencies

```bash
cd /Users/nczitzer/Government-as-a-Service

# Install VitePress and dependencies
npm install
```

This will install VitePress based on the `package.json` I created.

### Step 3: Test Locally

```bash
# Start the development server
npm run docs:dev
```

This will start VitePress at `http://localhost:5173`

Open your browser and go to `http://localhost:5173` to see your site!

**What you should see:**
- Beautiful home page with GaaS branding
- All tier documents accessible
- Search functionality
- Mobile-responsive design

### Step 4: Build for Production (Optional - test before deploying)

```bash
# Build the static site
npm run docs:build

# Preview the production build
npm run docs:preview
```

---

## 📦 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to GitHub.com
2. Create new repository: `gaas-framework`
3. **Do NOT initialize** with README (we already have files)

### Step 2: Push Code to GitHub

```bash
cd /Users/nczitzer/Government-as-a-Service

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - GaaS framework with VitePress"

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/gaas-framework.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select: **GitHub Actions**
4. The `.github/workflows/deploy.yml` file I created will automatically deploy your site

**Your site will be live at:** `https://YOUR_USERNAME.github.io/gaas-framework/`

---

## 🌐 Configure Custom Domain (gaas.global)

### After you purchase gaas.global:

1. **In GitHub:**
   - Go to Settings → Pages
   - Under "Custom domain", enter: `gaas.global`
   - Check "Enforce HTTPS"

2. **In your domain registrar (Namecheap, Cloudflare, etc.):**

Add these DNS records:

```
Type: A
Host: @
Value: 185.199.108.153

Type: A
Host: @
Value: 185.199.109.153

Type: A
Host: @
Value: 185.199.110.153

Type: A
Host: @
Value: 185.199.111.153

Type: CNAME
Host: www
Value: YOUR_USERNAME.github.io
```

**Wait 24-48 hours** for DNS to propagate.

Then `https://gaas.global` will load your site!

---

## 📄 Generate PDFs

### Install Pandoc & LaTeX

```bash
# macOS
brew install pandoc
brew install --cask mactex

# Test installation
pandoc --version
```

### Generate All PDFs

```bash
# Run the script I created
./scripts/generate-pdfs.sh
```

This will create ~40 PDFs in the `pdfs/` folder and a ZIP bundle.

**Note:** PDF generation takes 5-10 minutes for all documents.

---

## 🎨 Next Steps for Launch

### Week 1 (This Week):

1. **Install Node.js and test VitePress locally** ✓
   ```bash
   npm install
   npm run docs:dev
   ```

2. **Buy domain gaas.global** ($12/year)
   - Namecheap.com or Cloudflare.com

3. **Commission infographics** ($600-800)
   - Use template in `press-kit/fiverr-job-posting.md`
   - Post on Fiverr.com

4. **Find legal reviewer** ($2,000-5,000)
   - Use email in `press-kit/attorney-outreach-email.md`
   - Email 5 attorneys

### Week 2:

5. **Push to GitHub and deploy**
   ```bash
   git add .
   git commit -m "Deploy GaaS framework"
   git push
   ```

6. **Configure custom domain**
   - Add DNS records (see above)

7. **Receive infographic drafts**
   - Review and request revisions

### Week 3:

8. **Generate PDFs**
   ```bash
   ./scripts/generate-pdfs.sh
   ```

9. **Insert infographics into website**
   - Save to `docs/public/images/`
   - Update markdown files

10. **Receive legal review**
    - Apply recommended edits

### Week 4:

11. **Final testing and launch!**
    - Use press release in `press-kit/press-release.md`

---

## 🔧 Troubleshooting

### "command not found: npm"
→ Install Node.js from nodejs.org

### "Cannot find module 'vitepress'"
→ Run `npm install`

### Port 5173 already in use
→ Kill the process: `lsof -ti:5173 | xargs kill`

### PDFs not generating
→ Install Pandoc and LaTeX (see above)

### Site not deploying to GitHub Pages
→ Check: Settings → Pages → Source = "GitHub Actions"

---

## 📞 Need Help?

The setup is ready to go! If you hit any issues:

1. Check the error message
2. Google the error + "VitePress"
3. Ask me - I can help troubleshoot!

---

## ✅ Quick Start Summary

```bash
# 1. Install dependencies
npm install

# 2. Start dev server (test locally)
npm run docs:dev
# Open http://localhost:5173

# 3. Build for production
npm run docs:build

# 4. Push to GitHub
git add .
git commit -m "Launch GaaS framework"
git push

# 5. Generate PDFs (when ready)
./scripts/generate-pdfs.sh
```

**That's it!** The site will auto-deploy via GitHub Actions.

---

**All files are ready. You just need to run `npm install` and `npm run docs:dev` to see it live!**
