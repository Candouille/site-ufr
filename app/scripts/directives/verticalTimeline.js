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

  return {
    restrict: 'E',
    scope:{
      events:'='
    },
    controller: function ($scope, $state){
      var canvas = document.getElementById('vertical-timeline');
      if (canvas.getContext) {

        var nbOfEvents = $scope.events.length;
        var ctx = canvas.getContext('2d');

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

        //Canvas dimensions
        var canvasParentContainer = document.getElementsByClassName('vertical-timeline');
        canvas.width = canvasParentContainer[0].clientWidth
        canvas.height = (nbOfEvents + 2) * (lineWidth + pointRadius);

        var originX = canvas.width/4;
        var originY = 25;

        //Draw the Timeline
        for (var i = 0; i < nbOfEvents; i++) {
          drawEventPoint(ctx, originX, originY, pointRadius, circleWidth, pointColor, pointFont, $scope.events[i]);

          if (i + 1 === nbOfEvents || moment($scope.events[i].date, 'YYYYMMDD').format('YYYY') !== moment($scope.events[i+1].date, 'YYYYMMDD').format('YYYY')) {
            drawDashYear(ctx, originX - yearOffsetX, originY + yearOffsetY, dashWidth, dashHeight, spaceBetweenDash, nbOfDash, yearColor, yearFont, moment($scope.events[i].date, 'YYYYMMDD').format('YYYY'));
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
