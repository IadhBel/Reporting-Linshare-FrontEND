(function () {
  'use strict';

  angular
    .module('linshareAdminApp')
    .factory('Statistic', statistic);

  statistic.$inject = ['Restangular'];

  function statistic(Restangular) {

    return {
      getDomainStatistics: function (domainUuid, statisticType) {

        return Restangular
          .all('statistic')
          .getList({ domainUuid: domainUuid, statisticType: statisticType });
      },
      getAccountStatistics: function (accountUuid, statisticType) {

        return Restangular
          .all('statistic')
          .getList({ accountUuid: accountUuid, statisticType: statisticType });
      },
    };
  };
})();