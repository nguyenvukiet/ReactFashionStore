import { useState, useEffect } from 'react';

const usePopup = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handlePopupOpen = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  useEffect(() => {
    if (popupOpen) {
      document.body.classList.add('no-scroll');
      console.log(popupOpen)
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [popupOpen]);

  return { popupOpen, handlePopupOpen, handlePopupClose };
};

export default usePopup;