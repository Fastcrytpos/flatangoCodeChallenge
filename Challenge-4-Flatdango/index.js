// Your code here
let url = 'https://api.npoint.io/f8d1be198a18712d3f29/films/'
console.log(document.getElementById('films'))


document.getElementsByClassName('film item')[0].remove()
fetchMovies(url)


//Create fetch function
function fetchMovies(url){
    fetch(url)
    .then(response => response.json())
    .then(movies => {
        movies.forEach(movie => {
            displayMovie(movie)
            console.log(movie)
        });
    })
}

let movieTicketsSold=0;

function displayMovie(movie) {
    let movi = document.createElement("li");
    movi.textContent = movie.title;
    movi.dataset.runtime = movie.runtime; // Storing runtime in a data attribute
    movi.dataset.capacity = movie.capacity; // Storing capacity in a data attribute
    movi.dataset.description = movie.description; // Storing description in a data attribute
    movi.dataset.showtime = movie.showtime; // Storing showtime in a data attribute
    movi.dataset.ticketsSold = movie.tickets_sold; // Storing tickets_sold in a data attribute
    movi.dataset.poster = movie.poster; // Storing tickets_sold in a data attribute

    movi.addEventListener("click", updatetherest);
    movi.className = "filmitem";
    movi.id = movie.title;
    document.getElementById("films").appendChild(movi);
}

function updatetherest(event) {
    const movieTitle = event.target.textContent;
    const movieruntime = event.target.dataset.runtime; // Accessing runtime from data attribute
    const movieCapacity = event.target.dataset.capacity; // Accessing capacity from data attribute
    const movieDescription = event.target.dataset.description; // Accessing description from data attribute
    const movieShowtime = event.target.dataset.showtime; // Accessing showtime from data attribute
    movieTicketsSold = event.target.dataset.ticketsSold; // Accessing tickets_sold from data attribute
    const moviePoster = event.target.dataset.poster; // Accessing poster from data attribute
    
    alert("You clicked the movie with title: " + movieTitle);
    document.getElementById("title").textContent = ("["+movieTitle+"]")





    console.log("Movie Runtime: " + movieruntime);
    document.getElementById("runtime").textContent = "["+movieruntime+"] minutes"




    console.log("Movie Capacity: " + movieCapacity);
    document.getElementById("runtime").textContent = "["+movieruntime+"] minutes"




    console.log("Movie Description: " + movieDescription);
    document.getElementById("film-info").textContent = movieDescription







    console.log("Movie Showtime: " + movieShowtime);
    document.getElementById("showtime").textContent = ("["+movieShowtime+"]")






    console.log("Movie Tickets Sold: " + movieTicketsSold);
    document.getElementById("ticket-num").textContent = ("["+movieTicketsSold+"]")

    document.getElementById("poster").src = moviePoster


}


document.getElementById("buy-ticket").addEventListener("click", () => {
    if(movieTicketsSold>1){
    movieTicketsSold -=1;
    document.getElementById("ticket-num").textContent = "[" + movieTicketsSold + "]";}
    else(document.getElementById("ticket-num").textContent = "[" + "SOLD OUT!!" + "]")
});














