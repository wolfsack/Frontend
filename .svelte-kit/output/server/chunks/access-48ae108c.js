import { c as create_ssr_component, a as add_attribute } from "./app-5a753ff4.js";
var access_svelte_svelte_type_style_lang = "";
const css = {
  code: ".access-form.svelte-x2p5t{height:100%;margin-top:10%;padding:5em;display:flex;flex-direction:column;align-items:center}.access-form-field.svelte-x2p5t{font-size:1.5rem;font-style:italic;margin:1em;border-radius:5%;width:70%;max-width:400px;min-width:200px;height:1.5em}.access-form-button.svelte-x2p5t{font-size:1.5rem;margin:1em;border-radius:5%;width:40%;max-width:300px;min-width:100px;height:1.5em}.access-form-button.svelte-x2p5t:hover,.access-form-button.svelte-x2p5t:focus{background-color:gray}.error.svelte-x2p5t{color:red;font-size:1.5rem}",
  map: null
};
const Access = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let username = "";
  let accesscode = "";
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Access</title>`, ""}`, ""}

<div><form class="${"access-form svelte-x2p5t"}"><input type="${"text"}" id="${"access-code"}" name="${"access-code"}" class="${"access-form-field svelte-x2p5t"}" placeholder="${"access code"}"${add_attribute("value", accesscode, 0)}>
		<input type="${"text"}" id="${"username"}" name="${"username"}" class="${"access-form-field svelte-x2p5t"}" placeholder="${"username"}"${add_attribute("value", username, 0)}>
		<input type="${"submit"}" value="${"Access"}" class="${"access-form-button svelte-x2p5t"}"></form>

	${``}
</div>`;
});
export { Access as default };
