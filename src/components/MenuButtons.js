class MenuButtons extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }
  static get styles(){
    return /* css */ `
      :host{
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 10%;
      }

      .button{
        width: var(--menu-button-size);
        height: var(--menu-button-size);
        background-color: var(--button-color);
        border-radius: 50%;
        cursor: pointer;
        position: relative;
      }

      .text{
        position: absolute;
        top: 0;
        left: 0;
        font-size: .65rem;
        font-weight: bold;
        margin-block-start: -85%;
        margin-inline-start: -60%;
      }

      .sp{
        margin-inline-start: 0;
      }

    `
  }
  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */ `
    <style>${MenuButtons.styles}</style>
    <button class="button"><p class="text">ON/OFF</p></button>
    <button class="button"><p class="text snd">SOUND</p></button>
    <button class="button"><p class="text sp">S/P</p></button>
    <button class="button"><p class="text">RESET</p></button>
    `
  }
}

customElements.define('menu-buttons', MenuButtons);