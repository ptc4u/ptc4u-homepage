import React from 'react';

export default function SimpleNavBar() {
  console.log('SimpleNavBar is rendering');
  
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '120px',
      backgroundColor: 'white',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderBottom: '1px solid #e5e7eb'
    }}>
      {/* Left Navigation - Restored from ptc4u.com */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div 
          style={{
            color: 'black',
            fontSize: '14px',
            fontWeight: '600',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
            e.target.style.color = '#7c3aed';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'black';
          }}
        >
          Your Coach
        </div>
        <div 
          style={{
            color: 'black',
            fontSize: '14px',
            fontWeight: '600',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
            e.target.style.color = '#7c3aed';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'black';
          }}
        >
          Client Says
        </div>
        <div 
          style={{
            color: 'black',
            fontSize: '14px',
            fontWeight: '600',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
            e.target.style.color = '#7c3aed';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'black';
          }}
        >
          Articles & Insights
        </div>
        <div 
          style={{
            color: 'black',
            fontSize: '14px',
            fontWeight: '600',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
            e.target.style.color = '#7c3aed';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'black';
          }}
        >
          PTC's 3R Pillars
        </div>
      </div>

      {/* Center Logo - Perfectly Centered Company Branding */}
      <div style={{ 
        position: 'absolute', 
        left: '50%', 
        top: '50%', 
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(8px)',
        padding: '16px 32px',
        borderRadius: '16px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(229, 231, 235, 0.3)',
        zIndex: 10
      }}>
        <img
          src="/rndPTClogo.png"
          alt="PTC Logo"
          style={{ 
            height: '80px', 
            width: 'auto', 
            objectFit: 'contain', 
            borderRadius: '8px' 
          }}
        />
        <div style={{ 
          textAlign: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center',
          gap: '2px'
        }}>
          <div style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: '#4c1d95',
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1.1'
          }}>
            Pinnacle
          </div>
          <div style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: 'black',
            lineHeight: '1.1'
          }}>
            Thrive Coaching
          </div>
          <div style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            color: '#1e40af',
            lineHeight: '1.2',
            marginTop: '4px'
          }}>
            Reflect. Reboot. Reinvent
          </div>
        </div>
      </div>

      {/* Right Navigation - Restored from ptc4u.com */}
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <div 
          style={{
            color: 'black',
            fontSize: '14px',
            fontWeight: '600',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
            e.target.style.color = '#7c3aed';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'black';
          }}
        >
          Careers
        </div>
        <div 
          style={{
            color: 'black',
            fontSize: '14px',
            fontWeight: '600',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#f3f4f6';
            e.target.style.color = '#7c3aed';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'black';
          }}
        >
          Contact PTC
        </div>
        <div 
          style={{
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            padding: '8px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            backgroundColor: '#3b82f6',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#2563eb';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#3b82f6';
          }}
        >
          Start Your Journey
        </div>

        {/* Social Media Icons */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginLeft: '16px' }}>
          <a
            href="https://www.linkedin.com/in/sairam-bollapragada/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '24px',
              height: '24px',
              backgroundColor: 'white',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f0f9ff';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <svg style={{ width: '12px', height: '12px', color: '#2563eb' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://itservicesdelivery.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '24px',
              height: '24px',
              backgroundColor: 'white',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#f0f9ff';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <img
              src="/images/wp.png"
              alt="WordPress"
              style={{ width: '12px', height: '12px', objectFit: 'contain' }}
            />
          </a>
          <a
            href="https://instagram.com/ask.ptc4u"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '24px',
              height: '24px',
              backgroundColor: 'white',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#fdf2f8';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.transform = 'scale(1)';
            }}
          >
            <svg style={{ width: '12px', height: '12px' }} fill="url(#instagram-gradient)" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#833AB4" />
                  <stop offset="50%" stopColor="#E1306C" />
                  <stop offset="100%" stopColor="#F77737" />
                </linearGradient>
              </defs>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="/admin"
            style={{
              width: '24px',
              height: '24px',
              backgroundColor: 'white',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              border: '1px solid #e5e7eb',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#faf5ff';
              e.target.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.transform = 'scale(1)';
            }}
            title="Admin Access - Content Approval"
          >
            <svg style={{ width: '12px', height: '12px', color: '#7c3aed' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}
