// es5App is a global variable used in the html file
window.es5App =  singleSpaAngular1.default({
  angular: window.angular,
  domElementGetter: function() {
    return document.getElementById('angularjs-container');
  },
  mainAngularModule: 'main-module',
  preserveGlobal: true,
  template: '<root />',
})

angular.module('main-module', [])

angular
  .module('main-module')
  .component('root', {
    template: '<div>Hello from angularjs!</div>',
    controllerAs: 'vm',
    controller: function() {
      var vm = this;

      vm.$onInit = function() {
        console.log("mounting root angular component")
      }

      vm.$onDestroy = function() {
        console.log('unmounting root angular component!')
      }
    }
  })
