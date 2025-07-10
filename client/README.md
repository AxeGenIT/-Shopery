# Shopery Client

A modern e-commerce web application built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Styled with Tailwind CSS for mobile-first design
- **Modular Architecture**: Well-organized component structure with separation of concerns
- **Multiple Layout Support**: Flexible layout system for different page types
- **Performance Optimized**: Leveraging Next.js App Router for optimal performance

## 📦 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (commonlayout)/     # Pages with common layout
│   ├── (dashboard)/        # Dashboard pages
│   └── (withoutcommonlayout)/ # Pages without common layout
├── components/             # Reusable UI components
│   ├── common/            # Shared components (Navbar, etc.)
│   └── module/            # Feature-specific components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility libraries and configurations
├── providers/             # Context providers
├── services/              # API services and external integrations
├── types/                 # TypeScript type definitions
└── utils/                 # Utility functions
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Linting**: ESLint with Next.js configuration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or higher)
- npm, yarn, or pnpm package manager

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd shopery/client
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📜 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check for code quality issues

## 🏗️ Architecture

### Layout System

The application uses Next.js App Router with multiple layout configurations:

- **Common Layout**: Standard layout with navbar and footer
- **Dashboard Layout**: Specialized layout for admin/user dashboard
- **Without Common Layout**: Minimal layout for specific pages (login, etc.)

### Component Organization

- **Common Components**: Reusable UI elements like Navbar
- **Module Components**: Feature-specific components organized by domain
- **Page Components**: Route-specific components

## 🎨 Styling

This project uses Tailwind CSS 4 for styling with:

- Utility-first CSS framework
- Responsive design system
- Custom configuration via `postcss.config.mjs`

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint configuration
- `postcss.config.mjs` - PostCSS configuration for Tailwind

## 📱 Pages & Routes

The application includes the following main sections:

- **Home**: Landing page with product showcases
- **About Us**: Company information and team details
- **Dashboard**: User/admin management interface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project follows:

- TypeScript strict mode
- ESLint rules for Next.js
- Prettier for code formatting (if configured)
- Consistent file and folder naming conventions

## 🐛 Known Issues

- None at the moment

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 📞 Contact

