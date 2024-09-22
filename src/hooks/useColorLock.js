import { useState } from 'react';

const useColorLock = (initialState = [false, false, false, false, false, false]) => {
  const [lockPalette, setLockPalette] = useState(initialState);

  const handleColorLock = (index, state) => {
    setLockPalette((prevLockPalette) => {
      const updatedLockPalette = [...prevLockPalette];

      if (state === 'lock') {
        updatedLockPalette[index] = true; // Lock the color at the specified index
      } else if (state === 'unlock') {
        updatedLockPalette[index] = false; // Unlock the color at the specified index
      } else {
        return [false, false, false, false, false, false]; // Reset all locks
      }

      return updatedLockPalette;
    });
  };

  return {
    lockPalette,
    handleColorLock,
  };
};

export default useColorLock;
