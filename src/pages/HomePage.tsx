import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="layout-wrapper">
      <aside className="sidebar">
        <h3>Kategoriler</h3>
        <ul className="category-list">
          <li className="category-item active">
            <span className="category-icon">🌿</span>
            <span>Doğa</span>
          </li>
          <li className="category-item">
            <span className="category-icon">🏛️</span>
            <span>Tarih</span>
          </li>
          <li className="category-item">
            <span className="category-icon">⛹️</span>
            <span>Spor</span>
          </li>
          <li className="category-item">
            <span className="category-icon">🍽️</span>
            <span>Yemek</span>
          </li>
        </ul>
      </aside>

      <div className="content">
        <div className="map-section">
          <div className="map-container">
            Türkiye Haritası
            <div className="map-pin" style={{ top: '35%', left: '40%' }} />
            <div
              className="map-pin"
              style={{
                top: '45%',
                left: '60%',
                background: 'var(--accent-orange)',
              }}
            />
          </div>
        </div>

        <div className="places-section">
          <div className="places-title">🗺️ Keşfedilecek Yerler</div>
          <div className="places-grid">
            <div className="place-card">
              <div className="place-card-tape" />
              <div
                className="place-image"
                style={{
                  background:
                    'linear-gradient(135deg, #8b7355 0%, #a0826d 100%)',
                }}
              />
              <div className="place-content">
                <div className="place-name">Safranbolu Konakları</div>
                <div className="place-author">@gezi_ornek</div>
                <div className="place-description">
                  Osmanlı dönemine ait konaklar ve tarihi doku ile ünlü.
                </div>
                <div className="place-meta">
                  <span className="place-rating">⭐ 4.8/5</span>
                  <span className="place-year">27 yıldır gözlenen</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
