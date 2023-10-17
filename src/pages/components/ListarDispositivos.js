import React from 'react';

export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/broker_client/');
  const dtos = await data.json();

  return {
    props: { dtos },
  };
}

export default function ListarDispositivo(props) {
  const { dtos } = props;

  return (
    <div>
      {dtos.map(dtos => (
        <fieldset className="divs" key={dtos.id}>
          <div>
            <label className="nomes">{dtos.name}</label>
          </div>
          <div>
            <button><img src="/images/lixo.png" /></button>
            <a href="editar"><button><img src="/images/lapis.png" /></button></a>
            <a href="detalhar"><button><img src="/images/lupa.png" /></button></a>
            <button><img src="/images/computador.png" /></button>
          </div>
        </fieldset>
      ))}
    </div>
  );
}
