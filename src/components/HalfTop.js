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
        border-radius: 20px 20px 0 0;
        display: flex;
        flex-direction: column;
      }

      .top,
      .bottom {
        width: 100%;
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--white-color);
        font-family: "Garamond", Verdana, Arial, sans-serif;
        font-weight: bolder;
        font-size: 1.3rem;
      }

      .mid{
        width: 100%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .side {
        background-color: var(--white-color);
        height: 100%;
        width: 15%;
      }

      .side:nth-child(1),
      .side:nth-child(3){
        clip-path: polygon(40% 10%, 50% 35%, 40% 35%, 50% 60%, 40% 60%, 60% 85%, 60% 60%, 70% 60%, 60% 35%, 70% 35%, 60% 10%);
      }

      .side:nth-child(3){
        transform: rotateY(180deg);
      }

      .screen {
        height: 100%;
        width: 70%;
        box-shadow: 0 0 4px 2px black inset;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .image {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    `
  }

  connectedCallback(){
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = /* html */ `
    <style>${HalfTop.styles}</style>
    <div class="top"></div>
    <div class="mid">
      <div class="side"></div>
      <div class="screen">
        <picture>
          <source srcset="./screen.avif" type="image/avif">
          <source srcset="./screen.webp" type="image/webp">
          <img src="./screen.png" type="image/jpeg" alt="Screen" class="image">
        </picture>
      </div>
      <div class="side"></div>
    </div>
    <div class="bottom">CLASSIC</div>
    `
  }
}

customElements.define('half-top', HalfTop);