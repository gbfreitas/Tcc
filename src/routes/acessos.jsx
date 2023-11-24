import QRCode from 'qrcode';
import Nav from '../components/Nav';
import { Form, useActionData, useLoaderData } from '@remix-run/react';
import { authenticator } from '../secure/authentication.server';
import { todosAmbientes } from '../services/ambienteService.server';
import { json } from '@remix-run/node';
import { useState } from 'react';
import { enviarEmailAcesso, novoAcesso } from '../services/acessoService.server';

export const meta = () => {
  return [{ title: 'Solicitar acesso - Pass' }, { name: 'description', content: 'Pass!' }];
};

// Ação do formulário - Gera um novo acesso com QRCodigo
// Envia por e-mail para o usuário
export async function action({ request }) {
  let form = await request.formData();

  let id_espaco = form.get('id_espaco');
  let id_morador = form.get('id_morador');

  let nome_morador = form.get('nome_morador');
  let email_morador = form.get('email_morador');
  let apartamento = form.get('apartamento');
  let bloco = form.get('bloco');
  let nome_espaco = form.get('nome_espaco');

  let data_expiracao = new Date();
  data_expiracao.setHours(data_expiracao.getHours() + 8);

  let codigoAcesso = `${nome_espaco}|${nome_morador}|${apartamento}|${bloco}|${data_expiracao.toLocaleString()}`;
  let qrCodeAcesso = await QRCode.toDataURL(codigoAcesso);

  await novoAcesso({ id_espaco, id_morador, codigoAcesso, qrCodeAcesso, data_expiracao });
  await enviarEmailAcesso(nome_morador, email_morador, qrCodeAcesso, data_expiracao.toLocaleString(), nome_espaco)

  return json({ qrCodeAcesso });
}

export async function loader({ request }) {
  let usuario = await authenticator.isAuthenticated(request, {
    failureRedirect: '/entrar',
  });

  let ambientes = await todosAmbientes(false);

  return json({ usuario, ambientes });
}

export default function Acessos() {
  let data = useActionData();
  let { usuario, ambientes } = useLoaderData();
  let [nomeEspaco, setNomeEspaco] = useState('');

  function setarNomeEspaco(event) {
    let { nome } = ambientes.find((ambiente) => ambiente.id == event.target.value);
    setNomeEspaco(nome);
  }

  return (
    <div className='container'>
      <Nav />
      <h1>Solicitar acesso</h1>
      <Form method='post'>
        <h2>Dados morador</h2>
        <label>Nome do Usuário:</label>
        <strong>{usuario.nome}</strong>
        <input type='hidden' name='nome_morador' value={usuario.nome} />
        <input type='hidden' name='id_morador' value={usuario.id} />
        <input type='hidden' name='email_morador' value={usuario.email} />
        <br />

        <label>Número do Apartamento:</label>
        <strong>{usuario.apartamento}</strong>
        <input type='hidden' name='apartamento' value={usuario.apartamento} />
        <br />

        <label>Bloco:</label>
        <strong>{usuario.bloco}</strong>
        <input type='hidden' name='bloco' value={usuario.bloco} />
        <br />

        <h2>Ambiente</h2>
        <label htmlFor='id_espaco'>Ambiente:</label>
        <br />
        <br />
        <select name='id_espaco' id='id_espaco' onChange={setarNomeEspaco} >
          <option value={0}>Selecionar ambiente</option>
          {ambientes.map((ambiente) => (
            <option key={ambiente.id} value={ambiente.id}>
              {ambiente.nome}
            </option>
          ))}
        </select>
        <input type='hidden' name='nome_espaco' value={nomeEspaco} />
        <input type='hidden' name='bloco' value={usuario.bloco} />
        <br />
        <br />

        <input type='submit' value='Gerar acesso' />
      </Form>

      {data?.qrCodeAcesso && (
        <div id='qrcode'>
          <h5>
            Código enviado para o e-mail <strong>{usuario.email}</strong>
          </h5>

          <img src={data?.qrCodeAcesso} alt='Seu código de acesso' />
        </div>
      )}
    </div>
  );
}
