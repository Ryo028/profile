(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  this.ProfileModel = (function(superClass) {
    extend(ProfileModel, superClass);

    function ProfileModel() {}

    return ProfileModel;

  })(FireModel);

}).call(this);
