import { authenticator } from '../secure/authentication.server';

export const meta = () => {
  return [{ title: 'Saindo - Pass' }, { name: 'description', content: 'Sair do Pass!' }];
};

// Loader executado no lado do servidor
// Executa a ação de logout no autenticador
export async function loader({ request }) {
  await authenticator.logout(request, { redirectTo: '/entrar' });
}

export default function Index() {
  return <h1>Saindo</h1>;
}
