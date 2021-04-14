import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { FC } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useAuth } from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';
import { Background, Container, Content } from './SignIn.style';

interface User {
  email: string;
  password: string;
}

const SignIn: FC = () => {
  const formRef = React.useRef<FormHandles>(null);

  const { signIn, signOut } = useAuth();

  const handleSubmit = React.useCallback(
    async (data: User) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (err) {
        console.log(err);

        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    },
    [signIn],
  );
  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" type="text" placeholder="Email" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>
          <Link type="button" to="/forgot">
            Esqueci minha senha
          </Link>
        </Form>
        <Link type="button" to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
    </Container>
  );
};

export { SignIn };
