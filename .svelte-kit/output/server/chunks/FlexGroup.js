import "clsx";
function FlexGroup($$payload, $$props) {
  let { children } = $$props;
  $$payload.out += `<div class="svelte-10waf9l">`;
  children?.($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  FlexGroup as F
};
