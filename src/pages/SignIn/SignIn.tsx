import React, { FC } from 'react';
import { FiLock, FiLogIn, FiMail } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Background, Container, Content } from './SignIn.style';

const SignIn: FC<{ title?: string }> = ({ title }) => (
  <Container>
    <Content>
      <img src={logoImg} alt="logo" />

      <form action="">
        <h1>Faça seu logon</h1>

        <Input name="Email" type="email" placeholder="Email" icon={FiMail} />
        <Input
          name="Password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />
        <Button type="submit">Entrar</Button>
        <a href="http://">Esqueci minha senha</a>
      </form>
      <a href="http://">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
);

export { SignIn };
