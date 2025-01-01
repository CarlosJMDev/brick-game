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
        --mid-height: 100px;

        --movement-button-size: 28px;

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
        justify-content: space-between;
        align-items: center;
      }

      .mid{
        height: var(--mid-height);
        width: 100%;
        // background-color: black;
        // border-radius: 10px 5px 10px 5px / 10px 5px 10px 5px;
        
        border-radius: 20px 20px 15px 15px;
        box-shadow: 0 3px 3px 1px black, 0 2px 10px white inset, 0 -1px 0px 0px gray;
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