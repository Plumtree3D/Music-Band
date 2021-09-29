<!-- ?php header('Access-Control-Allow-Origin: *');  ?> -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap" rel="stylesheet">
    <title>Music-Band</title>
</head>

<body>
    <nav>
        <div class="menuburger"><img src="SVG/MENU.svg"></div>
        <div class="ondes"><img src="SVG/MusicbandOnde.svg"></div>
        <div class="musicband"><b> Music Band </b> </br> La musique au bout des doigts </div>
        <div class="searchbar"> Recherchez, écoutez... <div class="casque"><img class="displayed" src="SVG/Vector.svg">
            </div>
            <div class="avatar"></div>
            <div class="user"><b>Alain</b></div>
    </nav>
    <header>
        <div>
            <h1><span>Music</span> Band</h1>
            <div class="textheader">
                <p>Votre musique sans pub, partout. Seulement 9,99€/mois ensuite. </br> Soumis à conditions. Des
                    podcasts
                    exclusifs. </br> Des playlists sur-mesure. Faites des découvertes. </br> Zappez à volonté. Plus de
                    50
                    milliards de
                    chansons. </br> Annulation tout de suite! </p>
            </div>
            <button id="start">commencer l'écoute</button>
            <button id="sub">s'abonner</button>
        </div>
    </header>
<section id="genres">
        <h2>Genre</h2>
        <div id="genreList" class="slider">

        </div>
    </section>

    <section id="top10">
        <div id="chartListArtists">
            <h2><span>Top 10</span> des morceaux les plus écoutés</h2>
        </div>
        <div id="chartListAlbums">
            <h2><span>Top 10</span> des albums les plus écoutés</h2>
        </div>
    </section>



    <section id="artistMoment"><div class="playButtonBig"></div></section>
    <section id="Playlists" >
    <h2><span>Le top</span> des playlists à venir découvrir ou redécouvrir</h2>
        <div id="topPlaylists" class="slider"></div>
    </section>
    
    <section id="Podcasts">
    <h2><span>Revivez</span> vos émissions de radio préférées</h2>
        <div id="topPodcasts" class="slider"></div>
    </section>



    <footer>
        <!-- idee de merde a revoir ^^ -->
        <!--<div class="mb"><b> Music Band </b> </br> La musique au bout des doigts </div>-->
        <div class="leftFooter">
            <div class="musicband2"> <img src="SVG/LOGO.svg"> </div>

            <div class="footertxt">
                <p>Lorem ipsum dolor sit amet, consectetur </br> adipiscing elit. Vestibulum sed ante sit amet mi </br>
                    fermentum
                    accumsan. Nulla tristique, lorem eget </br> accumsan efficitur, enim ipsum venenatis massa, </br>
                    mattis
                    eleifend
                    dui nibh sed sem. Vivamus nec </br> quam turpis. Integer auctor leo at convallis </br> malesuada.
                    Praesent cursus
                    feugiat ligula et </br> tristique. Vivamus in velit nec nibh venenatis </br> semper id eu ligula.
                    Nullam
                    dignissim
                    vehicula </br> tempor. Quisque a elementum purus. Maecenas </br> condimentum arcu non nulla feugiat
                    pharetra. </br> Nunc
                    aliquam enim augue, ultricies porta nulla </br> maximus sed.
                </p>
            </div>
        </div>
        <div class="middleFooter">
            <h2>Inscrivez vous à la Newsletter</h2>
            <p>Abonnez-vous à notre newsletter et recevez </br> les dernières mises à jour et offres.</p>
            <form action="" method="post">
                <input type="text" id="bname" name="name" required placeholder="Entrez votre nom">
                <input type="e-mail" id="bmail" name="mail" required placeholder="Entrez votre email">
                <button class="btn">Inscrivez-vous</button>
            </form>
        </div>
        <div class="rightFooter">
            <h2>Nous contacter</h2>
            <p>Vous souhaitez nous contacter. </br> Plusieurs solutions s'offrent à vous</p>
            
            <div class="tel">
                <div class="icontel"><img class="displayed3" src="SVG/Group.svg"> </div>
                <p> Par téléphone au: </br> <a href="tel:+33389878586">03 89 87 85 86</a></p>

            </div>

            <div class="iconmail"><img class="displayed2" src="SVG/Group2.svg"> </div>

            <div class="mail">

                <p> Par email au: </br> <a href="mailto:contact@musicband.com">contact@musicband.com </a> </p>

            </div>
        </div>

        <div class="playerBar">

            <div class="artist"></div>

            <div class="player"> 
                <div id="previous"></div>
                <button class="playerButtonBig" id="playbtn">
                    <div class="playButton" id="playicon"></div> 
                </button>
                <div id="next"></div>
            </div>
        </div>
    </footer>

   







    <script src="script.js"></script>
</body>

</html>