import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './ToastContainer.style';

const ToastContainer: React.FC = () => (
  <Container>
    <Toast type="info" hasDescripton>
      <FiAlertCircle size={20} />

      <div>
        <strong>Aconteceu um erro!</strong>
        <p>Não foi possível logar na aplicação, tente novamente.</p>
      </div>
      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>

    <Toast type="success" hasDescripton={false}>
      <FiAlertCircle size={20} />

      <div>
        <strong>Aconteceu um erro!</strong>
      </div>
      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>

    <Toast type="error" hasDescripton>
      <FiAlertCircle size={20} />

      <div>
        <strong>Aconteceu um erro!</strong>
        <p>Não foi possível logar na aplicação, tente novamente.</p>
      </div>
      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Toast>
  </Container>
);

export default ToastContainer;
