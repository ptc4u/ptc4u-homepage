import { useRouter } from 'next/router';

/**
 * Universal Home Icon Component
 * 
 * A floating home icon that appears on all pages in the top right corner.
 * Provides consistent navigation back to the homepage across the entire site.
 */
export default function UniversalHomeIcon() {
  const router = useRouter();

  const navigateToHomepage = () => {
    try {
      router.push('/');
    } catch (error) {
      // Fallback navigation
      window.location.href = '/';
    }
  };

  return (
    <button
      onClick={navigateToHomepage}
      className="fixed top-4 right-4 z-[9999] bg-white hover:bg-purple-50 text-black hover:text-purple-600 p-3 rounded-full shadow-lg hover:shadow-xl border border-purple-200 hover:border-purple-300 transition-all duration-300 group"
      title="Go to Homepage"
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      }}
    >
      <svg 
        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
        />
      </svg>
    </button>
  );
}
