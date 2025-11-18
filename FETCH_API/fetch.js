const apiKey = "ef91d361e5053519f44d496b5ae2197e"; // Replace with your actual OpenWeatherMap API key
//const city = "London"; // Replace with the desired city






/* fetch(apiUrl)
      .then(response => {


        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
         return response.json();
      })
      .then(data => console.log(data.main))
      .catch(error => console.log(error)); */


 //USING ASYN AND AWAIT
 
 async function fetchData() {
  try {
    const weatherName = document.getElementById("weatherName").value.trim();
    if (!weatherName) return;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(weatherName)}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Could not fetch resource');

    const data = await response.json();

    const iconCode = data.weather?.[0]?.icon;
    const imgElement = document.getElementById("weatherCloudy");

    if (iconCode) {
      imgElement.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      imgElement.alt = data.weather[0].description || 'weather icon';
      imgElement.style.display = 'inline-block';
    } else {
      imgElement.src = '';
      imgElement.style.display = 'none';
    }

    console.log(data); // inspect full response in DevTools
  } catch (err) {
    console.error(err);
    alert('Error: ' + (err.message || err));
  }
}
