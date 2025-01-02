class MovementButton extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */ `
      :host{
        width: 40%;
        height: 80%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        justify-content: center;
        justify-items: center;
        align-items: center;
      }

      .button {
        cursor: pointer;
        width: var(--movement-button-size);
        height: var(--movement-button-size);
        background-color: var(--button-color);
        border-radius: 50%;
        box-shadow: 1px 3px 3px black;
      }
      .button:nth-child(3){
        margin-block-end: -20%;
      }
      .button:nth-child(5){
        margin-inline-end: -50%;
      }
      .button:nth-child(7){
        margin-inline-start: -50%;
      }
      .button:nth-child(9){
        margin-block-start: -20%;
      }

      .center{
        width: 90%;
        height: 90%;
        background-color: black;
        clip-path: polygon(40% 40%, 50% 20%, 60% 40%, 80% 50%, 60% 60%, 50% 80%, 40% 60%, 20% 50%, 40% 40%, 40% 60%, 60% 60%, 60% 40%);
      }
    `;
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */ `
    <style>${MovementButton.styles}</style>
      <div></div>
      <button class="button"></button>
      <div></div>
      <button class="button"></button>
      <div class="center"></div>
      <button class="button"></button>
      <div></div>
      <button class="button"></button>
    `
  }
}

customElements.define('movement-button', MovementButton);