# Skysecure Research & Leadership Dashboard

A production-grade Next.js application that implements the Skysecure Research and Leadership dashboard. The application features a pixel-perfect implementation of Figma designs with a focus on performance, modularity, and best practices.

## Features

- Modular Next.js application using the App Router
- Server-side rendering (SSR) for optimal performance
- React Context API for global state management
- Responsive design matching Figma specifications
- Loading states, error boundaries, and not-found pages
- Authentication context for user management
- Pixel-perfect UI matching design specifications

## Tech Stack

- Next.js 15.3
- React 19
- Tailwind CSS
- Context API for state management
- App Router API with SSR

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/    # Dashboard-specific components
│   │   ├── layout/       # Layout components (sidebar, topnav)
│   │   └── ui/           # Reusable UI components
│   ├── context/          # React context providers
│   ├── hooks/            # Custom React hooks
│   ├── error.js          # Error boundary component
│   ├── globals.css       # Global styles
│   ├── layout.js         # Root layout
│   ├── loading.js        # Loading state component
│   ├── not-found.js      # 404 page
│   └── page.js           # Homepage
└── public/
    └── images/           # Images from Figma design
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```bash
npm run build
npm start
```

## Acknowledgements

- Design from Figma: Skysecure Research & Leadership Dashboard
