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
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy='https://cors-anywhere.herokuapp.com/';
            const api=`${proxy}https://api.darksky.net/forecast/aa574989991652854b1188960af4f62f/${lat},${long}`;
            console.log();
            fetch(api)
                .then(response=>{
                     //console.log(response);
                     return response.json();
                })
                 .then(data=>{
                      
                      const{temperature,summary}=data.currently;
                      temperatureDegree.textContent= temperature;
                      console.log(temperatureDegree);
                });
        });
    }
});