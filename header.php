<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./css/header.css">
  <link rel="stylesheet" href="./css/footer.css">
  <link rel="stylesheet" href="./css/sub-header.css">
  <link rel="stylesheet" href="./css/sub-layout.css">
  <link rel="stylesheet" href="./css/about.css">
  <link rel="stylesheet" href="./css/business.css">
  <link rel="stylesheet" href="./css/online.css">
  <link rel="stylesheet" href="./css/notice.css">
  <link rel="stylesheet" href="./css/gallery.css">
  <link rel="stylesheet" href="./css/isotope.css">
  <link rel="stylesheet" href="./css/justifiedGallery-min.css">
  <link rel="stylesheet" href="./css/index.css">
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="https://kit.fontawesome.com/d5ea35b76b.js" crossorigin="anonymous"></script>
  <script src="./js/window.js"></script>
  <script src="./js/responsive_carousel_horz.js"></script>
  <script src="./js/jquery.justifiedGallery.min.js"></script>
  <script src="./js/jquery.isotope.js"></script>
  <script defer src="./js/header.js"></script>
  <script defer src="./js/dummy.js"></script>
  <script defer src="./js/gallery.js"></script>
  <script defer src="./js/home.js"></script>

</head>

<body>
  <header>
    <nav class="header-top">
      <ul>
        <li><a href="./index.php">????????????</a></li>
        <li><a href="#" class="dummy-link">?????????</a></li>
        <li><a href="#" class="dummy-link">????????????</a></li>
      </ul>
    </nav>

    <section class="header-bottom">
      <h1>
        <span class="hidden">??????</span>
        <a href="./index.php"><img src="./img/./icon/./logo.gif" alt=""></a>
      </h1>

      <div class="gnb gnb-lg">
        <?php include 'menu.php' ?>
      </div>

      <button class="mbtn">
        <i class="btn1 fa-solid fa-bars"></i>
        <i class="btn2 fa-solid fa-xmark"></i>
      </button>


      <div class="gnb gnb-sm">
        <?php include 'menu.php' ?>
      </div>
    </section>

  </header>