// utils.js
export const fetchInitials = (userData, setAlphabet) => {
    let name = userData.firstName;
    name = name?.split('')[0].toUpperCase();
    switch (name) {
      case 'A': setAlphabet('A'); break;
      case 'B': setAlphabet('B'); break;
      case 'C': setAlphabet('C'); break;
      case 'D': setAlphabet('D'); break;
      case 'E': setAlphabet('E'); break;
      case 'F': setAlphabet('F'); break;
      case 'G': setAlphabet('G'); break;
      case 'H': setAlphabet('H'); break;
      case 'I': setAlphabet('I'); break;
      case 'J': setAlphabet('J'); break;
      case 'K': setAlphabet('K'); break;
      case 'L': setAlphabet('L'); break;
      case 'M': setAlphabet('M'); break;
      case 'N': setAlphabet('N'); break;
      case 'O': setAlphabet('O'); break;
      case 'P': setAlphabet('P'); break;
      case 'Q': setAlphabet('Q'); break;
      case 'R': setAlphabet('R'); break;
      case 'S': setAlphabet('S'); break;
      case 'T': setAlphabet('T'); break;
      case 'U': setAlphabet('U'); break;
      case 'V': setAlphabet('V'); break;
      case 'W': setAlphabet('W'); break;
      case 'X': setAlphabet('X'); break;
      case 'Y': setAlphabet('Y'); break;
      case 'Z': setAlphabet('Z'); break;
      default: setAlphabet(''); break; // Handle case where the first character is not A-Z
    }
  };
  