import React from "react";
import logo from "../img/logo.png";
import ftcll from "../img/Phone.png";

function MenuF() {
  return (
    <>
      <footer>
        <img id="ftlgf" src="logo" alt="logo" />

        <div id="menuf">
          <h2>SDQ</h2>
          <h2>MENU</h2>
          <h2>CONTATO</h2>
        </div>

        <div class="menufo">
          <a href="/principal.html">
            <p>PAGINA INCIAL</p>
          </a>
          <a href="agendar">
            <p>AGENDE SUA CONSULTA</p>
          </a>
          <a href="#comofunciona">
            <p>COMO FUNCIONA</p>
          </a>
        </div>

        <div class="contato">
          <a href="">
            <p>(82) 98644553</p>
          </a>
          <a href="">
            <p>info@meusite.com</p>
          </a>
        </div>
        <h3 id="mobile">Mobile APP</h3>
        <img id="ftcll" src="Phone" alt="app-SDQ" />
      </footer>
    </>
  );
}

export default MenuF;
