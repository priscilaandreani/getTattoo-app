import React from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { ToastMessageData, useToast } from '../../../context/ToastContext';
import { ContainerToast } from './Toast.style';

interface ToastProps {
  msg: ToastMessageData;
}

const icons = {
  info: <FiInfo size={24} />,
  error: <FiAlertCircle size={24} />,
  success: <FiCheckCircle size={24} />,
};

const Toast: React.FC<ToastProps> = ({ msg }) => {
  const { removeToast } = useToast();

  React.useEffect(() => {
    const timeToRemoveToast = setTimeout(() => {
      removeToast(msg.id);
    }, 3000);

    return () => {
      clearTimeout(timeToRemoveToast);
    };
  }, [msg.id, removeToast]);

  return (
    <ContainerToast type={msg.type} hasDescripton={!!msg.description}>
      {icons[msg.type || 'info']}
      <div>
        <strong>{msg.title}</strong>
        {msg.description && <p>{msg.description}</p>}
      </div>
      <button onClick={() => removeToast(msg.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </ContainerToast>
  );
};

export default Toast;
