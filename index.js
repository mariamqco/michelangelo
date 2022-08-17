
let section_utensils_content_button = document.getElementById("section-utensils-content-button");
let gallery_piece_container = document.getElementById("gallery-piece-container");
let gallery_display = document.getElementById("gallery-display");
let piece_text_container = document.getElementById("piece-text-container");
let piece_title = document.getElementById("piece-title");
let gallery_close_button = document.getElementById("gallery-close-button");
let gallery_content = document.getElementById("gallery-content");


section_utensils_content_button.onclick = function() {
    let section_utensils_text_container = document.getElementById("section-utensils-text-container");   
    let section_utensils_figcaption = document.getElementById("section-utensils-figcaption");
    if(this.textContent === "Esconder texto"){
        this.textContent = "Mostrar texto";
        section_utensils_text_container.style.opacity = "0";
        section_utensils_figcaption.style.opacity = "1";
    }else if(this.textContent === "Mostrar texto"){
        this.textContent = "Esconder texto";
        section_utensils_text_container.style.opacity = "1";
        section_utensils_figcaption.style.opacity = "0";
    }    
}

let section_work_works1 = document.getElementById("section-works-work1");
let section_work_works2 = document.getElementById("section-works-work2");
let section_work_works3 = document.getElementById("section-works-work3");

let work_nav_work1 = document.getElementById("work-nav-work1");
let work_nav_work2 = document.getElementById("work-nav-work2");
let work_nav_work3 = document.getElementById("work-nav-work3");

gallery_close_button.onclick = function(){   
    gallery_content.style.opacity = '0';
    setTimeout(function(){        
        gallery_display.style.display = 'none';        
    },900);
}

function showWork1(){
    gallery_display.style.display = 'flex'; 
    gallery_content.style.opacity = '1'; 
    let image = document.createElement('img');
    image.src = "./images/David_by_Michelangelo_Fir_JBU004.jpg"
    image.alt = "David de Miguel Ángel";
    
    gallery_piece_container.style.width = '20vw'
    gallery_piece_container.innerHTML = "";
    gallery_piece_container.appendChild(image);  


    let piece_text_container = document.getElementById('piece-text-container');
    while(piece_text_container.firstChild){
        piece_text_container.removeChild(piece_text_container.lastChild);
    }

    let piece_title = document.createElement('h3');
    piece_title.textContent = "David"
    piece_text_container.appendChild(piece_title);
    let paragraph1 = document.createElement('p');
    paragraph1.textContent = "Al bloque de mármol de Carrara que acabaría siendo el David, los canteros lo llamaban “El gigante”. Medía más de 5 metros de alto y varios escultores habían intentado sacar algo de él sin éxito. Agostino di Duccio incluso dejó en el bloque un terrible agujero, quedando la pieza prácticamente inutilizada.";
    piece_text_container.appendChild(paragraph1);
    let paragraph2 = document.createElement('p');
    paragraph2.textContent = "Pero en 1501, Miguel Ángel decide ponerse a ello (recordemos que tenía 26 añitos). Se pasó mucho tiempo mirando el bloque, que estaba en el patio del Departamento de Obras de la catedral, comido por la maleza. Dio vueltas a su alrededor durante meses. El artista ya estaba esculpiendo.";
    piece_text_container.appendChild(paragraph2);
    let paragraph3 = document.createElement('p');
    paragraph3.textContent = "David es una escultura de mármol blanco de 5,17 metros de altura y 5572 kilogramos de masa, realizada por Miguel Ángel Buonarroti entre 1501 y 1504 por encargo de la Opera del Duomo de la catedral de Santa María del Fiore de Florencia. La escultura representa al rey David bíblico en el momento previo a enfrentarse con Goliat, y fue acogida como un símbolo de la República de Florencia frente a la hegemonía de sus derrocados dirigentes, los Médici, y la amenaza de los estados adyacentes, especialmente los Estados Pontificios.";
    piece_text_container.appendChild(paragraph3);      
}

