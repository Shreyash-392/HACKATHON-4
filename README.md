# Civic Resolve (Snap Send Solve)

A comprehensive civic engagement platform to report, track, and resolve community infrastructure issues. Features intelligent categorization using Google Gemini AI, real-time map integration with Leaflet, a Civic Trust Graph, and a gamified points system.

## Setup Instructions

### 1. Install Dependencies
Run the following command in the root directory to install all required packages:
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file in the root directory and add your API keys. You can use the provided `.env.example` as a template:
```bash
GOOGLE_GEMINI_API_KEY=your_api_key_here
PORT=5000
```
*Note: A Google Gemini API key is required for the automated AI categorization to work when reporting issues.*

### 3. Run the Development Server
This project uses concurrently to run both the Vite frontend and the Node/Express backend simultaneously.

Start the application:
```bash
npm start
```

### Accessing the App
- **Frontend App**: `http://localhost:5173/Hackathon-4/`
- **Backend API**: `http://localhost:5000`

## Core Features
1. **Interactive Reporting**: Users can report local issues with locations placed directly onto a Leaflet map.
2. **AI Categorization**: Uploaded complaints are auto-categorized by severity and type using the Google Gemini model.
3. **Admin Dashboard**: A comprehensive admin view to manage statuses and assign contractors.
4. **Civic Trust Graph**: A visual map charting department efficiency and overall complaint flow.
5. **Smart Commute**: A real-time routing engine (OSRM + Nominatim) that safely routes citizens around active complaint zones, rewarding them with wallet points.
