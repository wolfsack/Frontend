import { c as create_ssr_component } from "./app-5a753ff4.js";
var Sidebar_svelte_svelte_type_style_lang = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "*{margin:0;border:0;padding:0;text-decoration:none;text-align:center;-webkit-tap-highlight-color:rgba(211, 211, 211, 0.548)}:root{--primary-background-color:rgb(35, 100, 161);--secondary-background-color:rgba(43, 113, 183, 0.7);--tertiary-background-color:rgb(100, 102, 105);--primary-text-color:rgb(0, 0, 0);--secondary-text-color:rgb(255, 255, 255);background-color:var(--primary-background-color);color:var(--primary-text-color);font-size:16px;font-weight:400;font-family:'Courier New', 'serif'}a{color:var(--primary-text-color)}ul{list-style-type:none}button{font-family:inherit;font-size:1rem;background-color:transparent}.wrapper.svelte-12lejym{margin:0;width:100%;height:100vh;display:flex}.main.svelte-12lejym{width:100%;margin:1em}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-12lejym"}"><main class="${"main svelte-12lejym"}">${slots.default ? slots.default({}) : ``}</main>
</div>`;
});
export { _layout as default };
