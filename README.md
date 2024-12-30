# Admin Panel

## Overview

Admin panel for . Build with NextJS, Tailwind CSS.

## Getting Started

To begin, follow these steps:

**1. Clone the Repository:**

```bash
git clone <repository-url> jash-ceramics-admin-frontend
cd jash-ceramics-admin-frontend
```

**2. Install Dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

**3. Setup Environment variables:**

```bash
NEXT_PUBLIC_API_URI=http://localhost:8080/api/v1
NEXT_PUBLIC_API_URI_V2=http://localhost:8080/api/v2
NODE_ENV=development
```

- `NEXT_PUBLIC_API_URI`: URL of the API V1.
- `NEXT_PUBLIC_API_URI_V2`: URL of the API V2.
- `NODE_ENV`: If set to production, the application will run in production mode. If set to development, the application will run in development.

**4. Run the Development Server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

**5. View the Application:**

Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

```lua
.project-root
├── .github
├── .husky
├── .next
├── .vscode
├── node_modules
├── public
├── src
│   ├── app
│   │   ├── (auth)
│   │   ├── (dashboard)
│   │   ├── context
│   │   ├── AuthLayout.jsx
│   │   ├── globals.css
│   │   ├── layout.jsx
│   │   └── robots.js
│   ├── components
│   ├── hooks
│   ├── lib
│   │   ├── api.js
│   │   └── utils.js
│   └── utils
├── .env.example
├── .env.local
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .huskyrc
├── .lintstagedrc
├── .prettierignore
├── .prettierrc
├── components.json
├── ecosystem.config.js
├── jsconfig.json
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

**Authorization and Dashboard:**

- (auth) and (dashboard) folders under app for modular route grouping and context-specific pages.

**Global Context:**

- context directory for state management or React context providers.

**Hooks:**

- hooks folder for custom React hooks.

**Environment Configuration:**

- `.env.example` for reference and .env.local for local environment variables.

**Ecosystem Configuration:**

- `ecosystem.config.js` for PM2 (or similar tools) to manage the app's production/development environment.

**Tailwind CSS:**

- `tailwind.config.js` for styling customization.

**API and Utility Layer:**

- `lib/api.js` for managing API calls.
- `lib/utils.js` and utils/ for helper functions.

**Code Quality and Formatting:**

- ESLint, Prettier, and Husky configuration files to enforce consistent code quality.
