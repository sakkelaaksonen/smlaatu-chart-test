(function() {
  'use strict';

  angular
    .module("chartjs")
    .controller('appController',function($scope, DATA, DATE, $filter) {


      $scope.amChartOptions = {
          data: [{
            year: 2005,
            income: 23.5,
            expenses: 18.1
          }, {
            year: 2006,
            income: 26.2,
            expenses: 22.8
          }, {
            year: 2007,
            income: 30.1,
            expenses: 23.9
          }, {
            year: 2008,
            income: 29.5,
            expenses: 25.1
          }, {
            year: 2009,
            income: 24.6,
            expenses: 25
          }],
          type: "serial",

          categoryField: "year",
          rotate: true,
          pathToImages: 'https://cdnjs.cloudflare.com/ajax/libs/amcharts/3.13.0/images/',
          legend: {
            enabled: true
          },
          chartScrollbar: {
            enabled: true,
          },
          categoryAxis: {
            gridPosition: "start",
            parseDates: false
          },
          valueAxes: [{
            position: "top",
            title: "Million USD"
          }],
          graphs: [{
            type: "column",
            title: "Income",
            valueField: "income",
            fillAlphas: 1,
          }]
        }

    }
  );

})();