<?php header('Access-Control-Allow-Origin: *');  ?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Music-Band</title>

</head>

<body>
    <nav>
        <div class="menuburger"></div>
        <div class="musicband">  Music Band </br> La musique au bout des doigts</div>
        <div class="searchbar">Recherchez, écoutez...</div>
        <div class="avatar"></div>
        <div class="user">Alain</div>
    </nav>
    <header>
        <div>
            <h1><span>Music</span> Band</h1>
            <p>Votre musique sans pub, partout. Seulement 9,99€/mois ensuite. Soumis à conditions. Des podcasts
                exclusifs. Des playlists sur-mesure. Faites des découvertes. Zappez à volonté. Plus de 50 milliards de
                chansons. Annulation tout de suite!</p>

            <button>commencer l'écoute</button>
            <button>s'abonner</button>
        </div>
    </header>
    <section id="genres">
        <h2>Genre</h2>
        <div id="genreList">

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


    <section id="artistMoment"></section>
    <section id="topPlaylists">
        <h2><span>Le top</span> des playlists à venir découvrir ou redécouvrir</h2>
    </section>
    <section id="topPodcasts">
        <h2><span>Revivez</span> vos émissions de radio préférées</h2>
    </section>


    <footer>
        <div class="leftFooter">
            <div class="musicband"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed ante sit amet mi fermentum
                accumsan. Nulla tristique, lorem eget accumsan efficitur, enim ipsum venenatis massa, mattis eleifend
                dui nibh sed sem. Vivamus nec quam turpis. Integer auctor leo at convallis malesuada. Praesent cursus
                feugiat ligula et tristique. Vivamus in velit nec nibh venenatis semper id eu ligula. Nullam dignissim
                vehicula tempor. Quisque a elementum purus. Maecenas condimentum arcu non nulla feugiat pharetra. Nunc
                aliquam enim augue, ultricies porta nulla maximus sed.</p>
        </div>
        <div class="middleFooter">
            <h2>Inscrivez vous à la Newsletter</h2>
            <p>Abonnez-vous à notre newsletter et recevez les dernières mises à jour et offres.</p>
            <form action="" method="post">
                <input type="name">
                <input type="e-mail">
                <button>Inscrivez-vous</button>
            </form>
        </div>
        <div class="rightFooter">
            <h2>Nous contacter</h2>
            <p>Vous souhaitez nous contacter. Plusieurs solutions s'offrent à vous</p>
            <div class="tel">
                <p>Par téléphone au: <a href="tel:+33389878586">03 89 87 85 86</a></p>
            </div>
            <div class="mail">
                <p>Par email au: <a href="mailto:contact@musicband.com">contact@musicband.com</a></p>
            </div>
        </div>
    </footer>











    <script src="script.js"></script>
</body>

</html>