import { useCallback } from "react";

const useModal = (modalId) => {
  const showModal = useCallback(() => {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
      const modal = new window.bootstrap.Modal(modalElement);
      modal.show();
    }
  }, [modalId]);

  return { showModal };
};

export default useModal;
