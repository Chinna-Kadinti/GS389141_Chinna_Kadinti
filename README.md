# GSynergy Data Viewer App

A Progressive Web Application built with React and TypeScript for viewing and managing store sales data with intuitive visualization capabilities.

## Overview

This application is a data management tool that allows users to:

- Manage store locations and SKUs
- View and edit planning data in a dynamic grid
- Visualize gross margin metrics with interactive charts
- Import data from Excel files

The app features a responsive design, offline capabilities, and follows best practices for React development.

## Features

### Authentication
- Secure login functionality
- User session persistence
- Protected routes for authenticated users

### Store Management
- Add, edit, and delete store locations
- Reorder stores with drag-and-drop functionality
- View store details in a sortable table

### SKU Management
- Maintain product catalog with prices and costs
- Calculate margins automatically
- Organize products by class and department

### Planning Grid
- Cross-join of Stores and SKUs with Calendar weeks
- Group weeks by month
- Edit sales units with real-time calculation of:
  - Sales Dollars (Units × Price)
  - GM Dollars (Sales Dollars − Units × Cost)
  - GM % (GM Dollars ÷ Sales Dollars)
- Conditional formatting for GM percentages:
  - Green: ≥ 40%
  - Yellow: ≥ 10% but < 40%
  - Orange: > 5% but < 10%
  - Red: ≤ 5%

### Chart Visualization
- Select stores to view performance metrics
- Dual-axis chart showing GM Dollars and GM %
- Week-by-week analysis

### Data Import
- Import data from Excel files
- Sample data loader
- Format validation

## Technical Implementation

### Technologies Used
- React 18
- TypeScript
- Redux Toolkit for state management
- React Router for navigation
- Material UI for component styling
- AG-Grid for advanced data grid
- Recharts for visualization
- Progressive Web App capabilities

### Architecture
- Component-based architecture
- Clean separation of concerns
- Type-safe interfaces
- Persistent storage with localStorage

## Running the Application

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>

Install dependencies:
npm install

Start the development server:
npm start
Building for Production
npm run build



Deployment
The application can be deployed to:

Firebase Hosting
AWS Amplify
Netlify
Vercel
Any static hosting service

Usage Guide
Authentication

Use any username and password combination to log in (demo mode)

Store Management

Navigate to the Stores tab
Add new stores with the "Add Store" button
Reorder stores using the arrow buttons

SKU Management

Navigate to the SKUs tab
Add new SKUs with price and cost information

Planning Grid

Navigate to the Planning tab
Edit Sales Units by clicking on cells
Observe automatic calculations and conditional formatting

Chart View

Navigate to the Chart tab
Select a store from the dropdown
View performance metrics over time

Importing Data

Click "Import Data" to upload your own Excel file
Click "Load Sample" to use the provided sample data

Future Improvements

Backend integration for persistent data storage
User role management
Advanced filtering options
Export functionality
Multi-language support
Dark mode theme

This is the project structure

GS389141_Chinna_Kadinti/
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── data/
│       └── sample-data.xlsx
└── src/
    ├── App.css
    ├── App.test.tsx
    ├── App.tsx
    ├── index.css
    ├── index.tsx
    ├── logo.svg
    ├── react-app-env.d.ts
    ├── reportWebVitals.ts
    ├── serviceWorkerRegistration.ts
    ├── setupTests.ts
    ├── styles.css
    ├── assets/
    │   └── logo.png
    ├── components/
    │   ├── Auth/
    │   │   ├── LoginForm.tsx
    │   │   └── PrivateRoute.tsx
    │   ├── Charts/
    │   │   └── StoreChart.tsx
    │   ├── Navigation/
    │   │   ├── FileUploader.tsx
    │   │   ├── Navbar.tsx
    │   │   └── Sidebar.tsx
    │   ├── Planning/
    │   │   └── PlanningGrid.tsx
    │   ├── SKUs/
    │   │   ├── SKUForm.tsx
    │   │   └── SKUList.tsx
    │   └── Stores/
    │       ├── StoreForm.tsx
    │       └── StoreList.tsx
    ├── pages/
    │   ├── ChartPage.tsx
    │   ├── LoginPage.tsx
    │   ├── PlanningPage.tsx
    │   ├── SKUsPage.tsx
    │   └── StoresPage.tsx
    ├── redux/
    │   ├── hooks.ts
    │   ├── store.ts
    │   └── slices/
    │       ├── authSlice.ts
    │       ├── planningSlice.ts
    │       ├── skuSlice.ts
    │       └── storeSlice.ts
    ├── services/
    │   ├── auth.service.ts
    │   ├── excel.service.ts
    │   └── localStorage.service.ts
    ├── types/
    │   ├── auth.types.ts
    │   ├── planning.types.ts
    │   ├── sku.types.ts
    │   └── store.types.ts
    └── utils/
        ├── formatters.ts
        └── validators.ts

### Improvements with 4 More Hours
## 1. Comprehensive Testing Suite
With additional time, I would implement:

Unit Tests: Using Jest and React Testing Library for component testing
Integration Tests: Testing component interactions and state management

## 2. Advanced Performance Optimizations
I would focus on:

