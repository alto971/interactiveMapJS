<html>

<head>
    <meta charset="UTF-8">
    <title>Inscrivez vous à la formation Web Dev | Simplon</title>
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:400,700" rel="stylesheet">

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js"></script>

    <link rel=icon href=https://simplon.co/wp-content/themes/DiviChildV2/images/logo.png sizes="16x16" type="image/png">
  <link rel=icon href=windows.ico sizes="32x32 48x48" type="image/vnd.microsoft.icon">
  <link rel=icon href=mac.icns sizes="128x128 512x512 8192x8192 32768x32768">
  <link rel=icon href=iphone.png sizes="57x57" type="image/png">
  <link rel=icon href=gnome.svg sizes="any" type="image/svg+xml">

  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
</head>

<body>
    <header id="masthead" class="site-header" role="banner">
        <div class="nav-left">
            <a href="#">
                <img src="https://simplon.co/wp-content/themes/DiviChildV2/images/logo.png" alt="">
                <p>Simplon, formations numériques et inclusives</p>
            </a>
        </div>
    </header>

    <div class="jumbotron">
        <h1 class="display-4">Réseau des fabriques Simplon Occitanie</h1>
        <p class="lead">Carte interactive</p>
        <hr class="my-4">
        <p>Un clic et vous savez tout !</p>
        <p class="lead">
            <a class="btn btn-simplon btn-lg" href="https://simplon.co" target="_blank" role="button">Simplon.co</a>
        </p>
    </div>

    <section class="container">
        <div class="row">
            <div class="col">
                <h2>Choisissez une fabrique</h2>
                <hr />
                <div class="center">
                    <div id="mapid" ></div>
                </div>
            </div>
            <div class="col">
            <br><br>
                <h2 id="titreFabrique">Infos</h2>
                <hr />
                <p class="infos" id="blocInfos">
                Choisissez une fabrique...
                </p>
            </div>
        </div>
    </section>
    <br><br><br>

    <footer id="main-footer row">
        <div class="col-md-12">
            <ul>
                <li>
                    <img src="https://simplon.co/wp-content/themes/DiviChildV2/images/logo.png" alt="">
                    <h3>SIMPLON.CO</h3>
                </li>
                <li>
                    <p>Formations numériques et inclusives</p>
                </li>
                <div class="lienfooter">
                    <a href="https://simplon.co/presse/"> PRESSE</a>
                    <a href="https://simplon.co/anti-faq/">ANTI-FAQ</a>
                    <a href="https://talents.simplon.co/#!/home">TALENTS.CO</a><br />
                    <a href="https://simplon.co/newsletter/">NEWSLETTER</a>
                    <a href="https://simplon.co/mentions-legales/">MENTIONS LÉGALES</a>

                </div>
                <li>
                    <a href="https://www.facebook.com/Simplon.co/" target="_blank"><img src="https://simplon.co/wp-content/themes/DiviChildV2/images/facebook.png"
                            alt=""></a>
                    <a href="https://twitter.com/simplonco?lang=fr" target="_blank"><img src="https://simplon.co/wp-content/themes/DiviChildV2/images/twitter.png"
                            alt="twitter"></a>
                    <a href="https://fr.linkedin.com/company/simplon-co" target="_blank"><img src="https://simplon.co/wp-content/themes/DiviChildV2/images/linkedin.png"
                            alt=""></a>
                </li>
            </ul>
        </div>
    </footer>

   

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>

        <script src="js/EventBus.js"></script> 
     <script src="js/DatasManager.js"></script> 
      <script src="js/LeafletMarker.js"></script> 
      <script src="js/LeafletMap.js"></script>  
      <script src="js/app.js"></script>
</body>

</html>