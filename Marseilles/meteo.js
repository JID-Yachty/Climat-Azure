
const container = document.querySelector('.container');
const left = document.querySelector(' .container .left-info');
var infoToday = document.querySelector('.container .left-info .today-info');
var weatherToday = document.querySelector('.container .left-info .today-weather');
var Rain = document.querySelector('.container .right-info .day-info .rain');
var Humidity = document.querySelector('.container .right-info .day-info .humidity');
var Wind = document.querySelector('.container .right-info .day-info .wind');
var saturday = document.querySelector('.container .right-info .days-list .Saturday');
var sunday = document.querySelector('.container .right-info .days-list .Sunday');
var monday = document.querySelector('.container .right-info .days-list .Monday');
var thuesday = document.querySelector('.container .right-info .days-list .Thuesday');
var Button = document.querySelector('.container .right-info .btn-box .search-box button');
const localisation = document.querySelector('.container .right-info .btn-box .search-box input');
var error404 = document.querySelector('.container .right-info .error_404 .typewrite');

const APIKey = '61425e9baf95432752f2e45d691a4595'; // Good 
async function postData(url="") {
    const reponse = await fetch(url);
    const page = await reponse.json();
    console.log(page);
    new weatherToday.getElementById('temp') = json.main.temp + '°';
    Humidity.getElementsByClassName('value').innerHTML = json.main.humidity + '%';
    Wind.getElementsByClassName('value').innerHTML = json.wind.speed + 'km/h';
    weatherToday.getElementById('description').innerHTML = json.weather.description; 
    infoToday.getElementById('region').innerHTML = json.name + ',' + json.sys.country;
    Rain.getElementsByClassName('value').innerHTML = json.clouds.all; 
    let date1 = new Date();
    let jourLocale = date1.toLocaleString('fr-FR',{weekday: 'long',});
    infoToday.getElementById('jour').innerHTML = jourLocale; 
    let dateLocale = date1.toLocaleString('fr-FR',{
        year: 'numeric',
        month: 'long',
        day: 'numeric'});
    infoToday.getElementbyId('date').innerHTML = dateLocale;
    return;
}

window.onload = function(){
    new postData('https://api.openweathermap.org/data/2.5/weather?q=Marseilles&units=metric&appid='+APIKey);
    return; 
};

    

