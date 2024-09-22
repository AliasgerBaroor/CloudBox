import { useState } from 'react';

const useSaveColor = () => {
  const [isLoginPopup, setIsLoginPopup] = useState(false);

  const handleSaveColor = () => {
    let token = localStorage.getItem('fake_api_id');
    if (!token) {
      setIsLoginPopup(true); // Show login popup if no token is found
    } else {
      // Logic for saving the color when token exists
      console.log('Color saved!'); 
    }
  };

  return {
    isLoginPopup,
    handleSaveColor,
    setIsLoginPopup,
  };
};

export default useSaveColor;
