import { LitElement, html, repeat } from '@lion/core';

import { listboxData } from '@lion/listbox/docs/listboxData.js';
import './ss-option.js';

function fetchMyData(val) {
  const results = listboxData.filter(item => item.toLowerCase().includes(val.toLowerCase()));
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([results, results, results]);
    }, 1000);
  });
}

class DemoServerSide extends LitElement {
  static get properties() {
    return { myData: Array, loading: Boolean };
  }

  constructor() {
    super();
    this.myData = [];
  }

  get _combobox() {
    return this.shadowRoot.querySelector('lion-combobox');
  }

  async fetchMyDataAndRender(e) {
    this.loading = true;
    this.myData = await fetchMyData(e.target.value);
    this.loading = false;
    await this.updateComplete;
    this._combobox._handleAutocompletion();
  }

  render() {
    return html`
      <lion-combobox
        name="combo"
        label="Server side completion"
        @input="${this.fetchMyDataAndRender}"
      >
        ${this.loading ? html`<span slot="after" data-description>loading...</span>` : ''}
        <lion-options slot="listbox">
          ${repeat(
            this.myData,
            entry => entry,
            entry => html` <div>Random text</div>
              ${repeat(
                entry,
                result => result,
                result =>
                  html`
                    <ss-option .choiceValue="${result}" href="https://google.com">
                      <div>Some text</div>
                      <span>${result}</span>
                    </ss-option>
                  `,
              )}`,
          )}
        </lion-options>
      </lion-combobox>
    `;
  }
}
customElements.define('demo-server-side', DemoServerSide);
