# Gezi Yolu 

## 📁 Klasör Yapısı (Basit ve Anlaşılır)

```
src/
├── components/     → Tekrar kullanılan parçalar (Header gibi)
├── layout/         → Sayfa şablonları (her sayfada aynı header)
├── pages/          → Ana sayfalar (Ana Sayfa, Keşfet, Profil)
├── styles/         → CSS dosyaları
└── App.tsx         → Router (hangi sayfa nerede gösterilecek)
```

## 🎯 Nasıl Çalışır?

1. **main.tsx** → Uygulamayı başlatır
2. **App.tsx** → Router (hangi URL'de hangi sayfa)
3. **MainLayout** → Header'ı tüm sayfalara ekler
4. **Pages/** → Her sayfa kendi içeriğini gösterir

## 📝 Önemli Noktalar

- **Basit kod**: Karmaşık pattern'ler yok
- **HTML korundu**: Sadece `class` → `className` değişti
- **CSS ayrı**: Tüm stiller `gezi-theme.css` dosyasında
- **Anlaşılır**: Her dosya tek bir şey yapıyor

## 🔧 Düzenlemek İçin

- Sayfa eklemek → `pages/` klasörüne yeni dosya
- Stil değiştirmek → `styles/gezi-theme.css`
- Header değiştirmek → `components/MainHeader.tsx`

