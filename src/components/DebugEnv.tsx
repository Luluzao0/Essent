import React from 'react';

const DebugEnv: React.FC = () => {
  const envVars = {
    'VITE_FIREBASE_API_KEY': import.meta.env.VITE_FIREBASE_API_KEY,
    'VITE_FIREBASE_AUTH_DOMAIN': import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    'VITE_FIREBASE_PROJECT_ID': import.meta.env.VITE_FIREBASE_PROJECT_ID,
    'VITE_FIREBASE_STORAGE_BUCKET': import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    'VITE_FIREBASE_MESSAGING_SENDER_ID': import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    'VITE_FIREBASE_APP_ID': import.meta.env.VITE_FIREBASE_APP_ID,
    'VITE_FIREBASE_MEASUREMENT_ID': import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
  };

  // Só mostra em desenvolvimento
  if (import.meta.env.MODE === 'production') {
    return null;
  }

  return (
    <div style={{
      position: 'fixed',
      top: '100px',
      right: '20px',
      background: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      padding: '15px',
      borderRadius: '8px',
      fontSize: '12px',
      fontFamily: 'monospace',
      zIndex: 9999,
      maxWidth: '400px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
    }}>
      <h4 style={{ margin: '0 0 10px 0', color: '#4ade80' }}>🔧 Debug Environment Variables</h4>
      {Object.entries(envVars).map(([key, value]) => (
        <div key={key} style={{ marginBottom: '5px' }}>
          <strong style={{ color: '#fbbf24' }}>{key}:</strong>{' '}
          <span style={{ color: value ? '#4ade80' : '#ef4444' }}>
            {value ? '✅ Set' : '❌ Missing'}
          </span>
          {value && (
            <div style={{ fontSize: '10px', color: '#9ca3af', marginLeft: '10px' }}>
              {String(value).substring(0, 20)}...
            </div>
          )}
        </div>
      ))}
      <div style={{ marginTop: '10px', padding: '5px', background: 'rgba(59, 130, 246, 0.2)', borderRadius: '4px' }}>
        <small>Mode: {import.meta.env.MODE}</small>
      </div>
    </div>
  );
};

export default DebugEnv;
