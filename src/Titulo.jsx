function Titulo({ nome, paragrafo, cor }) {
  return (
    <div>
      <h2 style={{ color: cor }}>Olá eu sou {nome ? nome : "alguém?"}</h2>
      {paragrafo ? (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          soluta harum nostrum. Alias, officia numquam. Recusandae molestias,
          facilis doloremque, accusantium eaque minima quam incidunt reiciendis
          est odit nemo, placeat voluptates.
        </p>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Titulo;
