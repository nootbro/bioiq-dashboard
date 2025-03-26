# BioIQ Dashboard

A premium health analytics dashboard for visualizing and tracking biomarkers and health metrics.

## Overview

BioIQ Dashboard is a sophisticated health analytics platform designed to provide users with comprehensive insights into their health metrics. Built with a focus on premium user experience and data visualization, it offers a detailed view of various biomarkers organized by health domains.

## Features

- **Comprehensive Biomarker Tracking**: Monitor 60+ health metrics across different categories
- **Interactive Visualizations**: Engage with dynamic charts and 3D visualizations
- **Tiered Membership Model**: Core, Elite, and Black membership tiers with progressive features
- **Biological Age Analysis**: Track biological vs. chronological age with detailed metrics
- **Health Domain Categorization**: Organize biomarkers by cardiovascular, metabolic, hormonal, and immune domains
- **Responsive Design**: Optimized for both desktop and mobile experiences
- **Dark Mode First**: Premium dark theme designed for reduced eye strain and elegant aesthetics

## Technology Stack

- React 19
- TypeScript
- Framer Motion for animations
- Webpack for bundling
- CSS custom properties for theming

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/nootbro/bioiq-dashboard.git
   cd bioiq-dashboard
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Build for production
   ```
   npm run build
   ```

## Project Structure

```
bioiq-dashboard/
├── public/                  # Static assets
├── src/
│   ├── components/          # React components
│   ├── data/                # Mock data and API interfaces
│   ├── types/               # TypeScript type definitions
│   ├── styles.css           # Global styles
│   └── index.tsx            # Application entry point
├── tsconfig.json            # TypeScript configuration
└── webpack.config.js        # Webpack configuration
```

## Components

- **AnimatedMetricCard**: 3D hover effect cards for displaying biomarker data
- **BiologicalAgeRing**: Interactive circular visualization showing biological vs. chronological age
- **GlucoseResponseChart**: Detailed chart showing glucose patterns with meal markers
- **HealthPillarsOverview**: Radar chart displaying strength across different health domains
- **MembershipTierComparison**: Comparison view of the three membership tiers
- **ScrollAnimatedSection**: Scroll-driven animations for dashboard sections
