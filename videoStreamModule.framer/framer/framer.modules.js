require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}],"videoLayer":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

exports.videoLayer = (function(superClass) {
  extend(videoLayer, superClass);

  function videoLayer(options) {
    var constraints, handleSuccess;
    if (options == null) {
      options = {};
    }
    options = _.defaults(options, {
      html: '<video autoplay playsinline style="width:100%; height:100%;"></video>'
    });
    videoLayer.__super__.constructor.call(this, options);
    handleSuccess = function(stream) {
      var videoTracks;
      videoTracks = stream.getVideoTracks();
      console.log('Got stream with constraints:', constraints);
      console.log('Using video device: ' + videoTracks[0].label);
      stream.oninactive = function() {
        console.log('Stream inactive');
      };
      window.stream = stream;
      video.srcObject = stream;
    };
    'use strict';
    window.video = document.querySelector('video');
    constraints = window.constraints = {
      audio: false,
      video: true
    };
    navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess);
  }

  return videoLayer;

})(Layer);


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL21hbWV6aXRvL0Rlc2t0b3Avc2FuZGJveC92aWRlb1N0cmVhbU1vZHVsZS5mcmFtZXIvbW9kdWxlcy92aWRlb0xheWVyLmNvZmZlZSIsIi4uLy4uLy4uLy4uLy4uL1VzZXJzL21hbWV6aXRvL0Rlc2t0b3Avc2FuZGJveC92aWRlb1N0cmVhbU1vZHVsZS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiNhdXRob3IgU2VyZ2l5IFZvcm9ub3ZcbiNodHRwczovL3R3aXR0ZXIuY29tL21hbWV6aXRvXG4jYmFzZWQgb24gIGh0dHBzOi8vd2VicnRjLmdpdGh1Yi5pby9zYW1wbGVzL3NyYy9jb250ZW50L2dldHVzZXJtZWRpYS9ndW0vXG5jbGFzcyBleHBvcnRzLnZpZGVvTGF5ZXIgZXh0ZW5kcyBMYXllclxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnMgPSB7fSkgLT5cblx0XHRvcHRpb25zID0gXy5kZWZhdWx0cyBvcHRpb25zLFxuXHRcdGh0bWw6Jzx2aWRlbyBhdXRvcGxheSBwbGF5c2lubGluZSBzdHlsZT1cIndpZHRoOjEwMCU7IGhlaWdodDoxMDAlO1wiPjwvdmlkZW8+J1xuXHRcdHN1cGVyIG9wdGlvbnNcblx0XHRoYW5kbGVTdWNjZXNzID0gKHN0cmVhbSkgLT5cblxuXHRcdCAgdmlkZW9UcmFja3MgPSBzdHJlYW0uZ2V0VmlkZW9UcmFja3MoKVxuXHRcdCAgY29uc29sZS5sb2cgJ0dvdCBzdHJlYW0gd2l0aCBjb25zdHJhaW50czonLCBjb25zdHJhaW50c1xuXHRcdCAgY29uc29sZS5sb2cgJ1VzaW5nIHZpZGVvIGRldmljZTogJyArIHZpZGVvVHJhY2tzWzBdLmxhYmVsXG5cblx0XHQgIHN0cmVhbS5vbmluYWN0aXZlID0gLT5cblx0XHQgICAgY29uc29sZS5sb2cgJ1N0cmVhbSBpbmFjdGl2ZSdcblx0XHQgICAgcmV0dXJuXG5cblx0XHQgIHdpbmRvdy5zdHJlYW0gPSBzdHJlYW1cblx0XHQgICMgbWFrZSB2YXJpYWJsZSBhdmFpbGFibGUgdG8gYnJvd3NlciBjb25zb2xlXG5cdFx0ICB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW1cblx0XHQgIHJldHVyblxuXG5cdFx0J3VzZSBzdHJpY3QnXG5cdFx0d2luZG93LnZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmlkZW8nKVxuXHRcdCMgUHV0IHZhcmlhYmxlcyBpbiBnbG9iYWwgc2NvcGUgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSB0byB0aGUgYnJvd3NlciBjb25zb2xlLlxuXHRcdGNvbnN0cmFpbnRzID0gd2luZG93LmNvbnN0cmFpbnRzID1cblx0XHQgIGF1ZGlvOiBmYWxzZVxuXHRcdCAgdmlkZW86IHRydWVcblxuXHRcdG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKS50aGVuIGhhbmRsZVN1Y2Nlc3Ncblx0XHQjIHByaW50IG5hdmlnYXRvci5tZWRpYURldmljZXMsIHZpZGVvLCBzdHJlYW1cbiIsIiMgQWRkIHRoZSBmb2xsb3dpbmcgbGluZSB0byB5b3VyIHByb2plY3QgaW4gRnJhbWVyIFN0dWRpby4gXG4jIG15TW9kdWxlID0gcmVxdWlyZSBcIm15TW9kdWxlXCJcbiMgUmVmZXJlbmNlIHRoZSBjb250ZW50cyBieSBuYW1lLCBsaWtlIG15TW9kdWxlLm15RnVuY3Rpb24oKSBvciBteU1vZHVsZS5teVZhclxuXG5leHBvcnRzLm15VmFyID0gXCJteVZhcmlhYmxlXCJcblxuZXhwb3J0cy5teUZ1bmN0aW9uID0gLT5cblx0cHJpbnQgXCJteUZ1bmN0aW9uIGlzIHJ1bm5pbmdcIlxuXG5leHBvcnRzLm15QXJyYXkgPSBbMSwgMiwgM10iLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUVBQTtBRElBLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVA7Ozs7QURObEIsSUFBQTs7O0FBQU0sT0FBTyxDQUFDOzs7RUFDQSxvQkFBQyxPQUFEO0FBQ1osUUFBQTs7TUFEYSxVQUFVOztJQUN2QixPQUFBLEdBQVUsQ0FBQyxDQUFDLFFBQUYsQ0FBVyxPQUFYLEVBQ1Y7TUFBQSxJQUFBLEVBQUssdUVBQUw7S0FEVTtJQUVWLDRDQUFNLE9BQU47SUFDQSxhQUFBLEdBQWdCLFNBQUMsTUFBRDtBQUVkLFVBQUE7TUFBQSxXQUFBLEdBQWMsTUFBTSxDQUFDLGNBQVAsQ0FBQTtNQUNkLE9BQU8sQ0FBQyxHQUFSLENBQVksOEJBQVosRUFBNEMsV0FBNUM7TUFDQSxPQUFPLENBQUMsR0FBUixDQUFZLHNCQUFBLEdBQXlCLFdBQVksQ0FBQSxDQUFBLENBQUUsQ0FBQyxLQUFwRDtNQUVBLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLFNBQUE7UUFDbEIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxpQkFBWjtNQURrQjtNQUlwQixNQUFNLENBQUMsTUFBUCxHQUFnQjtNQUVoQixLQUFLLENBQUMsU0FBTixHQUFrQjtJQVpKO0lBZWhCO0lBQ0EsTUFBTSxDQUFDLEtBQVAsR0FBZSxRQUFRLENBQUMsYUFBVCxDQUF1QixPQUF2QjtJQUVmLFdBQUEsR0FBYyxNQUFNLENBQUMsV0FBUCxHQUNaO01BQUEsS0FBQSxFQUFPLEtBQVA7TUFDQSxLQUFBLEVBQU8sSUFEUDs7SUFHRixTQUFTLENBQUMsWUFBWSxDQUFDLFlBQXZCLENBQW9DLFdBQXBDLENBQWdELENBQUMsSUFBakQsQ0FBc0QsYUFBdEQ7RUExQlk7Ozs7R0FEbUIifQ==
