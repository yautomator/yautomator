import "clsx";
function Container($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="svelte-p7hxi7">`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  Container as C
};
