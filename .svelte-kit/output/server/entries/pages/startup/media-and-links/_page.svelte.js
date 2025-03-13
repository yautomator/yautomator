import { m as attr, k as pop, p as push } from "../../../../chunks/index.js";
import "../../../../chunks/client.js";
import { B as Breadcrumb } from "../../../../chunks/Breadcrumb.js";
import { I as Input, l as layout, P as PrimaryButton, S as SelectedStartupIcon } from "../../../../chunks/Input.js";
import { F as FileUpload } from "../../../../chunks/FileUpload.js";
import "nprogress";
function _page($$payload, $$props) {
  push();
  let isLoading = false;
  $$payload.out += `<header class="svelte-13tohiu">`;
  {
    let base = function($$payload2) {
      SelectedStartupIcon($$payload2);
    }, current = function($$payload2) {
      $$payload2.out += `<span>Media &amp; Links</span>`;
    };
    Breadcrumb($$payload, {
      base,
      current
    });
  }
  $$payload.out += `<!----></header> <main class="svelte-13tohiu"><form method="POST" enctype="multipart/form-data" class="svelte-13tohiu"><h1 class="svelte-13tohiu">Media &amp; Links</h1> <input type="hidden" name="id"${attr("value", layout.selectedStartup?._id)}> <label class="svelte-13tohiu">Website URL <small class="svelte-13tohiu">Your official website or landing page</small> `;
  Input($$payload, {
    type: "url",
    placeholder: "https://www.example.com",
    name: "websiteUrl",
    value: layout.selectedStartup?.websiteUrl
  });
  $$payload.out += `<!----></label> <label class="svelte-13tohiu">Pitch Deck `;
  FileUpload($$payload, {
    placeholder: "Pitch Deck",
    name: "pitchDeck",
    selectedFileName: layout.selectedStartup?.pitchDeckName
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
