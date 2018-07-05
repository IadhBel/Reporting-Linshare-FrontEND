(function () {
  'use strict';

  angular
    .module('linshareAdminApp')
    .factory('GraphDatasService', graphDatasService);

  function graphDatasService($translate) {
    return {
      generateGraphDatas: function (statistics) {

        var data = []

        data.push({
          values: statistics.map(statistic => ({ x: statistic.creationDate, y: statistic.value })).sort((a, b) => Number(a.x) - Number(b.x)), //values - represents the array of {x,y} data points     
          type: "bar", "yAxis": 2,
        });
        
        return data;
      },
    }
  };
})();