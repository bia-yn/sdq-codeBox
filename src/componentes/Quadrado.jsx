import React from "react";

function Quadrado() {
  return (
    <div id="farmaceutica">
      <div id="quadrado1">
        <h1 id="saude">Saúde quando você mais precisa.</h1>
        <div class="butoesPjuntos">
          <a href="#fazerlogin">
            <button class="butaoP" id="login" onclick="onclick">
              FAZER LOGIN
            </button>
          </a>
          <a href="#">
            <button id="cadastro" onclick="#">
              CADASTRAR
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Quadrado;
