(function() {
  'use strict';

  angular
    .module("amchart-app", ['amChartsDirective'])
    .factory('WaterBodyService', function($http) {

      return {
        getParameterForWaterBody: function(modelId, post_params) {
          // var url = [PATH.API, modelId,'wbsresult'].join('/');
          var url = 'wbsresult.json';
          return $http.get(url, post_params);
        }
      };
    })
    .controller('appController', function($scope, $q, $filter, WaterBodyService) {

      var paramData = {
        "wb_list": [1008000000, 1010000000, 1045000000],
        "timespan": ["2011-09-01", "2011-09-20"],
        "parameter": "totN_0"
      };

      var getGraphBaseData = function() {
        return {
          "id": null,
          "bullet": "round",
          "bulletBorderAlpha": 1,
          "bulletColor": "#FFFFFF",
          "bulletSize": 5,
          "hideBulletsCount": 50,
          "lineThickness": 2,
          "title": "totP",
          "useLineColorForBulletBorder": true,
          "valueField": null,
          "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>"
        };
      };

      var getData = function(data) {

        console.log('service data response', data);

        var readyData = data.days.map(function(d) {
          return {
            date: d
          };
        });

        data.results.forEach(function(set) {
          set.values.forEach(function(val, i) {
            var datacell = {};
            datacell[set.grid_id] = val;
            _(readyData[i]).extend(datacell);
          });

        });
        console.log('graph data', readyData);
        return readyData;

      };

      var getValueAxes = function(data) {
        return data.results.map(function(set) {
          return {
            "id": set.grid_id,
            "axisAlpha": 0,
            "position": "left"
          };
        });
      };

      var getGraphs = function(data) {
        console.log('service config response', data);
        var graphConfig = data.results.map(function(waterbodydata) {
          return _(getGraphBaseData()).extend({
            title: waterbodydata.name,
            valueField: waterbodydata.grid_id,
            id: waterbodydata.grid_id
          });
        });
        console.log('graph config', graphConfig);
        return graphConfig;
      };


      var getChartOptions = function() {
        return {
          "data": null,
          "pathToImages": "./bower_components/amcharts/dist/amcharts/images/", // required for grips
          // "pathToImages": "http://cdn.amcharts.com/lib/3/images/", // required for grips
          "type": "serial",
          "theme": "light",
          "legend":{
        "useGraphSettings": true
    },
          //"marginRight": 80,
          //"autoMarginOffset": 20,
          "valueAxes": null,
          /*"balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
          },*/
          "graphs": null,
          "chartScrollbar": {
            "graph": "g1",
            "oppositeAxis": false,
            //"offset": 30,
            "scrollbarHeight": 50,
            "backgroundAlpha": 0,
            "selectedBackgroundAlpha": 0.1,
            "selectedBackgroundColor": "#888888",
            "graphFillAlpha": 0,
            "graphLineAlpha": 0.5,
            "selectedGraphFillAlpha": 0,
            "selectedGraphLineAlpha": 1,
            "autoGridCount": true,
            "color": "#AAAAAA"
          },
          "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
          },
          "categoryField": "date",
          "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,
            "minorGridEnabled": true
          },
          "export": {
            "enabled": false
          }
        }
      };


      $scope.chartGraph = [1];
      $scope.chartData = [1];
      $scope.chartValueAxes = [1];

      var graphPromise = function() {

        var deferred = $q.defer();

        //base config

        WaterBodyService.getParameterForWaterBody(paramData).then(function(response) {
          console.log('data from service', response);
          var data = response.data;
          var chartOptions = getChartOptions();
          $scope.chartData = getData(data);
          $scope.chartGraph = getGraphs(data);
          $scope.chartValueAxes = getValueAxes(data);
          chartOptions.data = $scope.chartData;
          chartOptions.valueAxes = $scope.chartValueAxes
          chartOptions.graphs = $scope.chartGraph;
          deferred.resolve(chartOptions);
        })

        deferred.promise.then(function(chartOptions) {
          console.log('resolved chart config', chartOptions);

        });
        return deferred.promise;
      }

      $scope.amChartOptions = graphPromise();



    });

})();