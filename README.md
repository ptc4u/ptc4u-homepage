# Pinnacle Thrive Coaching - Website

A professional, modern, and fully responsive website for Pinnacle Thrive Coaching built with Next.js, React, and Tailwind CSS.

## Overview

Pinnacle Thrive Coaching is a transformational coaching service helping professionals and organizations achieve their full potential through personalized guidance and proven strategies.

## Features

- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **SEO Optimized**: Proper meta tags, Open Graph, and Twitter Card support
- **Performance Optimized**: Fast loading times and efficient rendering
- **Production-Ready**: Clean code, proper linting, and industry best practices

## Tech Stack

- **Framework**: Next.js 14.2.3
- **UI Library**: React 18.3.1
- **Styling**: Tailwind CSS 3.3.0
- **Linting**: ESLint with Next.js configuration
- **Fonts**: Inter, Playfair Display (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development Commands

```bash
npm run dev         # Start development server (http://localhost:3000)
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Run ESLint
npm run lint:fix    # Fix ESLint errors automatically
```

## Project Structure

```
ptc4u-homepage/
├── components/          # React components
│   ├── NavBar.js       # Navigation bar
│   ├── HeroSection.js  # Hero section
│   ├── Footer.js       # Footer
│   ├── ContactForm.js  # Contact form
│   └── ...            # Other components
├── pages/              # Next.js pages
│   ├── index.js       # Homepage
│   ├── _app.js        # App wrapper
│   └── ...            # Other pages
├── public/             # Static assets
│   └── images/        # Images
├── styles/            # Global styles
│   └── globals.css    # Global CSS with Tailwind
├── .eslintrc.json     # ESLint configuration
├── tailwind.config.js # Tailwind configuration
├── next.config.js     # Next.js configuration
└── package.json       # Dependencies and scripts
```

## Key Pages

- **Homepage** (`/`): Main landing page with hero, services, about, blog, careers, and contact sections
- **About** (`/about`): Information about the coach
- **Blogs** (`/blogs`): Knowledge base and articles
- **Careers** (`/careers`): Job openings
- **Contact** (`/contact`): Contact form
- **Request Forms** (`/request-forms`): Workshop and partnership requests
- **Philosophy** (`/philosophy`): Coaching philosophy
- **Testimonials** (`/testimonials`): Client testimonials

## Responsive Design

The website is fully responsive across all device sizes:

- **Mobile**: 320px - 639px
- **Tablet**: 640px - 1023px
- **Desktop**: 1024px and above

All components use Tailwind's responsive utilities (sm:, md:, lg:, xl:) for optimal display on any device.

## Styling Guidelines

- Uses Tailwind CSS utility classes for styling
- Custom brand colors defined in `tailwind.config.js`
- Global styles in `styles/globals.css`
- Responsive design using Tailwind breakpoints
- Smooth animations and transitions
- Accessibility-first approach

## SEO & Meta Tags

- Proper HTML semantics
- Open Graph tags for social sharing
- Twitter Card support
- Descriptive meta descriptions
- Keyword optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Server-side rendering with Next.js
- Optimized images and assets
- Code splitting and lazy loading
- Minimal bundle size
- Fast Time to Interactive (TTI)

## Deployment

The website can be deployed to:

- Vercel (recommended for Next.js)
- Netlify
- AWS
- Any Node.js hosting platform

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Contributing

1. Follow the existing code style
2. Use ESLint for code quality
3. Test on multiple devices before committing
4. Write clean, maintainable code
5. Comment complex logic

## Code Quality

- **ESLint**: Configured with Next.js recommended rules
- **Clean Code**: No redundant files or unused code
- **Type Safety**: Proper prop types and validation
- **Error Handling**: Comprehensive error boundaries

## License

All rights reserved - Pinnacle Thrive Coaching

## Contact

- Email: ask@ptc4u.com
- Website: https://ptc4u.com
- LinkedIn: [Pinnacle Thrive Coaching](https://www.linkedin.com/company/pinnacle-thrive-coaching/)
- Instagram: [@ask.ptc4u](https://instagram.com/ask.ptc4u)

---

Built with care for Pinnacle Thrive Coaching - Transform Your Life & Career
