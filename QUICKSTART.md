# Quick Start Guide

## Get Running in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

## What You'll See

### Interactive 3D Globe
- White dots = user sessions from around the world
- Globe auto-rotates for visual effect
- **Click any dot** to see country details
- **Hover** to see city/country tooltip

### Country Info Modal
When you click a session point:
- Modal shows country analytics
- Total sessions & pageviews
- Average duration
- Top cities
- Automatically zooms to that country

### Sessions Panel (Right Side)
- 20 most recent sessions listed
- Each shows:
  - Country flag + anonymized name
  - Browser & OS icons
  - Duration & pageview count
  - Referrer source
  - Time ago

### Sidebar Navigation (Left)
- Web Analytics section
- Product Analytics section
- Behavior tracking
- Settings

## Key Interactions

1. **Click a white dot on globe** → Opens country info modal
2. **Click outside modal** → Closes modal and resets view
3. **Scroll sessions panel** → View all 170+ sessions
4. **Bottom controls** → Switch between different view modes

## Tech Highlights

- Built with **Next.js 14** + **TypeScript**
- **react-globe.gl** powers the 3D visualization
- **Zustand** manages global state
- **Tailwind CSS** for styling
- Mock data pre-loaded for demo

## Customization

### Change Globe Speed
Edit `components/Globe.tsx` line 36:
```typescript
globeEl.current.controls().autoRotateSpeed = 0.5; // Increase for faster rotation
```

### Modify Colors
Edit `components/Globe.tsx` line 50:
```typescript
color: '#ffffff', // Change to any hex color
```

### Add Your Own Data
Replace `data/mockSessions.ts` with your analytics API:
```typescript
const sessions = await fetch('/api/sessions').then(r => r.json());
```

## Troubleshooting

**Globe not showing?**
- Ensure WebGL is supported in your browser
- Check browser console for errors
- Try Chrome/Firefox for best compatibility

**Dependencies failed to install?**
- Ensure Node.js 18+ is installed
- Clear `node_modules` and `package-lock.json`, then retry

**Port 3000 already in use?**
- Run on different port: `npm run dev -- -p 3001`

## Next Steps

1. Explore the codebase structure (see README.md)
2. Customize the design and colors
3. Integrate with your real analytics API
4. Deploy to Vercel: `npm run build`

Happy coding!
