# Netlify Deployment Guide

## Quick Deploy Steps

### Option 1: GitHub Integration (Recommended)
1. Go to https://www.netlify.com and sign in with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select "Deploy with GitHub"
4. Choose your `valentine-webapp` repository
5. Select branch: `webapp`
6. Build settings:
   - Build command: (leave empty)
   - Publish directory: `.` (root directory)
7. Click "Deploy site"
8. Your site will be live in seconds!

### Option 2: Netlify CLI

```bash
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy (from project root)
netlify deploy --prod

# Or for a draft deployment first
netlify deploy
```

### Option 3: Drag & Drop
1. Visit https://app.netlify.com/drop
2. Drag your project folder or zip file
3. Wait for deployment

## Custom Domain (Optional)
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Environment Variables
Not needed for this static site, but if you add any later:
- Go to Site settings → Environment variables
- Add your variables there
