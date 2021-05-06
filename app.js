let weather = new Weather();
let ui = new UI();

const city = document.getElementById('cityName');
city.addEventListener('keyup', getInfo);

function getInfo(e){
    
    if(e.target.value != ""){
        let r = e.target.value;

        let p = weather.getWeather(r)
        .then(data => {
            ui.createUI(data);
            console.log(data);
        });
    }else{
        document.getElementById('wInfo').innerHTML = "No such city exists!"
    }
}
