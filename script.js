var joeyObject = {
    firstName: "Joseph",
    lastName: "Wellman",
    nickName: "Joey",
    favFood: "honey",
    hobby: "beekeeping",
    greatFear: "drowning",
    funFact: "hates looking at pictures of himself",
    specialTalent: "growing an awesome beard",
    headShot: "http://www.getty.edu/museum/media/images/web/enlarge/00057301.jpg",
    pets: {
        chickens: "50 chickens",
        dogs: "2 dogs",
        cats: "1 cat"
    }

  }


var nameString =`

<h1 class = "name">${joeyObject.firstName} "${joeyObject.nickName}" ${joeyObject.lastName}</h1>
<img src=${joeyObject.headShot} alt="not Joey" height = "200px";>

`
var petString =`

<h2>Joey has the following pets<h2>
<ul>
  <li class = "pets">${joeyObject.pets.chickens}</li>
  <li class = "pets">${joeyObject.pets.cats}</li>
  <li class = "pets">${joeyObject.pets.dogs} </li>
</ul>
`
var factString =`

<p> 
Joey's favorite food is: ${joeyObject.favFood}.  This is because his hobby is ${joeyObject.hobby}.  
He is not afraid of getting stung by a bee, but he is afraid of ${joeyObject.greatFear}.   
For some reason he also ${joeyObject.funFact}. 
This surprises me because he has the special talent of ${joeyObject.specialTalent}. 
</p>
 ` 

document.querySelector("#Joey-Name").innerHTML = nameString;
document.querySelector("#pets").innerHTML = petString;
document.querySelector("#fun-facts").innerHTML = factString;


{/* <p class = "rating">Rated: ${movieSchedule[0].rating}</p>
<img class = "movie-poster" src=${movieSchedule[0].poster} alt = Movie Poster"/>
<br/>
<h3 class ="title">${movieSchedule[1].title}</h3>
<p class = "rating">Rated: ${movieSchedule[1].rating}</p>
<img class = "movie-poster" src=${movieSchedule[1].poster} alt = Movie Poster"/>
<br/>
<h3 class ="title">${movieSchedule[2].title}</h3>
<p class = "rating">Rated: ${movieSchedule[2].rating}</p>
<img class = "movie-poster" src=${movieSchedule[2].poster} alt = Movie Poster"/> */}