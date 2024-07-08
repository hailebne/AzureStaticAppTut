import React, {useState, useEffect} from 'react';

function App() {
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);
  const handleInput = (e) => {
    setError('');
    setUrl(e.target.value);
  }
  const handleImageAnalysis = () => {
    if (!isValidUrl(url))
      setError('Invalid URL');
  }

  const handleImageGeneration = () => {

  }

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch(e) {
      return false;
    }
  }

  useEffect(()=>{
    console.log(url)
  },[url]);

  return (
    <div>
      <h1>Computer Vision</h1>
      <span>Insert Url or type prompt:</span>
      <div>
      <input 
        type="text" 
        value={url} 
        onChange={handleInput}
        placeholder='Enter Url or prompt'
      />
      </div>
      {error && <span>{error}</span>}
      <div>
      <button onClick={handleImageAnalysis}>
        Analyze
      </button>
      <button onClick={handleImageGeneration}>
        Generate
      </button>
      </div>
    </div>
  );
}

export default App;
