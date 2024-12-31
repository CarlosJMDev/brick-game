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
        // background-color: green;
      }

      .container{
        width: 100%;
        height: 100%;
        background-color: blue;
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
    </div>
    `
  }
}

customElements.define('half-bottom', HalfBottom);