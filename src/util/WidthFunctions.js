  // Calculate the dynamic width for the columns based on the number of items

export const getDynamicWidth = (colors) => {
    const length = colors?.length;
    return `${100 / length}%`; // Distribute the width evenly
  };
  
  export const getDynamicNeutralWidth = () => {
    const length = 3;
    return `${100 / length}%`; // Distribute the width between 3 columns
  };
  
  export const getWarmCoolWidth = () => {
    const length = 6;
    return `${100 / length}%`; // Distribute the width between 3 columns
  };
  