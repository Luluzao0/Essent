import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const AuthDebug: React.FC = () => {
  const { currentUser, loading } = useAuth();

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '10px',
      borderRadius: '8px',
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <div><strong>🔍 Debug Auth:</strong></div>
      <div>Loading: {loading ? 'Sim' : 'Não'}</div>
      <div>User: {currentUser ? '✅ Logado' : '❌ Não logado'}</div>
      {currentUser && (
        <>
          <div>UID: {currentUser.uid.substring(0, 8)}...</div>
          <div>Email: {currentUser.email}</div>
          <div>Nome: {currentUser.displayName}</div>
        </>
      )}
      {!currentUser && !loading && (
        <div style={{color: '#ff6b6b'}}>
          ⚠️ Usuário não autenticado!
        </div>
      )}
    </div>
  );
};

export default AuthDebug;
