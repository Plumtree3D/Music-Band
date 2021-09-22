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
const chartName = "<span>"+response.artists.data[i].name+"</span>";
const chartPicture = '<img src="'+response.artists.data[i].picture_small+'">'; 
let chartItemArtist = document.createElement("div");
chartListArtists.appendChild(chartItemArtist);
chartItemArtist.innerHTML = chartPicture+chartName;
// document.getElementById('genreName').innerHTML += '<img src="'+genrePicture+'"> '+genreName;
}}
catch (err) {console.log(err);}
})
.catch((err) =>{ console.log(err)});






//on chope les albums, on se répète par rapport aux artistes, 
let chartListAlbums = document.getElementById('chartListAlbums')

const deezerTopAlbum = fetch("https://api.deezer.com/chart", myOptions);
deezerTopAlbum
.then(async(responseData)=>{
// console.log(responseData);
const response = await responseData.json();
console.log(response);
try{
    for (i=0; i<=10; i++){
const chartAlbum = "<span>"+response.albums.data[i].title+" </span>";
const chartArtist = "<span>"+response.albums.data[i].artist.name+" </span>";
const chartPictureAlbum = '<img src="'+response.albums.data[i].cover_small+'">'; 
let chartItemAlbum = document.createElement("div");
chartListAlbums.appendChild(chartItemAlbum);
chartItemAlbum.innerHTML = chartPictureAlbum+chartAlbum+chartArtist;
// document.getElementById('genreName').innerHTML += '<img src="'+genrePicture+'"> '+genreName;
}}
catch (err) {console.log(err);}
})
.catch((err) =>{ console.log(err)});


