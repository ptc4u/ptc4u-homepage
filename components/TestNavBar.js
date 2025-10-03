import React from 'react';

export default function TestNavBar() {
  console.log('TestNavBar is rendering');
  
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '80px',
      backgroundColor: 'red',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        color: 'white',
        fontSize: '24px',
        fontWeight: 'bold'
      }}>
        TEST NAVBAR - CAN YOU SEE THIS?
      </div>
    </div>
  );
}
