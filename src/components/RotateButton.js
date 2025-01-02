class RotateButton extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
  }

  static get styles(){
    return /* css */ `
      :host{
        position: relative;
      }

      .button{
        width: var(--rotate-button-size);
        height: var(--rotate-button-size);
        border-radius: 50%;
        background-color: var(--button-color);
        box-shadow: 1px 3px 3px 1px black;
      }

      .text,
      .arrow {
        position: absolute;
        top: 0;
        right: 0;
        font-weight: bold;
      }

      .text:nth-child(2){
        transform: rotate(45deg);
        margin-block-start: -22%;
        margin-inline-end: -10%;
      }
      .text:nth-child(3){
        transform: rotate(70deg);
        margin-block-start: -0%;
        margin-inline-end: -22%;
      }
      .text:nth-child(4){
        transform: rotate(80deg);
        margin-block-start: 25%;
        margin-inline-end: -25%;
      }
      .text:nth-child(5){
        transform: rotate(100deg);
        margin-block-start: 50%;
        margin-inline-end: -30%;
      }
      .text:nth-child(6){
        transform: rotate(115deg);
        margin-block-start: 70%;
        margin-inline-end: -20%;
      }
      .text:nth-child(7){
        transform: rotate(125deg);
        margin-block-start: 90%;
        margin-inline-end: -5%;
      }

      .arrow{
        transform: rotate(40deg);
        margin-block-start: -38%;
        margin-inline-end: 22%;
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
      <button class="button"></button>
      <p class="text">R</p>
      <p class="text">O</p>
      <p class="text">T</p>
      <p class="text">A</p>
      <p class="text">T</p>
      <p class="text">E</p>
      <div class="arrow">
        <svg fill="#000000" height="25px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200.013 200.013" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M197.007,48.479L139.348,0v28.623C63.505,32.538,3.006,95.472,3.006,172.271v27.741h40.099v-27.741 c0-54.682,42.527-99.614,96.243-103.47v28.156L197.007,48.479z"></path> </g></svg>
      </div>
    </div>
    `
  }
}

customElements.define('rotate-button', RotateButton);