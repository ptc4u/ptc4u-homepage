import { useState } from 'react';
import { createMailtoLink, openMailtoWithFallback } from '../components/FormUtils';

export default function TestForms() {
  const [testResult, setTestResult] = useState('');

  const testFormSubmission = () => {
    try {
      console.log('Testing form submission...');
      
      const testData = {
        fullName: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message'
      };
      
      const emailContent = `
Test Form Submission

Name: ${testData.fullName}
Email: ${testData.email}
Message: ${testData.message}

---
This is a test submission.
      `;
      
      const subject = 'Test Form - ' + testData.fullName;
      const mailtoLink = createMailtoLink('ask@ptc4u.com', subject, emailContent);
      
      console.log('Mailto link created:', mailtoLink);
      
      // Test the fallback function
      openMailtoWithFallback(mailtoLink, emailContent);
      
      setTestResult('✅ Form submission test completed successfully!');
      console.log('Form submission test completed successfully');
      
    } catch (error) {
      console.error('Form submission test failed:', error);
      setTestResult('❌ Form submission test failed: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Form Functionality Test</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={testFormSubmission}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Test Form Submission
        </button>
      </div>
      
      {testResult && (
        <div style={{
          padding: '10px',
          backgroundColor: testResult.includes('✅') ? '#d1fae5' : '#fee2e2',
          border: `1px solid ${testResult.includes('✅') ? '#10b981' : '#ef4444'}`,
          borderRadius: '5px',
          marginTop: '10px'
        }}>
          {testResult}
        </div>
      )}
      
      <div style={{ marginTop: '20px' }}>
        <h2>Instructions:</h2>
        <ol>
          <li>Click the "Test Form Submission" button above</li>
          <li>Check if an email client opens or a fallback dialog appears</li>
          <li>If you see a fallback dialog, try the "Copy to Clipboard" and "Send via WhatsApp" buttons</li>
          <li>Check the browser console for any error messages</li>
        </ol>
      </div>
    </div>
  );
}
