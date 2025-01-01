class RotateButton extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */ `
      :host{

      }
    `;
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */ `
    <style>${RotateButton.styles}</style>
    <div class="container">
    
    </div>
    `
  }
}

customElements.define('rotate-button', RotateButton);