import { r as HTTPResponse } from "../_libs/h3+rou3+srvx.mjs";
//#region #nitro/virtual/renderer-template
var rendererTemplate = () => new HTTPResponse("<!doctype html>\r\n<html lang=\"fr\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <meta name=\"description\" content=\"ENTREPRISE KAANTAA sécurise vos véhicules avec le suivi GPS à Ziguinchor et partout au Sénégal.\" />\r\n    <title>ENTREPRISE KAANTAA</title>\r\n  </head>\r\n  <body>\r\n    <main>\r\n      <h1>ENTREPRISE KAANTAA</h1>\r\n      <p>La protection qui roule avec toi.</p>\r\n      <p>Le site est en cours de chargement.</p>\r\n    </main>\r\n  </body>\r\n</html>\r\n", { headers: { "content-type": "text/html; charset=utf-8" } });
//#endregion
//#region node_modules/nitro/dist/runtime/internal/routes/renderer-template.mjs
function renderIndexHTML(event) {
	return rendererTemplate(event.req);
}
//#endregion
export { renderIndexHTML as default };
