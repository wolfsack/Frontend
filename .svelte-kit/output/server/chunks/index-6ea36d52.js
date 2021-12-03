import { c as create_ssr_component, a as add_attribute } from "./app-5a753ff4.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-1869dnw{display:flex;flex-direction:column}.wrapper.svelte-1869dnw{margin-top:2em}.title.svelte-1869dnw{font-style:italic}.quest-text.svelte-1869dnw{padding:2em;font-size:1.2rem;font-weight:600;font-style:italic}.quest-quests.svelte-1869dnw{display:flex;justify-content:space-around;align-items:center}.discription.svelte-1869dnw{font-size:1.2rem}.tip.svelte-1869dnw{padding:0.5em;font-style:italic}.quest.svelte-1869dnw{border:1px solid gray;padding:3em}.quest-img.svelte-1869dnw{height:200px;width:200px;margin:2em}.quest-form.svelte-1869dnw{display:flex;flex-direction:column;gap:1.5em;align-items:center}.quest-input.svelte-1869dnw{font-size:1.5rem;border-radius:5%;font-style:italic}.result.svelte-1869dnw{margin-top:2em}.result-wrong.svelte-1869dnw{color:red}.result-right.svelte-1869dnw{color:rgb(0, 231, 0)}",
  map: null
};
const _04 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let answer_1;
  let answer_0;
  $$result.css.add(css);
  return `<div class="${"container svelte-1869dnw"}"><h1 class="${"title svelte-1869dnw"}">Vierte Dezember</h1>

	<div class="${"wrapper svelte-1869dnw"}"><h2 class="${"quest-title"}">Aufgabe</h2>
		<p class="${"quest-text svelte-1869dnw"}">Nach drei Aufgaben R\xE4tsel-Raten wird es Zeit sich wieder etwas Handfesterem zu widmen!<br>
			Fangen wir mit einfachen Rechenaufgaben an:
		</p>
		<div class="${"quest-quests svelte-1869dnw"}"><div class="${"quest svelte-1869dnw"}"><p class="${"discription svelte-1869dnw"}">Was ist x?</p>
				<p class="${"tip svelte-1869dnw"}">Hinweis: Bit Operation</p>
				<img class="${"quest-img svelte-1869dnw"}" src="${"/static/images/advent/quest-0.png"}" alt="${"question-0"}">
				<form class="${"quest-form svelte-1869dnw"}"><input type="${"text"}" id="${"quest-1-input"}" name="${"quest-1-input"}" class="${"quest-input svelte-1869dnw"}" placeholder="${"Deine Antwort"}"${add_attribute("value", answer_0, 0)}></form>
				${`<h3 class="${"result result-wrong svelte-1869dnw"}">Deine Antwort ist falsch!</h3>`}</div>
			<div class="${"quest svelte-1869dnw"}"><p class="${"discription svelte-1869dnw"}">Was ist y?</p>
				<p class="${"tip svelte-1869dnw"}">Hinweis: Hex Operation</p>
				<img class="${"quest-img svelte-1869dnw"}" src="${"/static/images/advent/quest-1.png"}" alt="${"question-1"}">
				<form class="${"quest-form svelte-1869dnw"}"><input type="${"text"}" id="${"quest-1-input"}" name="${"quest-1-input"}" class="${"quest-input svelte-1869dnw"}" placeholder="${"Deine Antwort"}"${add_attribute("value", answer_1, 0)}></form>
				${`<h3 class="${"result result-wrong svelte-1869dnw"}">Deine Antwort ist falsch!</h3>`}</div></div></div>
</div>`;
});
export { _04 as default };
