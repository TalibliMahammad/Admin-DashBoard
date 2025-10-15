# AI Agent Instructions for Admin Dashboard

## Project Overview
This is a React-based admin dashboard application built with Vite, using modern React patterns and Tailwind CSS for styling. The project emphasizes a clean component structure and responsive design.

## Architecture & Structure

### Key Components
- `App.jsx`: Root component managing sidebar state and page routing
- `Layout/`: Contains core layout components
  - `Header.jsx`: Top navigation bar
  - `Sidebar.jsx`: Collapsible sidebar navigation
  - `Dashboard/`: Dashboard-specific components
    - `Dashboard.jsx`: Main dashboard container
    - `StatsGrid.jsx`: Statistics display grid
    - `ChartSection.jsx`: Data visualization section using Recharts
    - `TableSection.jsx`: Tabular data display
    - `ActivityFeed.jsx`: Real-time activity updates

### Tech Stack
- React 19.1 with modern hooks
- Vite (using rolldown-vite) for build tooling
- Tailwind CSS for styling
- Recharts for data visualization
- Lucide icons for UI elements

## Development Workflow

### Setup & Running
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Key Patterns & Conventions
1. **State Management**: Uses React's built-in useState for local state (see `App.jsx` for example)
2. **Component Structure**: 
   - Functional components with hooks
   - Props destructuring for clarity
   - Component-specific styles using Tailwind classes
3. **Dark Mode Support**: Implemented via Tailwind classes (see gradient classes in `App.jsx`)
4. **Responsive Design**: Uses Tailwind's responsive prefixes (md:, xl:) consistently

### Common Tasks
- Adding new dashboard widgets: Add component in `Dashboard/` directory and import into `Dashboard.jsx`
- Styling: Use Tailwind classes, following the existing dark/light theme pattern
- Navigation: Update sidebar items in `Sidebar.jsx` and corresponding route handling in `App.jsx`

## Integration Points
- Chart data integration in `ChartSection.jsx`
- Table data management in `TableSection.jsx`
- Activity feed updates in `ActivityFeed.jsx`

## Tips
- Use the existing component structure as templates for new features
- Follow the established responsive design patterns
- Maintain dark mode support for all new UI elements
- Leverage Tailwind's utility classes before writing custom CSS