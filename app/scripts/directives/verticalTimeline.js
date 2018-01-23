'use strict';

angular.module('communauteUfrApp').directive('verticalTimeline', function(){

  var drawVerticalLine = function (context, lineOriginX, lineOriginY, width, weight, fillColor) {
    context.fillStyle = fillColor;
    context.beginPath();
    context.moveTo(lineOriginX - weight, lineOriginY);
    context.lineTo(lineOriginX - weight, lineOriginY + width);
    context.lineTo(lineOriginX + weight, lineOriginY + width);
    context.lineTo(lineOriginX + weight, lineOriginY);
    context.fill();
  };

  var drawEventPoint = function (context, x, y, radius, width, color, font, event) {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = width;
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.stroke();

    context.beginPath();
    context.fillStyle = color;

    if (event.level === 0) {
      radius = radius - width - 2;
    } else {
      radius = radius - width - 3;
    }
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fill();

    context.font = font;
    context.fillText(moment(event.date, 'YYYYMMDD').format('Do MMMM'), x + 15, y - 2);
    context.fillText(event.label, x + 15, y + 14);
  };

  var drawDashYear = function (context, startX, startY, width, height, space, number, color, font, year) {
    context.fillStyle = color;

    for (var i = 0; i < number; i++) {
      context.beginPath();
      context.moveTo(startX - i * (width + space), startY - height/2);
      context.lineTo(startX - i * (width + space) - width, startY - height/2);
      context.lineTo(startX - i * (width + space) - width, startY + height/2);
      context.lineTo(startX - i * (width + space), startY + height/2);
      context.fill();

      context.font = font;
      context.fillText(year, startX - ((width + space) * number)/2 - 5, startY - 10);
    }
  };


  var events = [{
      date: '20180627',
      label: 'toto',
      text: '',
      img: 'ffefe',
      level: 1
    }, {
      date: '20160301',
      label: 'Avènement du Commandant GizonLounar',
      text: '',
      img: 'ffefe',
      level: 1
    }, {
      date: '20141011',
      label: 'Candax, Nyil et PunkDestroyer prennent le lead',
      text: '',
      img: 'ffefe',
      level: 1
    }, {
      date: '20130705',
      label: 'Création du forum',
      text: 'Sur un coup de tête et au terme d\'une nuit blanche, Nyil met en place le tout premier forum dédié à l\'unité... et manque son train pour la Japan Expo à cause de la fatigue. Nyil, nous saluons ton sacrifice !',
      img: 'ffefe',
      level: 1
    }, {
      date: '20130627',
      label: 'Naissance de l\'UFR',
      text: 'Le ' + moment("20130627", "YYYYMMDD").format('LL') + ',  sur le regretté serveur Woodman, deux unités ' +
      'françaises décident de s\'associer. D\'un côté la team Empire Eagle menée par Mazrock et Citax, ' +
      'de l\'autre les LMFR (Le Monde FR) dirigés par Damienfr et parmis lesquels on retrouve Dovalou, Fionxt, Damienfrr et LittleBugsBunny. C\'est ainsi que Le Nouveau Conglomérat Francophone (UFR) apparaît.',
      img: 'ffefe',
      level: 0
    }, {
      date: '20130624',
      label: '1er épisode de LFG sur PS2',
      text: 'En consacrant 4 épisodes successifs de leur chronique "Looking for Games" à Planetside 2, Krain et le Joueur du grenier génèrent une nouvelle vague d\'inscription de joueurs français.' +
      ' Le dernier épisode affiche d\'ailleurs en guest l\'un des plus célèbres joueurs français ayant foulé les plaines d\'Auraxis : CDL (CendreDeLune). ' +
      'La vidéo du 1er épisode : https://www.youtube.com/watch?v=_PKSaBaLl-g',
      img: 'ffefe',
      level: 1
    }, {
      date: '20130315',
      label: 'Vidéo du JDG, Seb, Fanta et Bob',
      text: '',
      img: 'ffefe',
      level: 1
    }, {
      date: '20121120',
      label: 'Sortie de Planetside 2',
      text: '',
      img: 'ffefe',
      level: 1
    }
  ];

  return {
    restrict: 'E',
    scope:{
      content:'='
    },
    controller: function ($scope, $state){

      var canvas = document.getElementById('vertical-timeline');
      if (canvas.getContext) {

        var nbOfEvents = events.length;
        var ctx = canvas.getContext('2d');
        var originX = canvas.width/4;
        var originY = 25;


        //Points - event
        var pointRadius = 10;
        var circleWidth = 4;
        var pointColor = 'rgb(50, 100, 150)';
        var pointFont = '15px Arial';

        //Lines
        var lineWidth = 60;
        var lineColor = 'rgb(50, 100, 150)';

        //Dash - year
        var dashWidth = 15;
        var dashHeight = 2;
        var spaceBetweenDash = 5;
        var yearOffsetX = 20;
        var yearOffsetY = 20;
        var yearColor = 'rgb(50, 100, 150)';
        var nbOfDash = 3;
        var yearFont = '15px Arial';

        //Set canvas dimensions
        canvas.height = (nbOfEvents + 2) * (lineWidth + pointRadius);

        //Draw the Timeline
        for (var i = 0; i < nbOfEvents; i++) {
          drawEventPoint(ctx, originX, originY, pointRadius, circleWidth, pointColor, pointFont, events[i]);

          if (i + 1 === nbOfEvents || moment(events[i].date, 'YYYYMMDD').format('YYYY') !== moment(events[i+1].date, 'YYYYMMDD').format('YYYY')) {
            drawDashYear(ctx, originX - yearOffsetX, originY + yearOffsetY, dashWidth, dashHeight, spaceBetweenDash, nbOfDash, yearColor, yearFont, moment(events[i].date, 'YYYYMMDD').format('YYYY'));
          }

          if (i !== nbOfEvents - 1) {
            drawVerticalLine(ctx, originX, originY + pointRadius + 1, lineWidth, 3, lineColor);
            originY += lineWidth + pointRadius * 2;
          }
        }

      } else {
        console.log('Your browser does not support canvas... Update or change it !');
      }
    },
    templateUrl: 'views/directives/vertical-timeline.html'
  };
});
