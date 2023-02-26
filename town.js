let info=document.querySelector("section")
var capitaldiv=document.createElement('div');
var flagdiv=document.createElement('div');
var countrydiv=document.createElement('div');
var continentdiv=document.createElement('div');

function search(){
    let textcountry=document.querySelector(".text").value
    countrydiv.innerHTML = `<span>Town</span><br><p>${textcountry}</p>`


    let url="https://restcountries.com/v3.1/name/" + textcountry;
    fetch(url)
    .then(reponse => 
    reponse.json()
    .then(data => {
        const country=data[0];
        const capital=country.capital;
        const continent =country.continents;
        const flag=country.flags.svg;
        capitaldiv.innerHTML = `<span>capital</span><br><p>${capital}</p>`;
        continentdiv.innerHTML = `<span>continent</span><br><p>${continent}</p>`;
        flagdivdiv.innerHTML = `<span>flag</span><br><img src="${flag}">`;

        info.appendChild(countrydiv)
        info.appendChild(continentdiv)
        info.appendChild(capitaldiv)
        info.appendChild(flagdiv)
        
    }))

}
