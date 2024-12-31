class HalfTop extends HTMLElement{
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
        background-color: green;
      }

      .container{
        width: 100%;
        height: 100%;
        // background-color: green;
      }
    `
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */ `
    <style>${HalfTop.styles}</style>
    <div class="container">
    </div>
    `
  }
}

customElements.define('half-top', HalfTop);