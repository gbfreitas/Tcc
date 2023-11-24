var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// src/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "src/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "src/entry.server.jsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// src/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// src/global.css
var global_default = "/build/_assets/global-LYMYA6GO.css";

// src/root.jsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: global_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "src/root.jsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "src/root.jsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "src/root.jsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "src/root.jsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/root.jsx",
      lineNumber: 19,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "src/root.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "src/root.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "src/root.jsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "src/root.jsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/root.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/root.jsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// src/routes/reservas.jsx
var reservas_exports = {};
__export(reservas_exports, {
  action: () => action,
  default: () => Reservas,
  loader: () => loader,
  meta: () => meta
});
import { Form, useActionData, useLoaderData } from "@remix-run/react";

// src/components/Nav.jsx
import { Link } from "@remix-run/react";

// src/secure/authentication.server.js
import { Authenticator, AuthorizationError } from "remix-auth";
import { FormStrategy } from "remix-auth-form";

// src/secure/db.server.js
import { PrismaClient } from "@prisma/client";
var prisma;
global.__db__;
global.__db__ || (global.__db__ = new PrismaClient()), prisma = global.__db__, prisma.$connect();

// src/secure/session.server.js
import { createCookieSessionStorage } from "@remix-run/node";
if (!process.env.SESSION_SECRET)
  throw new Error("SESSION_SECRET n\xE3o foi configurado nas variaveis de ambiente");
var sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__pass",
    sameSite: "lax",
    path: "/",
    httpOnly: !0,
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), { getSession, commitSession, destroySession } = sessionStorage;

// src/secure/authentication.server.js
import md5 from "md5";
var formStrategy = new FormStrategy(async ({ form }) => {
  let email = form.get("email"), password = form.get("password"), usuario = await prisma.usuario.findUnique({
    where: {
      email
    }
  });
  if (!usuario)
    throw console.warn("E-mail n\xE3o cadastrado na base de dados"), new AuthorizationError();
  if (!compare(password, usuario.senha))
    throw new AuthorizationError("Senha inv\xE1lida para este usu\xE1rio");
  return usuario;
}), authenticator = new Authenticator(sessionStorage);
authenticator.use(formStrategy, "form");
function compare(senhaForm, hashUsuario) {
  let hashForm = md5(senhaForm);
  return console.log(hashForm, hashUsuario), hashForm === hashUsuario;
}

