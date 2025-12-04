import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div
      className="auth-layout"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 0,
      }}
    >
      {/* Sol taraf - Marka alanı */}
      <div
        style={{
          background: `linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-light) 100%)`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
          color: 'white',
        }}
      >
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>🧭</div>
        <h1
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          Gezenti
        </h1>
        <p
          style={{
            fontSize: '20px',
            textAlign: 'center',
            opacity: 0.9,
            maxWidth: '400px',
          }}
        >
          Gezinmeyi kolaylaştıran, yolculuğunuzu keyifli kılan platform
        </p>
      </div>

      {/* Sağ taraf - Form alanı */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '40px',
          backgroundColor: '#f9f7f4',
        }}
      >
        <div
          style={{
            background: 'white',
            padding: '32px',
            borderRadius: '12px',
            boxShadow: 'var(--shadow)',
            width: '100%',
            maxWidth: '400px',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: '32px',
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '8px' }}>🧭</div>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: 'var(--primary-dark)',
              }}
            >
              Gezenti
            </h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

