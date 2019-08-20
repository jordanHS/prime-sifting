var num;
var prime = 2;
var toDelete = [];
var allPrimes = [];

$(document).ready(function(){
  $(".mainform").submit(function(event){
    num = parseInt($("#userInput").val());

    for (var i = 2; i <= num; i++){
      allPrimes.push(i);
    }
    for(var j = prime; j < num; j++){
      allPrimes.forEach(function(number){
        if(number % j === 0 && number != j){
          if(!toDelete.includes(number))
            toDelete.push(number);
        }
      });
    }
    for(var i = 0; i < toDelete.length; i++){
      allPrimes.splice(allPrimes.indexOf(toDelete[i]), 1);
    }
    $(".output").append("Prime numbers from 2 to " + num + " are: <br>" + allPrimes + "<br>");
    $(".output").append("The numbers we removed are: <br>" + toDelete.sort(function(a, b){return a-b}));

    event.preventDefault();
  });
});
