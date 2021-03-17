import { Form } from '@unform/web';
import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { Background, Container, Content } from './Signup.style';

const SignUp: React.FC = () => {
  function handleSubmit(data: string): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" type="text" placeholder="Nome" icon={FiUser} />
          <Input name="email" type="email" placeholder="Email" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Cadastrar</Button>
          <Link type="button" to="/">
            <FiArrowLeft /> Voltar para login
          </Link>
        </Form>
      </Content>
      <Background />
    </Container>
  );
};

export { SignUp };
