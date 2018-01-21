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

  var drawEventPoint = function (context, x, y, radius, width, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.lineWidth = width;
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.stroke();

    context.beginPath();
    context.fillStyle = color;
    context.arc(x, y, radius - width - 2, 0, Math.PI * 2, true);
    context.fill();
  };

  return {
    restrict: 'E',
    scope:{
      content:'='
    },
    controller: function ($scope, $state){

      var canvas = document.getElementById('vertical-timeline');
      if (canvas.getContext) {

        var nbOfEvents = 8;

        var ctx = canvas.getContext('2d');
        var pointRadius = 10;
        var lineWidth = 60;
        var lineColor = 'rgb(50, 100, 150)';
        var pointColor = lineColor;
        var originX = canvas.width/2;
        var originY = 25;

        canvas.height = (nbOfEvents + 2) * (lineWidth + pointRadius);

        var x = originX;
        var y = originY;

        for (var i = 0; i < nbOfEvents; i++) {
          drawEventPoint(ctx, x, y, pointRadius, 4, pointColor);
          if (i !== nbOfEvents - 1) {
            drawVerticalLine(ctx, x, y + pointRadius + 1, lineWidth, 3, lineColor);
            y += lineWidth + pointRadius * 2;
          }
        }

      } else {
        console.log('Your browser does not support canvas... Update or change it !');
      }
    },
    templateUrl: 'views/directives/vertical-timeline.html'
  };
});
