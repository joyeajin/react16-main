import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [videos,setVideos]=useState([]);
  const getMostPopularVideos = async()=>{
    const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=30&regionCode=kr&key=AIzaSyCSSxN2f23KzIiplF1U9AGc-dHhh_llbLA`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('인기동영상목록',data);
    setVideos(data.items)
  }

  const [weather,setWeather] = useState([]);
  const getCurrentWeatherData = async() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=37.543288&lon=126.951544&appid=a6efe9fb6da1d6ec1bf51999b97cbdb7&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log('날씨목록',data);
    setWeather(data)
  }
  useEffect(()=>{
    getMostPopularVideos();
    getCurrentWeatherData();
  },[])
  return (
    <div className="App">
      <h1>
        {weather.name}
      </h1>
      <h2>{weather.main.temp}도</h2>
      {
        videos.map(item=> <div key={item.id}>{item.snippet.title}</div>)
      }
    </div>
  );
}

export default App;
