import './MovementButton';
import './RotateButton';
class HalfBottom extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */ `
      :host{
        position: relative;
        width: var(--container-width);
        height: var(--half-height);
        // background-color: blue;
        border-radius: 0 0 20px 20px;
      }

      .container{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .menu {
        width: 100%;
        height: 20%;
        // background-color: red;
      }

      .movement-buttons {
        width: 80%;
        height: 35%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .logo {
        width: 100%;
        height: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
    `
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */ `
    <style>${HalfBottom.styles}</style>
    <div class="container">
      <div class="menu">
      </div>
      <div class="movement-buttons">
        <movement-button></movement-button>
        <rotate-button></rotate-button>
      </div>
      <div class="logo">
        <picture>
          <source srcset="./logo.avif" type="image/avif">
          <source srcset="./logo.webp" type="image/webp">
          <img src="./logo.png" alt="logo" width="80%" height="90%">
        </picture>
      </div>
    </div>
    `
  }
}

customElements.define('half-bottom', HalfBottom);