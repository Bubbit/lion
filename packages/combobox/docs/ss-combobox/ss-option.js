import { LionOption } from '@lion/listbox/';
import { LinkMixin } from '../LinkMixin.js';

export class ServerSideOption extends LinkMixin(LionOption) {}

customElements.define('ss-option', ServerSideOption);
