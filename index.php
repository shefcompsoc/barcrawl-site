<!DOCTYPE html>

<!--
Venue selection page.
-->

<html>
  <head>
    <?php include("meta.html"); ?>
  </head>

  <body>
    <div class="main">
        <img src="assets/slim.png"/>
        <div class="btn clickable" onclick="linkTo('venues/barone.php')">
          <p>Bar One</p>
        </div>
        <div class="btn clickable" onclick="linkTo('venues/huttons.php')">
          <p>Huttons</p>
        </div>
        <div class="btn clickable" onclick="linkTo('venues/tigerworks.php')">
          <p>Tiger Works</p>
        </div>
        <div class="btn clickable" onclick="linkTo('venues/soyo.php')">
          <p>Soyo</p>
        </div>
        <div class="btn clickable" onclick="linkTo('venues/code.php')">
          <p>Code</p>
        </div>

        <div class="deals clickable" onclick="window.open('https://www.google.co.uk/maps/dir/Bar+One,+Glossop+Road,+Sheffield/Huttons+Bar,+West+Street,+Sheffield/Tiger+Works,+West+Street,+Sheffield/Soyo,+Rockingham+Street,+Sheffield/Code,+Eyre+Street,+Sheffield/@53.3787854,-1.4837989,16.25z/data=!4m32!4m31!1m5!1m1!1s0x487982786cf9dffb:0x37a1f2c62009456f!2m2!1d-1.4874361!2d53.3804776!1m5!1m1!1s0x4879827fe2b3df83:0xa350144c71ca935c!2m2!1d-1.4766448!2d53.3808402!1m5!1m1!1s0x4879827ffd3ecc05:0xcf93ad792f48068c!2m2!1d-1.476303!2d53.381055!1m5!1m1!1s0x487982800f830e8f:0x3df7d20a869c52!2m2!1d-1.4756129!2d53.38067!1m5!1m1!1s0x48798281493cc78d:0xf8c5d8be03392032!2m2!1d-1.470956!2d53.376629!3e2')">
          <p>Route (Google Maps)</p>
        </div>
    </div>
  </body>
</html>
