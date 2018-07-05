(function () {
  'use strict';

  angular
    .module('linshareAdminApp')
    .factory('basicStatistic', basicStatistic);

  basicStatistic.$inject = ['Restangular'];

  function basicStatistic(Restangular) {

    return {
      getBasicSatistics: function (domainUuid, resourceTypes, logActions) {

        return Restangular
          .all(`basicStatistic/${domainUuid}`).getList({ resourceTypes: resourceTypes, logActions: logActions });
      },
      getAllBasicSatistics: function (domainUuid, resourceTypes) {

        return Restangular
          .all(`basicStatistic/${domainUuid}`).getList({ resourceTypes: resourceTypes });
      },
    };
  };
})();