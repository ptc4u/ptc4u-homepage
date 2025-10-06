import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import MobileWrapper from '../components/MobileWrapper';
import MobileAdminPage from '../components/MobileAdminPage';
import MobilePreviewToggle from '../components/MobilePreviewToggle';
import useDeviceDetection from '../components/useDeviceDetection';
import PreviewButtons from '../components/PreviewButtons';
import ContentManagement from '../components/ContentManagement';
import UIManagement from '../components/UIManagement';

/**
 * Admin access page for Pinnacle Thrive Coaching.
 * 
 * This page provides quick access to admin functions.
 * Bookmark this page for easy access to content management.
 */
export default function AdminPage() {
  const { isMobile, isLoading } = useDeviceDetection();
  const [currentDevice, setCurrentDevice] = useState('laptop');
  const [adminView, setAdminView] = useState('main'); // 'main', 'content', 'ui'

  // Show loading state during device detection
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Render mobile version if on mobile device
  if (isMobile) {
    return (
      <>
        <Head>
          <title>Admin Access - Pinnacle Thrive Coaching</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <MobileWrapper>
          <MobileAdminPage />
        </MobileWrapper>
      </>
    );
  }

  // Render desktop version with mobile preview toggle
  return (
    <>
      <Head>
        <title>Admin Access - Pinnacle Thrive Coaching</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <PreviewButtons onPreviewChange={setCurrentDevice} currentDevice={currentDevice} />
      <MobilePreviewToggle>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          {adminView === 'main' && (
            <div className="max-w-2xl w-full space-y-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Admin Dashboard</h2>
                <p className="text-gray-600 mb-8">Pinnacle Thrive Coaching Management System</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                  onClick={() => setAdminView('content')}
                  className="w-full flex flex-col items-center justify-center px-6 py-8 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">Content Management</h3>
                  <p className="text-sm text-blue-100 text-center">Manage LinkedIn content, approve articles, and push to Knowledge Base</p>
                </button>

                <button
                  onClick={() => setAdminView('ui')}
                  className="w-full flex flex-col items-center justify-center px-6 py-8 border border-transparent text-base font-medium rounded-xl text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2">UI Management</h3>
                  <p className="text-sm text-purple-100 text-center">Preview and approve website layouts for different devices</p>
                </button>
              </div>

              <div className="text-center">
                <button
                  onClick={() => {
                    sessionStorage.removeItem('ptc_admin_authenticated');
                    localStorage.removeItem('ptc_site_authenticated');
                    localStorage.removeItem('ptc_auth_timestamp');
                    window.location.href = '/';
                  }}
                  className="w-full flex items-center justify-center px-4 py-3 border border-red-300 text-base font-medium rounded-lg text-red-700 bg-red-50 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Exit Admin
                </button>
              </div>
            </div>
          )}

          {adminView === 'content' && (
            <ContentManagement onReturn={() => setAdminView('main')} />
          )}

          {adminView === 'ui' && (
            <UIManagement onReturn={() => setAdminView('main')} />
          )}
        </div>
      </MobilePreviewToggle>
    </>
  );
}