// src/components/Nav.jsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Nav() {
  return /* @__PURE__ */ jsxDEV3("nav", { children: [
    /* @__PURE__ */ jsxDEV3(Link, { to: "/reservas", children: "Reservar ambiente" }, void 0, !1, {
      fileName: "src/components/Nav.jsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(Link, { to: "/acessos", children: "Solicitar acesso" }, void 0, !1, {
      fileName: "src/components/Nav.jsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3(Link, { to: "/sair", children: "Sair" }, void 0, !1, {
      fileName: "src/components/Nav.jsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/components/Nav.jsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// src/routes/reservas.jsx
import { json, redirect } from "@remix-run/node";

// src/services/ambienteService.server.js
async function todosAmbientes(ambientePrivado) {
  return await prisma.ambiente.findMany({
    where: {
      ambiente_privado: ambientePrivado
    }
  });
}
async function verificarDisponibilidadeAmbiente(id_espaco, data) {
  return !!await prisma.reserva.findFirst({
    where: {
      id_espaco: {
        equals: parseInt(id_espaco)
      },
      data: {
        equals: data
      }
    },
    select: {
      id: !0
    }
  });
}

// src/services/reservaService.server.js
async function todasReservas(usuarioId) {
  let reservas = [];
  try {
    reservas = await prisma.reserva.findMany({
      where: {
        id_morador: usuarioId,
        data: {
          gte: /* @__PURE__ */ new Date()
        }
      },
      include: {
        Ambiente: !0
      }
    });
  } catch (e) {
    console.log(e);
  }
  return reservas.map((reserva) => (reserva.data.setHours(reserva.data.getHours() + 3), reserva.data = reserva.data.toLocaleDateString(), reserva));
}
async function novaReserva(reserva) {
  return await prisma.reserva.create({
    data: {
      id_espaco: parseInt(reserva.id_espaco),
      id_morador: parseInt(reserva.id_morador),
      data: reserva.data
    }
  });
}
async function excluirReserva(reservaId) {
  return await prisma.reserva.delete({
    where: {
      id: parseInt(reservaId)
    }
  });
}

// src/routes/reservas.jsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var meta = () => [{ title: "Reservar ambiente - Pass" }, { name: "description", content: "Pass!" }];
async function action({ request }) {
  let form = await request.formData(), _action = form.get("_action");
  if (_action === "nova_reserva") {
    let id_espaco = form.get("id_espaco"), id_morador = form.get("id_morador"), data = new Date(form.get("data"));
    return await verificarDisponibilidadeAmbiente(id_espaco, data) ? json({ mensagem: "A data selecionada n\xE3o est\xE1 dispon\xEDvel para reserva." }) : (await novaReserva({ id_espaco, id_morador, data }), redirect("/reservas"));
  }
  if (_action === "cancelar_reserva") {
    let id_reserva = form.get("id_reserva");
    return await excluirReserva(id_reserva), redirect("/reservas");
  }
}
async function loader({ request }) {
  let usuario = await authenticator.isAuthenticated(request, {
    failureRedirect: "/entrar"
  }), ambientes = await todosAmbientes(!0), reservas = await todasReservas(usuario.id);
  return json({ usuario, ambientes, reservas });
}
function Reservas() {
  let data = useActionData(), { usuario, ambientes, reservas } = useLoaderData();
  return /* @__PURE__ */ jsxDEV4("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV4(Nav, {}, void 0, !1, {
      fileName: "src/routes/reservas.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("h1", { children: "Reservar ambiente" }, void 0, !1, {
      fileName: "src/routes/reservas.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4(Form, { method: "post", action: "?index", children: [
      /* @__PURE__ */ jsxDEV4("h2", { children: "Dados morador" }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("label", { children: "Nome do Usu\xE1rio:" }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("strong", { children: usuario.nome }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "id_morador", value: usuario.id }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("label", { children: "N\xFAmero do Apartamento:" }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("strong", { children: usuario.apartamento }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("label", { children: "Bloco:" }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("strong", { children: usuario.bloco }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("h2", { children: "Ambiente" }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("label", { htmlFor: "id_espaco", children: "Ambiente:" }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("select", { name: "id_espaco", id: "id_espaco", children: ambientes.map((ambiente) => /* @__PURE__ */ jsxDEV4("option", { value: ambiente.id, children: ambiente.nome }, ambiente.id, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 84,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("label", { htmlFor: "data_reserva", children: "Data da Reserva:" }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("input", { type: "date", id: "data_reserva", name: "data", required: !0 }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("br", {}, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "_action", value: "nova_reserva" }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("input", { type: "submit", value: "Reservar" }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      data?.mensagem && /* @__PURE__ */ jsxDEV4("p", { className: "mensagem-erro", children: data.mensagem }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 100,
        columnNumber: 28
      }, this)
    ] }, void 0, !0, {
      fileName: "src/routes/reservas.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("h2", { children: "Reservas Atuais:" }, void 0, !1, {
      fileName: "src/routes/reservas.jsx",
      lineNumber: 102,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4("table", { children: [
      /* @__PURE__ */ jsxDEV4("thead", { children: /* @__PURE__ */ jsxDEV4("tr", { children: [
        /* @__PURE__ */ jsxDEV4("th", { children: "Ambiente" }, void 0, !1, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 106,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("th", { children: "Usu\xE1rio" }, void 0, !1, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 107,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("th", { children: "Apartamento" }, void 0, !1, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 108,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("th", { children: "Bloco" }, void 0, !1, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 109,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("th", { children: "Data" }, void 0, !1, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 110,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ jsxDEV4("th", {}, void 0, !1, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 111,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 105,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV4("tbody", { children: [
        reservas.length == 0 && /* @__PURE__ */ jsxDEV4("tr", { children: /* @__PURE__ */ jsxDEV4("td", { colSpan: 5, children: "Nenhuma reserva encontrada." }, void 0, !1, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 117,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 116,
          columnNumber: 13
        }, this),
        reservas.map((reserva) => /* @__PURE__ */ jsxDEV4("tr", { children: [
          /* @__PURE__ */ jsxDEV4("td", { children: reserva.Ambiente.nome }, void 0, !1, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 122,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("td", { children: usuario.nome }, void 0, !1, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 123,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("td", { children: usuario.apartamento }, void 0, !1, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 124,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("td", { children: usuario.bloco }, void 0, !1, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 125,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("td", { children: reserva.data }, void 0, !1, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 126,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ jsxDEV4("td", { children: /* @__PURE__ */ jsxDEV4(Form, { method: "post", children: [
            /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "_action", value: "cancelar_reserva" }, void 0, !1, {
              fileName: "src/routes/reservas.jsx",
              lineNumber: 129,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV4("input", { type: "hidden", name: "id_reserva", value: reserva.id }, void 0, !1, {
              fileName: "src/routes/reservas.jsx",
              lineNumber: 130,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ jsxDEV4("button", { children: "Cancelar" }, void 0, !1, {
              fileName: "src/routes/reservas.jsx",
              lineNumber: 131,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 128,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 127,
            columnNumber: 15
          }, this)
        ] }, reserva.id, !0, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 121,
          columnNumber: 13
        }, this))
      ] }, void 0, !0, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 114,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/routes/reservas.jsx",
      lineNumber: 103,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/routes/reservas.jsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}

// src/routes/acessos.jsx
var acessos_exports = {};
__export(acessos_exports, {
  action: () => action2,
  default: () => Acessos,
  loader: () => loader2,
  meta: () => meta2
});
import QRCode from "qrcode";
import { Form as Form2, useActionData as useActionData2, useLoaderData as useLoaderData2 } from "@remix-run/react";
import { json as json2 } from "@remix-run/node";
import { useState } from "react";

// src/secure/mailer.server.js
import nodemailer from "nodemailer";
var mailClient = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// src/services/acessoService.server.js
import "handlebars";
async function novoAcesso(acesso) {
  return await prisma.acesso.create({
    data: {
      id_espaco: parseInt(acesso.id_espaco),
      id_morador: parseInt(acesso.id_morador),
      codigo_acesso: acesso.codigoAcesso,
      qrcode_acesso: acesso.qrCodeAcesso,
      data_expiracao: acesso.data_expiracao
    }
  });
}
async function enviarEmailAcesso(nome, email, qrCode, dataExpiracao, nomeAmbiente) {
  function completeHtmlTemplate(nome2, nomeAmbiente2, dataExpiracao2) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Acesso ambiente - Pass</title>
    </head>
    <body>
      <div style="font-size: 14px; padding: 50px 20px;">
        <h3>Ol\xE1, ${nome2}</h3> <br/><br/>
        
        Seu acesso chegou! <br/>
        Utilize o QR Code para fazer o acesso.<br/>
    
        Ambiente: ${nomeAmbiente2}. <br/>
        Data de expira\xE7\xE3o: ${dataExpiracao2} <br/>
      </div>
    </body>
    </html>`;
  }
  let emailHtmlString = completeHtmlTemplate(nome, nomeAmbiente, dataExpiracao), options = {
    from: process.env.SMTP_USER,
    to: email,
    subject: `C\xF3digo de acesso (${nomeAmbiente}) - Pass`,
    html: emailHtmlString,
    attachments: [
      {
        filename: "QRCode.png",
        path: qrCode
      }
    ]
  };
  try {
    mailClient.sendMail(options, function(error, info) {
      return error ? (console.log(error), !1) : (console.log(`${(/* @__PURE__ */ new Date()).toLocaleString()}:: ${nome} solicitou acesso \xE0 ${nomeAmbiente}`), !0);
    });
  } catch (error) {
    return console.log(error), null;
  }
}

// src/routes/acessos.jsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var meta2 = () => [{ title: "Solicitar acesso - Pass" }, { name: "description", content: "Pass!" }];
async function action2({ request }) {
  let form = await request.formData(), id_espaco = form.get("id_espaco"), id_morador = form.get("id_morador"), nome_morador = form.get("nome_morador"), email_morador = form.get("email_morador"), apartamento = form.get("apartamento"), bloco = form.get("bloco"), nome_espaco = form.get("nome_espaco"), data_expiracao = /* @__PURE__ */ new Date();
  data_expiracao.setHours(data_expiracao.getHours() + 8);
  let codigoAcesso = `${nome_espaco}|${nome_morador}|${apartamento}|${bloco}|${data_expiracao.toLocaleString()}`, qrCodeAcesso = await QRCode.toDataURL(codigoAcesso);
  return await novoAcesso({ id_espaco, id_morador, codigoAcesso, qrCodeAcesso, data_expiracao }), await enviarEmailAcesso(nome_morador, email_morador, qrCodeAcesso, data_expiracao.toLocaleString(), nome_espaco), json2({ qrCodeAcesso });
}
async function loader2({ request }) {
  let usuario = await authenticator.isAuthenticated(request, {
    failureRedirect: "/entrar"
  }), ambientes = await todosAmbientes(!1);
  return json2({ usuario, ambientes });
}
function Acessos() {
  let data = useActionData2(), { usuario, ambientes } = useLoaderData2(), [nomeEspaco, setNomeEspaco] = useState("");
  function setarNomeEspaco(event) {
    let { nome } = ambientes.find((ambiente) => ambiente.id == event.target.value);
    setNomeEspaco(nome);
  }
  return /* @__PURE__ */ jsxDEV5("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV5(Nav, {}, void 0, !1, {
      fileName: "src/routes/acessos.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5("h1", { children: "Solicitar acesso" }, void 0, !1, {
      fileName: "src/routes/acessos.jsx",
      lineNumber: 63,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV5(Form2, { method: "post", children: [
      /* @__PURE__ */ jsxDEV5("h2", { children: "Dados morador" }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("label", { children: "Nome do Usu\xE1rio:" }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("strong", { children: usuario.nome }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "nome_morador", value: usuario.nome }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 68,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "id_morador", value: usuario.id }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 69,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "email_morador", value: usuario.email }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 70,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("label", { children: "N\xFAmero do Apartamento:" }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("strong", { children: usuario.apartamento }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 74,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "apartamento", value: usuario.apartamento }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 75,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("label", { children: "Bloco:" }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("strong", { children: usuario.bloco }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 79,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "bloco", value: usuario.bloco }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 80,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 81,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("h2", { children: "Ambiente" }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("label", { htmlFor: "id_espaco", children: "Ambiente:" }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 84,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 85,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 86,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("select", { name: "id_espaco", id: "id_espaco", onChange: setarNomeEspaco, children: [
        /* @__PURE__ */ jsxDEV5("option", { value: 0, children: "Selecionar ambiente" }, void 0, !1, {
          fileName: "src/routes/acessos.jsx",
          lineNumber: 88,
          columnNumber: 11
        }, this),
        ambientes.map((ambiente) => /* @__PURE__ */ jsxDEV5("option", { value: ambiente.id, children: ambiente.nome }, ambiente.id, !1, {
          fileName: "src/routes/acessos.jsx",
          lineNumber: 90,
          columnNumber: 13
        }, this))
      ] }, void 0, !0, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 87,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "nome_espaco", value: nomeEspaco }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("input", { type: "hidden", name: "bloco", value: usuario.bloco }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("br", {}, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV5("input", { type: "submit", value: "Gerar acesso" }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/routes/acessos.jsx",
      lineNumber: 64,
      columnNumber: 7
    }, this),
    data?.qrCodeAcesso && /* @__PURE__ */ jsxDEV5("div", { id: "qrcode", children: [
      /* @__PURE__ */ jsxDEV5("h5", { children: [
        "C\xF3digo enviado para o e-mail ",
        /* @__PURE__ */ jsxDEV5("strong", { children: usuario.email }, void 0, !1, {
          fileName: "src/routes/acessos.jsx",
          lineNumber: 106,
          columnNumber: 42
        }, this)
      ] }, void 0, !0, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 105,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5("img", { src: data?.qrCodeAcesso, alt: "Seu c\xF3digo de acesso" }, void 0, !1, {
        fileName: "src/routes/acessos.jsx",
        lineNumber: 109,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "src/routes/acessos.jsx",
      lineNumber: 104,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "src/routes/acessos.jsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

// src/routes/entrar.jsx
var entrar_exports = {};
__export(entrar_exports, {
  action: () => action3,
  default: () => Index,
  loader: () => loader3,
  meta: () => meta3
});
import { Form as Form3, Link as Link2, useSearchParams } from "@remix-run/react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var meta3 = () => [{ title: "Fazer login - Pass" }, { name: "description", content: "Entrar no Pass!" }];
async function action3({ request }) {
  await authenticator.authenticate("form", request, {
    successRedirect: "/",
    failureRedirect: "/entrar?fail=true"
  });
}
async function loader3({ request }) {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/"
  }), {};
}
function Index() {
  let [searchParams] = useSearchParams(), erroLogin = Boolean(searchParams.get("fail"));
  return /* @__PURE__ */ jsxDEV6("div", { className: "container-login", children: [
    /* @__PURE__ */ jsxDEV6("h2", { children: "Login" }, void 0, !1, {
      fileName: "src/routes/entrar.jsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    erroLogin && /* @__PURE__ */ jsxDEV6("p", { children: [
      "Erro ao fazer login. ",
      /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
        fileName: "src/routes/entrar.jsx",
        lineNumber: 35,
        columnNumber: 45
      }, this),
      "Verifique suas credenciais."
    ] }, void 0, !0, {
      fileName: "src/routes/entrar.jsx",
      lineNumber: 35,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV6(Form3, { method: "post", action: "?index", children: [
      /* @__PURE__ */ jsxDEV6("label", { htmlFor: "email", children: "E-mail:" }, void 0, !1, {
        fileName: "src/routes/entrar.jsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("input", { type: "email", id: "email", name: "email", required: !0 }, void 0, !1, {
        fileName: "src/routes/entrar.jsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
        fileName: "src/routes/entrar.jsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("label", { htmlFor: "password", children: "Senha:" }, void 0, !1, {
        fileName: "src/routes/entrar.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("input", { type: "password", id: "password", name: "password", required: !0 }, void 0, !1, {
        fileName: "src/routes/entrar.jsx",
        lineNumber: 43,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("br", {}, void 0, !1, {
        fileName: "src/routes/entrar.jsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("input", { type: "submit", value: "Entrar" }, void 0, !1, {
        fileName: "src/routes/entrar.jsx",
        lineNumber: 46,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/routes/entrar.jsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6(Link2, { to: "#", children: "Esqueci a Senha" }, void 0, !1, {
      fileName: "src/routes/entrar.jsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/routes/entrar.jsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
}

// src/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Index2,
  loader: () => loader4,
  meta: () => meta4
});
import "@remix-run/react";
import { json as json3 } from "@remix-run/node";
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var meta4 = () => [{ title: "Fazer login - Pass" }, { name: "description", content: "Entrar no Pass!" }];
async function loader4({ request }) {
  let usuario = await authenticator.isAuthenticated(request, {
    failureRedirect: "/entrar"
  });
  return json3({ usuario });
}
function Index2() {
  return /* @__PURE__ */ jsxDEV7("div", { className: "container", children: [
    /* @__PURE__ */ jsxDEV7(Nav, {}, void 0, !1, {
      fileName: "src/routes/_index.jsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("h1", { children: "Bem-vindo ao Pass!" }, void 0, !1, {
      fileName: "src/routes/_index.jsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("p", { children: "Aqui voc\xEA pode fazer reservas e acessar a piscina do condom\xEDnio" }, void 0, !1, {
      fileName: "src/routes/_index.jsx",
      lineNumber: 23,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("section", { id: "salao", children: [
      /* @__PURE__ */ jsxDEV7("h2", { children: "Reserva do Sal\xE3o" }, void 0, !1, {
        fileName: "src/routes/_index.jsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { children: "Fa\xE7a sua reserva para usar o sal\xE3o de festas." }, void 0, !1, {
        fileName: "src/routes/_index.jsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/routes/_index.jsx",
      lineNumber: 25,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("section", { id: "churrasqueira", children: [
      /* @__PURE__ */ jsxDEV7("h2", { children: "Reserva do Quiosque da churrasqueira" }, void 0, !1, {
        fileName: "src/routes/_index.jsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { children: "Reserve a churrasqueira \xE9 divirta-se com fam\xEDlia e amigos" }, void 0, !1, {
        fileName: "src/routes/_index.jsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/routes/_index.jsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("section", { id: "academia", children: [
      /* @__PURE__ */ jsxDEV7("h2", { children: "Reserva do Espa\xE7o Gourmet" }, void 0, !1, {
        fileName: "src/routes/_index.jsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { children: "Reserve o espa\xE7o gourmet e confraternize em fam\xEDlia." }, void 0, !1, {
        fileName: "src/routes/_index.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/routes/_index.jsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV7("section", { id: "piscina", children: [
      /* @__PURE__ */ jsxDEV7("h2", { children: "Acesso da Piscina" }, void 0, !1, {
        fileName: "src/routes/_index.jsx",
        lineNumber: 41,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV7("p", { children: "Divirta-se na piscina." }, void 0, !1, {
        fileName: "src/routes/_index.jsx",
        lineNumber: 42,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "src/routes/_index.jsx",
      lineNumber: 40,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "src/routes/_index.jsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// src/routes/sair.jsx
var sair_exports = {};
__export(sair_exports, {
  default: () => Index3,
  loader: () => loader5,
  meta: () => meta5
});
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var meta5 = () => [{ title: "Saindo - Pass" }, { name: "description", content: "Sair do Pass!" }];
async function loader5({ request }) {
  await authenticator.logout(request, { redirectTo: "/entrar" });
}
function Index3() {
  return /* @__PURE__ */ jsxDEV8("h1", { children: "Saindo" }, void 0, !1, {
    fileName: "src/routes/sair.jsx",
    lineNumber: 14,
    columnNumber: 10
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-H26HH6VQ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-KCB4TZX4.js", "/build/_shared/chunk-LHPQ3KI7.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BGQAAZ5H.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-B6K3P2IE.js", imports: ["/build/_shared/chunk-UGIC3CZL.js", "/build/_shared/chunk-3XYB7UKU.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/acessos": { id: "routes/acessos", parentId: "root", path: "acessos", index: void 0, caseSensitive: void 0, module: "/build/routes/acessos-YG6RRBQT.js", imports: ["/build/_shared/chunk-FLTUNWES.js", "/build/_shared/chunk-UGIC3CZL.js", "/build/_shared/chunk-3XYB7UKU.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/entrar": { id: "routes/entrar", parentId: "root", path: "entrar", index: void 0, caseSensitive: void 0, module: "/build/routes/entrar-4HBWILJ6.js", imports: ["/build/_shared/chunk-3XYB7UKU.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/reservas": { id: "routes/reservas", parentId: "root", path: "reservas", index: void 0, caseSensitive: void 0, module: "/build/routes/reservas-WB75DECB.js", imports: ["/build/_shared/chunk-FLTUNWES.js", "/build/_shared/chunk-UGIC3CZL.js", "/build/_shared/chunk-3XYB7UKU.js"], hasAction: !0, hasLoader: !0, hasErrorBoundary: !1 }, "routes/sair": { id: "routes/sair", parentId: "root", path: "sair", index: void 0, caseSensitive: void 0, module: "/build/routes/sair-4NP475KP.js", imports: ["/build/_shared/chunk-3XYB7UKU.js"], hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 } }, version: "4ec38d95", hmr: { runtime: "/build/_shared\\chunk-LHPQ3KI7.js", timestamp: 1700808298952 }, url: "/build/manifest-4EC38D95.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/reservas": {
    id: "routes/reservas",
    parentId: "root",
    path: "reservas",
    index: void 0,
    caseSensitive: void 0,
    module: reservas_exports
  },
  "routes/acessos": {
    id: "routes/acessos",
    parentId: "root",
    path: "acessos",
    index: void 0,
    caseSensitive: void 0,
    module: acessos_exports
  },
  "routes/entrar": {
    id: "routes/entrar",
    parentId: "root",
    path: "entrar",
    index: void 0,
    caseSensitive: void 0,
    module: entrar_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/sair": {
    id: "routes/sair",
    parentId: "root",
    path: "sair",
    index: void 0,
    caseSensitive: void 0,
    module: sair_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
