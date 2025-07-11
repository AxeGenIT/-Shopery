# Shopery - Full Stack E-commerce Application

A modern e-commerce application built with Next.js (client) and Node.js/Express (server).

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install all dependencies:**

   ```bash
   npm run install:all
   ```

2. **Start development servers:**

   For client (Next.js):

   ```bash
   npm run client:dev
   ```

   For server (Node.js/Express):

   ```bash
   npm run server:dev
   ```

## 🛠 Development Scripts

### Root Level Commands

- `npm run install:all` - Install dependencies for root, client, and server
- `npm run build:all` - Build both client and server
- `npm run lint:all` - Run linting for both projects
- `npm run lint:fix:all` - Auto-fix linting issues in server
- `npm run format:all` - Format server code
- `npm run test:pre-push` - Manually test the pre-push hook

### Client Commands

- `npm run client:dev` - Start client development server
- `npm run client:build` - Build client for production
- `npm run client:lint` - Run client linting

### Server Commands

- `npm run server:dev` - Start server development server
- `npm run server:build` - Build server for production
- `npm run server:lint` - Run server linting
- `npm run server:lint:fix` - Auto-fix server linting issues
- `npm run server:format` - Format server code

## 🔒 Git Hooks (Husky)

This project uses Husky to run automatic checks before commits and pushes:

### Pre-commit Hook

- Runs linting on both client and server
- Auto-fixes server linting issues
- Formats server code

### Pre-push Hook

- Runs comprehensive checks on both client and server:
  - Client: linting + build
  - Server: linting + formatting + build
- If builds fail, asks for user confirmation to continue
- Auto-fixes linting issues when possible

### Manual Testing

You can manually test the pre-push hook:

```bash
npm run test:pre-push
```

## 📁 Project Structure

```
├── client/          # Next.js frontend application
├── server/          # Node.js/Express backend application
├── .husky/          # Git hooks configuration
└── package.json     # Root package.json with monorepo scripts
```

## 🚨 Important Notes

- The pre-push hook will automatically run every time you `git push`
- Build failures will prompt for confirmation before pushing
- Linting issues are auto-fixed when possible
- Make sure all dependencies are installed before pushing
