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
      background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(147,51,234,0.05) 50%, rgba(255,255,255,0.95) 100%)',
      backdropFilter: 'blur(20px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
      borderBottom: '1px solid rgba(147,51,234,0.1)'
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
          PTC Knowledge Base
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

      {/* Center Logo - Enhanced Creative Company Branding */}
      <div style={{ 
        position: 'absolute', 
        left: '50%', 
        top: '50%', 
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(147,51,234,0.08) 50%, rgba(59,130,246,0.08) 100%)',
        backdropFilter: 'blur(20px)',
        padding: '20px 36px',
        borderRadius: '20px',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(147,51,234,0.1)',
        border: '1px solid rgba(147,51,234,0.2)',
        zIndex: 10,
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translate(-50%, -50%) scale(1.05)';
        e.target.style.boxShadow = '0 16px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(147,51,234,0.2)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translate(-50%, -50%) scale(1)';
        e.target.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(147,51,234,0.1)';
      }}>
        <div style={{ position: 'relative' }}>
          <img
            src="/rndPTClogo.png"
            alt="PTC Logo"
            style={{ 
              height: '80px', 
              width: 'auto', 
              objectFit: 'contain', 
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease'
            }}
          />
          <div style={{
            position: 'absolute',
            top: '-4px',
            right: '-4px',
            width: '12px',
            height: '12px',
            background: 'linear-gradient(45deg, #9333ea, #3b82f6)',
            borderRadius: '50%',
            animation: 'pulse 2s infinite'
          }}></div>
        </div>
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
            background: 'linear-gradient(135deg, #4c1d95, #7c3aed, #4c1d95)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1.1',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            Pinnacle
          </div>
          <div style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            color: 'black',
            lineHeight: '1.1',
            textShadow: '0 1px 2px rgba(0,0,0,0.1)'
          }}>
            Thrive Coaching
          </div>
          <div style={{ 
            fontSize: '16px', 
            fontWeight: '600', 
            background: 'linear-gradient(135deg, #1e40af, #3b82f6, #1e40af)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
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
            padding: '12px 20px',
            borderRadius: '12px',
            cursor: 'pointer',
            background: 'linear-gradient(135deg, #3b82f6, #9333ea, #3b82f6)',
            backgroundSize: '200% 200%',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
            border: '1px solid rgba(255,255,255,0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #2563eb, #7c3aed, #2563eb)';
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 6px 16px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = 'linear-gradient(135deg, #3b82f6, #9333ea, #3b82f6)';
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
          }}
        >
          <span style={{ position: 'relative', zIndex: 2 }}>Start Your Journey</span>
        </div>

        {/* Social Media Icons - Enhanced */}
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginLeft: '16px' }}>
          <a
            href="https://www.linkedin.com/in/sairam-bollapragada/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #f0f9ff, #dbeafe)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #dbeafe, #bfdbfe)';
              e.target.style.transform = 'scale(1.1) rotate(5deg)';
              e.target.style.boxShadow = '0 6px 12px rgba(37, 99, 235, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #f0f9ff, #dbeafe)';
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
          >
            <svg style={{ width: '16px', height: '16px', color: '#2563eb' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://itservicesdelivery.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #f9fafb, #f3f4f6)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              border: '1px solid rgba(107, 114, 128, 0.2)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #f3f4f6, #e5e7eb)';
              e.target.style.transform = 'scale(1.1) rotate(-5deg)';
              e.target.style.boxShadow = '0 6px 12px rgba(107, 114, 128, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #f9fafb, #f3f4f6)';
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
          >
            <img
              src="/images/wp.png"
              alt="WordPress"
              style={{ width: '16px', height: '16px', objectFit: 'contain' }}
            />
          </a>
          <a
            href="https://instagram.com/ask.ptc4u"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #fdf2f8, #fce7f3)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #fce7f3, #fbcfe8)';
              e.target.style.transform = 'scale(1.1) rotate(5deg)';
              e.target.style.boxShadow = '0 6px 12px rgba(236, 72, 153, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #fdf2f8, #fce7f3)';
              e.target.style.transform = 'scale(1) rotate(0deg)';
              e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            }}
          >
            <svg style={{ width: '16px', height: '16px' }} fill="url(#instagram-gradient)" viewBox="0 0 24 24">
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
        </div>
      </div>
    </nav>
  );
}
