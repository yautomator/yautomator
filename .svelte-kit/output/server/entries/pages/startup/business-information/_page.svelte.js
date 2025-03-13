import { m as attr, k as pop, p as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { B as Breadcrumb } from "../../../../chunks/Breadcrumb.js";
import { I as Input, l as layout, P as PrimaryButton, S as SelectedStartupIcon } from "../../../../chunks/Input.js";
import { F as FlexGroup } from "../../../../chunks/FlexGroup.js";
import "nprogress";
function _page($$payload, $$props) {
  push();
  let isLoading = false;
  $$payload.out += `<header class="svelte-13tohiu">`;
  {
    let base = function($$payload2) {
      SelectedStartupIcon($$payload2);
    }, current = function($$payload2) {
      $$payload2.out += `<span>Business information</span>`;
    };
    Breadcrumb($$payload, {
      base,
      current
    });
  }
  $$payload.out += `<!----></header> <main class="svelte-13tohiu"><form method="POST" enctype="multipart/form-data" class="svelte-13tohiu"><h1 class="svelte-13tohiu">Business information</h1> <input type="hidden" name="id"${attr("value", layout.selectedStartup?._id)}> `;
  FlexGroup($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<label class="svelte-13tohiu">Industry <small class="svelte-13tohiu">Sector your startup primarily operates in</small> `;
      Input($$payload2, {
        type: "text",
        placeholder: "FinTech, Healthcare, E-commerce",
        name: "industry",
        value: layout.selectedStartup?.industry,
        required: true
      });
      $$payload2.out += `<!----></label> <label class="svelte-13tohiu">Team size <small class="svelte-13tohiu">Number of full-time and part-time team members</small> `;
      Input($$payload2, {
        type: "number",
        min: 0,
        placeholder: "5 full-time, 2 part-time",
        name: "teamSize",
        value: layout.selectedStartup?.teamSize,
        required: true
      });
      $$payload2.out += `<!----></label>`;
    }
  });
  $$payload.out += `<!----> `;
  FlexGroup($$payload, {
    children: ($$payload2) => {
      $$payload2.out += `<label class="svelte-13tohiu">Funding stage <small class="svelte-13tohiu">Current funding status and round</small> `;
      Input($$payload2, {
        type: "text",
        placeholder: "Pre-seed, Seed, Series A",
        name: "fundingStage",
        value: layout.selectedStartup?.fundingStage,
        required: true
      });
      $$payload2.out += `<!----></label> <label class="svelte-13tohiu">Revenue <small class="svelte-13tohiu">MRR or ARR revenue in dollars</small> `;
      Input($$payload2, {
        type: "number",
        step: "0.01",
        placeholder: "2000",
        name: "revenue",
        value: layout.selectedStartup?.revenue,
        required: true
      });
      $$payload2.out += `<!----></label>`;
    }
  });
  $$payload.out += `<!----> <label class="svelte-13tohiu">Number of users <small class="svelte-13tohiu">Active users currently using your product</small> `;
  Input($$payload, {
    type: "number",
    min: 0,
    placeholder: "850",
    name: "number_of_users",
    value: layout.selectedStartup?.number_of_users,
    required: true
  });
  $$payload.out += `<!----></label> <label class="svelte-13tohiu">Tagline <small class="svelte-13tohiu">A short, catchy phrase that describes your business</small> `;
  Input($$payload, {
    type: "text",
    placeholder: "Revolutionizing supply chain with blockchain",
    name: "tagline",
    value: layout.selectedStartup?.tagline,
    required: true
  });
  $$payload.out += `<!----></label> `;
  PrimaryButton($$payload, {
    type: "submit",
    disabled: isLoading,
    children: ($$payload2) => {
      $$payload2.out += `<span>Save information</span>`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></form></main>`;
  pop();
}
export {
  _page as default
};
