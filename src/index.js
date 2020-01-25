const BASE_URL = "http://localhost:3000"
const SONGS_URL = "http://localhost:3000/songs";
const ARTISTS_URL = "http://localhost:3000/artists";
const GENRES_URL = "http://localhost:3000/genres";

document.addEventListener('DOMContentLoaded', function(){
    clickListener();
});

function clickListener(){
    document.addEventListener('click', function(e){
        console.log(e.target);
        if (e.target.innerText === 'Search!'){
            renderSearchForm():
        }
    });
};

function renderSearchForm(){
    
};