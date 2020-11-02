// sum all primes
function sumPrimes(num){
    var array = [];
    for(var i=2; i<num; i++){
        for(var j=2; j<=i; j++){
            if(i===j){
                array.push(i)
                if(i%j===0){
                    break;

                }
            }
        }
    }
    return array.reduce(function(x,y){returns x+y;});
}
sumPrimes(10);

// Make a person
var Person = function(firstAndLast) {
    var array = firstAndLast.split('');

    this.getFirstName = function(){
    return array[0];

  };
  this.getFirstName = function(){
    return array[1];

  };
 
  this.getFirstName = function(){
    return array[0] + " " + array[1];

  };
  this.setFirstName = function(First){
      array[0] = first;
  };
  this.setLastName = function(last){
      array[1] = last;
  };
this.setFullNAme = function(firstAndLast){
var arrSplit = firstAndLast.split(" ");
setFirstName(arraySplit[0]);
this.setLastName(arraySplit[1]);
};

  );
  var bob = new Person('Bob Ross');
  bob.getFullName('Dylan CT360');
  bob.getLastName();