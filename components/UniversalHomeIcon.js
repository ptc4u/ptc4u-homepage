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
      className="fixed top-4 right-4 z-[9999] bg-white hover:bg-purple-50 text-black hover:text-purple-600 px-4 py-3 rounded-full shadow-lg hover:shadow-xl border border-purple-200 hover:border-purple-300 transition-all duration-300 group flex items-center space-x-2"
      title="PTC Home"
      style={{
        backdropFilter: 'blur(10px)',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
      }}
    >
      <img 
        src="/rndPTClogo.png" 
        alt="PTC Logo" 
        className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
      />
      <span className="text-sm font-semibold hidden sm:block">PTC Home</span>
    </button>
  );
}
