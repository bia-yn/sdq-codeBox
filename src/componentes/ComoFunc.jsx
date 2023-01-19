import React from "react";
import telefone from "../img/telefone.png";
import conversa from "../img/conversa.png";
import caderno from "../img/caderno.png";
import calendario from "../img/calendario.png";

function ComoFunc() {
  return (
    <>
      <div class="funciona">
        <a href="#comofunciona" id="linkcomof">
          <h1 id="comofunciona"> Como funciona</h1>
        </a>
        <img id="telefone" src="telefone" alt="telefone" />
      </div>

      <img class="fototipos" src="conversa" alt="caixaconversa" />
      <div class="funcionatipos">
        <h3 id="fale">FALE CONOSCO</h3>
        <p class="funcionaP">Tire suas duvidas</p>
      </div>

      <img class="fototipos" src="caderno" alt="remedios" />
      <div class="funcionatipos">
        <h3 id="consulte">CONSULTE OS REMÉDIOS</h3>
        <p class="funcionaP">quais remédios estão disponiveis</p>
      </div>

      <img class="fototipos" src="calendario" alt="calendario" />
      <div class="funcionatipos">
        <h3 id="agendar">AGENDAR CONSULTAS</h3>
        <p class="funcionaP">Sabendo o que é melhor para você e para nós</p>
      </div>
    </>
  );
}

export default ComoFunc;
