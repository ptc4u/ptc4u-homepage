import { useState } from 'react';
import NavBar from '../components/NavBar';
import UniversalHomeIcon from '../components/UniversalHomeIcon';
import WorkshopRequestForm from '../components/WorkshopRequestForm';
import PartnershipRequestForm from '../components/PartnershipRequestForm';
import { createMailtoLink, openMailtoWithFallback } from '../components/FormUtils';

export default function DebugForms() {
  const [activeForm, setActiveForm] = useState(null);
  const [testResults, setTestResults] = useState([]);

  const addTestResult = (message, success = true) => {
    setTestResults(prev => [...prev, { message, success, timestamp: new Date().toLocaleTimeString() }]);
  };

  const testFormUtils = () => {
    try {
      const testData = {
        fullName: 'Test User',
        email: 'test@example.com',
        message: 'Test message'
      };
      
      const emailContent = `Test email content`;
      const subject = 'Test Subject';
      const mailtoLink = createMailtoLink('ask@ptc4u.com', subject, emailContent);
      
      addTestResult(`✅ FormUtils.createMailtoLink works: ${mailtoLink}`, true);
      
      // Test openMailtoWithFallback
      openMailtoWithFallback(mailtoLink, emailContent);
      addTestResult('✅ FormUtils.openMailtoWithFallback executed', true);
      
    } catch (error) {
      addTestResult(`❌ FormUtils test failed: ${error.message}`, false);
    }
  };

  const testFormDisplay = (formType) => {
    setActiveForm(formType);
    addTestResult(`✅ ${formType} form display triggered`, true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col">
      <UniversalHomeIcon />
      <NavBar />
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div style={{ padding: '20px', maxWidth: '800px', width: '100%' }}>
      <h1>Form Debug Page</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <h2>Test FormUtils</h2>
        <button 
          onClick={testFormUtils}
          style={{
            padding: '10px 20px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Test FormUtils
        </button>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2>Test Form Display</h2>
        <button 
          onClick={() => testFormDisplay('workshop')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginRight: '10px'
          }}
        >
          Show Workshop Form
        </button>
        <button 
          onClick={() => testFormDisplay('partnership')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#f59e0b',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Show Partnership Form
        </button>
        <button 
          onClick={() => setActiveForm(null)}
          style={{
            padding: '10px 20px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginLeft: '10px'
          }}
        >
          Hide Forms
        </button>
      </div>

      {activeForm === 'workshop' && (
        <div style={{ marginBottom: '20px' }}>
          <h2>Workshop Form</h2>
          <WorkshopRequestForm />
        </div>
      )}

      {activeForm === 'partnership' && (
        <div style={{ marginBottom: '20px' }}>
          <h2>Partnership Form</h2>
          <PartnershipRequestForm />
        </div>
      )}

      <div style={{ marginTop: '20px' }}>
        <h2>Test Results</h2>
        <div style={{ maxHeight: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
          {testResults.length === 0 ? (
            <p>No tests run yet. Click the test buttons above.</p>
          ) : (
            testResults.map((result, index) => (
              <div 
                key={index}
                style={{
                  padding: '5px',
                  marginBottom: '5px',
                  backgroundColor: result.success ? '#d1fae5' : '#fee2e2',
                  border: `1px solid ${result.success ? '#10b981' : '#ef4444'}`,
                  borderRadius: '3px'
                }}
              >
                <strong>[{result.timestamp}]</strong> {result.message}
              </div>
            ))
          )}
        </div>
      </div>
      </div>
      </main>
    </div>
  );
}
