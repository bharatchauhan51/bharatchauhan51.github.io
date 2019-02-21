window.addEventListener('load',()=>{

    let long;
    let lat;
    let temperatureDescription = document.querySelector(
        ".temperature-description"
    );
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
           // console.log(position);
            lon=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy='https://cors-anywhere.herokuapp.com/';
            console.log(lat);
            const api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}`;
            console.log();
            fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=83e379c14211a6faba49c4fae33a9e25&lat=${lat}&lon=${lon}`)
                .then(response=>{
                     
                     return response.json();
                     
                })
                 .then(data=>{
                      let c;
                      console.log(data);
                      const{temp}=data.main;
                      const{description}=data.weather[0];
                      c=(temp-273.15).toFixed(2);
                      temperatureDegree.textContent= c;
                      temperatureDescription.textContent= description;
                      locationTimezone.textContent=data.name;
                      console.log(description);
                });
        });
    }
});