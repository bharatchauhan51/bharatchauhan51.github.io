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
            
            fetch(`https://api.openweathermap.org/data/2.5/weather?APPID=83e379c14211a6faba49c4fae33a9e25&lat=${lat}&lon=${lon}`)
                .then(response=>{
                     
                     return response.json();
                     
                })
                 .then(data=>{
                      console.log(data);
                      const{temp}=data.main;
                      const{description}=data.weather[0];
                     let c=(temp-273).toFixed(2);
                      temperatureDegree.textContent= c;
                      temperatureDescription.textContent= description;
                      locationTimezone.textContent=data.name;
                });

                
                const proxy='https://cors-anywhere.herokuapp.com/';
                const api=`${proxy}https://api.darksky.net/forecast/aa574989991652854b1188960af4f62f/${lat},${lon}`;
                fetch(api)
                .then(resp=>{
                    return resp.json();
                })
                .then(data=>{
                    console.log(data);
                    const {icon}=data.currently;
                    console.log(icon);
                    setIcon(icon,document.querySelector(".icon"));
                });
  



        });

    }

    function setIcon(icon,iconId){
        const skycons= new Skycons({color:"white"});
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.set(iconId,Skycons[currentIcon]);

    }


});