
// Get Api clé de la météo
const regex = /x/i;
const APIKey = "61425e9baf95432752f2e45d691a4595"; 

window.onload = () => {
    //Initialiser la page avec les données sur Marseilles 
    const marseilles = getWeatherData("Marseille"); 
    displayWeatherInfo(marseilles);
    var background = document.querySelector(".left-info");
    background.style.backgroundImage = "url('https://i.pinimg.com/564x/48/34/81/4834810ed95b89335cdf3e06c33b031d.jpg')";
}

function getCity() {
    var jour =  document.querySelector(".jour");
    jour.innerHTML = 'x';
    var region = document.querySelector(".region");
    region.innerHTML = 'x';
    var temps = document.querySelector(".temp"); 
    temps.innerHTML = 'x'+'°';
    var date = document.querySelector(".date");
    date.innerHTML = 'x';
    var Description = document.querySelector(".desc");
    Description.innerHTML = 'x';
    var Rain = document.querySelector(".prec");
    Rain.innerHTML = 'x'+'xhPa';
    var Mercure = document.querySelector(".merc");
    Mercure.innerHTML = 'x'+'mmHg';
    var Humidity = document.querySelector(".hum");
    Humidity.innerHTML = 'x'+'%';
    var Wind = document.querySelector(".win");
    Wind.innerHTML = 'x'+'km/h';
    var cityImput = document.querySelector(".cityImput");
    const ville = cityImput.value;
    const weatherData = getWeatherData(ville); 
    displayWeatherInfo(weatherData); 
}

localisation.addEventListener( "submit" , async event => {
    
    emoji.className = 'bx bx-sun'; 

    if (main.classList.length != 0){
        main.classList.remove('active'); 
    }

    event.preventDefault(); 

    const city = cityImput.value; 

    if(city){
        try{
            const weatherData = await getWeatherData(city); 
            displayWeatherInfo(weatherData); 
        }
        catch(error){
            console.error(error); 
            displayError(); 
        }
    } else{
        displayError("please enter a city"); 
    }
}); 
async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

    const response = await fetch(apiUrl); 

    if(!response.ok){
        throw displayError(); 
    }

    return await response.json();
}

