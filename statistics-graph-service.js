(function () {
  'use strict';

  angular
    .module('linshareAdminApp')
    .factory('GraphOptionsService', graphOptionsService);

  graphOptionsService.$inject = ['$translate', '$filter', 'd3'];

  function graphOptionsService($translate, $filter, d3) {

    var dataArray = [];

    let communOptions = {
      type: 'lineChart',
      noData: '',
      height: 300,
      margin: {
        top: 40,
        right: 50,
        bottom: 40,
        left: 70,
      },
      color: d3.scale.category10().range(),
      useInteractiveGuideline: true,
      transitionDuration: 350,
      xAxis: {
        tickFormat: function (d) {
          return d3.time.format('%d/%m/%Y')(new Date(d));
        }
      }
    }

    return {
      generateSizeChartOptions: function () {

        var sizeOptions;

        let options = Object.assign({
          yAxis: {
            tickFormat: function (d) {
              return $filter('filesize')(Math.abs(d));
            }
          }
        }, communOptions)
        sizeOptions = {
          chart: options
        };

        return sizeOptions;
      },
      generateCountChartOptions: function () {
        var countOptions;
        let options = Object.assign({
          yAxis: {
            tickFormat: function (d) {
              return d3.format()(d);
            }
          }
        }, communOptions)
        countOptions = {
          chart: options
        };

        return countOptions;
      },
      generateSizeChartDatas: function (statistics) {
        var sumdata = [];
        var Data = _.values(_.reduce(statistics, function (Data, statistic) {
          var date = statistic.statisticDate;
          Data[date] = {
            statisticDate: date,
            UploadedFiles: statistic.addOperationSum + (Data[date] ? Data[date].UploadedFiles : 0),
            RemovedFiles: statistic.deleteOperaionSum + (Data[date] ? Data[date].RemovedFiles : 0)
          };

          return Data;
        }, {}));
        sumdata.push({
          key: "STATISTICS.SUM_STATISTICS.LEGEND.ADD_OPERATION",
          values: Data.map(statistic => ({ x: statistic.statisticDate, y: statistic.UploadedFiles })).sort((a, b) => Number(a.x) - Number(b.x)),
          type: "bar", "yAxis": 2
        },
          {
            key: "STATISTICS.SUM_STATISTICS.LEGEND.DELETE_OPERATION",
            values: Data.map(statistic => ({ x: statistic.statisticDate, y: statistic.RemovedFiles })).sort((a, b) => Number(a.x) - Number(b.x)),
            type: "bar", "yAxis": 2,
            color: '#B10A0A'//color - optional: choose your own line color.
          });

        sumdata.forEach(function (obj) {
          $translate(obj.key).then(function (translated) {
            obj.key = translated;
          });
          dataArray.push(sumdata);
        });

        return sumdata;
      },
      generateUsedSpaceChartDatas: function (statistics) {

        var sumsdata = [];

        var UsedSpaceData = _.values(_.reduce(statistics, function (UsedSpaceData, statistic) {

          var date = statistic.statisticDate;

          UsedSpaceData[date] = {
            x: date,
            y: statistic.actualOperationSum + (UsedSpaceData[date] ? UsedSpaceData[date].y : 0)
          };

          return UsedSpaceData;
        }, {}));
        sumsdata.push({
          key: "STATISTICS.SUM_STATISTICS.LEGEND.ACTUAL_OPERATION",
          values: UsedSpaceData.sort((a, b) => Number(a.x) - Number(b.x)),
          type: "bar", "yAxis": 2
        });
        sumsdata.forEach(function (obj) {
          $translate(obj.key).then(function (translated) {
            obj.key = translated;
          });
          dataArray.push(sumsdata);
        });

        return sumsdata;
      },
      generateOperationsChartDatas: function (statistics) {

        var countdata = [];

        var Data = _.values(_.reduce(statistics, function (Data, statistic) {

          var date = statistic.statisticDate;

          Data[date] = {
            statisticDate: date,
            Upload: statistic.addOperationCount + (Data[date] ? Data[date].Upload : 0),
            Remove: statistic.deleteOperationCount + (Data[date] ? Data[date].Remove : 0)
          };

          return Data;
        }, {}));
        countdata.push({
          key: "STATISTICS.COUNT_STATISTICS.LEGEND.ADD_OPERATION",//key  - the name of the series.
          values: Data.map(statistic => ({ x: statistic.statisticDate, y: statistic.Upload })).sort((a, b) => Number(a.x) - Number(b.x)), //values - represents the array of {x,y} data points     
          type: "bar", "yAxis": 2,
        },
          {
            key: "STATISTICS.COUNT_STATISTICS.LEGEND.DELETE_OPERATION",
            values: Data.map(statistic => ({ x: statistic.statisticDate, y: statistic.Remove })).sort((a, b) => Number(a.x) - Number(b.x)),
            type: "bar", "yAxis": 2,
            color: '#B10A0A'//color - optional: choose your own line color.
          });

        countdata.forEach(function (obj) {
          $translate(obj.key).then(function (translated) {
            obj.key = translated;
          });
        });

        return countdata;
      },
      buildGraphData: function (statMonthlyDomainGraphDataSum, statWeeklyDomainGraphDataSum, statDailyDomainGraphDataSum,
        statMonthlyUserGraphDataSum, statWeeklyUserGraphDataSum, statDailyUserGraphDataSum,
        statMonthlyGroupGraphDataSum, statWeeklyGroupGraphDataSum, statDailyGroupGraphDataSum,
        statMonthlyDomainUsedSpaceGraphData, statWeeklyDomainUsedSpaceGraphData, statDailyDomainUsedSpaceGraphData,
        statMonthlyUserUsedSpaceGraphData, statWeeklyUserUsedSpaceGraphData, statDailyUserUsedSpaceGraphData,
        statMonthlyGroupUsedSpaceGraphData, statWeeklyGroupUsedSpaceGraphData, statDailyGroupUsedSpaceGraphData,
        statMonthlyDomainGraphDataCount, statWeeklyDomainGraphDataCount, statDailyDomainGraphDataCount,
        statMonthlyUserGraphDataCount, statWeeklyUserGraphDataCount, statDailyUserGraphDataCount,
        statMonthlyGroupGraphDataCount, statWeeklyGroupGraphDataCount, statDailyGroupGraphDataCount) {
        var datas = {
          statMonthlyDomainGraphDataSum: statMonthlyDomainGraphDataSum
          , statWeeklyDomainGraphDataSum: statWeeklyDomainGraphDataSum, statWeeklyDomainGraphDataSum: statWeeklyDomainGraphDataSum
          , statDailyDomainGraphDataSum: statDailyDomainGraphDataSum, statMonthlyUserGraphDataSum: statMonthlyUserGraphDataSum
          , statWeeklyUserGraphDataSum: statWeeklyUserGraphDataSum, statDailyUserGraphDataSum: statDailyUserGraphDataSum
          , statMonthlyGroupGraphDataSum: statMonthlyGroupGraphDataSum, statWeeklyGroupUsedSpaceGraphData: statWeeklyGroupUsedSpaceGraphData
          , statDailyGroupUsedSpaceGraphData: statDailyGroupUsedSpaceGraphData, statMonthlyDomainGraphDataCount: statMonthlyDomainGraphDataCount
          , statWeeklyDomainGraphDataCount: statWeeklyDomainGraphDataCount
          , statDailyDomainGraphDataCount: statDailyDomainGraphDataCount, statMonthlyUserGraphDataCount: statMonthlyUserGraphDataCount
          , statWeeklyUserGraphDataCount: statWeeklyUserGraphDataCount, statDailyUserGraphDataCount: statDailyUserGraphDataCount
          , statMonthlyGroupGraphDataCount: statMonthlyGroupGraphDataCount, statWeeklyGroupGraphDataCount: statWeeklyGroupGraphDataCount
          , statDailyGroupGraphDataCount: statDailyGroupGraphDataCount
          , statMonthlyDomainUsedSpaceGraphData: statMonthlyDomainUsedSpaceGraphData, statWeeklyDomainUsedSpaceGraphData: statWeeklyDomainUsedSpaceGraphData
          , statDailyDomainUsedSpaceGraphData: statDailyDomainUsedSpaceGraphData, statMonthlyUserUsedSpaceGraphData: statMonthlyUserUsedSpaceGraphData
          , statWeeklyUserUsedSpaceGraphData: statWeeklyUserUsedSpaceGraphData, statDailyUserUsedSpaceGraphData: statDailyUserUsedSpaceGraphData
          , statMonthlyGroupUsedSpaceGraphData: statMonthlyGroupUsedSpaceGraphData, statWeeklyGroupUsedSpaceGraphData: statWeeklyGroupUsedSpaceGraphData
          , statDailyGroupUsedSpaceGraphData: statDailyGroupUsedSpaceGraphData
        };
        return datas;
      },
      buildUserGraphData: function (statUserMonthlyGraphDataSum, statUserWeeklyGraphDataSum, statUserDailyGraphDataSum,
        statUserMonthlyUsedSpaceGraphData, statUserWeeklyUsedSpaceGraphData, statUserDailyUsedSpaceGraphData,
        statUserMonthlyGraphDataCount, statUserWeeklyGraphDataCount, statUserDailyGraphDataCount) {
        var datas = {
          statUserMonthlyGraphDataSum: statUserMonthlyGraphDataSum
          , statUserWeeklyGraphDataSum: statUserWeeklyGraphDataSum, statUserDailyGraphDataSum: statUserDailyGraphDataSum
          , statUserMonthlyUsedSpaceGraphData: statUserMonthlyUsedSpaceGraphData, statUserWeeklyUsedSpaceGraphData: statUserWeeklyUsedSpaceGraphData
          , statUserDailyUsedSpaceGraphData: statUserDailyUsedSpaceGraphData, statUserMonthlyGraphDataCount: statUserMonthlyGraphDataCount
          , statUserWeeklyGraphDataCount: statUserWeeklyGraphDataCount, statUserDailyGraphDataCount: statUserDailyGraphDataCount
        };
        return datas;
      },
      buildWorkGroupGraphData: function (statWorkgroupMonthlyGraphDataSum, statWorkgroupWeeklyGraphDataSum, statWorkgroupDailyGraphDataSum,
        statWorkgroupMonthlyUsedSpaceGraphData, statWorkgroupWeeklyUsedSpaceGraphData, statWorkgroupDailyUsedSpaceGraphData,
        statWorkgroupMonthlyGraphDataCount, statWorkgroupWeeklyGraphDataCount, statWorkgroupDailyGraphDataCount) {
        var datas = {
          statWorkgroupMonthlyGraphDataSum: statWorkgroupMonthlyGraphDataSum
          , statWorkgroupWeeklyGraphDataSum: statWorkgroupWeeklyGraphDataSum, statWorkgroupDailyGraphDataSum: statWorkgroupDailyGraphDataSum
          , statWorkgroupMonthlyUsedSpaceGraphData: statWorkgroupMonthlyUsedSpaceGraphData, statWorkgroupWeeklyUsedSpaceGraphData: statWorkgroupWeeklyUsedSpaceGraphData
          , statWorkgroupDailyUsedSpaceGraphData: statWorkgroupDailyUsedSpaceGraphData, statWorkgroupMonthlyGraphDataCount: statWorkgroupMonthlyGraphDataCount
          , statWorkgroupWeeklyGraphDataCount: statWorkgroupWeeklyGraphDataCount, statWorkgroupDailyGraphDataCount: statWorkgroupDailyGraphDataCount
        };
        return datas;
      },
    }
  };
})();