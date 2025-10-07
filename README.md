# PTC4U Homepage - Dual Version Setup

This project supports running two versions of the website simultaneously:

## 🚀 Quick Start

### Current Version (Port 3000)
```bash
npm run dev
```
- **URL**: http://localhost:3000
- **Description**: The current/stable version of the website
- **Branch**: main

### Redesigned Version (Port 3001)
```bash
npm run dev:redesign
```
- **URL**: http://localhost:3001
- **Description**: The new redesigned version of the website
- **Branch**: minimystic

### Run Both Versions Simultaneously
```bash
npm run dev:both
```
- **Current**: http://localhost:3000
- **Redesigned**: http://localhost:3001

## 📁 Project Structure

```
ptc4u-homepage/
├── pages/                 # Current version pages
├── components/            # Current version components
├── styles/               # Current version styles
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration
└── README.md            # This file
```

## 🔧 Development Workflow

### For Current Version (Port 3000)
1. Work on the `main` branch
2. Run `npm run dev`
3. Access at http://localhost:3000

### For Redesigned Version (Port 3001)
1. Work on the `minimystic` branch
2. Run `npm run dev:redesign`
3. Access at http://localhost:3001

### For Side-by-Side Development
1. Run `npm run dev:both`
2. Compare both versions in different browser tabs
3. Make changes to the appropriate branch

## 🎨 Redesign Features

The redesigned version (port 3001) includes:
- Enhanced device preview functionality
- Improved admin interface
- Modern UI components
- Better responsive design
- Advanced content management

## 📝 Notes

- Both versions share the same codebase but can have different features
- Use environment variables to differentiate between versions
- The redesigned version is experimental and may have breaking changes
- Always test both versions before deploying

## 🚀 Deployment

When ready to deploy the redesigned version:
1. Merge `minimystic` branch to `main`
2. Update production configuration
3. Deploy to production environment