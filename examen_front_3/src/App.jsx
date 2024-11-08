import React, { useState } from 'react';
import Card from './Card';

function App() {
  const [artistName, setArtistName] = useState('');
  const [songTitle, setSongTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleArtistChange = (e) => setArtistName(e.target.value);
  const handleSongChange = (e) => setSongTitle(e.target.value);

  const validateForm = () => {
    if (artistName.trim().length <= 3 || artistName[0] === ' '|| songTitle.length < 6) {
      return false;
    }else{
      return true;
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validateForm()) {
      setSubmittedData({ artistName, songTitle });
      setErrorMessage('');  
    } else {
        setErrorMessage('La información de uno de los inputs no es correcta'); 
    }
  };

  return (
    <div className="App">
      <h1>Información de mi artista</h1>
      <form onSubmit={handleSubmit}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "320px"
        }}>
          <input 
            type="text" 
            placeholder="Ingresa el nombre del artista" 
            value={artistName}
            onChange={handleArtistChange}
          />
          <input 
            type="text" 
            placeholder="Ingresa el título de la canción" 
            value={songTitle}
            onChange={handleSongChange}
          />
          <button type="submit">Enviar</button>
        </div>
      </form>
      
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {submittedData && errorMessage==='' && <Card artistName={submittedData.artistName} songTitle={submittedData.songTitle} />}
    </div>
  );
}

export default App;
