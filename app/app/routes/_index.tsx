import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Bem vindo a Plataforma</h1>
      <ul>
        <li>
        <Link to="/usuarios">
            Adiconar usuario
          </Link>
        </li>
        <li>
          <Link to="/reservas">
          Resevar ambiente
          </Link>
        </li>
      </ul>
    </div>
  );
}

