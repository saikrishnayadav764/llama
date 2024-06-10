import React,{useState} from 'react'
import UploadPopUp from './UploadPopUp';

function UploadBox({im, txt, src}) {
    const [showPopup, setShowPopup] = useState(false);


    const handleCreateButtonClick = () => {
      setShowPopup(true);
    };
  
    const handleCancelButtonClick = () => {
      setShowPopup(false);
    };
  return (
    <>
    <div onClick={handleCreateButtonClick} className="uploadBox">
      <img className='icons' src={`${im}`} alt="icon"/>
      <div className="upload-sub">
        <div>
          <p className="upload-title">Upload</p>
          <p className="upload-episodes">{txt}</p>
        </div>
      </div>
    </div>
    {showPopup && <UploadPopUp source={src}  onCancel={handleCancelButtonClick} />}
    </>
  )
}

export default UploadBox