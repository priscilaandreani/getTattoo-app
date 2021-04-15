import React from 'react';
import { ToastMessageData } from '../../context/ToastContext';
import Toast from './Toast/Toast';
import { Container } from './ToastContainer.style';

interface ToastContainerProps {
  toastMessage: ToastMessageData[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toastMessage }) => {
  return (
    <Container>
      {toastMessage.map(msg => (
        <Toast key={msg.id} msg={msg} />
      ))}
    </Container>
  );
};

export default ToastContainer;
