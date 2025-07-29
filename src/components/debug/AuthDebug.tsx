import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const AuthDebug: React.FC = () => {
  const { currentUser, loading } = useAuth();

  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      right: '20px',
      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      color: '#ffffff',
      padding: '16px',
      borderRadius: '12px',
      fontSize: '13px',
      zIndex: 9999,
      maxWidth: '320px',
      border: '2px solid #3b82f6',
      boxShadow: '0 8px 32px rgba(37, 99, 235, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backdropFilter: 'blur(10px)'
    }}>
      <div style={{
        marginBottom: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#fbbf24'
      }}>
        🔍 Debug Environment
      </div>
      
      <div style={{marginBottom: '6px'}}>
        <span style={{color: '#94a3b8'}}>Status:</span> {loading ? '⏳ Carregando...' : '✅ Pronto'}
      </div>
      
      <div style={{marginBottom: '6px'}}>
        <span style={{color: '#94a3b8'}}>Usuário:</span> {currentUser ? '✅ Autenticado' : '❌ Não logado'}
      </div>
      
      {currentUser && (
        <>
          <div style={{marginBottom: '4px'}}>
            <span style={{color: '#94a3b8'}}>UID:</span> 
            <span style={{color: '#10b981', fontFamily: 'monospace'}}> {currentUser.uid.substring(0, 12)}...</span>
          </div>
          <div style={{marginBottom: '4px'}}>
            <span style={{color: '#94a3b8'}}>Email:</span> 
            <span style={{color: '#60a5fa'}}> {currentUser.email}</span>
          </div>
          <div style={{marginBottom: '4px'}}>
            <span style={{color: '#94a3b8'}}>Nome:</span> 
            <span style={{color: '#f472b6'}}> {currentUser.displayName || 'Não informado'}</span>
          </div>
        </>
      )}
      
      {!currentUser && !loading && (
        <div style={{
          color: '#ef4444',
          background: 'rgba(239, 68, 68, 0.1)',
          padding: '8px',
          borderRadius: '6px',
          marginTop: '8px',
          border: '1px solid rgba(239, 68, 68, 0.3)'
        }}>
          ⚠️ Usuário não autenticado!
        </div>
      )}
      
      <div style={{
        marginTop: '12px',
        padding: '6px',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '6px',
        fontSize: '11px',
        color: '#cbd5e1'
      }}>
        Mode: Development | Build: OK
      </div>
    </div>
  );
};

export default AuthDebug;
