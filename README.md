# SnowUI Dashboard

Compact React dashboard built with Vite and Tailwind CSS, organized with an atomic design structure and connected to API-driven sections.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=api_url_here
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Run unit tests:

```bash
npm run test
```

## Features

- Atomic design structure with reusable `atoms`, `molecules`, and `organisms`
- Responsive dashboard layout for mobile, tablet, and desktop
- Keyword search across roadmap, files, notifications, activities, contacts, and spendings
- Status filtering for the project spendings table
- API-based sections loaded from `src/apis/*`
- Local upload interaction in the latest files panel
- Light/dark mode toggle with persisted theme in `localStorage`
- Unit tests for theme toggle, mobile sidebar drawer, spendings filters, and latest files behavior

## Project Structure

```text
src/
  apis/
  components/
    atoms/
    molecules/
    organisms/
  pages/
  templates/
```

## Notes

- The dashboard uses placeholder API endpoints from DummyJSON custom collections.
- The `Upload` button currently opens the file picker and previews the selected file locally. It does not upload to a backend yet.
