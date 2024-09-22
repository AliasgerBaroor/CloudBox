import { useEffect } from "react";

const usePopover = () => {
  useEffect(() => {
    const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-toggle="popover"]')
    );
    
    popoverTriggerList.forEach(function (popoverTriggerEl) {
      new window.bootstrap.Popover(popoverTriggerEl); // Initialize the Bootstrap popover
    });
  }, []);
};

export default usePopover;
