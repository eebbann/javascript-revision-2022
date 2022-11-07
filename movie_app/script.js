const APILINK = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=eb50225a2352f401e3b87101517965e1`;
const IMG_PATH = `https://image.tmdb.org/t/p/w1280`;
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=eb50225a2352f401e3b87101517965e1&query=""`;
console.log(APILINK)
const main = document.querySelector("#main");
const search = document.querySelector("#query");
const form = document.querySelector("#form");
 
let section = document.getElementById('section')
returnMovies(APILINK);
function returnMovies(url) {
	fetch(url)
		.then((res) => res.json())
		.then((data) => {  section.innerHTML =
		  data?.results?.map((item) => { 
				console.log(item)
				return`
				<div class="row">
			<div class="column">
				<div class="card">
					<div class="center">
						<img src="${IMG_PATH}${item.poster_path}"  alt="wakanda movie" class="thumbnail">
						<h3>${item.title}</h3>
					</div> 
				</div>
			</div>
		</div>`;
			}
			).join("")
		});
     
}

form.addEventListener('submit', (e)=>{
  e.preventDefault()
	section.innerHTML =" "
	let s = search.value;

	if(s){
		returnMovies(SEARCHAPI + s)
		s.value = '';

	}
})
