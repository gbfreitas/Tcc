import { Form, useActionData, useLoaderData } from '@remix-run/react';
import Nav from '../components/Nav';
import { authenticator } from '../secure/authentication.server';
import { json, redirect } from '@remix-run/node';
import { todosAmbientes, verificarDisponibilidadeAmbiente } from '../services/ambienteService.server';
import { excluirReserva, novaReserva, todasReservas } from '../services/reservaService.server';

export const meta = () => {
  return [{ title: 'Reservar ambiente - Pass' }, { name: 'description', content: 'Pass!' }];
};

// Ação do formulário de nova reserva
export async function action({ request }) {
  let form = await request.formData();

  let _action = form.get('_action');

  if (_action === 'nova_reserva') {
    let id_espaco = form.get('id_espaco');
    let id_morador = form.get('id_morador');
    let data = new Date(form.get('data'));

    let existeReserva = await verificarDisponibilidadeAmbiente(id_espaco, data);

    if (existeReserva) {
      return json({ mensagem: 'A data selecionada não está disponível para reserva.' });
    }

    await novaReserva({ id_espaco, id_morador, data });

    return redirect('/reservas');
  }

  if(_action === 'cancelar_reserva') {
    let id_reserva = form.get('id_reserva');

    await excluirReserva(id_reserva)
  
    return redirect('/reservas');
  }

}

export async function loader({ request }) {
  let usuario = await authenticator.isAuthenticated(request, {
    failureRedirect: '/entrar',
  });

  let ambientes = await todosAmbientes(true);
  let reservas = await todasReservas(usuario.id);

  return json({ usuario, ambientes, reservas });
}

export default function Reservas() {
  let data = useActionData();
  let { usuario, ambientes, reservas } = useLoaderData();

  return (
    <div className='container'>
      <Nav />
      <h1>Reservar ambiente</h1>
      <Form method='post' action='?index'>
        <h2>Dados morador</h2>
        <label>Nome do Usuário:</label>
        <strong>{usuario.nome}</strong>
        <input type='hidden' name='id_morador' value={usuario.id} />
        <br />

        <label>Número do Apartamento:</label>
        <strong>{usuario.apartamento}</strong>
        <br />

        <label>Bloco:</label>
        <strong>{usuario.bloco}</strong>
        <br />

        <h2>Ambiente</h2>
        <label htmlFor='id_espaco'>Ambiente:</label>
        <br />
        <br />
        <select name='id_espaco' id='id_espaco'>
          {ambientes.map((ambiente) => (
            <option key={ambiente.id} value={ambiente.id}>
              {ambiente.nome}
            </option>
          ))}
        </select>
        <br />
        <br />

        <label htmlFor='data_reserva'>Data da Reserva:</label>
        <br />
        <br />
        <input type='date' id='data_reserva' name='data' required />
        <br />
        <br />
        <input type='hidden' name='_action' value='nova_reserva' />
        <input type='submit' value='Reservar' />
        {data?.mensagem && <p className='mensagem-erro'>{data.mensagem}</p>}
      </Form>
      <h2>Reservas Atuais:</h2>
      <table>
        <thead>
          <tr>
            <th>Ambiente</th>
            <th>Usuário</th>
            <th>Apartamento</th>
            <th>Bloco</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {reservas.length == 0 && (
            <tr>
              <td colSpan={5}>Nenhuma reserva encontrada.</td>
            </tr>
          )}
          {reservas.map((reserva) => (
            <tr key={reserva.id}>
              <td>{reserva.Ambiente.nome}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.apartamento}</td>
              <td>{usuario.bloco}</td>
              <td>{reserva.data}</td>
              <td>
                <Form method='post'>
                  <input type='hidden' name='_action' value='cancelar_reserva' />
                  <input type='hidden' name='id_reserva' value={reserva.id} />
                  <button>Cancelar</button>
                </Form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
