import React from 'react';

const ProfilePage: React.FC = () => {
  return (
    <>
      <div className="profile-banner">
        <div className="profile-header">
          <div className="profile-avatar">👨</div>
          <h1 className="profile-name">Tarık Çetintürk</h1>
          <p className="profile-username">@tarikcetinturk</p>
          <p className="profile-bio">
            Doğa tutkunuyum, yolculuk severim ve her yeni yeri keşfetmek benim
            için bir heyecan. Bu projeyi de iyi ki kullanıyorum :)
          </p>
        </div>
      </div>

      <div className="profile-tabs">
        <button className="tab-btn active">Paylaşımlar</button>
        <button className="tab-btn">Kaydedilenler</button>
        <button className="tab-btn">Rehberler</button>
      </div>

      <div className="family-section">
        <div className="section-title">👨‍👩‍👧‍👦 Aile Üyeleri</div>
        <div className="family-grid">
          <div className="family-member">
            <div className="family-avatar">👨</div>
            <div className="family-name">Talha Çetintürk</div>
            <div className="family-relation">Abi</div>
          </div>
          <div className="family-member">
            <div className="family-avatar">➕</div>
            <div className="family-name">Üye Ekle</div>
            <div className="family-relation">Tıkla</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
