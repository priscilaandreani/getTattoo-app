import React from 'react';
import { useTransition } from 'react-spring';
import { ToastMessageData } from '../../context/ToastContext';
import Toast from './Toast/Toast';
import { Container } from './ToastContainer.style';

interface ToastContainerProps {
  toastMessage: ToastMessageData[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ toastMessage }) => {
  const msgWithTranstions = useTransition(
    toastMessage,
    (msg: { id: string }) => msg.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 1 },
    },
  );

  return (
    <Container>
      {msgWithTranstions.map(({ item, key, props }) => (
        <Toast key={key} msg={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