**Developer**: mdimamhsoen  
**GitHub**: [@mdimamhsoen](https://github.com/mdimamhsoen)

## 📄 License

This project is private and proprietary.

---

Built with ❤️ using Next.js and modern web technologies.

## 📁 File & Folder Organization Guidelines

### Naming Conventions

#### Folder Naming

- Use **lowercase** with **hyphens** for multi-word folders: `common-components`, `user-profile`
- Use **camelCase** for single-word folders: `components`, `services`, `utils`
- Route groups in App Router use **parentheses**: `(commonlayout)`, `(dashboard)`

#### File Naming

- **Components**: Use **PascalCase** for component files: `Navbar.tsx`, `ProductCard.tsx`
- **Pages**: Use **lowercase** with **hyphens**: `page.tsx`, `not-found.tsx`, `loading.tsx`
- **Utilities/Services**: Use **camelCase**: `apiClient.ts`, `formatUtils.ts`
- **Types**: Use **camelCase** with descriptive suffixes: `userTypes.ts`, `productInterfaces.ts`
- **Hooks**: Use **camelCase** starting with "use": `useAuth.ts`, `useLocalStorage.ts`

### File Placement Guide

#### `/src/app/` - Next.js App Router Pages

```
app/
├── layout.tsx                 # Root layout for entire app
├── page.tsx                   # Home page (/)
├── loading.tsx                # Global loading UI
├── not-found.tsx              # Global 404 page
├── globals.css                # Global styles
├── (commonlayout)/            # Pages with navbar/footer
│   ├── layout.tsx             # Common layout wrapper
│   ├── page.tsx               # Alternative home page
│   ├── about/
│   │   └── page.tsx           # /about route
│   └── products/
│       ├── page.tsx           # /products route
│       └── [id]/
│           └── page.tsx       # /products/[id] route
├── (dashboard)/               # Admin/user dashboard
│   ├── layout.tsx             # Dashboard-specific layout
│   ├── page.tsx               # /dashboard route
│   ├── analytics/
│   │   └── page.tsx           # /dashboard/analytics
│   └── settings/
│       └── page.tsx           # /dashboard/settings
└── (withoutcommonlayout)/     # Clean pages (auth, etc.)
    ├── layout.tsx             # Minimal layout
    ├── login/
    │   └── page.tsx           # /login route
    └── register/
        └── page.tsx           # /register route
```

#### `/src/components/` - Reusable UI Components

```
components/
├── common/                    # Shared across entire app
│   ├── Navbar/
│   │   ├── index.tsx          # Main Navbar component
│   │   ├── NavItem.tsx        # Individual nav item
│   │   └── MobileMenu.tsx     # Mobile navigation
│   ├── Footer/
│   │   └── index.tsx          # Footer component
│   ├── Button/
│   │   ├── index.tsx          # Base button component
│   │   └── variants.ts        # Button style variants
│   └── Modal/
│       ├── index.tsx          # Modal component
│       └── ModalContext.tsx   # Modal state management
└── module/                    # Feature-specific components
    ├── home/                  # Home page components
    │   ├── index.tsx          # Main home component
    │   ├── HeroSection.tsx    # Hero banner
    │   ├── FeaturedProducts.tsx
    │   └── Newsletter.tsx
    ├── aboutUs/               # About page components
    │   ├── index.tsx          # Main about component
    │   ├── TeamSection.tsx
    │   └── CompanyHistory.tsx
    ├── products/              # Product-related components
    │   ├── ProductCard.tsx
    │   ├── ProductGrid.tsx
    │   ├── ProductFilter.tsx
    │   └── ProductDetails.tsx
    ├── auth/                  # Authentication components
    │   ├── LoginForm.tsx
    │   ├── RegisterForm.tsx
    │   └── PasswordReset.tsx
    └── dashboard/             # Dashboard components
        ├── DashboardStats.tsx
        ├── UserProfile.tsx
        └── AdminPanel.tsx
```

#### `/src/hooks/` - Custom React Hooks

```
hooks/
├── index.ts                   # Export all hooks
├── useAuth.ts                 # Authentication logic
├── useLocalStorage.ts         # Local storage management
├── useApi.ts                  # API calls wrapper
├── useDebounce.ts             # Debouncing utility
├── useModal.ts                # Modal state management
└── useProducts.ts             # Product-specific logic
```

#### `/src/services/` - API & External Services

```
services/
├── index.ts                   # Export all services
├── apiClient.ts               # Base API configuration
├── authService.ts             # Authentication API calls
├── productService.ts          # Product CRUD operations
├── userService.ts             # User management
├── paymentService.ts          # Payment processing
└── emailService.ts            # Email notifications
```

#### `/src/types/` - TypeScript Definitions

```
types/
├── index.ts                   # Export all types
├── userTypes.ts               # User-related interfaces
├── productTypes.ts            # Product data structures
├── apiTypes.ts                # API response types
├── authTypes.ts               # Authentication types
└── commonTypes.ts             # Shared type definitions
```

#### `/src/utils/` - Utility Functions

```
utils/
├── index.ts                   # Export all utilities
├── formatters.ts              # Data formatting functions
├── validators.ts              # Form validation helpers
├── constants.ts               # App-wide constants
├── dateUtils.ts               # Date manipulation
├── stringUtils.ts             # String processing
└── apiUtils.ts                # API helper functions
```

#### `/src/lib/` - Third-party Configurations

```
lib/
├── index.ts                   # Export configurations
├── database.ts                # Database connection setup
├── auth.ts                    # Authentication provider config
├── payment.ts                 # Payment gateway setup
├── analytics.ts               # Analytics configuration
└── validation.ts              # Validation schema (Zod, Yup)
```

#### `/src/providers/` - Context Providers

```
providers/
├── index.ts                   # Export all providers
├── AuthProvider.tsx           # Authentication context
├── ThemeProvider.tsx          # Theme/dark mode context
├── CartProvider.tsx           # Shopping cart state
├── NotificationProvider.tsx   # Toast/alert notifications
└── AppProviders.tsx           # Combined provider wrapper
```

### Component Structure Guidelines

#### Component File Structure

```typescript
// components/common/Button/index.tsx
import React from "react";
import { ButtonProps } from "./types";
import { buttonVariants } from "./variants";

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  ...props
}) => {
  return (
    <button className={buttonVariants[variant]} {...props}>
      {children}
    </button>
  );
};

export default Button;
```

#### Index File Pattern

```typescript
// components/common/Button/index.ts
export { default } from "./Button";
export type { ButtonProps } from "./types";
export { buttonVariants } from "./variants";
```

### Best Practices

#### File Organization Rules

1. **One component per file**: Each component should have its own file
2. **Index files**: Use `index.ts` to re-export components for cleaner imports
3. **Co-location**: Keep related files (types, styles, tests) close to components
4. **Barrel exports**: Use index files to create clean import paths

#### Import/Export Patterns

```typescript
// ✅ Good - Clean barrel exports
import { Button, Modal, Navbar } from "@/components/common";
import { ProductCard, ProductGrid } from "@/components/module/products";

// ❌ Avoid - Deep import paths
import Button from "@/components/common/Button/Button";
import Modal from "@/components/common/Modal/Modal";
```

#### File Naming Rules

- **Components**: `PascalCase` (UserProfile.tsx)
- **Utilities**: `camelCase` (dateUtils.ts)
- **Constants**: `UPPER_SNAKE_CASE` (API_ENDPOINTS.ts)
- **Types**: `camelCase` with suffix (userTypes.ts)
- **Pages**: `kebab-case` (user-profile/page.tsx)

#### Folder Depth Guidelines

- **Maximum 3-4 levels deep**: Avoid overly nested structures
- **Group by feature**: Organize by business domain, not technical layers
- **Shared vs. Specific**: Common components vs. feature-specific components
