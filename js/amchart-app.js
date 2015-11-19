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
    .directive('tester',function(){
      return {
        restrict:'EA',
        template:'<div class="test-directive">A:{{values.a||"null"}},B:{{values.b||"null"}}</div>',
        scope:{
          values:'='
        },
        link:function($scope, $elem){
          console.log('tester link function called');
          $scope.$on('tester.newData',function(e,data){
            console.log(data);
            $scope.values = data;
          });

            // attr.watch(values);
        }
      }
    })
    .controller('appController', function($scope, $q, $filter, WaterBodyService,$timeout) {

      $scope.testerValues = {a:1,b:2};
      $scope.loading = false;
      $scope.testerDirect= function(){
        console.log('direct testing event called')
        $scope.testerValues = {a:44,b:444};
        // $scope.$broadcast('tester.newData',{a:44,b:444});

      }

      $scope.testerEvent = function(){
        console.log('broadcast testing event called')
        // $scope.testerValues = {a:44,b:444};
        $scope.$broadcast('tester.newData',{a:66,b:666});

      }

      $scope.testerDeferred =function(){
        //or http.get().success() etc
        $scope.loading = true;
        $timeout(function(){

          $scope.$broadcast('tester.newData',{a:99,b:999});
          $scope.loading = false;
        },1000)

      }


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
        console.info("AmCharts animations are disabled. you can try them on by removin 'startDuration: 0' from getChartOptions()")
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
          "startDuration":0,
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


      

      var startGraph = function() {

        var deferred = $q.defer();
        //base config
        WaterBodyService.getParameterForWaterBody(paramData).then(function(response) {
          console.log('data from service', response);
          var data = response.data;
          var chartOptions = getChartOptions();
          chartOptions.data = getData(data);
          chartOptions.valueAxes = getValueAxes(data);
          chartOptions.graphs = getGraphs(data);
          deferred.resolve(chartOptions);
        })

        deferred.promise.then(function(chartOptions) {
          console.log('resolved chart config', chartOptions);

        });

        return deferred.promise;
      }

      $scope.amChartOptions = startGraph();

      $scope.updateGraph = function(){
        WaterBodyService.getParameterForWaterBody(paramData).then(function(response) {
          console.log('data from service', response);
          var data = response.data;
          var mod = data.results[0].values.map(function(v) {return (v+Math.random() * -10 * -3.5 )});
          data.results[0].values = mod;

          $scope.$broadcast('amCharts.updateData', getData(data), 'directive');
          // $scope.$broadcast('amCharts.triggerChartAnimate', null, 'directive');
        });
        
      }

    });

})();