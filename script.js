// var myInit = { method: 'GET',
//                mode: 'no-cors',
//                cache: 'default' };



// let deezer = fetch("https://ex1.o7planning.com/_testdatas_/simple-text-data.txt", myInit)
// .then(response => response.json())
// .then(response => console.log(JSON.stringify(response)))
// .catch(error => console.log("Erreur : blaaah :" + error));



// A URL returns JSON data.
// var url = "https://api.deezer.com/genre/2";


// function doGetJSON()  {

//   // Call fetch(url) with default options.
//   // It returns a Promise object:
//   var aPromise = fetch(url);

//   // Work with Promise object:
//   aPromise
//     .then(function(response) {
//         console.log("OK! Server returns a response object:");
//         console.log(response);

//         if(!response.ok) {
//            throw new Error("HTTP error, status = " + response.status);
//         } 
//         // Get JSON Promise from response object:
//         var myJSON_promise = response.json();

//         // Returns a Promise object.
//         return myJSON_promise;
//     })
//     .then(function(myJSON) {
//         console.log("OK! JSON:");
//         console.log(myJSON);
//     })
//     .catch(function(error)  {
//         console.log("Noooooo! Something error:");
//         console.log(error);
//     });

// }


//on s'en fout du dessus



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
genreItem.className = "slider";
genreItem.innerHTML = genrePicture+genreName;
// document.getElementById('genreName').innerHTML += '<img src="'+genrePicture+'"> '+genreName;
}}
catch (err) {console.log(err);}
})
.catch((err) =>{ console.log(err)});





//on chope les artistes
let chartListArtists = document.getElementById('chartListArtists')

const deezerTopArtist = fetch("https://api.deezer.com/chart", myOptions);
deezerTopArtist
.then(async(responseData)=>{
// console.log(responseData);
const response = await responseData.json();
console.log(response);
try{
    for (i=0; i<=10; i++){
const chartSong = "<p>"+response.tracks.data[i].title+"</p>";
const chartName = "<span>"+response.tracks.data[i].artist.name+"</span>";
const chartPicture = '<img src="'+response.artists.data[i].picture_small+'">'; 
let chartItemArtist = document.createElement("div");

chartListArtists.appendChild(chartItemArtist);
chartItemArtist.classList.add('artist');
chartItemArtist.innerHTML = chartPicture+chartSong+chartName;
// document.getElementById('genreName').innerHTML += '<img src="'+genrePicture+'"> '+genreName;

const chartAlbum = "<p>"+response.albums.data[i].title+" </p>";
const chartArtist = "<span>"+response.albums.data[i].artist.name+" </span>";
const chartPictureAlbum = '<img src="'+response.albums.data[i].cover_small+'">'; 
let chartItemAlbum = document.createElement("div");
chartListAlbums.appendChild(chartItemAlbum);
chartItemAlbum.classList.add('album');
chartItemAlbum.innerHTML = chartPictureAlbum+chartAlbum+chartArtist;
}

}
catch (err) {console.log(err);}
})
.catch((err) =>{ console.log(err)});






// //on chope les albums, on se répète par rapport aux artistes, faudrait voir à mieux optimiser tout ça
// let chartListAlbums = document.getElementById('chartListAlbums')

// const deezerTopAlbum = fetch("https://api.deezer.com/chart", myOptions);
// deezerTopAlbum
// .then(async(responseData)=>{
// // console.log(responseData);
// const response = await responseData.json();
// console.log(response);
// try{
//     for (i=0; i<=10; i++){
// const chartAlbum = "<span>"+response.albums.data[i].title+" </span>";
// const chartArtist = "<span>"+response.albums.data[i].artist.name+" </span>";
// const chartPictureAlbum = '<img src="'+response.albums.data[i].cover_small+'">'; 
// let chartItemAlbum = document.createElement("div");
// chartListAlbums.appendChild(chartItemAlbum);
// chartItemAlbum.innerHTML = chartPictureAlbum+chartAlbum+chartArtist;
// // document.getElementById('genreName').innerHTML += '<img src="'+genrePicture+'"> '+genreName;
// }}
// catch (err) {console.log(err);}
// })
// .catch((err) =>{ console.log(err)});




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







//ici on drag le slide

       // Slider dragging

       const slider = document.querySelector('.slider');
       let isDown = false;
       let startX;
       let scrollLeft;
       
       slider.addEventListener('mousedown', (e) => {
           isDown = true;
           slider.classList.add('active');
           startX = e.pageX - slider.offsetLeft;
           scrollLeft = slider.scrollLeft;
           cancelMomentumTracking();
       });
       slider.addEventListener('mouseleave', () => {
           isDown = false;
           slider.classList.remove('active');
       });
       
       slider.addEventListener('mouseup', () => {
           isDown = false;
           slider.classList.remove('active');
           beginMomentumTracking();
       });
       
       slider.addEventListener('mousemove', (e) => {
           if(!isDown) return;
           e.preventDefault();
           const x = e.pageX - slider.offsetLeft;
           const walk = (x - startX); //scroll-fast
           var prevScrollLeft = slider.scrollLeft;
           slider.scrollLeft = scrollLeft - walk;
           velX = slider.scrollLeft - prevScrollLeft;
       });
       
       // Momentum 
       
       var velX = 0;
       var momentumID;
       
       slider.addEventListener('wheel', (e) => {
           cancelMomentumTracking();
       });  
       
       function beginMomentumTracking(){
           cancelMomentumTracking();
           momentumID = requestAnimationFrame(momentumLoop);
       }
       
       function cancelMomentumTracking(){
           cancelAnimationFrame(momentumID);
       }
       
       function momentumLoop(){
           slider.scrollLeft += velX * 2;
           velX *= 0.95; 
           if (Math.abs(velX) > 0.5){
               momentumID = requestAnimationFrame(momentumLoop);
           }
       }