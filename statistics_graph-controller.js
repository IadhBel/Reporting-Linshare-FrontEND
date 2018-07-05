(function () {
  'use strict';

  angular
    .module('linshareAdminApp')
    .controller('StatisticGraphCtrl',
      ['$scope', '$translate', 'currentDomain', 'fileSizeChartOptions', 'operationsChartOptions', 'Datas',
        function ($scope, $translate, currentDomain, fileSizeChartOptions, operationsChartOptions, Datas) {

          $scope.domain = currentDomain;
          $scope.fileSizeChartOptions = fileSizeChartOptions;
          $scope.operationsChartOptions = operationsChartOptions;
          $scope.groupSumData = Datas.statMonthlyGroupGraphDataSum;
          $scope.userSumData = Datas.statMonthlyUserGraphDataSum;
          $scope.sumData = Datas.statMonthlyDomainGraphDataSum;
          $scope.domainlabel = 'STATISTICS.SUM_STATISTICS.SIZE.MONTHLY';
          $scope.userlabel = 'STATISTICS.SUM_STATISTICS.SIZE.MONTHLY';
          $scope.grouplabel = 'STATISTICS.SUM_STATISTICS.SIZE.MONTHLY';
          $scope.fileSizeDetail = function () {
            switch ($scope.domainlabel) {
              case 'STATISTICS.SUM_STATISTICS.SIZE.DAILY':
                $scope.sumData = Datas.statMonthlyDomainGraphDataSum; $scope.domainlabel = 'STATISTICS.SUM_STATISTICS.SIZE.MONTHLY';
                break;
              case 'STATISTICS.SUM_STATISTICS.SIZE.WEEKLY':
                $scope.sumData = Datas.statDailyDomainGraphDataSum; $scope.domainlabel = 'STATISTICS.SUM_STATISTICS.SIZE.DAILY';
                break;
              case 'STATISTICS.SUM_STATISTICS.SIZE.MONTHLY':
                $scope.sumData = Datas.statWeeklyDomainGraphDataSum; $scope.domainlabel = 'STATISTICS.SUM_STATISTICS.SIZE.WEEKLY';
                break;
            };
          };
          $scope.userFileSizeDetail = function () {
            switch ($scope.userlabel) {
              case 'STATISTICS.SUM_STATISTICS.SIZE.DAILY':
                $scope.userSumData = Datas.statMonthlyUserGraphDataSum; $scope.userlabel = 'STATISTICS.SUM_STATISTICS.SIZE.MONTHLY';
                break;
              case 'STATISTICS.SUM_STATISTICS.SIZE.WEEKLY':
                $scope.userSumData = Datas.statWeeklyUserGraphDataSum; $scope.userlabel = 'STATISTICS.SUM_STATISTICS.SIZE.DAILY';
                break;
              case 'STATISTICS.SUM_STATISTICS.SIZE.MONTHLY':
                $scope.userSumData = Datas.statDailyUserGraphDataSum; $scope.userlabel = 'STATISTICS.SUM_STATISTICS.SIZE.WEEKLY';
                break;
            };
          };
          $scope.groupFileSizeDetail = function () {
            switch ($scope.grouplabel) {
              case 'STATISTICS.SUM_STATISTICS.SIZE.DAILY':
                $scope.groupSumData = Datas.statMonthlyGroupGraphDataSum; $scope.grouplabel = 'STATISTICS.SUM_STATISTICS.SIZE.MONTHLY';
                break;
              case 'STATISTICS.SUM_STATISTICS.SIZE.WEEKLY':
                $scope.groupSumData = Datas.statWeeklyGroupGraphDataSum; $scope.grouplabel = 'STATISTICS.SUM_STATISTICS.SIZE.DAILY';
                break;
              case 'STATISTICS.SUM_STATISTICS.SIZE.MONTHLY':
                $scope.groupSumData = Datas.statDailyGroupGraphDataSum; $scope.grouplabel = 'STATISTICS.SUM_STATISTICS.SIZE.WEEKLY';
                break;
            };
          };
          $scope.groupUsedSpaceData = Datas.statMonthlyGroupUsedSpaceGraphData;
          $scope.userUsedSpaceData = Datas.statMonthlyUserUsedSpaceGraphData;
          $scope.usedSpaceData = Datas.statMonthlyDomainUsedSpaceGraphData;
          $scope.domainUsedSpaceLabel = 'STATISTICS.SUM_STATISTICS.USED_SPACE.MONTHLY';
          $scope.userUsedSpaceLabel = 'STATISTICS.SUM_STATISTICS.USED_SPACE.MONTHLY';
          $scope.groupUsedSpaceLabel = 'STATISTICS.SUM_STATISTICS.USED_SPACE.MONTHLY';
          $scope.usedSpaceDetail = function () {
            switch ($scope.domainUsedSpaceLabel) {
              case 'STATISTICS.SUM_STATISTICS.USED_SPACE.DAILY':
                $scope.usedSpaceData = Datas.statMonthlyDomainUsedSpaceGraphData; $scope.domainUsedSpaceLabel = 'STATISTICS.SUM_STATISTICS.USED_SPACE.MONTHLY';
                break;
              case 'STATISTICS.SUM_STATISTICS.USED_SPACE.WEEKLY':
                $scope.usedSpaceData = Datas.statWeeklyDomainUsedSpaceGraphData; $scope.domainUsedSpaceLabel = 'STATISTICS.SUM_STATISTICS.USED_SPACE.DAILY';
                break;
              case 'STATISTICS.SUM_STATISTICS.USED_SPACE.MONTHLY':
                $scope.usedSpaceData = Datas.statDailyDomainUsedSpaceGraphData; $scope.domainUsedSpaceLabel = 'STATISTICS.SUM_STATISTICS.USED_SPACE.WEEKLY';
                break;
            };
          };
          $scope.userUsedSpaceDetail = function () {
            switch ($scope.userUsedSpaceLabel) {
              case 'STATISTICS.SUM_STATISTICS.USED_SPACE.DAILY':
                $scope.userUsedSpaceData = Datas.statMonthlyUserUsedSpaceGraphData; $scope.userUsedSpaceLabel = 'STATISTICS.SUM_STATISTICS.USED_SPACE.MONTHLY';
                break;
              case 'STATISTICS.SUM_STATISTICS.USED_SPACE.WEEKLY':
                $scope.userUsedSpaceData = Datas.statWeeklyUserUsedSpaceGraphData; $scope.userUsedSpaceLabel = 'STATISTICS.SUM_STATISTICS.USED_SPACE.DAILY';
                break;
              case 'STATISTICS.SUM_STATISTICS.USED_SPACE.MONTHLY':
                $scope.userUsedSpaceData = Datas.statDailyUserUsedSpaceGraphData; $scope.userUsedSpaceLabel = 'STATISTICS.SUM_STATISTICS.USED_SPACE.WEEKLY';
                break;
            };
          };
          $scope.groupUsedSpaceDetail = function () {
            switch ($scope.groupUsedSpaceLabel) {
              case 'STATISTICS.SUM_STATISTICS.USED_SPACE.DAILY':
                $scope.groupUsedSpaceData = Datas.statMonthlyGroupUsedSpaceGraphData; $scope.groupUsedSpaceLabel = 'STATISTICS.SUM_STATISTICS.USED_SPACE.MONTHLY';
                break;
              case 'STATISTICS.SUM_STATISTICS.USED_SPACE.WEEKLY':
                $scope.groupUsedSpaceData = Datas.statWeeklyGroupUsedSpaceGraphData; $scope.groupUsedSpaceLabel = 'STATISTICS.SUM_STATISTICS.USED_SPACE.DAILY';
                break;
              case 'STATISTICS.SUM_STATISTICS.USED_SPACE.MONTHLY':
                $scope.groupUsedSpaceData = Datas.statDailyGroupUsedSpaceGraphData; $scope.groupUsedSpaceLabel = 'STATISTICS.SUM_STATISTICS.USED_SPACE.WEEKLY';
                break;
            };
          };
          $scope.groupCountData = Datas.statMonthlyGroupGraphDataCount;
          $scope.userCountData = Datas.statMonthlyUserGraphDataCount;
          $scope.countData = Datas.statMonthlyDomainGraphDataCount;
          $scope.domainOperationCountLabel = 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.MONTHLY';
          $scope.userOperationCountLabel = 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.MONTHLY';
          $scope.groupOperationCountLabel = 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.MONTHLY';
          $scope.operationCountDetail = function () {
            switch ($scope.domainOperationCountLabel) {
              case 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.DAILY':
                $scope.countData = Datas.statMonthlyDomainGraphDataCount; $scope.domainOperationCountLabel = 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.MONTHLY';
                break;

              case 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.WEEKLY':
                $scope.countData = Datas.statWeeklyDomainGraphDataCount; $scope.domainOperationCountLabel = 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.DAILY';
                break;
              case 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.MONTHLY':
                $scope.countData = Datas.statDailyDomainGraphDataCount; $scope.domainOperationCountLabel = 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.WEEKLY';
                break;
            };
          };
          $scope.userOperationCountDetail = function () {
            switch ($scope.userOperationCountLabel) {
              case 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.DAILY':
                $scope.userCountData = Datas.statMonthlyUserGraphDataCount; $scope.userOperationCountLabel = 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.MONTHLY';
                break;
              case 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.WEEKLY':
                $scope.userCountData = Datas.statWeeklyUserGraphDataCount; $scope.userOperationCountLabel = 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.DAILY';
                break;
              case 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.MONTHLY':
                $scope.userCountData = Datas.statDailyUserGraphDataCount; $scope.userOperationCountLabel = 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.WEEKLY';
                break;
            };
          };
          $scope.groupOperationCountDetail = function () {
            switch ($scope.groupOperationCountLabel) {
              case 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.DAILY':
                $scope.groupCountData = Datas.statMonthlyGroupGraphDataCount; $scope.groupOperationCountLabel = 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.MONTHLY';
                break;
              case 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.WEEKLY':
                $scope.groupCountData = Datas.statWeeklyGroupGraphDataCount; $scope.groupOperationCountLabel = 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.DAILY';
                break;
              case 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.MONTHLY':
                $scope.groupCountData = Datas.statDailyGroupGraphDataCount; $scope.groupOperationCountLabel = 'STATISTICS.COUNT_STATISTICS.OPERATION_COUNT.WEEKLY';
                break;
            };
          };
        }]
    );
})();







