angular.module('assessment').service('dataService', function(){

  this.getData = function() {
    return productsObj;
  }
  // this.getdata = [
  var productsObj = [
    // $.getJSON("https://dev-assessment.firebaseio.com/products.json", function(result){
    //   console.log(result);
    //   return result.responseJSON;
    // })
      {
      "desc": "Solid Black",
      "image": "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fhat-1.jpg?alt=media&token=af7620f5-e9a1-4108-939c-472c48307528",
      "price": "45",
      "title": "Mountains Baseball Cap"
      },
      {
      "desc": "Solid Black",
      "image": "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fhat-2.jpg?alt=media&token=7401ac35-408b-4f10-8749-3dd6378f4198",
      "price": "45",
      "title": "Mountains Baseball Capp"
      },
      {
      "desc": "Combo Set",
      "image": "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fcombo-tee.jpg?alt=media&token=068eefa0-d83f-497f-9809-5d0272a1639d",
      "price": "55",
      "title": "Combo T-shirt Set"
      },
      {
      "desc": "Solid Blue",
      "image": "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-1.jpeg?alt=media&token=0fbf36a3-a477-49f7-aa99-2bdb1030c449",
      "price": "25",
      "title": "Ripple Effect"
      },
      {
      "desc": "Two Shirt Set",
      "image": "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-3.jpeg?alt=media&token=4dec772a-65ec-481b-bc60-a7c80f5b2c38",
      "price": "33",
      "title": "Two T Shirt Set"
      },
      {
      "desc": "Solid Black",
      "image": "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-4.jpeg?alt=media&token=1e1b81c8-a24f-4d34-85e4-153e4d00470e",
      "price": "25",
      "title": "Black T Shirt"
      },
      {
      "desc": "",
      "image": "https://firebasestorage.googleapis.com/v0/b/firebase-dev-assessment.appspot.com/o/products%2Fshirt-5.jpeg?alt=media&token=c27be083-eb5b-4a1f-98be-780f234fb5ce",
      "price": "24",
      "title": "Momentum"
      }

  ];

console.log(productsObj);

});  //end
