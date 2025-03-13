import { l as ensure_array_like, n as escape_html } from "../../../../chunks/index.js";
import { p as page } from "../../../../chunks/index2.js";
import { B as Breadcrumb } from "../../../../chunks/Breadcrumb.js";
import { C as Container } from "../../../../chunks/Container.js";
function _page($$payload) {
  const { data } = page;
  const each_array = ensure_array_like(data.organizations.filter((organization) => organization.organizationType === "VC"));
  $$payload.out += `<header class="svelte-1r3q028">`;
  {
    let base = function($$payload2) {
      $$payload2.out += `<!---->Organizations`;
    }, current = function($$payload2) {
      $$payload2.out += `<span>Venture capital</span>`;
    };
    Breadcrumb($$payload, {
      base,
      current
    });
  }
  $$payload.out += `<!----></header> <main class="svelte-1r3q028"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let organization = each_array[$$index];
    Container($$payload, {
      children: ($$payload2) => {
        $$payload2.out += `<h1>${escape_html(organization.name)}</h1>`;
      }
    });
  }
  $$payload.out += `<!--]--></main>`;
}
export {
  _page as default
};