Virtualized Lists: Implementing virtualization for large datasets
Code Splitting: Dynamic imports for route-based code splitting
Memoization: Further optimization of expensive calculations

etc...






# GSynergy Data Viewer App

## Overview

The GSynergy Data Viewer is a Progressive Web Application built with React and TypeScript that enables retail planners to manage store data, SKUs, and planning information through an intuitive interface. The application features responsive design, interactive data grids, and visualization capabilities for retail planning and analysis.

## How to Run and Test the Code

### Prerequisites
- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

### Installation
1. Clone the repository:
   bash
   git clone https://github.com/your-username/GSxxxxxx_YourFirstName_YourLastName.git
   cd GSxxxxxx_YourFirstName_YourLastName
   

2. Install dependencies:
   bash
   npm install
   

3. Start the development server:
   bash
   npm start
   

4. Open your browser and navigate to http://localhost:3000

### Using the Application
1. *Login*: Use any username/password combination (demo mode)
2. *Stores Management*: View, add, edit, delete, and reorder stores
3. *SKUs Management*: Manage products with pricing information
4. *Planning Grid*: View and edit sales data with real-time calculations
5. *Chart View*: Visualize performance metrics by store
6. *Data Import*: Load sample data or upload your own Excel file

## Elements Done Well

### 1. State Management with Redux Toolkit
I implemented a clean and well-structured state management system using Redux Toolkit. The store is organized into logical slices (auth, stores, SKUs, planning) with clear actions and reducers. This approach demonstrates my proficiency in:

- *Maintainable State Architecture*: Each slice handles a specific domain with clear boundaries
- *Type-Safe State Handling*: TypeScript integration ensures type safety throughout the state lifecycle
- *Optimized State Updates*: Selective updates for performance
- *Persistent State Management*: Integration with localStorage for data persistence

### 2. Interactive Data Grid Implementation
The Planning grid component showcases my ability to handle complex data visualization and editing:

- *Hierarchical Data Structure*: Implementing complex column grouping (months, weeks, metrics)
- *Real-time Calculations*: Dynamic computation of sales metrics with cell-level reactivity
- *Conditional Formatting*: Visual representation of performance thresholds
- *Performance Optimization*: Precomputed cross-join and optimized rendering with loading states
- *Extended AG-Grid Customization*: Leveraging advanced grid features while maintaining performance

### 3. Component Architecture
I designed a maintainable component architecture that demonstrates my understanding of React best practices:

- *Separation of Concerns*: Clean boundaries between components
- *Custom Hooks*: Extracting reusable logic with React hooks
- *Responsive Design*: Consistent layout across screen sizes with minimum width requirements
- *Performance Considerations*: Strategic use of memoization and callback optimizations
- *Type-Safe Components*: Leveraging TypeScript for component props and state

## Improvements with 4 More Hours

With an additional 4 hours, I would focus on the following improvements:

### 1. Enhanced Performance Optimizations
- *Virtualization for Large Datasets*: Implement windowing techniques for handling thousands of rows
- *Memoized Selectors*: Add Reselect library integration for optimized Redux state derivation
- *Web Workers*: Offload heavy calculations to background threads
- *Lazy Loading*: Implement route-based code splitting
- *Resource Prefetching*: Intelligent data prefetching for smoother user experience

These optimizations would ensure the application maintains responsiveness even with enterprise-scale datasets.

### 2. Advanced User Experience Features
- *Keyboard Navigation*: Full keyboard support for power users
- *Bulk Editing*: Support for multi-select and batch operations
- *Advanced Filtering/Sorting*: Complex filter compositions for data analysis
- *Export Capabilities*: One-click export to Excel/CSV with formatting
- *Interactive Tooltips*: Context-sensitive help and data insights
- *Undo/Redo Stack*: Transaction-based state management for error recovery

These features would transform the application from functional to exceptional, significantly improving user productivity.

### 3. Robust Testing Infrastructure
- *Unit Test Coverage*: Jest tests for core business logic
- *Component Testing*: React Testing Library integration for UI testing
- *End-to-End Testing*: Cypress tests for critical user flows
- *Visual Regression Testing*: Ensure UI consistency across changes
- *Test Fixtures and Factories*: Reusable test data generation

A comprehensive testing strategy would ensure long-term maintainability and reliability.

### 4. Production Deployment Optimizations
- *Build Optimization*: Advanced webpack configurations for optimal loading
- *PWA Enhancements*: Improved offline support and caching strategies
- *Error Boundary Implementation*: Graceful error handling and recovery
- *Analytics Integration*: Usage tracking for feature improvement insights
- *CI/CD Pipeline*: Automated testing and deployment workflow

These improvements would prepare the application for real-world enterprise use.

## Feedback on the Challenge

The GSynergy challenge provided an excellent opportunity to demonstrate full-stack development capabilities. It effectively balanced guided requirements with creative freedom.

Potential improvements could include:
- Specifications for API integration to demonstrate backend connectivity
- Accessibility requirements to encourage inclusive design
- Performance benchmarks to guide optimization efforts
- Multi-device requirements to showcase responsive design expertise

Overall, the challenge was well-structured and effectively assessed technical proficiency while providing an engaging development experience.











Credits
Developed as part of the GSynergy technical challenge.
License
© 2025 GSynergy. All rights reserved.
