import React from 'react';

const ImmersiveMeditation: React.FC = () => {
  return (
    <div style={{ background: '#f0f9ff', borderRadius: 12, padding: 24, maxWidth: 500, margin: '0 auto' }}>
      <h3 style={{ marginBottom: 12 }}>Meditação Imersiva (VR/AR)</h3>
      <p style={{ marginBottom: 16 }}>
        Experimente um ambiente relaxante com sons e imagens tranquilas. (Protótipo: VR/AR em breve)
      </p>
      <div style={{
        width: '100%',
        height: 220,
        background: 'linear-gradient(135deg, #a7f3d0 0%, #38bdf8 100%)',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#2563eb',
        fontSize: 24,
        fontWeight: 600,
        boxShadow: '0 2px 16px #38bdf855'
      }}>
        🌄 Ambiente Virtual Relaxante
      </div>
      <p style={{ marginTop: 16, color: '#64748b', fontSize: 14 }}>
        (No futuro: integração com câmera e visualização 3D/AR para exercícios de respiração)
      </p>
    </div>
  );
};

export default ImmersiveMeditation;
