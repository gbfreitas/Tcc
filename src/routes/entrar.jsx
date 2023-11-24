import { Form, Link, useSearchParams } from '@remix-run/react';
import { authenticator } from '../secure/authentication.server';

export const meta = () => {
  return [{ title: 'Fazer login - Pass' }, { name: 'description', content: 'Entrar no Pass!' }];
};

// Ação do formulário quando usuário clica no submit entrar
// Utiliza o autenticador do remix-auth com a estratégia "form"
export async function action({ request }) {
  await authenticator.authenticate('form', request, {
    successRedirect: '/',
    failureRedirect: '/entrar?fail=true',
  });
}

// Loader executado no lado do servidor
// Verifica se usuário está autenticado, caso sim, redireciona para home "/"
export async function loader({ request }) {
  await authenticator.isAuthenticated(request, {
    successRedirect: '/',
  });

  return {}
}

export default function Index() {
  const [searchParams] = useSearchParams();
  const erroLogin = Boolean(searchParams.get('fail'));

  return (
    <div className='container-login'>
      <h2>Login</h2>
      
      {erroLogin && <p>Erro ao fazer login. <br/>Verifique suas credenciais.</p>}

      <Form method='post' action='?index'>
        <label htmlFor='email'>E-mail:</label>
        <input type='email' id='email' name='email' required />
        <br />

        <label htmlFor='password'>Senha:</label>
        <input type='password' id='password' name='password' required />
        <br />

        <input type='submit' value='Entrar' />
      </Form>

      <Link to='#'>Esqueci a Senha</Link>
    </div>
  );
}
