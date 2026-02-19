# Project Partner Finder (PPF)

A collaborative platform for students to find project partners with complementary skills.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

### Installation

```bash
npm install
```

### Running the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Other commands

| Command | Description |
|---|---|
| `npm run build` | Build the app for production |
| `npm start` | Start the production server (after build) |
| `npm run lint` | Run the Next.js linter |

## Project Structure

```
.
├── app/
│   ├── globals.css      # Global styles (Tailwind directives)
│   ├── layout.tsx       # Root layout (Navbar + Footer)
│   └── page.tsx         # Home page
└── components/
    ├── Footer.tsx        # Footer component
    └── Navbar.tsx        # Navigation bar component
```
