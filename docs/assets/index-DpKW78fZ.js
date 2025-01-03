(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&d(n)}).observe(document,{childList:!0,subtree:!0});function h(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function d(t){if(t.ep)return;t.ep=!0;const e=h(t);fetch(t.href,e)}})();class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${r.styles}</style>
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
    `}}customElements.define("half-top",r);class i extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${i.styles}</style>
      <div></div>
      <button class="button"></button>
      <div></div>
      <button class="button"></button>
      <div class="center"></div>
      <button class="button"></button>
      <div></div>
      <button class="button"></button>
    `}}customElements.define("movement-button",i);class s extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host{
        position: relative;
      }

      .button{
        width: var(--rotate-button-size);
        height: var(--rotate-button-size);
        border-radius: 50%;
        background-color: var(--button-color);
        box-shadow: 1px 3px 3px 1px black;
        cursor: pointer;
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${s.styles}</style>
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
    `}}customElements.define("rotate-button",s);class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
      :host{
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        column-gap: 10%;
      }

      .button{
        width: var(--menu-button-size);
        height: var(--menu-button-size);
        background-color: var(--button-color);
        border-radius: 50%;
        cursor: pointer;
        position: relative;
      }

      .text{
        position: absolute;
        top: 0;
        left: 0;
        font-size: .65rem;
        font-weight: bold;
        margin-block-start: -85%;
        margin-inline-start: -60%;
      }

      .sp{
        margin-inline-start: 0;
      }

    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${a.styles}</style>
    <button class="button"><p class="text">ON/OFF</p></button>
    <button class="button"><p class="text snd">SOUND</p></button>
    <button class="button"><p class="text sp">S/P</p></button>
    <button class="button"><p class="text">RESET</p></button>
    `}}customElements.define("menu-buttons",a);class c extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${c.styles}</style>
    <div class="container">
      <div class="menu">
      <menu-buttons></menu-buttons>
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
    `}}customElements.define("half-bottom",c);class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get styles(){return`
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
    `}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
    <style>${l.styles}</style>
    <div class="container">
      <half-top></half-top>
      <div class="mid"></div>
      <half-bottom></half-bottom>
    </div>
    `}}customElements.define("brick-game-console",l);
