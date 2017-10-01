"use strict";angular.module("communauteUfrApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.router","ui.bootstrap"]).config(["$urlRouterProvider","$stateProvider","$locationProvider",function(a,b,c){a.otherwise("/accueil"),b.state("home",{url:"/accueil",templateUrl:"views/home.html",controller:"HomeController"}).state("news",{url:"/news/{newsTitle}",params:{news:null},templateUrl:"views/news-page.html",controller:"NewsController"})}]).run(["$anchorScroll",function(a){a.yOffset=50;var b=["wows","ps2"],c=Math.floor(Math.random()*b.length);angular.element(document.querySelector("body")).addClass("background-"+b[c])}]),angular.module("communauteUfrApp").controller("HomeController",["$anchorScroll","$location","$scope","$stateParams","$rootScope","$state",function(a,b,c,d,e,f){c.myInterval=5e3,c.noWrapSlides=!1,c.active=0;var g=c.slides=[];c.gotoAnchor=function(c){var d=c;b.hash()!==d?b.hash(c):a()},g.push({image:"images/carousel/overwatch.png",titre:"On lvl up sur Overwatch !",texte:"Si le matchmaking le veut bien...",id:0}),g.push({image:"images/carousel/sc3-0-soon.png",titre:"La 3.0 arrive bientôt !",texte:"Et peut-être même qu'un jour, Star Citizen sera terminé pour de vrai !",id:1}),g.push({image:"//image.noelshack.com/fichiers/2016/47/1480287464-gtav.png",titre:"L'UFR est sur GTA !",texte:"Le respect peut aller se faire foutre. La décence aussi...",id:2}),g.push({image:"//image.noelshack.com/fichiers/2016/47/1480286066-prowler.png",titre:"Le Prowler, la relève du Galaxie",texte:"Get in the gal ! Get in the fucking ga... My mistake. Get in the Prowler !",id:3}),void 0===e.goToHome&&(e.goToHome=function(){f.go("accueil")}),c.newsBlocks=[{jeu:"World of Warships",titre:"Match Lots",img:"wows.jpg",file:"2017-02-25-1-un-nouveau-fighter-le-hurricane.json",name:"lots-2-m3"},{jeu:"World of Warships",titre:"Tournoi King of the Sea II",img:"king-of-the-sea-2.png",file:"2017-02-25-1-un-nouveau-fighter-le-hurricane.json",name:"tournoi-king-of-the-sea-2"},{jeu:"Planetside 2",titre:"Update des constructions",img:"ps2.jpg",file:"2017-02-25-1-un-nouveau-fighter-le-hurricane.json",name:"update-des-constructions"},{jeu:"World of Warships",titre:"Tournoi OMNI",img:"wows.jpg",file:"2017-02-25-1-un-nouveau-fighter-le-hurricane.json",name:"update-des-constructions"},{jeu:"Grand Theft Auto V",titre:"Motos, boulots, bobos",img:"gtav.jpeg",file:"2017-02-25-1-un-nouveau-fighter-le-hurricane.json",name:"update-des-constructions"},{jeu:"Star Citizen",titre:"CitizenCon 2016",img:"sc.jpg",file:"2017-02-25-1-un-nouveau-fighter-le-hurricane.json",name:"update-des-constructions"}],c.blocksJeu=[{titre:"PlanetSide 2",sousTitre:"branche inactive",img:"ps2.jpg",branche:"ps2"},{titre:"World of Warships",sousTitre:"Recrutement sélectif",img:"wows.jpg",branche:"wows"},{titre:"Grand Theft Auto V",sousTitre:"Ouvert au recrutement",img:"gtav.jpeg",branche:"gtav"},{titre:"Star Citizen",sousTitre:"En attente de la V1 du jeu",img:"sc.jpg",branche:"sc"}]}]),angular.module("communauteUfrApp").controller("NewsController",["$scope","$stateParams","$rootScope","$state","$http",function(a,b,c,d,e){a.news={},void 0===c.goToHome&&(c.goToHome=function(){d.go("home")}),b.news||c.goToHome();var f={"update-des-constructions":{date:"2017/02/25",author:"Candax",title:"Un nouveau fighter arrive: le Hurricane !",subtitle:"",mainVideo:null,mainImage:"https://robertsspaceindustries.com/media/iv9t115yjn48pr/store_slideshow_large/SkyFlight-V02-Copy.jpg",content:[{text:"La taille ne fait pas tout: le Hurricane en est la preuve. Malgré son fuselage relativement fin, ce chasseur embarque une sacré puissance de feu. Il compense son manque de confort avec son puissant armement: six canons capables de dézinguer quasiment n'importe quoi. A tel point que les pilotes d'Hurricane cherchent encore le bouclier ennemi qu'ils ne peuvent mettre KO.",image:"https://robertsspaceindustries.com/media/vgco9hcmodm8or/store_slideshow_large/Flight-Copy.jpg"},{text:"Big things do come in small packages: the Hurricane is a fighting spacecraft that packs a deadly punch into a slight fuselage. The spacecraft compensates for its lack of creature comforts with its powerful armament: six guns capable of blasting their way through nearly anything. Hurricane pilots have yet to find an enemy shield they can't knock down.",image:"https://robertsspaceindustries.com/media/w5bxy47m9uwbor/store_slideshow_large/Takeoff-Final-V02-Copy.jpg"},{text:"Big things do come in small packages: the Hurricane is a fighting spacecraft that packs a deadly punch into a slight fuselage. The spacecraft compensates for its lack of creature comforts with its powerful armament: six guns capable of blasting their way through nearly anything. Hurricane pilots have yet to find an enemy shield they can't knock down.",image:"https://robertsspaceindustries.com/media/lkj9x01i6jdmvr/store_slideshow_large/Turret-Battle-Copy.jpg"}]},"tournoi-king-of-the-sea-2":{date:"2017/02/27",author:"Garvielle Thisheep",title:"Tournoi King of the Sea II",subtitle:"",mainVideo:"https://www.youtube.com/embed/o6yS9q1Kaek",mainImage:null,content:[{text:"Suite au premier tournoi King of the Sea, l'UFR est bien décidée à se démarquer lors de la nouvelle édition qui aura lieu le samedi 4 et le dimanche 5 mars. Le format sera le même que précédemment: des matchs en T8 opposant des équipes en 9 vs 9.",image:"https://s2.qwant.com/thumbr/0x0/f/6/c1a6572d43be7522fb94ec7c3ccf51/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fwww.tapeciarnia.pl%2Ftapety%2Fnormalne%2F243011_world_of_warships.jpg&q=0&b=1&p=0&a=1"}]},"lots-2-m3":{date:"2017/10/01",author:"GizonLounar",title:"Match Lots",subtitle:"UFR vs WGP2W",mainVideo:null,mainImage:"https://yt3.ggpht.com/-GWTmdFV3oJ0/AAAAAAAAAAI/AAAAAAAAAAA/11R-8kRpNUI/s288-c-k-no-mo-rj-c0xffffff/photo.jpg",content:[{text:"Troisième match pour l'UFR dans la League of the Sea II. Ce match nous opposera à la WGP2W le jeudi 5 octobre à 21h. Le format est toujours en 9 vs 9 en T8. Le stream du match sera hébergé par notre chaîne twitch : https://twitch.tv/unitefrancophone ",image:"https://s2.qwant.com/thumbr/0x0/f/6/c1a6572d43be7522fb94ec7c3ccf51/b_1_q_0_p_0.jpg?u=http%3A%2F%2Fwww.tapeciarnia.pl%2Ftapety%2Fnormalne%2F243011_world_of_warships.jpg&q=0&b=1&p=0&a=1"}]}};a.news=f[b.news.name]}]),angular.module("communauteUfrApp").controller("BranchController",["$scope","$state","$stateParams",function(a,b,c){}]),angular.module("communauteUfrApp").directive("blockJeu",["$state",function(a){return{restrict:"E",scope:{titre:"=",sousTitre:"=",img:"=",branche:"="},controller:["$scope",function(b){b.imageFond={"background-image":"url(images/branches/"+b.img+")"},b.changeState=function(){a.go("branche",{nomBranche:b.branche})}}],templateUrl:"views/directives/block-jeu.html"}}]),angular.module("communauteUfrApp").directive("branche",["$stateParams",function(a){return{restrict:"E",scope:{},controller:["$scope",function(b){var c={ps2:{nom:"PlanetSide 2",articles:"brzufzbf ps2",description:"ici c'est PS2 !"},wows:{nom:"World of Warships",articles:"zubfzeubfezuib wows",description:"ici c'est WoWS !"},gtav:{nom:"Grant Theft Auto V",articles:"zehbeziubezu gta5",description:"ici c'est GTAV !"},sc:{nom:"Star Citizen",articles:"ezhbezuibfzuib sc",description:"ici c'est SC !"}};console.log("branche directive: "+a.nomBranche),b.brancheActuelle=c[a.nomBranche]}],templateUrl:"views/directives/branch.html"}}]),angular.module("communauteUfrApp").directive("branchInfo",function(){return{restrict:"E",scope:{nom:"="},controller:["$scope",function(a){}],templateUrl:"views/directives/branch-info.html"}}),angular.module("communauteUfrApp").directive("blockNews",function(){return{restrict:"E",scope:{news:"="},controller:["$scope","$state",function(a,b){a.imageFond={"background-image":"url(images/news/"+a.news.img+")"},a.goToNewsPage=function(){b.go("news",{newsTitle:a.news.name,news:a.news})}}],templateUrl:"views/directives/block-news.html"}}),angular.module("communauteUfrApp").run(["$templateCache",function(a){a.put("views/branch-page.html",'<div ng-controller="BrancheController"> <branche></branche> </div>'),a.put("views/common/footer.html",'<div class="ufr-footer container-fluid"> <h3>Contactez-nous</h3> <p> <a href="http://forum.communaute-ufr.fr">sur notre forum</a> </p> <p>sur Facebook</p> <p> <a class="social" href="https://www.facebook.com/Unit%C3%A9-Francophone-1799066490324966/" target="_blank"> <img src="images/icons/soc_fb.png"> </a> </p> <div>ou par mail: <img src="images/mail-address-contact.png" height="25px"></div> </div>'),a.put("views/common/header.html",'\x3c!--Bannière - header--\x3e <div class="ufr-header container-fluid"> <div> <img ui-sref="home" class="logo-accueil" src="images/robocoq-rond.png"> </div> <div class="header-text"> <h1>Unité Francophone</h1> <p>Communauté muligaming née des cendres d\'Auraxis</p> </div> </div>'),a.put("views/directives/block-jeu.html",'<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 block-jeu"> <div class="block-branche-background" data-ng-style="imageFond" ng-click="changeState()"> <div class="block-branche-shadow-and-text"> <span class="branch-name">{{titre}}</span> <hr> <span class="branch-status">{{sousTitre}}</span> </div> <span></span> </div> </div>'),a.put("views/directives/block-news.html",'<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 block-news" data-ng-style="imageFond"> <div ng-click="goToNewsPage()" class="sub-block-news"> <span class="news-title">{{news.titre}}</span> <hr> <span class="news-game">{{news.jeu}}</span> </div> </div>'),a.put("views/directives/branch-info.html",'<div class="container"> <h2>{{nom}}</h2> </div>'),a.put("views/directives/branch.html",'<h1>Nom Page: {{brancheActuelle.nom}}</h1> <div>Description: {{brancheActuelle.description}}</div> <div>Articles: {{brancheActuelle.articles}}</div> <fiche-branche nom="nomBranche"></fiche-branche>'),a.put("views/home.html",'<div class="ufr-home"> <div class="main-page-content"> \x3c!--Barre de navigation--\x3e <nav class="navbar-ufr container-fluid page-element"> <ul class="navbar-ufr-list row"> <a href="" ng-click="gotoAnchor(\'actu\')"> <li class="col-md-2 col-sm-2 col-xs-12">Actualités</li> </a> <a href="" ng-click="gotoAnchor(\'branches\')"> <li class="col-md-3 col-sm-2 col-xs-12">Branches</li> </a> <a href="" ng-click="gotoAnchor(\'recrutement\')"> <li class="col-md-2 col-sm-3 col-xs-12">Recrutement</li> </a> <a href=""> <li class="col-md-3 col-sm-3 col-xs-12">Association</li> </a> <a href="http://forum.communaute-ufr.fr/" target="_blank"> <li class="col-md-2 col-sm-2 col-xs-12">Forum</li> </a> </ul> </nav> \x3c!--Carousel--\x3e \x3c!--Les images apparaissent en 1000x542px, on tâchera donc de les stocker sous ces dimensions.--\x3e <div class="page-element"> <div uib-carousel active="active" interval="myInterval" no-wrap="noWrapSlides" class="ufr-carousel"> <div uib-slide ng-repeat="slide in slides track by slide.id" index="slide.id"> <img ng-src="{{slide.image}}"> <div class="carousel-caption"> <span class="carousel-title">{{slide.titre}}</span> <span class="carousel-subtitle">{{slide.texte}}</span> </div> </div> </div> </div> \x3c!--Les blocks dédiés aux actualités--\x3e <div class="container-fluid"> <div class="col-lg-4 col-md-4 col-sm-3 col-xs-2"></div> <div class="section-title col-lg-4 col-md-4 col-sm-6 col-xs-12"> <h2 id="actu">Actualités</h2> </div> <div class="col-lg-4 col-md-4 col-sm-3 col-xs-2"></div> </div> <div class="container-fluid container-news page-element"> <block-news data-ng-repeat="block in newsBlocks" news="block"></block-news> </div> \x3c!--Les blocks dédiés à nos jeux--\x3e <div class="container-fluid"> <div class="col-lg-4 col-md-4 col-sm-3 col-xs-2"></div> <div class="section-title col-lg-4 col-md-4 col-sm-6 col-xs-12"> <h2 id="branches">Nos branches</h2> </div> <div class="col-lg-4 col-md-4 col-sm-3 col-xs-2"></div> </div> <div class="page-element"> <div class="container-fluid container-jeux"> <block-jeu data-ng-repeat="block in blocksJeu" titre="block.titre" sous-titre="block.sousTitre" img="block.img" branche="block.branche"> </block-jeu> </div> </div> \x3c!--Le Recrutement--\x3e <div class="container-fluid"> <div class="col-lg-4 col-md-4 col-sm-3 col-xs-2"></div> <div class="section-title col-lg-4 col-md-4 col-sm-6 col-xs-12"> <h2 id="recrutement">Nous rejoindre</h2> <p class="recrutement">(Recrutement)</p> </div> <div class="col-lg-4 col-md-4 col-sm-3 col-xs-2"></div> </div> <div class="container-recrutement panel panel-default page-element"> <div class="panel-body"> <ol> <li>Créez vous un compte sur notre forum via <a href="http://forum.communaute-ufr.fr/register" target="_blank"> ce lien</a>. </li> <li>Référez vous à <a href="http://forum.communaute-ufr.fr/t307-procedure-de-recrutement" target="_blank"> ces instructions</a>. </li> <li>Puis poster votre candidature <a href="http://forum.communaute-ufr.fr/f4-inscriptions">ici</a>. </li> </ol> </div> </div> </div> </div>'),a.put("views/news-page.html",'<div ng-controller="NewsController" class="news-container"> <div class="container"> <div class="row"> <div class="col-lg-3 col-med-3 col-sm-3 col-xs-3"></div> <div class="col-lg-6 col-med-6 col-sm-6 col-xs-6 block-title"> <h2>{{news.title}}</h2> <h3>{{news.subtitle}}</h3> <p>{{news.author}}</p> <p>{{news.date}}</p> </div> <div class="col-lg-3 col-med-3 col-sm-3 col-xs-3"></div> </div> </div> <div class="container"> <div ng-if="news.mainImage" class="img-main"> <img ng-src="{{news.mainImage}}"> </div> <div ng-if="news.mainVideo" class="video-main"> <iframe width="560" height="315" src="https://www.youtube.com/embed/o6yS9q1Kaek" frameborder="0" allowfullscreen></iframe> </div> <div data-ng-repeat="element in news.content" class="news-content row" ng-class="$index%2 === 0 ? \'content-even\' : \'content-odd\'"> \x3c!--Pour les devices suffisamment grands--\x3e \x3c!--On alterne la disposition des paragraphes et des images--\x3e <p ng-if="$index%2 === 0" class="col-lg-7 col-med-7 col-sm-6 news-for-non-xs-only"> {{element.text}} </p> <img ng-if="$index%2 === 0" ng-src="{{element.image}}" class="col-lg-4 col-med-4 col-sm-5 news-for-non-xs-only"> <img ng-if="$index%2 === 1" ng-src="{{element.image}}" class="col-lg-4 col-med-4 col-sm-5 news-for-non-xs-only"> <p ng-if="$index%2 === 1" class="col-lg-7 col-med-7 col-sm-6 news-for-non-xs-only"> {{element.text}} </p> \x3c!--Pour les autres, (les smartphones) on affiche tout dans le même ordre--\x3e <p class="col-xs-12 news-for-xs-only"> {{element.text}} </p> <img ng-src="{{element.image}}" class="col-xs-12 news-for-xs-only"> </div> </div> </div>')}]);