# SocialCircle

A modern professional networking platform built with React and Vite, featuring job listings, company interview questions, and social networking capabilities.

## Features

### Authentication
- User registration and login
- Profile management with avatar and cover image
- Secure authentication flow

### Professional Profile
- Detailed resume builder
- Work experience management
- Education history
- Skills showcase
- Social media links (GitHub, LinkedIn)
- Additional custom links

### Job Search
- Browse job listings
- Filter jobs by location and type
- View detailed job descriptions
- Track latest job postings
- Job application tracking

### Company Interview Questions
- Browse company-specific interview questions
- Filter questions by difficulty (Easy, Medium, Hard)
- Search questions by company or content
- View question statistics (asked count, likes)
- Categorized by question type (System Design, Algorithms, etc.)

### Social Features
- Create and share posts
- Image upload support
- Like and interact with posts
- Connect with other professionals
- Profile viewing and networking

### UI/UX
- Modern, responsive design
- Dark mode support
- Mobile-friendly interface
- Real-time search functionality
- Smooth navigation

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Form Handling**: React Hook Form
- **UI Components**: Custom components with Radix UI
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/socialcircle.git
cd socialcircle
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
├── app/          # Redux store and slices
├── assets/       # Static assets
├── components/   # Reusable UI components
├── constants/    # Application constants
├── lib/          # Utility functions
├── pages/        # Page components
└── main.jsx      # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
