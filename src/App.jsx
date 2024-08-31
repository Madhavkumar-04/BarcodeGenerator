import React, { useState } from 'react';
import Barcode from 'react-barcode';
import "./App.css"
function App() {
  const [text, setText] = useState('');
  const [barcodeValue, setBarcodeValue] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);  
  };

  const handleGenerate = () => {
    setBarcodeValue(text);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
      <h1>Barcode Generator</h1>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Enter text"
        style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
      />
      <button onClick={handleGenerate} style={{ padding: '10px 20px', cursor: 'pointer' }}>
        Generate Barcode
      </button>
      <div style={{ marginTop: '20px' }}>
        {barcodeValue && <Barcode value={barcodeValue} />}
      </div>
    </div>
  );
}

export default App;
