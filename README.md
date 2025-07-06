# React Task Manager

A modern, responsive React application showcasing component architecture, state management, hooks usage, and API integration with beautiful Tailwind CSS styling.

## 🚀 Features

### ✅ Task Management
- **CRUD Operations**: Create, read, update, and delete tasks
- **Task Filtering**: Filter tasks by status (All, Active, Completed)
- **Persistent Storage**: Tasks are saved to local storage
- **Real-time Statistics**: View task completion statistics
- **Responsive Design**: Works seamlessly on all device sizes

### 🌐 API Integration
- **Data Fetching**: Fetches posts from JSONPlaceholder API
- **Search Functionality**: Search posts by title and content
- **Pagination**: Navigate through large datasets efficiently
- **Loading States**: Smooth loading indicators
- **Error Handling**: Graceful error handling with retry functionality

### 🎨 UI/UX Features
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Mobile-first responsive design
- **Smooth Animations**: CSS transitions and custom animations
- **Modern Components**: Reusable UI components
- **Accessibility**: ARIA labels and keyboard navigation

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.jsx   # Button with variants (primary, secondary, danger)
│   │   └── Card.jsx     # Card component for content display
│   ├── layout/          # Layout components
│   │   ├── Layout.jsx   # Main layout wrapper
│   │   ├── Navbar.jsx   # Navigation bar with theme toggle
│   │   └── Footer.jsx   # Footer with links and copyright
│   └── features/        # Feature-specific components
│       ├── TaskManager.jsx  # Task management functionality
│       └── ApiData.jsx      # API data display
├── pages/               # Page components
│   ├── Home.jsx         # Landing page
│   ├── Tasks.jsx        # Tasks page
│   └── ApiDataPage.jsx  # API data page
├── contexts/            # React contexts
│   └── ThemeContext.jsx # Theme management context
├── hooks/               # Custom hooks
│   └── useLocalStorage.jsx # Local storage hook
└── utils/               # Utility functions
```

### Technologies Used
- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing for SPA navigation
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vite**: Fast build tool and development server
- **JSONPlaceholder**: Free REST API for testing and prototyping

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-task-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Usage

### Task Management
1. Navigate to the **Tasks** page
2. Use the input field to add new tasks
3. Click checkboxes to mark tasks as complete
4. Use filter buttons to view specific task categories
5. Delete tasks using the delete button
6. View task statistics at the bottom

### API Data Explorer
1. Navigate to the **API Data** page
2. Browse posts fetched from the API
3. Use the search bar to filter posts
4. Navigate through pages using pagination controls
5. Click "Refresh" to reload data

### Theme Switching
- Click the theme toggle button in the navigation bar
- Switch between light and dark modes
- Theme preference is automatically saved

## 🔧 React Concepts Demonstrated

### Hooks Usage
- **useState**: Managing component state
- **useEffect**: Side effects and lifecycle management
- **useContext**: Global state management for themes
- **Custom Hooks**: useLocalStorage for persistent data

### State Management
- Local component state with useState
- Global state with React Context
- Persistent state with localStorage
- Derived state for filtering and calculations

### Component Patterns
- **Composition**: Building complex UIs from simple components
- **Props**: Component customization and data passing
- **Children**: Flexible component layouts
- **Conditional Rendering**: Dynamic UI based on state

### API Integration
- **Async/Await**: Modern asynchronous programming
- **Error Handling**: Try-catch blocks and error states
- **Loading States**: User feedback during data fetching
- **Data Transformation**: Processing API responses

## 🎯 Best Practices Implemented

### Code Organization
- Clear folder structure and file naming
- Separation of concerns
- Reusable components
- Custom hooks for shared logic

### Performance
- React key props for efficient list rendering
- Lazy loading potential for route-based code splitting
- Optimized re-renders with proper state management

### Accessibility
- Semantic HTML elements
- ARIA labels and attributes
- Keyboard navigation support
- Color contrast in dark mode

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interface elements
- Viewport-based typography

## 🚀 Future Enhancements

- [ ] Add user authentication
- [ ] Implement task categories and tags
- [ ] Add task due dates and reminders
- [ ] Implement drag-and-drop for task reordering
- [ ] Add data export/import functionality
- [ ] Implement offline support with service workers
- [ ] Add unit and integration tests
- [ ] Implement real-time synchronization

## 📄 License

This project is built for educational purposes to demonstrate modern React development practices.

---

Built with ❤️ using React, Tailwind CSS, and modern web technologies.
