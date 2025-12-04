import React, { useState, FormEvent } from 'react';
import { useLogin } from '../hooks/useLogin';
import { Button } from '../../../shared/components/ui/Button';
import { TextInput } from '../../../shared/components/ui/TextInput';

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loading, error } = useLogin();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="alert-error">
          {error}
        </div>
      )}

      <TextInput
        label="E-posta"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="ornek@email.com"
        required
        disabled={loading}
      />

      <TextInput
        label="Şifre"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="••••••••"
        required
        disabled={loading}
      />

      <Button
        type="submit"
        variant="primary"
        fullWidth
        disabled={loading}
        style={{ marginTop: '8px', marginBottom: '16px' }}
      >
        {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
      </Button>

      <div
        style={{
          textAlign: 'center',
          fontSize: '14px',
          color: 'var(--text-light)',
        }}
      >
        Hesabın yok mu?{' '}
        <a
          href="#"
          style={{
            color: 'var(--accent-orange)',
            textDecoration: 'none',
            fontWeight: '500',
          }}
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Kayıt ol
        </a>
      </div>
    </form>
  );
};

