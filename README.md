# Social Media App

This project is a **social media app** built with **React** that mimics Instagram-like functionality. It includes various features like a post feed, user profiles, liking and commenting on posts, and a theme provider for dark mode support. This project is configured with TypeScript, Vite (or Webpack), and Firebase/MongoDB for backend services.

## Features

- User Authentication (Firebase)
- Post creation, deletion, and interaction (like, comment)
- Dark Mode and Light Mode support (ThemeProvider)
- Modular and reusable components (Button, Post, etc.)
- Real-time updates for likes and comments
- Responsive UI for mobile and desktop
- Image upload and storage (Firebase Storage or a custom solution)
- Global state management (Context API or Redux)

## Project Structure

```bash
├── public              # Static assets
├── src                 # Source code
│   ├── components      # Reusable components (e.g., Button, Post, ThemeProvider)
│   ├── pages           # Pages (Home, Profile, etc.)
│   ├── styles          # CSS files
│   ├── App.tsx         # Main app component
│   ├── index.tsx       # Entry point for React
│   ├── hooks           # Custom hooks (e.g., useAuth)
│   └── utils           # Utility functions (e.g., date formatting)
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.js      # Vite configuration
```

## Prerequisites

- Node.js (version >= 14.x.x)
- npm or yarn
- Firebase account for authentication and storage (or an alternative backend like MongoDB)

## Installation

- Clone the repository:

```bash
git clone https://github.com/FazeZxc/social-media-app.git
cd social-media-app
```

## Install dependencies:

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

## Set up Firebase (optional if you're using Firebase for authentication and storage):

- Go to Firebase and create a project.

- Enable Email/Password authentication and Cloud Firestore.

- Add your Firebase configuration to a .env file or inside the app:

```env
REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
```

## Run the development server:

```bash
npm run dev
```

Or using yarn:

```bash
yarn dev
```

## Build for production:

```bash
npm run build
```

Or using yarn:

```bash
yarn build
```

## Usage

- Home Page: Displays the feed of posts.
- Post: You can like, comment, and view details of individual posts.
- Profile Page: Displays user-specific information and their posts.
- Dark Mode: Toggle between light and dark themes using the ThemeProvider.

## Configuration

Make sure to update the Firebase configuration or MongoDB connection settings in the respective files.

## Scripts

- npm run dev: Runs the app in development mode.
- npm run build: Builds the app for production.
- npm run lint: Lints the project using ESLint.

## Technologies Used

- React: JavaScript library for building user interfaces
- TypeScript: Type safety and modern JavaScript features
- Vite: Fast build tool for modern web projects
- Firebase: Backend services (authentication, database, storage)
- TailwindCSS (or other CSS framework): For styling and layout
- Context API/Redux: Global state management

## Contributing

Feel free to fork the repository and make changes. If you want to contribute, open a pull request.

- Fork the project.
- Create a new branch (git checkout -b feature/my-feature).
- Commit your changes (git commit -m 'Add some feature').
- Push to the branch (git push origin feature/my-feature).
- Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact me at [iamabhinav@gmail.com].
