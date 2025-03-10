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
        └── validators.ts







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




