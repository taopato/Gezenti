import React from 'react';

const DiscoverPage: React.FC = () => {
  return (
    <>
      <div className="search-section">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="🔍 Mekan, kullanıcı veya hashtag ara..."
          />
          <button className="search-button">Ara</button>
        </div>
      </div>

      <div className="tabs-container">
        <button className="tab active">Senin İçin</button>
        <button className="tab">En İyiler</button>
        <button className="tab">Beni İzleyenler</button>
      </div>

      <div className="feed-container">
        <div className="posts-section">
          <div className="post-item">
            <div className="post-header">
              <div className="post-user">
                <div className="post-avatar">GR</div>
                <div className="post-user-info">
                  <div className="post-username">gezin_ruh</div>
                  <div className="post-time">27 gündür beğenildi</div>
                </div>
              </div>
            </div>

            <div className="post-body">
              <div className="post-card-tape" />
              <div className="post-content-inner">
                <div
                  className="post-image"
                  style={{
                    background:
                      'linear-gradient(135deg, #ffa500 0%, #ff8c00 100%)',
                  }}
                />
                <div className="post-text">
                  <div className="post-title">Kappadokya Balon Turu</div>
                  <div className="post-location">📍 Cappadocia</div>
                  <div className="post-description">
                    Sabah erken saatlerde balondan Türkiye'yi izlemek harikaydı.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="sidebar">
          <div className="sidebar-title">🔥 Trend Yapanlar</div>
          <div className="trending-list">
            <div className="trending-item">
              <div className="trending-rank">#1</div>
              <div className="trending-name">Pamukkale Travertenleri</div>
              <div className="trending-count">
                4.8k gönderi • 24.5k beğeni
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default DiscoverPage;
