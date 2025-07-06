import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, organize, and track your tasks with an intuitive interface. Mark tasks as complete and filter by status.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      link: '/tasks'
    },
    {
      title: 'API Integration',
      description: 'Explore data fetched from external APIs with search functionality, pagination, and error handling.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      link: '/api-data'
    },
    {
      title: 'Dark Mode',
      description: 'Switch between light and dark themes with a single click. Your preference is saved automatically.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      ),
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Welcome to TaskManager
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto animate-fadeIn">
            A modern, responsive React application showcasing component architecture, 
            state management, and API integration with beautiful Tailwind CSS styling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
            <Link to="/tasks">
              <Button size="large" className="bg-white text-blue-600 hover:bg-gray-100">
                Get Started with Tasks
              </Button>
            </Link>
            <Link to="/api-data">
              <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-blue-600">
                Explore API Data
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Built with modern React patterns and best practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {feature.description}
                </p>
                {feature.link && (
                  <Link to={feature.link}>
                    <Button variant="outline" size="small">
                      Learn More
                    </Button>
                  </Link>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Built With Modern Technologies
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Showcasing the power of React ecosystem
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'React 18', description: 'Modern React with hooks' },
              { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
              { name: 'React Router', description: 'Client-side routing' },
              { name: 'Vite', description: 'Fast build tool' }
            ].map((tech, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-white dark:bg-gray-900 shadow-sm animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Explore the application features and see React best practices in action.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tasks">
              <Button size="large" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Managing Tasks
              </Button>
            </Link>
            <Link to="/api-data">
              <Button variant="outline" size="large" className="border-white text-white hover:bg-white hover:text-blue-600">
                View API Data
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
