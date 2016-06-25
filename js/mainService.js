angular.module('assessment').service('dataService', function(){

  this.getData = function() {
    return productsArr;
  }
  // this.getdata = [
  var productsArr = [

      $.getJSON("https://dev-assessment.firebaseio.com/products.json", function(result){
        console.log(result);
        return result;
      })

  ];


});  //end
