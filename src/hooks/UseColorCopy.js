import { useState, useRef } from 'react';

const useColorCopy = () => {
  const [copiedColor, setCopiedColor] = useState(null);
  const [toastVisible, setToastVisible] = useState(false);
  const toastTimeoutRef = useRef(null);

  const handleColorCopy = (color) => {
    setCopiedColor(color);

    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }

    // Copy the color to the clipboard
    navigator.clipboard
      .writeText(color)
      .then(() => {
        // Show the toast
        setToastVisible(true);

        // Hide the toast after 3 seconds
        toastTimeoutRef.current = setTimeout(() => {
          setToastVisible(false);
        }, 4000);
      })
      .catch((err) => {
        console.error('Failed to copy color: ', err);
      });
  };

  return {
    copiedColor,
    toastVisible,
    handleColorCopy,
  };
};

export default useColorCopy;
