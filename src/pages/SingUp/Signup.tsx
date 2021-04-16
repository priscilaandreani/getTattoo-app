import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { useToast } from '../../context/ToastContext';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';
import { Background, Container, Content } from './Signup.style';

interface User {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = React.useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = React.useCallback(
    async (data: User) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string()
            .required('Nome obrigatório')
            .notOneOf(
              ['Bolsonaro'],
              'Bolsonaro não é bem-vindo na nossa plataforma.',
            ),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().min(
            6,
            'Sua senha deve conter no mínimo 6 dígitos',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          description: 'Bem vindo! Você já pode fazer seu login.',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na cadastro',
          description: 'Ocorreu um erro ao fazer cadastro. Tente novamente.',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
