import { useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';
import qs from 'qs';

import AuthLayout from '../../layouts/Auth';

import Input from '../../components/Form/Input';
import Button from '../../components/Form/Button';
import Link from '../../components/Link';
import { Row, Title, Label } from '../../components/Auth';

import EventInfoContext from '../../contexts/EventInfoContext';
import UserContext from '../../contexts/UserContext';

import useSignIn from '../../hooks/api/useSignIn';
import useGitHubSignIn from '../../hooks/api/useGitHubLogin';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loadingSignIn, signIn } = useSignIn();
  const { gitHubSignIn } = useGitHubSignIn();

  const { eventInfo } = useContext(EventInfoContext);
  const { setUserData } = useContext(UserContext);

  const navigate = useNavigate();

  async function gitLogin() {
    const { code } = qs.parse(window.location.search, { ignoreQueryPrefix: true });

    if (code) {
      try {
        const userData = await gitHubSignIn(code);
        setUserData(userData);
        console.log(userData);
        toast('Login realizado com sucesso!');
        //navigate('/dashboard');
      } catch (err) {
        console.log(err);
        toast('Não foi possível fazer o login!');
      }
    }
  }

  useEffect(() => {
    gitLogin();
  }, []);

  async function submit(event) {
    event.preventDefault();

    try {
      const userData = await signIn(email, password);
      setUserData(userData);
      toast('Login realizado com sucesso!');
      navigate('/dashboard');
    } catch (err) {
      toast('Não foi possível fazer o login!');
    }
  }

  function gitHubAuth() {
    const GITHUB_URL = 'https://github.com/login/oauth/authorize';
    const params = {
      client_id: '2d7c452bdca973d09fee',
      redirect_uri: 'http://localhost:3000/sign-in',
      scope: 'user public_repo',
      response_type: 'code',
    };
    const query = qs.stringify(params);
    window.open(`${GITHUB_URL}?${query}`, '_self');
  }

  return (
    <AuthLayout background={eventInfo.backgroundImageUrl}>
      <Row>
        <img src={eventInfo.logoImageUrl} alt="Event Logo" width="60px" />
        <Title>{eventInfo.title}</Title>
      </Row>
      <Row>
        <Label>Entrar</Label>
        <form onSubmit={submit}>
          <Input label="E-mail" type="text" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            label="Senha"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" color="primary" fullWidth disabled={loadingSignIn}>
            Entrar
          </Button>
        </form>
        <Button onClick={gitHubAuth} style={{ backgroundColor: 'black', color: 'white' }} fullWidth>
          <AiOutlineGithub size={20} style={{ marginRight: '10px' }} />
          Entrar com GitHub
        </Button>
      </Row>
      <Row>
        <Link to="/enroll">Não possui login? Inscreva-se</Link>
      </Row>
    </AuthLayout>
  );
}
