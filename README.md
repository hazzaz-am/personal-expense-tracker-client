# 💰 Personal Expense Tracker

A modern, responsive web application for tracking personal expenses built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Features include expense management, data visualization, filtering capabilities, and a beautiful user interface.

## ✨ Features

- **📊 Expense Management**: Add, edit, and delete expenses with ease
- **📈 Data Visualization**: Interactive pie charts showing expense distribution by category
- **🔍 Advanced Filtering**: Filter expenses by category, date range
- **📱 Responsive Design**: Optimized for both desktop and mobile devices
- **🎨 Modern UI**: Beautiful interface with smooth animations and transitions
- **⚡ Real-time Updates**: Instant feedback with toast notifications
- **🔄 Loading States**: Skeleton loaders for better user experience

## 🚀 Tech Stack

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Charts**: Recharts
- **Notifications**: Sonner
- **Package Manager**: PNPM
- **Linting**: ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18.17 or later
- **PNPM**: Version 8.0 or later (recommended) or npm/yarn
- **Git**: For cloning the repository

### Check Your Versions

```bash
node --version    # Should be 18.17+
pnpm --version    # Should be 8.0+
```

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/hazzaz-am/personal-expense-tracker-client.git
cd personal-expense-tracker-client
```

### 2. Install Dependencies

Using PNPM (recommended):

```bash
pnpm install
```

Or using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 3. Start the Development Server

```bash
pnpm dev
```

Or:

```bash
npm run dev
# or
yarn dev
```

### 4. Open Your Browser

Navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

## 📁 Project Structure

```
personal-expense-tracker-client/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── not-found.tsx           # 404 page
│   └── expense-list/           # Expense list page
├── components/                  # Reusable components
│   ├── layouts/                # Layout components
│   │   └── navbar/            # Navigation bar
│   ├── modules/               # Feature-specific components
│   │   ├── expense-list/      # Expense list components
│   │   └── home/              # Home page components
│   └── ui/                    # UI components
├── data/                       # Data management
├── lib/                        # Utility libraries
├── types/                      # TypeScript type definitions
├── utility/                    # Helper functions
└── public/                     # Static assets
```

## 🔧 Development Workflow

### 1. Development Mode

```bash
pnpm dev
```

- Starts the development server with hot reload
- Automatic TypeScript compilation
- Real-time error reporting
- Fast refresh for instant updates

### 2. Building for Production

```bash
pnpm build
```

- Optimizes the application for production
- Generates static assets
- Creates optimized bundles

### 3. Production Preview

```bash
pnpm build && pnpm start
```

- Build and start the production server
- Test production optimizations locally

## 📱 Usage Guide

### Adding Expenses

1. Click the "Add Expense" button
2. Fill in the expense details:
   - Title
   - Amount
   - Category
   - Date
3. Click "Add Expense" to add the expense

### Managing Expenses

- **Edit**: Click the edit button on any expense
- **Delete**: Click the delete button and confirm
- **Filter**: Use the filter section to narrow down expenses
- **View Stats**: Check the home page for visual insights

### Filtering Options

- **By Category**: Select specific expense categories
- **By Date Range**: Set start and end dates
- **Combined Filters**: Use multiple filters simultaneously

## 🔗 Links

- **Repository**: [GitHub](https://github.com/hazzaz-am/personal-expense-tracker-client)
- **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **TypeScript**: [typescriptlang.org](https://www.typescriptlang.org)

---

**Happy Expense Tracking! 💰✨**
