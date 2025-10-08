import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { CollectionPage } from './pages/CollectionPage';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'collection'>('home');

  const navigateToCollection = () => setCurrentPage('collection');
  const navigateToHome = () => setCurrentPage('home');

  return (
    <div className="min-h-screen">
      <Header
        onNavigateHome={navigateToHome}
        showNavigation={currentPage === 'collection'}
      />

      {currentPage === 'home' ? (
        <HomePage onExplore={navigateToCollection} />
      ) : (
        <CollectionPage onNavigateHome={navigateToHome} />
      )}
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
