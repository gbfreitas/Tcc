import { prisma } from '../secure/db.server';
import { mailClient } from '../secure/mailer.server';
import Handlebars from 'handlebars';

// Salva um novo acesso
export async function novoAcesso(acesso) {
  return await prisma.acesso.create({
    data: {
      id_espaco: parseInt(acesso.id_espaco),
      id_morador: parseInt(acesso.id_morador),
      codigo_acesso: acesso.codigoAcesso,
      qrcode_acesso: acesso.qrCodeAcesso,
      data_expiracao: acesso.data_expiracao,
    },
  });
}

export async function enviarEmailAcesso(nome, email, qrCode, dataExpiracao, nomeAmbiente) {
  function completeHtmlTemplate(nome, nomeAmbiente, dataExpiracao) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Acesso ambiente - Pass</title>
    </head>
    <body>
      <div style="font-size: 14px; padding: 50px 20px;">
        <h3>Olá, ${nome}</h3> <br/><br/>
        
        Seu acesso chegou! <br/>
        Utilize o QR Code para fazer o acesso.<br/>
    
        Ambiente: ${nomeAmbiente}. <br/>
        Data de expiração: ${dataExpiracao} <br/>
      </div>
    </body>
    </html>`;
  }

  let emailHtmlString = completeHtmlTemplate(nome, nomeAmbiente, dataExpiracao);

  let options = {
    from: process.env.SMTP_USER,
    to: email,
    subject: `Código de acesso (${nomeAmbiente}) - Pass`,
    html: emailHtmlString,
    attachments: [
      {
        filename: 'QRCode.png',
        path: qrCode,
      },
    ],
  };

  try {
    mailClient.sendMail(options, function (error, info) {
      if (error) {
        console.log(error);
        return false;
      } else {
        console.log(`${new Date().toLocaleString()}:: ${nome} solicitou acesso à ${nomeAmbiente}`);
        return true;
      }
    });
  } catch (error) {
    console.log(error);
    return null;
  }
}
