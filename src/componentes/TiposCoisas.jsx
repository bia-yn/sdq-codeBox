import React from "react";
import medico from "../img/medico.png";
import remedios from "../img/remedios.png";
import caixadeconversa from "../img/caixadeconversa.png";

function TiposCoisas() {
  return (
    <>
      <h1 id="certificados">Certificados.Eficazes.Humanos</h1>

      <div>
        <img class="tiposfts" src="medico" alt="medico" />
        <img class="tiposfts" src="remedios" alt="remedios" />
        <img class="tiposfts" src="caixadeconversa" alt="conversa" />
      </div>

      <div class="ir">
        <h3>AGENDA MÉDICA</h3>
        <p>Agendar sua consulta médica.</p>
        <button class="butaoP" onclick="">
          {" "}
          CONSULTAR
        </button>
      </div>

      <div class="ir">
        <h3>CONSULTAR REMÉDIOS</h3>
        <p>Consultar remédios disponiveis.</p>
        <button class="butaoP" onclick="">
          {" "}
          CONSULTAR
        </button>
      </div>

      <div class="ir">
        <h3>FALE CONOSCO</h3>
        <p>Tire suas dúvidas.</p>
        <button class="butaoP" onclick="">
          {" "}
          FALE CONOSCO
        </button>
      </div>
    </>
  );
}

export default TiposCoisas;
