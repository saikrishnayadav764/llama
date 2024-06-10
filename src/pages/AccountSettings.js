import React, { useState } from "react";
import RightNav from "../components/RightNav";
import Account from "../components/Account";

function AccountSettings() {
  const [curr, setCurr] = useState(1);
  const setCurrent = (id) => {
    setCurr(id);
  };

  function displayContent() {

      return (
        
          <div className="right-part">
            <RightNav path="Account Settings"/>
            <h1 className="upload-head">Account Settings</h1>
            <Account/>
          </div>
        
      );
    }

  

  return (
    <>
      {displayContent()}
    </>
  );
}

export default AccountSettings;
