var db = new alasql.Database();

Papa.parse("../assets/imdb_top_1000.csv", {
	download: true,
	dynamicTyping: true,
	header: true,
	complete: function(results) {
		db.exec(`CREATE TABLE Movies`);
		db.tables[`Movies`].data = results.data;
		displayMovies(db.exec("SELECT * FROM Movies ORDER BY Series_Title"));
	}
});

function displayMovies(movies) {
	document.querySelector('#results').innerHTML = "";
	window.scrollTo(0, 0);
	movies.forEach(function(movie) {
		var newCard = document.createElement("div");
		newCard.className = "card";
		newCard.innerHTML = `
			<div>
				<img src="${movie.Poster_Link}">
        			<div class="movie-title">${movie.Series_Title}</div>
        			<div class="movie-year">${movie.Released_Year}</div>
        			<div class="movie-description">${movie.Overview}</div>
        			<div class="movie-genre">${movie.Genre}</div>
      			</div>
      			<div class="movie-meta">Average Rating: ${movie.IMDB_Rating}</div>
    		`;
		document.querySelector('#results').append(newCard)
	})
}

function sortByYear() {
	console.log('Sort By Year Button')
	displayMovies(db.exec(`SELECT * FROM Movies ORDER BY Released_Year Desc`));
}

function sortByRating() {
	console.log('Sort By Rating Button')
	displayMovies(db.exec(`SELECT * FROM Movies ORDER BY IMDB_Rating Desc`));
}

function homeButton() {
	console.log('Home button')
	location.reload()
	console.log('Valid Refresh')
}

// function searchTitles(searchString) {
// 	displayMovies(db.exec(`SELECT * FROM Movies WHERE Series_Title LIKE '%${searchString}%'`));
// }

function sortByGenre() {
	console.log('Sort By Genre Button')
	displayMovies(db.exec('SELECT * FROM Movies ORDER BY Genre ASC '))
}


function searchTitles(searchString) {
    const query = `
        SELECT * FROM Movies 
        WHERE Overview LIKE ? 
        OR Series_Title LIKE ?;
    `;
    
    // Prepare the parameters for the query
    const params = [`%${searchString}%`, `%${searchString}%`];
    
    displayMovies(db.exec(query, params));
}



