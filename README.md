# Professional Portfolio (Cristina Jiménez)

## Overview

This repository contains the complete source code for the professional portfolio website of a communications and international marketing specialist, showcasing work, expertise, and career journey.

## How It Works

    Frontend: The Next.js app fetches content from the Strapi API, using a combination of SSG for better performance and SEO, and CSR for interactive components.

    Backend: The backend is powered by Strapi CMS, which provides a user-friendly admin panel for content management. The Strapi API is connected to a PostgreSQL database for data storage and Cloudinary for media storage.

## Project structure

### Frontend [Next.js](https://nextjs.org/docs)

#### Tech stack

    Framework: Next.js 15 (App router)

    Language: TypeScript

    Styling: Tailwind CSS, Sass

    Markdown Support: react-markdown, remark-gfm, rehype-raw

    Forms: Formspree React

    Utilities: Prettier, ESLint

    Touch functionality : react-swipeable

#### Directory tree

```
frontend
├── public
│ └── images
└── src
├── app
│ ├── about
│ ├── home
│ ├── portfolio
│ ├── resume
│ ├── robots.txt
│ └── sitemap.xml
├── components
│ ├── AboutPictures
│ ├── AnimatedFigure
│ ├── ArticleItem
│ ├── CareerTimeline
│ ├── Carousel
│ ├── ContactForm
│ ├── Expertise
│ ├── ExpertiseSection
│ ├── GlobalStyles
│ ├── Header
│ ├── IndustriesSection
│ ├── Industry
│ ├── InstagramEmbed
│ ├── LightboxGallery
│ ├── ModalPortal
│ ├── Nav
│ ├── PortfolioItem
│ ├── PreviewPDF
│ ├── ProjectLayout
│ ├── ResultBanner
│ ├── SocialMediaSection
│ ├── TimelineItem
│ ├── ViewportWarning
│ └── YoutubeEmbed
├── content
├── hooks
├── styles
│ ├── components
│ └── pages
└── utils
```

#### Environment

```
NEXT_PUBLIC_API_BASE_URL
NEXT_PUBLIC_FRONTEND_BASE_URL (for dynamic metadata)
```

### Backend [Strapi CMS](https://docs.strapi.io/)

(The API's swagger doc is available at http://localhost:1337/documentation in development environment)

#### Tech Stack

    Backend Framework: Strapi v5

    Language: TypeScript

    Database: PostgreSQL

    Cloud Uploads: Cloudinary via @strapi/provider-upload-cloudinary

    Authentication & Permissions: @strapi/plugin-users-permissions

    API Documentation: @strapi/plugin-documentation

    Deployment: @strapi/plugin-cloud

#### Directory tree

```
backend
├── config
├── database
│   └── migrations
├── dist
│   ├── config
│   └── src
│       ├── api
│       ├── components
│       └── extensions
├── public
│   └── uploads
├── src
│   ├── admin
│   ├── api
│   │   ├── about
│   │   ├── career-timeline
│   │   ├── company
│   │   ├── experience
│   │   ├── expertise
│   │   ├── expertise-section
│   │   ├── global-styling
│   │   ├── header
│   │   ├── home
│   │   ├── industries-section
│   │   ├── industry
│   │   ├── portfolio
│   │   ├── project
│   │   └── resume
│   ├── components
│   │   └── content
│   └── extensions
│       ├── documentation
│       └── users-permissions
└── types
    └── generated
```

#### Environment

```
# Server

    HOST: The host for the Strapi server (default 0.0.0.0)
    PORT: The port number for the Strapi server (default 1337)

# Secrets

    APP_KEYS: Secret keys for signing cookies and JWTs
    API_TOKEN_SALT: Salt used for API token generation
    ADMIN_JWT_SECRET: Secret for signing admin JWT tokens
    TRANSFER_TOKEN_SALT: Salt for transfer tokens
    JWT_SECRET: Secret for signing JWT tokens used in authentication

# Database

    DATABASE_CLIENT: The database client (default postgres)
    DATABASE_URL: The connection string for the database
    DATABASE_SSL: Whether to use SSL for database connections (set to true for production)

# Cloud Storage (Cloudinary)

    CLOUDINARY_NAME: Cloudinary cloud name
    CLOUDINARY_KEY: Cloudinary API key
    CLOUDINARY_SECRET: Cloudinary API secret
```
