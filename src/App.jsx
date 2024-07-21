import { useEffect, useState } from 'react'
import './App.css'

function App() {
 const [images, setImages] = useState([]);
 const [loading, setLoading] = useState(true);

 const apiKey = import.meta.env.VITE_API_KEY;

 useEffect(() => {
  fetch(`https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_API_KEY}`)
  .then(response => response.json())
  .then(data => {
    setImages(data);
    setLoading(false);
  })
  .catch(error => {
    console.log("Found an error!", error);
    setLoading(false);
  })
 },[]);

 return (
   <div className="main-container">
    <h1>Gallery Application</h1>
    {loading && <h1 className="loading">--------------Loading--------------</h1>}
    <div className="images-container">
      {images.map(img => (
        <div key={img.id} className="img-item">
          <img src={img.urls.small} alt={img.description || "Image"} />
        </div>
      ))}
    </div>
   </div>
 );
}

export default App;