function displayWeatherInfo(data){
    data.then(meteo => {
        const ville = meteo.name; // fetched meteo
        const Temp = meteo.main.temp; 
        const humidity = meteo.main.humidity; 
        const pressure = meteo.main.pressure;
        const description = meteo.weather[0].description; 
        const id = parseInt(meteo.weather[0].id);
        const country = meteo.sys.country;
        const speed = meteo.wind.speed; 

        var temps = document.querySelector(".temp"); 
        var cityImput = document.querySelector(".cityImput");
        var main = document.querySelector("main"); 
        var jour =  document.querySelector(".jour");
        var date = document.querySelector(".date");
        var region = document.querySelector(".region");
        var temps = document.querySelector(".temp");
        var Description = document.querySelector(".desc");
        var Rain = document.querySelector(".prec");
        var Mercure = document.querySelector(".merc");
        var Humidity = document.querySelector(".hum");
        var Wind = document.querySelector(".win");
        var emoji = document.querySelector(".emoji"); 

        temps.innerHTML = temps.innerHTML.replace(regex, `${Temp}`);
        Humidity.innerHTML = Humidity.innerHTML.replace(regex, `${humidity}`);
        Wind.innerHTML = Wind.innerHTML.replace(regex,`${speed}`);
        Description.innerHTML = Description.innerHTML.replace(regex, `${description}`);
        region.innerHTML = region.innerHTML.replace(regex, `${ville}` + ',' + `${country}`);  
        Rain.innerHTML = Rain.innerHTML.replace(regex, `${pressure}`); 
        Mercure.innerHTML = Mercure.innerHTML.replace(regex, `${((pressure)/(1+(1/3))).toFixed(2)}`);
        let date1 = new Date();
        let jourLocale = date1.toLocaleString('fr-FR',{weekday: 'long'}); 
        jour.innerHTML = jour.innerHTML.replace(regex,jourLocale); 
        postDays(jourLocale);
        displayBackground(ville);
        let dateLocale = date1.toLocaleString('fr-FR',{
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        date.innerHTML = date.innerHTML.replace(regex,dateLocale);

        displayEmoji(id); 
    });
}

function displayEmoji(weatherid){
    alert(weatherid);
    var emoji = document.getElementById("emoji");
    switch(weatherid){
        case(weatherid >= 200 && weatherid < 300): 
            emoji.className = 'bx bx-cloud-lightning';
            return; 
        case(weatherid >= 300 && weatherid < 400):
            emoji.className = 'bx bx-cloud-drizzle';
            return; 
        case(weatherid >= 500 && weatherid < 600): 
            emoji.className = 'bx bx-cloud-rain';
            return;   
        case(weatherid >= 600 && weatherid < 700): 
            emoji.className = 'bx bx-cloud-snow';
            return; 
        case(weatherid >= 700 && weatherid < 800):
            emoji.className = 'bx bx-water'; 
            return;   
        case(weatherid = 800): 
            emoji.className = 'bx bx-sun';
            return 'bx bx-sun';
        case(weatherid >= 801 && weatherid < 810 ): 
            emoji.className = 'bx bx-cloud';
            return;
        default: 
            emoji.className = 'bx bx-message-alt-x';
            return;
    }
}
function displayBackground(ville=""){ 
    var background = document.querySelector(".left-info");
    switch (ville){
        case 'Arrondissement de Nice':
            background.style.backgroundImage = "url(Nice.gif)";
            return;

        case 'Arrondissement de Marseille':
            background.style.backgroundImage = "url('https://i.pinimg.com/564x/48/34/81/4834810ed95b89335cdf3e06c33b031d.jpg')";
            return;

        case 'Cannes':
            background.style.backgroundImage = "url('Cannes.gif')";
            return;

        case 'Saint Tropez':
            background.style.backgroundImage = "url('Sainttropez.gif')";
            return;

        case 'Menton':
            background.style.backgroundImage = "url('Menton.gif')";
            return;

        case 'Èze':
            background.style.backgroundImage = "url('Eze.gif')";
            return;
        case '': 
            return "url('https://i.pinimg.com/564x/48/34/81/4834810ed95b89335cdf3e06c33b031d.jpg')";
        default: 
            return "#232931"; 
    }
}

function postDays(j=""){
    var saturday = document.querySelector(".Saturday");
    var sunday = document.querySelector(".Sunday");
    var monday = document.querySelector(".Monday");
    var thuesday = document.querySelector(".Thuesday");
    var error404 = document.querySelector(".typewrite");
    switch (j){
        case 'lundi':
            saturday.innerHTML = saturday.innerHTML.replace(regex,'Mar'); 
            sunday.innerHTML = sunday.innerHTML.replace(regex,'Mer'); 
            monday.innerHTML = monday.innerHTML.replace(regex,'Jeu'); 
            thuesday.innerHTML = thuesday.innerHTML.replace(regex,'Ven'); 
            break;  

        case 'mardi':
            saturday.innerHTML = saturday.innerHTML.replace(regex,'Mer'); 
            sunday.innerHTML = sunday.innerHTML.replace(regex,'Jeu'); 
            monday.innerHTML = monday.innerHTML.replace(regex,'Ven'); 
            thuesday.innerHTML = thuesday.innerHTML.replace(regex,'Sam');
            break; 

        case 'mercredi':
            saturday.innerHTML = saturday.innerHTML.replace(regex,'Jeu'); 
            sunday.innerHTML = sunday.innerHTML.replace(regex,'Ven'); 
            monday.innerHTML = monday.innerHTML.replace(regex,'Sam'); 
            thuesday.innerHTML = thuesday.innerHTML.replace(regex,'Dim');
            break; 

        case 'jeudi':
            saturday.innerHTML = saturday.innerHTML.replace(regex,'Ven'); 
            sunday.innerHTML = sunday.innerHTML.replace(regex,'Sam'); 
            monday.innerHTML = monday.innerHTML.replace(regex,'Dim'); 
            thuesday.innerHTML = thuesday.innerHTML.replace(regex,'Lun');
            break; 

        case 'vendredi':
            saturday.innerHTML = saturday.innerHTML.replace(regex,'Sam'); 
            sunday.innerHTML = sunday.innerHTML.replace(regex,'Dim'); 
            monday.innerHTML = monday.innerHTML.replace(regex,'Lun'); 
            thuesday.innerHTML = thuesday.innerHTML.replace(regex,'Mar');
            break;

        case 'samedi':
            saturday.innerHTML = saturday.innerHTML.replace(regex,'Dim'); 
            sunday.innerHTML = sunday.innerHTML.replace(regex,'Lun'); 
            monday.innerHTML = monday.innerHTML.replace(regex,'Mar'); 
            thuesday.innerHTML = thuesday.innerHTML.replace(regex,'Mer');
            break;

        case 'dimanche':
            saturday.innerHTML = saturday.innerHTML.replace(regex,'Lun'); 
            sunday.innerHTML = sunday.innerHTML.replace(regex,'Mar'); 
            monday.innerHTML = monday.innerHTML.replace(regex,'Mer'); 
            thuesday.innerHTML = thuesday.innerHTML.replace(regex,'Jeu');
            break; 

        default: 
            saturday.innerHTML = saturday.innerHTML.replace(regex,'Err'); 
            sunday.innerHTML = sunday.innerHTML.replace(regex,'Err'); 
            monday.innerHTML = monday.innerHTML.replace(regex,'Err'); 
            thuesday.innerHTML = thuesday.innerHTML.replace(regex,'Err');
            break;
    }
}

function displayError(){
    main.classList.add('active'); 
    var elements = error404;
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtType(elements[i], JSON.parse(toRotate), period);
            }
    }  
}

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