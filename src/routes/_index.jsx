import { Form, Link } from '@remix-run/react';
import { authenticator } from '../secure/authentication.server';
import { json } from '@remix-run/node';
import Nav from '../components/Nav';

export const meta = () => {
  return [{ title: 'Fazer login - Pass' }, { name: 'description', content: 'Entrar no Pass!' }];
};

export async function loader({ request }) {
  let usuario = await authenticator.isAuthenticated(request, {
    failureRedirect: '/entrar',
  });

  return json({ usuario });
}

export default function Index() {
  return (
    <div className='container'>
      <Nav />
      <h1>Bem-vindo ao Pass!</h1>
      <p>Aqui você pode fazer reservas e acessar a piscina do condomínio</p>

      <section id='salao'>
        <h2>Reserva do Salão</h2>
        <p>Faça sua reserva para usar o salão de festas.</p>
      </section>

      <section id='churrasqueira'>
        <h2>Reserva do Quiosque da churrasqueira</h2>
        <p>Reserve a churrasqueira é divirta-se com família e amigos</p>
      </section>

      <section id='academia'>
        <h2>Reserva do Espaço Gourmet</h2>
        <p>Reserve o espaço gourmet e confraternize em família.</p>
      </section>

      <section id='piscina'>
        <h2>Acesso da Piscina</h2>
        <p>Divirta-se na piscina.</p>
      </section>
    </div>
  );
}
