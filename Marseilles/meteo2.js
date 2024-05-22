 
// Get Api clé de la météo
const APIKey = '61425e9baf95432752f2e45d691a4595';
const localisation = document.querySelector(".search-box"); 
const main = document.querySelector("main"); 
const jour =  document.querySelector(".jour");
const date = document.querySelector(".date");
const region = document.querySelector(".region");
const temps = document.querySelector(".temp");
const Description = document.querySelector(".desc");
const Rain = document.querySelector(".prec");
const Humidity = document.querySelector(".hum");
const Wind = document.querySelector(".win");
const saturday = document.querySelector(".Saturday");
const sunday = document.querySelector(".Sunday");
const monday = document.querySelector(".Monday");
const thuesday = document.querySelector(".Thuesday");
const error404 = document.querySelector(".typewrite");

window.onload = () => {

    //Initialiser la page avec les données sur Marseilles 
    new postData('https://api.openweathermap.org/data/2.5/weather?q=Marseilles&units=metric&appid='+APIKey);

}

localisation.addEventListener("submit", () =>{

    // On retire la class Active pour fair le changement entre container et error404
    if (main.classList.length != 0){
        main.classList.remove('active'); 
    }

    //Initialiser la page avec les données sur Localisation
    var city = localisation.value;
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+APIKey).then(response => response.json()).then(json =>{
        new Imagechange(localisation.value); 
        if( json === '404'){
            result = new CodeError(); 
        } else {
            result = new postData('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+APIKey);
        } 
        return result; 
    }); 
});


function postData(url="") {
    fetch(url).then(response => response.json()).then(json =>{
        const regex = /x/i; 
        console.log(temps.replace(regex, json.main.temp));
        console.log(Humidity.replace(regex, json.main.humidity)); 
        console.log(Wind.replace(regex,json.wind.speed)); 
        console.log(Description.replace(regex, json.weather.description)); 
        console.log(region.replace(regex, json.name + ',' + json.sys.country));  
        console.log(Rain.replace(regex, json.clouds.all)); 
        let date1 = new Date();
        let jourLocale = date1.toLocaleString('fr-FR',{weekday: 'long'});
        console.log(jour.replace(regex,jourLocale)); 
        let dateLocale = date1.toLocaleString('fr-FR',{
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        console.log(date.replace(regex,dateLocale));
        new postDays(jourLocale); 
    }); 
}
function Imagechange(ville=""){ 
    switch (ville){
        case 'Nice':
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".left-info{ background: url("+"https://i.pinimg.com/564x/48/34/81/4834810ed95b89335cdf3e06c33b031d.jpg"+"); }";
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
}
function postDays(j=""){
    const regex = /x/i;
    switch (j){
        case 'lundi':
            console.log(saturday.replace(regex,'Mar')); 
            console.log(sunday.replace(regex,'Mer')); 
            console.log(monday.replace(regex,'Jeu')); 
            console.log(thuesday.replace(regex,'Ven')); 
            break; 

        case 'mardi':
            console.log(saturday.replace(regex,'Mer')); 
            console.log(sunday.replace(regex,'Jeu')); 
            console.log(monday.replace(regex,'Ven')); 
            console.log(thuesday.replace(regex,'Sam'));
            break; 

        case 'mercredi':
            console.log(saturday.replace(regex,'Jeu')); 
            console.log(sunday.replace(regex,'Ven')); 
            console.log(monday.replace(regex,'Sam')); 
            console.log(thuesday.replace(regex,'Dim'));
            break; 

        case 'jeudi':
            console.log(saturday.replace(regex,'Ven')); 
            console.log(sunday.replace(regex,'Sam')); 
            console.log(monday.replace(regex,'Dim')); 
            console.log(thuesday.replace(regex,'Lun'));
            break; 

        case 'vendredi':
            console.log(saturday.replace(regex,'Sam')); 
            console.log(sunday.replace(regex,'Dim')); 
            console.log(monday.replace(regex,'Lun')); 
            console.log(thuesday.replace(regex,'Mar'));
            break;

        case 'samedi':
            console.log(saturday.replace(regex,'Dim')); 
            console.log(sunday.replace(regex,'Lun')); 
            console.log(monday.replace(regex,'Mar')); 
            console.log(thuesday.replace(regex,'Mer'));
            break;

        case 'dimanche':
            console.log(saturday.replace(regex,'Lun')); 
            console.log(sunday.replace(regex,'Mar')); 
            console.log(monday.replace(regex,'Mer')); 
            console.log(thuesday.replace(regex,'Jeu'));
            break; 

        default: 
            console.log(saturday.replace(regex,'Err')); 
            console.log(sunday.replace(regex,'Err')); 
            console.log(monday.replace(regex,'Err')); 
            console.log(thuesday.replace(regex,'Err'));
            break;
    }
}

function CodeError(){  
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