import { useState } from 'react';
import { login as loginApi } from '../api/auth.api';
import { setToken } from '../../../core/auth/tokenStorage';
import { LoginRequest } from '../types/auth.types';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const request: LoginRequest = { email, password };
      const response = await loginApi(request);

      if (!response.isSuccess) {
        const errorMessage = response.error || response.message || 'Giriş başarısız';
        setError(errorMessage);
        setLoading(false);
        return;
      }

      if (response.data?.accessToken) {
        setToken(response.data.accessToken);
        window.location.href = "/";
      } else {
        setError('Token alınamadı');
      }
    } catch (err: any) {
      if (err.code === 'ERR_NETWORK' || err.message?.includes('CORS') || err.message?.includes('Failed to fetch')) {
        setError('Backend sunucusuna bağlanılamıyor. Lütfen backend sunucusunun çalıştığından ve CORS ayarlarının yapıldığından emin olun.');
      } else if (err.response?.status === 401) {
        const errorMessage = err.response?.data?.error || err.response?.data?.message || '';
        const lowerMessage = errorMessage.toLowerCase();
        
        if (lowerMessage.includes('email') || lowerMessage.includes('kullanıcı') || lowerMessage.includes('user') || lowerMessage.includes('e-posta')) {
          setError('E-posta adresi bulunamadı. Lütfen e-posta adresinizi kontrol edin.');
        } else if (lowerMessage.includes('şifre') || lowerMessage.includes('password') || lowerMessage.includes('parola')) {
          setError('Şifre hatalı. Lütfen şifrenizi kontrol edin.');
        } else {
          setError('E-posta veya şifre hatalı. Lütfen bilgilerinizi kontrol edin.');
        }
      } else if (err.response?.status === 500) {
        const errorMessage = err.response?.data?.error || err.response?.data?.message || '';
        if (errorMessage) {
          setError(`Sunucu hatası: ${errorMessage}`);
        } else {
          setError('Sunucu hatası oluştu. Lütfen daha sonra tekrar deneyin.');
        }
      } else if (err.response?.status === 400) {
        const errorMessage = err.response?.data?.error || err.response?.data?.message || '';
        const lowerMessage = errorMessage.toLowerCase();
        
        if (lowerMessage.includes('email') || lowerMessage.includes('e-posta')) {
          setError('Geçersiz e-posta adresi. Lütfen e-posta adresinizi kontrol edin.');
        } else if (lowerMessage.includes('şifre') || lowerMessage.includes('password')) {
          setError('Geçersiz şifre. Lütfen şifrenizi kontrol edin.');
        } else {
          setError(errorMessage || 'Geçersiz bilgiler. Lütfen kontrol edin.');
        }
      } else if (err.response?.data?.error) {
        const errorMessage = err.response.data.error;
        const lowerMessage = errorMessage.toLowerCase();
        
        if (lowerMessage.includes('email') || lowerMessage.includes('kullanıcı') || lowerMessage.includes('user') || lowerMessage.includes('e-posta')) {
          setError('E-posta adresi bulunamadı. Lütfen e-posta adresinizi kontrol edin.');
        } else if (lowerMessage.includes('şifre') || lowerMessage.includes('password') || lowerMessage.includes('parola')) {
          setError('Şifre hatalı. Lütfen şifrenizi kontrol edin.');
        } else {
          setError(errorMessage);
        }
      } else if (err.response?.data?.message) {
        const errorMessage = err.response.data.message;
        const lowerMessage = errorMessage.toLowerCase();
        
        if (lowerMessage.includes('email') || lowerMessage.includes('kullanıcı') || lowerMessage.includes('user') || lowerMessage.includes('e-posta')) {
          setError('E-posta adresi bulunamadı. Lütfen e-posta adresinizi kontrol edin.');
        } else if (lowerMessage.includes('şifre') || lowerMessage.includes('password') || lowerMessage.includes('parola')) {
          setError('Şifre hatalı. Lütfen şifrenizi kontrol edin.');
        } else {
          setError(errorMessage);
        }
      } else if (err.message) {
        setError(err.message);
      } else {
        setError('Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    login,
    loading,
    error,
  };
}
