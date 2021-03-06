(function() {
  this.isAvailable = function(type, value) {
    var deferred;
    deferred = $q.defer();
    $http.get(prApiRoot + "users/available?" + type + "=" + value).success(function(data) {
      deferred.resolve(data);
    }).error(function(data, status) {
      deferred.reject({
        data: data,
        status: status
      });
    });
    return deferred.promise;
  };

}).call(this);
