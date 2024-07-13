import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../dm-component.js';

describe('DmComponent', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture(html`<dm-component></dm-component>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture(html`<dm-component></dm-component>`);
    el.shadowRoot.querySelector('button').click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`<dm-component title="attribute title"></dm-component>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<dm-component></dm-component>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
