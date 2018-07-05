(function () {
  'use strict';

  angular
    .module('linshareAdminApp')
    .controller('BasicStatisticGraphCtrl', basicStatisticGraphCtrl)

  basicStatisticGraphCtrl.$inject = ['$scope', '$state', '$translate', 'currentDomain', 'graphOptions', 'resourceTypes', 'currentResource', 'Data', 'graphDatas', 'currentAction', 'currentAction'];

  function basicStatisticGraphCtrl($scope, $state, $translate, currentDomain, graphOptions, resourceTypes, currentResource, Data, graphDatas, currentAction) {

    var logActions = _.keys(_.countBy(Data, function (statistic) {

      return statistic.action;
    }));
    $scope.selectedAction = currentAction;
    $scope.selectedResource = currentResource;
    $scope.currentLogActions = logActions;
    $scope.domain = currentDomain;
    $scope.graphDatas = graphDatas;
    $scope.graphOptions = graphOptions;
    $scope.resourceTypes = resourceTypes;

    if (!_.contains(logActions, currentAction)) {
      $state.go('statistic.basic', { domainId: currentDomain.identifier, resource: currentResource, action: _.head(logActions) });
    }
    $scope.changeResourceValue = function (item) {
      $scope.currentResource = item
      $scope.selectedAction = currentAction;


      $state.go('statistic.basic', { domainId: currentDomain.identifier, resource: item, action: currentAction });
    }
    $scope.changeActionValue = function (item) {
      $state.go('statistic.basic', { domainId: currentDomain.identifier, resource: currentResource, action: item });
    }
  }
})();







