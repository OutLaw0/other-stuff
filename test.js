async function getFilms(e){
const url = 'https://movie-database-imdb-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';

const res = await fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
		"x-rapidapi-key": "b0a4e876c4mshcbade30fd3d4b01p18b7aejsnf3a4da9c382e"
	}
});
const data = await res.json();
console.log(data);
/*.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});*/

}

getFilms();