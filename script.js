//bonjour et bienvenue sur le Javascript




//on chope les genres
let genresHtml = document.getElementById('genreList');


var myOptions = {
    method: 'GET',
    // Headers: 'Access-Control-Allow-Origin: *',
    referrerPolicy: 'origin-when-cross-origin',
    mode: 'cors',
    cache: 'default'
};
const deezerGenre = fetch("https://api.deezer.com/genre", myOptions);
deezerGenre
    .then(async (responseData) => {
        // console.log(responseData);
        const response = await responseData.json();
        // console.log(response);
        try {
            for (i = 10; i > 0; i--) {
                const genreName = "<span>" + response.data[i].name + "</span>";
                const genrePicture = '<img src="' + response.data[i].picture_medium + '">';
                let genreItem = document.createElement("div");
                genresHtml.appendChild(genreItem);
                genreItem.innerHTML = genrePicture + genreName;
            }
        } catch (err) {
            console.log(err);
        }
    })
    .catch((err) => {
        console.log(err)
    });






//les sliders 

window.onload =
    slide(document.getElementById('genreList'));
    slide(document.getElementById('topPlaylists'));
    slide(document.getElementById('topPodcasts'));



function slide(x) {
    let slider = x;
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        console.log(walk);
    });
}


//on chope les artistes, les albums, les playlists  et les émissions
let chartListArtists = document.getElementById('chartListArtists')
let chartListAlbums = document.getElementById('chartListAlbums')
let topPlaylists = document.getElementById('topPlaylists')
let topPodcasts = document.getElementById('topPodcasts')

const deezerTopArtist = fetch("https://api.deezer.com/chart", myOptions);
deezerTopArtist
    .then(async (responseData) => {
        // console.log(responseData);
        const response = await responseData.json();
        console.log(response);
        try {
            for (i = 0; i < 10; i++) {
                //on chope les artistes
                const count = (i + 1).toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                });
                const chartSong = "<p>" + response.tracks.data[i].title + "</p>";
                const chartName = "<span>" + response.tracks.data[i].artist.name + "</span>";
                const chartPicture = '<img src="' + response.tracks.data[i].artist.picture_small + '">';
                //la durée des morceaux est formatée par la fonction fancyTimeFormat
                const songDuration = '<p class="duration">' + fancyTimeFormat(response.tracks.data[i].duration) + '</p>';
                let chartItemArtist = document.createElement("div");
                let listContainer = document.createElement("div");
                let songDurationDiv = document.createElement("div");
                listContainer.classList.add('artist');
                listContainer.innerHTML = count + chartPicture;
                chartListArtists.appendChild(listContainer);
                listContainer.appendChild(chartItemArtist);
                listContainer.appendChild(songDurationDiv);
                songDurationDiv.innerHTML = songDuration;
                chartItemArtist.classList.add('nomArtiste');
                chartItemArtist.innerHTML = chartSong + chartName;



                //on chope les albums
                const chartAlbum = "<p>" + response.albums.data[i].title + " </p>";
                const chartArtist = "<span>" + response.albums.data[i].artist.name + " </span>";
                const chartPictureAlbum = '<img src="' + response.albums.data[i].cover_small + '">';
                let chartItemAlbum = document.createElement("div");
                let chartItemTitre = document.createElement("div");

                chartListAlbums.appendChild(chartItemAlbum);
                chartItemAlbum.classList.add('album');
                chartItemTitre.classList.add('nomArtiste');
                chartItemAlbum.innerHTML = count + chartPictureAlbum;

                chartItemAlbum.appendChild(chartItemTitre);
                chartItemTitre.innerHTML = chartAlbum + chartArtist;

            }

        } catch (err) {
            console.log(err);
        }
    })
    .catch((err) => {
        console.log(err)
    });






// //on chope les albums, on se répète par rapport aux artistes, faudrait voir à mieux optimiser tout ça
// let chartListAlbums = document.getElementById('chartListAlbums')

const deezerTop = fetch("https://api.deezer.com/chart", myOptions);
deezerTop
    .then(async (responseData) => {
        // console.log(responseData);
        const response = await responseData.json();
        console.log(response);
        try {
            for (i = 0; i <= 10; i++) {

                //on crée 
                const chartPlaylist = "<p>" + response.playlists.data[i].title + " </p>";
                const chartPicturePlaylist = '<img src="' + response.playlists.data[i].picture_medium + '">';
                let topPlaylist = document.createElement("div");
                topPlaylists.appendChild(topPlaylist);
                topPlaylist.classList.add('item');
                topPlaylist.innerHTML = chartPicturePlaylist + chartPlaylist;
                

                const chartPodcast = "<p>" + response.podcasts.data[i].title + " </p>";
                const chartPicturePodcast = '<img src="' + response.podcasts.data[i].picture_medium + '">';
                const chartPodcastDesc = '<p>'+response.podcasts.data[i].description +'</p><div class="bonjour"></div>';
                let topPodcast = document.createElement("div");
                
                topPodcasts.appendChild(topPodcast);
                let podcastOverlay = document.createElement("div");
                topPodcast.classList.add('item');
                topPodcast.innerHTML = chartPicturePodcast + chartPodcast + chartPodcastDesc;
                
            }
        } catch (err) {
            console.log(err);
        }
    })
    .catch((err) => {
        console.log(err)
    });




let artistMoment = document.getElementById('artistMoment')

const deezerartistMoment = fetch("https://api.deezer.com/chart", myOptions);
deezerartistMoment

    .then(async (responseData) => {
        // console.log(responseData);
        const response = await responseData.json();
        console.log(response);
        try {
            //ici on chope l'artiste du moment
            const artMoment = response.artists.data[0].name;
            console.log(artMoment);
            const artMomentPicture = response.artists.data[0].picture_xl;
            let artMomentDiv = document.createElement("div");
            document.getElementById('artistMoment').appendChild(artMomentDiv);
            document.getElementById('artistMoment').style.cssText = "background-image: url('" + artMomentPicture + "')";
            artMomentDiv.innerHTML = "<h2>Découvrez l'artiste du moment <br><span>" + artMoment + "</span></h2>";
        } catch (err) {
            console.log(err);
        }
    })
    .catch((err) => {
        console.log(err)
    });





//conversion des secondes en minutes que j'ai piqué parce que bon hein

function fancyTimeFormat(duration) {

    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";
    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }
    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
