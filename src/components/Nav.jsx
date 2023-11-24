import { Link } from '@remix-run/react';
import { authenticator } from '../secure/authentication.server';

export default function Nav() {
  return (
    <nav>
      <Link to='/reservas'>Reservar ambiente</Link>
      <Link to='/acessos'>Solicitar acesso</Link>
      <Link to='/sair'>Sair</Link>
    </nav>
  );
}
