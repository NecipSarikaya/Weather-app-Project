const buton = document.getElementById("button");
const input = document.getElementById("input");
const container = document.getElementById('sonuc');


buton.addEventListener('click',() =>{
    while ( container.firstChild ) container.removeChild( container.firstChild );
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=96a26fe7e0ac54bbb520ba89b651aacb')
    .then(response => response.json())
    .then(data =>{
        let lat = data['coord']['lat'];
        let lon = data['coord']['lon'];
        let temp = data['main']['temp'];
        temp = temp-273.15;
        temp = temp.toFixed(2);
        let temp_max = data['main']['temp_max'];
        temp_max = temp_max-273.15
        temp_max = temp_max.toFixed(2);
        let temp_min = data['main']['temp_min'];
        temp_min = temp_min-273.15
        temp_min = temp_min.toFixed(2);
        let feels_like = data['main']['feels_like'];
        feels_like = feels_like-273.15
        feels_like = feels_like.toFixed(2);
        let pressure = data['main']['pressure'];
        let name = data['name'];
        let country = data['sys']['country'];
        let description = data['weather'][0]['description'];
        let windspeed = data['wind']['speed'];
        var newDiv = document.createElement("h1"); 
        var newContent = document.createTextNode("Coordinates");     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        var newDiv = document.createElement("div"); 
        var newContent = document.createTextNode("Country :   " + country  + "    " + "City :" + name);     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        var newDiv = document.createElement("div"); 
        var newContent = document.createTextNode("Latitude :   " + lat + "    " + "Longitude :" + lon);     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        var newDiv = document.createElement("h1"); 
        var newContent = document.createTextNode("Temperatures");     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        var newDiv = document.createElement("div"); 
        var newContent = document.createTextNode("Temperature :   " + temp);     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        var newDiv = document.createElement("div"); 
        var newContent = document.createTextNode("Sensible Temperature :   " + feels_like);     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        var newDiv = document.createElement("div"); 
        var newContent = document.createTextNode("Maximum Temperature :   " + temp_max + "    " + "Minimum Temperature :" + temp_min);     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        var newDiv = document.createElement("h1"); 
        var newContent = document.createTextNode("Weather");     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        var newDiv = document.createElement("div"); 
        var newContent = document.createTextNode("How is the Weather :   " + description);     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        var newDiv = document.createElement("h1"); 
        var newContent = document.createTextNode("Wind");     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        var newDiv = document.createElement("div"); 
        var newContent = document.createTextNode("Wind Speed :   " + windspeed );     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
        var newDiv = document.createElement("div"); 
        var newContent = document.createTextNode("Pressure :   " + pressure );     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
    }).catch(() =>{
        var newDiv = document.createElement("h1"); 
        var newContent = document.createTextNode("Please give true City name");     
        newDiv.appendChild(newContent);
        container.appendChild(newDiv);
    })
})