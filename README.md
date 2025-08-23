# Pinnacle Thrive Coaching - Website

This repository contains the source code for the Pinnacle Thrive Coaching website, a modern coaching and mentoring platform built with Next.js and Tailwind CSS.

## About Pinnacle Thrive Coaching

Pinnacle Thrive Coaching is a professional coaching service that helps individuals and organizations reach their full potential through:

- **Life Coaching** - Personal growth and transformation
- **Corporate Coaching** - Leadership development and career advancement
- **Goal Achievement** - Breaking through barriers and achieving ambitious goals
- **Performance Coaching** - Maximizing potential in any area

## Features

- **Modern stack** – built with [Next.js](https://nextjs.org/) and [Tailwind CSS](https://tailwindcss.com/) for fast development and performance
- **Responsive design** – optimized for desktop, tablet, and mobile screens
- **Coaching-focused content** – specifically designed for coaching and mentoring services
- **Interactive components** – engaging user experience with smooth animations
- **SEO optimized** – proper meta tags and structured content
- **Contact form** – comprehensive form for client inquiries and discovery calls
- **Testimonials section** – showcase client success stories
- **Process explanation** – clear coaching journey steps

## Tech Stack

- **Frontend Framework**: Next.js 14.2.3
- **React**: 18.3.1
- **Styling**: Tailwind CSS 3.3.0
- **CSS Processing**: PostCSS & Autoprefixer
- **Deployment**: Vercel (configured)

## Getting Started

### Prerequisites

Ensure that you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ptc4u/ptc4u-homepage.git
cd ptc4u-homepage
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the site.

### Production

Build the application for production and start the server:

```bash
npm run build
npm start
```

This will generate an optimized production build in the `.next` directory and start the server on the default port.

## Project Structure

```
ptc4u-homepage/
├── components/          # React components
│   ├── NavBar.js       # Navigation bar
│   ├── HeroSection.js  # Main landing section
│   ├── ServicesSection.js # Coaching services showcase
│   ├── ProcessSection.js  # Coaching process steps
│   ├── TestimonialsSection.js # Client success stories
│   ├── ContactForm.js  # Contact and inquiry form
│   └── Footer.js       # Footer with links and info
├── pages/              # Next.js pages
│   ├── _app.js        # App wrapper
│   └── index.js       # Home page
├── styles/             # Global styles
│   └── globals.css    # Tailwind CSS and custom styles
├── public/             # Static assets
│   └── images/        # Images and icons
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
├── vercel.json         # Vercel deployment config
└── package.json        # Dependencies and scripts
```

## Customization

### Branding
- **Colors**: Update the color palette in `tailwind.config.js` to match your brand
- **Logo**: Replace the mountain emoji (🏔️) with your actual logo
- **Company Name**: Update "Pinnacle Thrive Coaching" throughout the components

### Content
- **Services**: Modify the services offered in `ServicesSection.js`
- **Process**: Update the coaching process steps in `ProcessSection.js`
- **Testimonials**: Replace with real client testimonials in `TestimonialsSection.js`
- **Contact Form**: Customize form fields and validation in `ContactForm.js`

### Images
- Add your own images to the `public/images/` directory
- Update image references in components
- Consider adding hero images, team photos, or service illustrations

## Deploying

### Vercel Deployment (Recommended)

This project is configured for easy deployment on Vercel.

#### Quick Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/) and sign up/login
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect it's a Next.js project
5. Click "Deploy" - your site will be live in minutes!

#### Custom Domain Setup

1. In your Vercel dashboard, go to your project settings
2. Navigate to "Domains" section
3. Add your custom domain (e.g., `pinnaclethrivecoaching.com`)
4. Configure DNS records as instructed by Vercel

### Alternative Platforms

You can also deploy to [Netlify](https://www.netlify.com/) or other platforms. Follow their documentation to set up continuous deployment from your repository.

## Key Features

### Coaching-Specific Design
- Emerald green and purple color scheme representing growth and transformation
- Mountain theme symbolizing reaching your pinnacle
- Professional yet approachable design for coaching services

### User Experience
- Smooth scrolling navigation
- Interactive form with validation
- Responsive design for all devices
- Clear call-to-action buttons throughout

### Content Strategy
- Focus on transformation and growth
- Clear service descriptions
- Social proof through testimonials
- Transparent coaching process

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support or questions about the website, please contact the development team or create an issue in this repository.

---

**Pinnacle Thrive Coaching** - Transform your life and career with expert coaching guidance.