function showWork2(){
    gallery_display.style.display = 'flex';  
    gallery_content.style.opacity = '1';   
    let image = document.createElement('img');
    image.src = "./images/la-creacion-de-adan_ee36a05b.png"
    image.alt = "Frescos de la capilla sixtina (La cración de Adán)";
    
    gallery_piece_container.style.width = '30vw'
    gallery_piece_container.innerHTML = "";
    gallery_piece_container.appendChild(image);  


    let piece_text_container = document.getElementById('piece-text-container');
    while(piece_text_container.firstChild){
        piece_text_container.removeChild(piece_text_container.lastChild);
    }

    let piece_title1 = document.createElement('h3');
    piece_title1.textContent = "Frescos de la capilla sixtina"
    let piece_title2 = document.createElement('h3');
    piece_title2.textContent = "La creación de Adán";
    piece_text_container.appendChild(piece_title1);
    piece_text_container.appendChild(piece_title2);
    let paragraph1 = document.createElement('p');
    paragraph1.textContent = "La creación de Adán es una de las escenas de los frescos de la bóveda de la capilla Sixtina pintados por Miguel Ángel entre 1508 y 1512 en los Palacios Vaticanos. La complejidad iconográfica de la obra es extraordinaria. La parte central la componen una selección de escenas del Antiguo Testamento: La creación del mundo, La creación de Adán y Eva, El pecado original, El sacrificio de Noé, El Diluvio y, por último, La ebriedad de Noé, que representa la expresión más vil del ser humano contaminado por el pecado. En ambos lados, conectando con los frescos de los muros laterales, aparecen representaciones de las Sibilas y los Profetas, que flanquean la bóveda como precursores de la llegada del Mesías. Los ángulos, ocupados por las pechinas, contienen escenas de los milagros de la salvación de Israel que prefiguran la venida de Cristo.";
    piece_text_container.appendChild(paragraph1);
}

function showWork3(){
    gallery_display.style.display = 'flex';      
    gallery_content.style.opacity = '1'; 
    let image = document.createElement('img');
    image.src = "./images/800px-Michelangelo's_Pieta_5450_cropncleaned.jpg"
    image.alt = "La piedad"
    
    gallery_piece_container.style.width = '30vw'
    gallery_piece_container.innerHTML = "";
    gallery_piece_container.appendChild(image);  


    let piece_text_container = document.getElementById('piece-text-container');
    while(piece_text_container.firstChild){
        piece_text_container.removeChild(piece_text_container.lastChild);
    }

    let piece_title = document.createElement('h3');
    piece_title.textContent = "La Piedad"
    piece_text_container.appendChild(piece_title);
    let paragraph1 = document.createElement('p');
    paragraph1.textContent = "El tema de la Piedad siempre se ha representado de manera tormentosa ante la situación que protagonizan la Virgen María y su hijo Jesús. Sin embargo, Miguel Ángel va más allá y realiza una Piedad plasmando armonía, belleza y equilibro, dejando a un lado el excesivo dolor.";
    piece_text_container.appendChild(paragraph1);
    let paragraph2 = document.createElement('p');
    paragraph2.textContent = "Nos situamos en 1498 en Roma, en pleno apogeo del Renacimiento. El cardenal Saint Denis encarga al escultor florentino, Miguel Ángel, que realice una Piedad. Se trata de la actual Piedad del Vaticano, también nombrada como Pietà, creada en mármol de Carrara y localizada en la capilla del Crucifijo de la Basílica de San Pedro.";
    piece_text_container.appendChild(paragraph2);
    let paragraph3 = document.createElement('p');
    paragraph3.textContent = "La Piedad representa el dolor de la Virgen María al sostener en brazos el cadáver de su hijo Jesús cuando desciende de la cruz.";
    piece_text_container.appendChild(paragraph3);
}

section_work_works1.onclick = showWork1;
section_work_works2.onclick = showWork2;
section_work_works3.onclick = showWork3;

work_nav_work1.onclick = showWork1;
work_nav_work2.onclick = showWork2;
work_nav_work3.onclick = showWork3;

//code for responsive elements

let highlight_icon_container = document.getElementById("highlight-icon-container");
let work_nav = document.getElementsByClassName("work-nav")[0];

let mobile_icon_collection = document.getElementsByClassName("icon-container");

for (let i = 0; i < mobile_icon_collection.length; i++){
    mobile_icon_collection[i].addEventListener('click', function(){
        if(this.classList[1] !== "close-icon-container"){
            this.className += " close-icon-container" ;
        }else{
            this.classList.remove("close-icon-container");
        }        
    });   
}

highlight_icon_container.addEventListener('click', function(){
    if(this.classList[1] == "close-icon-container"){    
        work_nav.classList.remove('close-element');        
        setTimeout(() =>{
            work_nav.className += " open-work-nav"
        },100)
    }else{
        work_nav.classList.remove("open-work-nav");
        setTimeout(()=>{
            work_nav.className += " close-element";
        }, 1100);
    }
});
