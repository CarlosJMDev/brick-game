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

        --menu-button-size: 20px;
        --movement-button-size: 28px;
        --rotate-button-size: 50px;

        --background-color-lighten: #6296ff;
        --background-color: #2d73fe;
        --background-color-darken: #1d61e9;
        --button-color: #f0c800;
        --white-color: #d8d8d8;
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
        box-shadow: 0 3px 3px 1px var(--background-color-darken), 0 2px 10px 2px var(--background-color-lighten) inset, 0 -1px 2px 1px var(--background-color-darken);
      }

      .mid{
        height: var(--mid-height);
        width: 100%;
        border-radius: 20px 20px 15px 15px;
        box-shadow: 0 3px 6px 1px var(--background-color-darken), 
                    0 4px 10px 4px var(--background-color-lighten) inset,
                    0 -1px 3px 0px var(--background-color-darken),
                    -2px 0px 6px 2px var(--background-color-lighten) inset;
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