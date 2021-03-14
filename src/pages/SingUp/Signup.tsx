import React, { FC } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Background, Container, Content } from './Signup.style';

const SignUp: FC<{ title?: string }> = ({ title }) => (
  <Container>
    <Content>
      <img src={logoImg} alt="logo" />

      <form action="">
        <h1>Faça seu cadastro</h1>

        <Input name="Name" type="text" placeholder="Nome" icon={FiUser} />
        <Input name="Email" type="email" placeholder="Email" icon={FiMail} />
        <Input
          name="Password"
          type="password"
          placeholder="Senha"
          icon={FiLock}
        />
        <Button type="submit">Cadastrar</Button>
        <Link to="/">
          <FiArrowLeft /> Voltar para login
        </Link>
      </form>
    </Content>
    <Background />
  </Container>
);

export { SignUp };
