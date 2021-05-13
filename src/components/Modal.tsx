import React, { useState } from 'react';

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

export const Modal = ({ show, onClose }: ModalProps) => {
  let showHideClassName = 'modal display-' + (show ? 'block' : 'none');

  const onCloseWindow = () => {
    onClose();
  };

  return (
    <div className={showHideClassName}>
      <h1>This is the modal</h1>
      <button onClick={onCloseWindow}>Close</button>
    </div>
  );
};
