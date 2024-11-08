//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card(props) {
  return (
    <div style={{
      border: "1px solid black",
      padding: "20px",
      marginTop: "20px",
      maxWidth: "320px"
    }}>
      <h2>Detalles del Artista</h2>
      <p><strong>Nombre del Artista:</strong> {props.artistName}</p>
      <p><strong>Título de la Canción:</strong> {props.songTitle}</p>
    </div>
  );
}

export default Card;
