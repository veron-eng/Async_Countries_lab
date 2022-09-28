console.log("Hi");
const listUl = document.querySelector("ul");

const url = "https://restcountries.com/v3.1/all";

const fetchAllCountries = async () => {
    
    const response = await fetch(url); // fetching the data from a website 
    //console.log(response);
    const countriesData = await response.json();// converst url into json data 
    //console.log(countriesData);

    //console.log(countriesData[1].name);
    // just countriesData doesnt work as it is nested in an array 
    //console.log(countriesData[1].flag);

    let popCount = 0
    let countryCollection =[]
    for(let i = 0; i < countriesData.length; i++) {
        //countryCollection.push(countriesData[i].name.common);

        
        const listUl = document.querySelector("ul"); // grabs the unordered list
        const countryLi = document.createElement("li"); // creates a li element
        //, which will eventually be put in the ul

        // this includes part of the extention, the .countries.flag are ajoined onto each country name
        // countrys didnt inclde a img source so decided to attach the mini image that it contained.
        countryLi.textContent = countriesData[i].name.common + countriesData[i].flag;

        // can also use the method below 
        //countryflag.src = countriesData[i].flags.png;

        // have to go deep to get the name if the country, because each country has its own array


        //extention part 2

        popCount += countriesData[i].population;

        
    

        const pop = document.getElementById("population")
        pop.textContent = popCount



        listUl.appendChild(countryLi);
        

        

        // using the unordered list you add a list item that has your country on it
    }
    
    //console.log(countryCollection);
    console.log(popCount);
    
}

fetchAllCountries();

