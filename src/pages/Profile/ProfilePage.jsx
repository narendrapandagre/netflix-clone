import React from "react";
import "./ProfilePage.css";
import profile_img from "../../assets/profile_img.png"; // replace with actual avatar

const ProfilePage = ({ onSignOut }) => {
  const user = {
    name: "Narendra Pandagre",
    email: "narendra@example.com",
    avatar: profile_img,
  };

  const handleChangeAvatar = () => {
    alert("Change Avatar functionality coming soon!"); 
    // later you can add file upload or avatar picker here
  };

  return (
    <div className="profile-page">
      {/* Header with avatar + info */}
      <div className="profile-header">
        <div className="avatar-section">
          <img src={user.avatar} alt="Profile" className="profile-avatar" />
          <button className="btn-secondary small" onClick={handleChangeAvatar}>
            Change Avatar
          </button>
        </div>

        <div className="profile-info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      </div>

      {/* Cards grid */}
      <div className="profile-grid">
        <div className="profile-card">
          <h2>👤 Profile Settings</h2>
          <p>Update your personal information, email, and password.</p>
          <button className="btn-secondary">Edit Profile</button>
        </div>

        <div className="profile-card">
          <h2>❓ Help</h2>
          <p>Find answers to FAQs or contact our support team.</p>
          <button className="btn-secondary">Go to Help Center</button>
        </div>

        <div className="profile-card danger">
          <h2>🚪 Sign Out</h2>
          <p>Sign out of your Netflix account securely.</p>
          <button onClick={onSignOut} className="btn-danger">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
