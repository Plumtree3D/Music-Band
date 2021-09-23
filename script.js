
//bonjour et bienvenue sur le Javascript




//on chope les genres
let genresHtml = document.getElementById('genreList');

var myOptions = { method: 'GET',
                Headers: 'Access-Control-Allow-Origin: *',
                referrerPolicy: 'origin-when-cross-origin',
               mode: 'cors',
               cache: 'default' };
const deezerGenre = fetch("https://api.deezer.com/genre", myOptions);
deezerGenre
.then(async(responseData)=>{
// console.log(responseData);
const response = await responseData.json();
// console.log(response);
try{
    for (i=10; i>0; i--){
const genreName = "<span>"+response.data[i].name+"</span>";
const genrePicture = '<img src="'+response.data[i].picture+'">'; 
let genreItem = document.createElement("div");
genresHtml.appendChild(genreItem);
genreItem.innerHTML = genrePicture+genreName;
}}
catch (err) {console.log(err);}
})
.catch((err) =>{ console.log(err)});





//on chope les artistes, les albums, les playlists  et les émissions
let chartListArtists = document.getElementById('chartListArtists')
let chartListAlbums = document.getElementById('chartListAlbums')
let topPlaylists = document.getElementById('topPlaylists')
let topPodcasts = document.getElementById('topPodcasts')

const deezerTopArtist = fetch("https://api.deezer.com/chart", myOptions);
deezerTopArtist
.then(async(responseData)=>{
// console.log(responseData);
const response = await responseData.json();
console.log(response);
try{
    for (i=0; i<10; i++){        
//on chope les artistes
const count = (i+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
const chartSong = "<p>"+response.tracks.data[i].title+"</p>";
const chartName = "<span>"+response.tracks.data[i].artist.name+"</span>";
const chartPicture = '<img src="'+response.artists.data[i].picture_small+'">';
let chartItemArtist = document.createElement("div");
chartListArtists.appendChild(chartItemArtist);
chartItemArtist.classList.add('artist');
chartItemArtist.innerHTML = count+chartPicture+chartSong+chartName;


//on chope les albums
const chartAlbum = "<p>"+response.albums.data[i].title+" </p>";
const chartArtist = "<span>"+response.albums.data[i].artist.name+" </span>";
const chartPictureAlbum = '<img src="'+response.albums.data[i].cover_small+'">';
let chartItemAlbum = document.createElement("div");
chartListAlbums.appendChild(chartItemAlbum);
chartItemAlbum.classList.add('album');
chartItemAlbum.innerHTML = count+chartPictureAlbum+chartAlbum+chartArtist;
}

}
catch (err) {console.log(err);}
})
.catch((err) =>{ console.log(err)});






// //on chope les albums, on se répète par rapport aux artistes, faudrait voir à mieux optimiser tout ça
// let chartListAlbums = document.getElementById('chartListAlbums')

const deezerTop = fetch("https://api.deezer.com/chart", myOptions);
deezerTop
.then(async(responseData)=>{
// console.log(responseData);
const response = await responseData.json();
console.log(response);
try{
    for (i=0; i<=10; i++){

        //on crée 
        const chartPlaylist = "<p>"+response.playlists.data[i].title+" </p>";
        const chartPicturePlaylist = '<img src="'+response.playlists.data[i].picture_medium+'">';
        let topPlaylist = document.createElement("div");
        topPlaylists.appendChild(topPlaylist);
        topPlaylist.classList.add('playlist');
        topPlaylist.innerHTML = chartPicturePlaylist+chartPlaylist;



        const chartPodcast = "<p>"+response.podcasts.data[i].title+" </p>";
        const chartPicturePodcast = '<img src="'+response.podcasts.data[i].picture_medium+'">';
        let topPodcast = document.createElement("div");
        topPodcasts.appendChild(topPodcast);
        topPodcast.classList.add('playlist');
        topPodcast.innerHTML = chartPicturePodcast+chartPodcast;




        
}}
catch (err) {console.log(err);}
})
.catch((err) =>{ console.log(err)});




let artistMoment = document.getElementById('artistMoment')

const deezerartistMoment = fetch("https://api.deezer.com/chart", myOptions);
deezerartistMoment
.then(async(responseData)=>{
// console.log(responseData);
const response = await responseData.json();
console.log(response);
try{   
//ici on chope l'artiste du moment

const artMoment = response.artists.data[0].name;
console.log(artMoment);
const artMomentPicture = response.artists.data[0].picture_xl;
let artMomentDiv = document.createElement("div");
document.getElementById('artistMoment').appendChild(artMomentDiv);
document.getElementById('artistMoment').style.cssText = "background: url('"+artMomentPicture+"');";
artMomentDiv.innerHTML = "<h2>Découvrez l'artiste du moment"+artMoment+"</h2>";
}
catch (err) {console.log(err);}
})
.catch((err) =>{ console.log(err)});










//ici on chope l'artiste du moment

// const artMoment = response.artists.data[0].name;
// console.log(artMoment);
// const artMomentPicture = response.artists.data[0].picture_xl;
// let artMomentDiv = document.createElement("div");
// document.getElementById('artistMoment').appendChild(artMomentDiv);
// artMomentDiv.style.background = artMomentPicture;
// artMomentDiv.innerHTML = '<h2>'+artMoment+'</h2>';





