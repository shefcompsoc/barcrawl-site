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
        <div class="btn clickable" onclick="linkTo('venues/bandb.php')">
          <p>Bungalows and Bears</p>
        </div>
        <div class="btn clickable" onclick="linkTo('venues/code.php')">
          <p>Code</p>
        </div>
    </div>
  </body>
</html>
