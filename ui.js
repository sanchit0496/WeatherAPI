
class UI{
    constructor(){
        this.wInfo = document.getElementById('wInfo');
    }

    createUI(city){

        let kel = city.main.temp;
        let currentF = (1.8 * (kel - 273) + 32).toFixed(2);

        let maxkel = city.main.temp_max;
        let maxF = (1.8 * (maxkel - 273) + 32).toFixed(2);

        let minkel = city.main.temp_min;
        let minF = (1.8 * (minkel - 273) + 32).toFixed(2);

        this.wInfo.innerHTML = `
        <div class = "cityname">
            <h4> ${city.name}, ${city.sys.country} </h4>
        </div>
        <div class = "citytemp">
            Temperature: ${currentF}&deg;F
        </div>
        <div class = "cityhumidity">
            Humidity: ${city.main.humidity}%
        </div>
        <div class = "citymax">
            Max Temp: ${maxF}&deg;F
        </div>
        <div class = "citymin">
            Min Temp: ${minF}&deg;F
        </div>
     
    
        `;

    }
}
