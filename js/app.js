(function(){

  var d = new Date();
  var n = d.getFullYear();

  var showResult = function (result) { //function that hides all results then shows correct one
    $(".result-div").hide(); //hide all the results
    $(".result-"+result).show(); //show the new result
  };

  var app = angular.module('gooseApp', [ 

  	 ]);
  var bot = {name: 'Goosemonger', 
    model: 'G-1000', 
    price: 5999999.00, 
    available: 'Available in Fall of 2136', 
    description: 'Goosemonger is a humanoid robot that is here to make your life better.  From carrying your groceries to sharing a joke, you will wonder how you ever lived without your Goosmonger.'
  }
  var res = 0;

  app.controller('GooseLearn', function(){
    this.unit = bot;
  });

  app.controller('TabController', function(){
    this.tab = 2;

    this.setTab = function(newValue){
      this.tab = newValue; //set the count value
      setTimeout(function() { //set a timeout so the dom is updated
        countArray = $('.numberCount').text(); //get our count

        var social = countArray.slice(0,1); //this will be the first digit

		var joy = countArray.slice(1,2); //this will be the second digit

        var angry = countArray.slice(2,3); //this will be the third digit

		var affectionate = countArray.slice(3,4); //this will be the fourth digit

        var funny = countArray.slice(4,5); //this will be the fifth digit

		var intelligent = countArray.slice(5,6); //this will be the sixth digit		

        if ( social === "2" && funny === "2"){
          res = 'jester'; //jester
        } else if (affectionate === "2" && joy === "2" && intelligent !== "2"){
          res = 'dog' //dog
        } else if (social === "0" || funny === "0" || joy === "0" || angry === "0" || affectionate === "0" || intelligent === "0" && (social & funny & joy & angry & affectionate & intelligent !== "2") ){
          res = 'toilet' //toilette
        } else if (angry === "2" && intelligent === "2" && funny !== "2" && social !== "2"){
          res = 'vader' //vader
        } else {
          res = 'apple' //apple
        }
        showResult(res); //run our showResult function
      }, 100);
    };
    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });


  app.controller('ResultController', function(){
    this.isResult = function(r){
      console.log(res)
      console.log(r);
      return res === r;
    };
  });

  app.controller('GooseCustomize', function(){
    this.slides = traits;
    this.finalBots = comparisons;

    });

	app.directive("pageNavigation", function() {
	  return {
	    restrict: 'E',
	    templateUrl: "page-navigation.html"
	  };
	});

  var traits = [
          {name: 'Socialness',
          caption: 'How outgoing do you want your robot? A mayor or a hermit?',
          images: [
            {
            one: 'img/social1.gif',
            two: 'img/social2.gif',
            three: 'img/social3.gif'  
            }
          ]}, 
          {name: 'Happiness',
          caption: 'How happy do you want your robot? A golden retriever or a grouch?',
          images: [
            {
            one: 'img/happy1.gif',
            two: 'img/happy2.gif',
            three: 'img/happy3.gif'  
            }
          ]}, 
          {name: 'Temper',
          caption: 'How susceptible to anger do you want your robot? The Dali Lama or a an old man sending back soup at a deli?',
          images: [
            {
            one: 'img/anger1.gif',
            two: 'img/anger2.gif',
            three: 'img/anger3.gif'  
            }
          ]}, 
          {name: 'Affection',
          caption: 'How loving do you want your robot? A mother kangaroo or a refrigerator?',
          images: [
            {
            one: 'img/affection1.gif',
            two: 'img/affection2.gif',
            three: 'img/affection3.gif'  
            }
          ]}, 
          {name: 'Sarcasm & Humor',
          caption: 'How comedic do you want your robot? A fat comedian or his inevitable heart attack?',
          images: [
            {
            one: 'img/funny1.gif',
            two: 'img/funny2.gif',
            three: 'img/funny3.gif'  
            }
          ]}, 
          {name: 'Intelligence',
          caption: 'How smart do you want your robot? Albert Einstein or his pet fish?',
          images: [
            {
            one: 'img/smart1.gif',
            two: 'img/smart2.gif',
            three: 'img/smart3.gif'  
            }
          ]}

          ]
  var comparisons = [
          {name: 'A Golden Retriever',
          caption: 'Happy and loyal but not the brightest star in the sky.',
          image: 'img/dog.gif'
          }, 
          {name: 'A Jester',
          caption: 'Always the center of attention but unhappy wihout a crowd.',
          image: 'img/jester.gif'
          }, 
          {name: 'A Toilette',
          caption: 'Cold and ugly but every house needs one.',
          image: 'img/toilette.gif'
          }, 
          {name: 'Darth Vader',
          caption: 'Smart and powerful but evil.',
          image: 'img/vader.gif'
          }, 
          {name: 'An apple',
          caption: 'Good all around but very common.',
          image: 'img/apple.gif'
          }
  ]


})();