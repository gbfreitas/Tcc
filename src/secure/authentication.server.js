import { Authenticator, AuthorizationError } from 'remix-auth';
import { FormStrategy } from 'remix-auth-form';
import { prisma } from './db.server';
import { sessionStorage } from './session.server';
import md5 from 'md5';


const formStrategy = new FormStrategy(async ({ form }) => {
  const email = form.get('email');
  const password = form.get('password');
  
  const usuario = await prisma.usuario.findUnique({
    where: {
      email,
    },
  });

  if (!usuario) {
    console.warn('E-mail não cadastrado na base de dados');
    throw new AuthorizationError();
  }
  
  const match = compare(password, usuario.senha);

  if (!match) {
    throw new AuthorizationError('Senha inválida para este usuário');
  }
  
  return usuario;
});

const authenticator = new Authenticator(sessionStorage);
authenticator.use(formStrategy, 'form');

function encrypt(senha) {
  let encPassword = md5(senha);
  return encPassword;
}

function compare(senhaForm, hashUsuario) {
  let hashForm = md5(senhaForm);

  console.log(hashForm, hashUsuario)
  return hashForm === hashUsuario;
}

export { authenticator };
