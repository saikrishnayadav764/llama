import React, {useState} from 'react';
import '../styles/AccountSettings.css';

const Account = () => {
    const [name, setName] = useState("alphauser")
  return (
    <div className="account-settings">
      <div className="profile-section">
        <img src="./profile.png" alt="Profile" className="profile-picture" />
        <div className="user-details">
          <div className="input-group">
            <label>User Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" value="alphauser@gmail.com" readOnly />
          </div>
        </div>
      </div>
      <h2 className='subscriptions'>Subscriptions</h2>
      <div className="subscription-section">
        <div className="subscription-info">
          You are currently on the <span className="subscription-plan">Ques AI Basic Plan!</span>
        </div>
        <button className="upgrade-button">Upgrade</button>
      </div>
      <div className='cancel-subscription-wrapper'>
      <button className="cancel-subscription">Cancel Subscription</button>
      </div>
      
    </div>
  );
};

export default Account;
