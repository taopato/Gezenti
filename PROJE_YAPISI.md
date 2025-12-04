# Gezi Yolu 

## Klasör Yapısı

```
src/
├── components/          # Tekrar kullanılan bileşenler (Header, Button vb.)
│   └── MainHeader.tsx
├── layout/             # Sayfa şablonları (Layout'lar)
│   └── MainLayout.tsx
├── pages/              # Sayfalar (Ana Sayfa, Keşfet, Profil)
│   ├── HomePage.tsx
│   ├── DiscoverPage.tsx
│   └── ProfilePage.tsx
├── styles/             # CSS dosyaları
│   ├── global.css
│   └── gezi-theme.css
├── features/           # Özellik bazlı klasörler (auth, vb.)
│   └── auth/
├── App.tsx             # Ana router dosyası
└── main.tsx            # Giriş noktası
```

## Nasıl Çalışır?

1. **main.tsx** → Uygulamayı başlatır, CSS'leri yükler
2. **App.tsx** → Hangi sayfanın gösterileceğini belirler (router)
3. **MainLayout.tsx** → Tüm sayfalarda görünen Header'ı ekler
4. **Pages/** → Her sayfa kendi bileşenini içerir

## Basit Açıklamalar

- **Component**: Tekrar kullanılabilen React parçacıkları (örn: Header)
- **Layout**: Sayfaların ortak yapısı (Header + içerik alanı)
- **Page**: Bir URL'de gösterilen tam sayfa (örn: Ana Sayfa)
- **Router**: Hangi URL'de hangi sayfanın gösterileceğini belirler


