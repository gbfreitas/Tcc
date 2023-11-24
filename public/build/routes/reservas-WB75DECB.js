import {
  require_ambienteService
} from "/build/_shared/chunk-FLTUNWES.js";
import {
  Nav,
  require_node
} from "/build/_shared/chunk-UGIC3CZL.js";
import {
  Form,
  useActionData,
  useLoaderData
} from "/build/_shared/chunk-KCB4TZX4.js";
import {
  require_authentication
} from "/build/_shared/chunk-3XYB7UKU.js";
import {
  createHotContext
} from "/build/_shared/chunk-LHPQ3KI7.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:../services/reservaService.server
var require_reservaService = __commonJS({
  "empty-module:../services/reservaService.server"(exports, module) {
    module.exports = {};
  }
});

// src/routes/reservas.jsx
var import_authentication = __toESM(require_authentication(), 1);
var import_node = __toESM(require_node(), 1);
var import_ambienteService = __toESM(require_ambienteService(), 1);
var import_reservaService = __toESM(require_reservaService(), 1);
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"src\\\\routes\\\\reservas.jsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "src\\routes\\reservas.jsx"
  );
  import.meta.hot.lastModified = "1698189154809.1704";
}
var meta = () => {
  return [{
    title: "Reservar ambiente - Pass"
  }, {
    name: "description",
    content: "Pass!"
  }];
};
function Reservas() {
  _s();
  let data = useActionData();
  let {
    usuario,
    ambientes,
    reservas
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Nav, {}, void 0, false, {
      fileName: "src/routes/reservas.jsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { children: "Reservar ambiente" }, void 0, false, {
      fileName: "src/routes/reservas.jsx",
      lineNumber: 90,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", action: "?index", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Dados morador" }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 92,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Nome do Usu\xE1rio:" }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 93,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: usuario.nome }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 94,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id_morador", value: usuario.id }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 95,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "N\xFAmero do Apartamento:" }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: usuario.apartamento }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: "Bloco:" }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: usuario.bloco }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 103,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 104,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Ambiente" }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "id_espaco", children: "Ambiente:" }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 107,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 109,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", { name: "id_espaco", id: "id_espaco", children: ambientes.map((ambiente) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", { value: ambiente.id, children: ambiente.nome }, ambiente.id, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 111,
        columnNumber: 38
      }, this)) }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { htmlFor: "data_reserva", children: "Data da Reserva:" }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "date", id: "data_reserva", name: "data", required: true }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 121,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 122,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 123,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "nova_reserva" }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 124,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "submit", value: "Reservar" }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      data?.mensagem && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "mensagem-erro", children: data.mensagem }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 126,
        columnNumber: 28
      }, this)
    ] }, void 0, true, {
      fileName: "src/routes/reservas.jsx",
      lineNumber: 91,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "Reservas Atuais:" }, void 0, false, {
      fileName: "src/routes/reservas.jsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Ambiente" }, void 0, false, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 132,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Usu\xE1rio" }, void 0, false, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 133,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Apartamento" }, void 0, false, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 134,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Bloco" }, void 0, false, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 135,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", { children: "Data" }, void 0, false, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 136,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {}, void 0, false, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 137,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 131,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", { children: [
        reservas.length == 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { colSpan: 5, children: "Nenhuma reserva encontrada." }, void 0, false, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 142,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 141,
          columnNumber: 36
        }, this),
        reservas.map((reserva) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: reserva.Ambiente.nome }, void 0, false, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 145,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: usuario.nome }, void 0, false, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 146,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: usuario.apartamento }, void 0, false, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 147,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: usuario.bloco }, void 0, false, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 148,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: reserva.data }, void 0, false, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 149,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "_action", value: "cancelar_reserva" }, void 0, false, {
              fileName: "src/routes/reservas.jsx",
              lineNumber: 152,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "id_reserva", value: reserva.id }, void 0, false, {
              fileName: "src/routes/reservas.jsx",
              lineNumber: 153,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { children: "Cancelar" }, void 0, false, {
              fileName: "src/routes/reservas.jsx",
              lineNumber: 154,
              columnNumber: 19
            }, this)
          ] }, void 0, true, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 151,
            columnNumber: 17
          }, this) }, void 0, false, {
            fileName: "src/routes/reservas.jsx",
            lineNumber: 150,
            columnNumber: 15
          }, this)
        ] }, reserva.id, true, {
          fileName: "src/routes/reservas.jsx",
          lineNumber: 144,
          columnNumber: 36
        }, this))
      ] }, void 0, true, {
        fileName: "src/routes/reservas.jsx",
        lineNumber: 140,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "src/routes/reservas.jsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "src/routes/reservas.jsx",
    lineNumber: 88,
    columnNumber: 10
  }, this);
}
_s(Reservas, "rd5XIv9Xq2UjfVWe6YvhKUEhFRM=", false, function() {
  return [useActionData, useLoaderData];
});
_c = Reservas;
var _c;
$RefreshReg$(_c, "Reservas");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Reservas as default,
  meta
};
//# sourceMappingURL=/build/routes/reservas-WB75DECB.js.map
