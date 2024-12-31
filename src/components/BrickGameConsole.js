import './HalfTop';
import './HalfBottom';
class BrickGameConsole extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }
  static get styles() {
    return /* css */ `
      :host{
        --container-width: 306px;
        --container-height: 708px;

        --half-height: 300px;
        --mid-height: 108px;

        --background-color: #2d73fe;
        --button-color: #f0c800;

      }

      .container{
        width: var(--container-width);
        height: var(--container-height);
        background-color: var(--background-color);
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        // justify-content: center;
        align-items: center;
      }

      .mid{
        height: var(--mid-height);
      }
    `
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */`
    <style>${BrickGameConsole.styles}</style>
    <div class="container">
      <half-top></half-top>
      <div class="mid"></div>
      <half-bottom></half-bottom>
    </div>
    `
  }
}

customElements.define('brick-game-console', BrickGameConsole);