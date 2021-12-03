import { c as create_ssr_component } from "./app-5a753ff4.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1ht31or{height:100%}.list-days.svelte-1ht31or{height:100%;padding:1em;display:flex;flex-direction:column;align-items:center;gap:1em}.list-days-day.svelte-1ht31or{border:1px solid black;border-radius:5%}.list-days-day-link.svelte-1ht31or{font-size:1.5rem;font-style:normal;font-weight:600;padding:1em}.list-days-day-link.svelte-1ht31or:hover,.list-days-day-link.svelte-1ht31or:focus{font-style:italic;text-decoration:underline}",
  map: null
};
const Advent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"container svelte-1ht31or"}"><h1>Days</h1>
	<ul class="${"list-days svelte-1ht31or"}"><li class="${"list-days-day svelte-1ht31or"}"><a class="${"list-days-day-link svelte-1ht31or"}" href="${"/advent/04/"}">04.12.2021</a></li>
		<li class="${"list-days-day svelte-1ht31or"}"><a class="${"list-days-day-link svelte-1ht31or"}" href="${"/advent/08/"}">08.12.2021</a></li></ul>
</div>`;
});
export { Advent as default };