Button.addEventListener('click', () =>{
    var city = localisation.value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+APIKey).then(response => response.json()).then(json =>{


        if(json.cod === '404'){ 
            infoToday.style.display = 'none';
            weatherToday.style.display = 'none';
            Rain.style.display='none';
            Humidity.style.display='none';
            Wind.style.display='none';
            saturday.style.display='none';
            sunday.style.display='none';
            monday.style.display='none';
            thuesday.style.display='none';
            //https://css-tricks.com/snippets/css/typewriter-effect/ seul balise script copié
            var TxtType = function(el, toRotate, period) {
                this.toRotate = toRotate;
                this.el = el;
                this.loopNum = 0;
                this.period = parseInt(period, 10) || 2000;
                this.txt = '';
                this.tick();
                this.isDeleting = false;
            };

            TxtType.prototype.tick = function() {
                var i = this.loopNum % this.toRotate.length;
                var fullTxt = this.toRotate[i];
                    if (this.isDeleting) {
                    this.txt = fullTxt.substring(0, this.txt.length - 1);
                    } else {
                    this.txt = fullTxt.substring(0, this.txt.length + 1);
                    }

                    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

                    var that = this;
                    var delta = 200 - Math.random() * 100;

                    if (this.isDeleting) { delta /= 2; }

                    if (!this.isDeleting && this.txt === fullTxt) {
                    delta = this.period;
                    this.isDeleting = true;
                    } else if (this.isDeleting && this.txt === '') {
                    this.isDeleting = false;
                    this.loopNum++;
                    delta = 500;
                    }

                    setTimeout(function() {
                    that.tick();
                    }, delta);
                };


                var elements = error404;
                for (var i=0; i<elements.length; i++) {
                    var toRotate = elements[i].getAttribute('data-type');
                    var period = elements[i].getAttribute('data-period');
                        if (toRotate) {
                    new TxtType(elements[i], JSON.parse(toRotate), period);
                    }
                }
            return;
        }
        console.log(localisation.value); 
        switch (localisation.value){
            case 'Nice':
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".left-info{ background: url("/"https://i.pinimg.com/564x/48/34/81/4834810ed95b89335cdf3e06c33b031d.jpg"/"); }";
                left.appendChild(css);
                break; 

            case 'Marseille':
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".left-info{ background: url("+"Marseilles.gif"+"); }";
                left.appendChild(css);
                break; 

            case 'Cannes':
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".left-info{ background: url("+"Cannes.gif"+"); }";
                left.appendChild(css);
                break; 

            case 'Saint-Tropez':
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".left-info{ background: url("+"Sainttropez.gif"+"); }";
                left.appendChild(css);
                break; 

            case 'Menton':
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".left-info{ background: url("+"Menton.gif"+"); }";
                left.appendChild(css);
                break;

            case 'Eze':
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".left-info{ background: url("+"Eze.gif"+"); }";
                left.appendChild(css);
                break;
            case '': 
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".left-info{ background: url("+"https://i.pinimg.com/564x/48/34/81/4834810ed95b89335cdf3e06c33b031d.jpg"+"); }";
                left.appendChild(css);
            default: 
                var css = document.createElement("style");
                css.type = "text/css";
                css.innerHTML = ".left-info{ background: #232931; }";
                left.appendChild(css);
                break;
        }
        weatherToday.getElementById('temp').innerHTML = json.main.temp + '°';
        Humidity.getElementsByClassName('value').innerHTML = json.main.humidity + '%';
        Wind.getElementsByClassName('value').innerHTML = json.wind.speed + 'km/h';
        weatherToday.getElementById('description').innerHTML = json.weather.description; 
        infoToday.getElementById('region').innerHTML = json.name + ',' + json.sys.country;
        Rain.getElementsByClassName('value').innerHTML = json.clouds.all; 
        let date1 = new Date();
        let jourLocale = date1.toLocaleString('fr-FR',{weekday: 'long',});
        infoToday.getElementById('jour').innerHTML = jourLocale; 
        console.log(jourLocale);
        switch (jourLocale){
            case 'lundi':
                saturday.getElementsByClassName('daysjour').innerHTML = 'Mar';
                sunday.getElementsByClassName('daysjour').innerHTML = 'Mer';
                monday.getElementsByClassName('daysjour').innerHTML = 'Jeu';
                thuesday.getElementsByClassName('daysjour').innerHTML = 'Ven';
                break; 

            case 'mardi':
                saturday.getElementsByClassName('daysjour').innerHTML = 'Mer';
                sunday.getElementsByClassName('daysjour').innerHTML = 'Jeu';
                monday.getElementsByClassName('daysjour').innerHTML = 'Ven';
                thuesday.getElementsByClassName('daysjour').innerHTML = 'Sam';
                break; 

            case 'mercredi':
                saturday.getElementsByClassName('daysjour').innerHTML = 'Jeu';
                sunday.getElementsByClassName('daysjour').innerHTML = 'Ven';
                monday.getElementsByClassName('daysjour').innerHTML = 'Sam';
                thuesday.getElementsByClassName('daysjour').innerHTML = 'Dim';
                break; 

            case 'jeudi':
                saturday.getElementsByClassName('daysjour').innerHTML = 'Ven';
                sunday.getElementsByClassName('daysjour').innerHTML = 'Sam';
                monday.getElementsByClassName('daysjour').innerHTML = 'Dim';
                thuesday.getElementsByClassName('daysjour').innerHTML = 'Lun';
                break; 

            case 'vendredi':
                saturday.getElementsByClassName('daysjour').innerHTML = 'Sam';
                sunday.getElementsByClassName('daysjour').innerHTML = 'Dim';
                monday.getElementsByClassName('daysjour').innerHTML = 'Lun';
                thuesday.getElementsByClassName('daysjour').innerHTML = 'Mar';
                break;

            case 'samedi':
                saturday.getElementsByClassName('daysjour').innerHTML = 'Dim';
                sunday.getElementsByClassName('daysjour').innerHTML = 'Lun';
                monday.getElementsByClassName('daysjour').innerHTML = 'Mar';
                thuesday.getElementsByClassName('daysjour').innerHTML = 'Mer';
                break;
    
            case 'dimanche':
                saturday.getElementsByClassName('daysjour').innerHTML = 'Lun';
                sunday.getElementsByClassName('daysjour').innerHTML = 'Mar';
                monday.getElementsByClassName('daysjour').innerHTML = 'Mer';
                thuesday.getElementsByClassName('daysjour').innerHTML = 'Jeu';
                break; 

            default: 
                saturday.getElementsByClassName('daysjour').innerHTML = 'Err';
                sunday.getElementsByClassName('daysjour').innerHTML = 'Err';
                monday.getElementsByClassName('daysjour').innerHTML = 'Err';
                thuesday.getElementsByClassName('daysjour').innerHTML = 'Err';
                break;
        }
        let dateLocale = date1.toLocaleString('fr-FR',{
            year: 'numeric',
            month: 'long',
            day: 'numeric'});
        infoToday.getElementbyId('date').innerHTML = dateLocale;
        return; 
    });
    return; 
});
