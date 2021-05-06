class Weather{
constructor(){
    this.id = 'bc166effa1cdf88005086f2cd7428bbe';
}
    
    async getWeather(city){

        let a = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bc166effa1cdf88005086f2cd7428bbe`);
        
        let b = await a.json();
        return b;

    }
}
