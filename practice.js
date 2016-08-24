//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer: The 'this keyword' refers to the object in context. It avoid ambiguity because it always refers to the object
      // that invokes it (as opposed) to some other object that might have the same name as our invoking object).

  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer:
      /*
        1. EXPLICIT binding     Right of the dot. Use of .call, .apply, or .bind to attach a method to
                                some (any) object. The first two (.call and .apply) call the function
                                immediately, whereas .bind attaches context and waits till called.
              e.g.:
              function myFunc(param1, param2) {
                 console.log(this.name, param1, param2);
              }
              myFunc.call({name: "DM13"});  //               // .call calls the function immediately
              myFunc.apply({name: "DM13"});                 // .apply calls the function immediately
              var dm15Func = myFunc.bind({name: "DM15"});  // .bind returns a function without calling right away
                                                          // .bind never takes parametes, only context
                                                         // .bind can be applies multiple times

        2. IMPLICIT binding     Whatever is left of the dot, what called the function.
                                The object where the method is.
              e.g.:
              function myFunc() {
                return this.name;
              }
              function (calcRacetimes() {
                return Math.average(this.laps, this.name);
              }

              var person = {
                name: 'Davey',
                laps: [10, 15, 12, 6, 26, 124],
                calculateRaceTime: calcRacetimes
              }
              person.calculateRaceTime();
              person.personFunc(3, 6);  // Davey 3 6

              var person2 = {
                name: 'Smavey',
                personFunc: myFunc
              }
              person2.personFunc(5, 5); // Smavey 5 5


        3. DEFAULT/WINDOW binding.      The window.
            e.g.:
            function func2() {
              console.log(this.title);
              this.title = "mwahahahahaha";
            }
        4. NEW binding.         The new keyword. It makes a new object, assigns it to this, then
                                returns the object. It does this through a constructor function.
            e.g.:
            function Animal(size, legs, sound) {
                                  // this = {}
              this.size = size;
              this.legs = legs;
              this.sound = sound;
              this.makeSound = function() {
                console.log(this.sound);
              }
              this.run = function() {
                console.log("I run on " + this.legs + " legs");
              }
                                  //return this
            }

            var giraffe = new Animal ('large', 4, 'large goat bleet');
            var zebra = new Animal ('medium', 4, 'whoop whoop');
      */

  // 3) What is the difference between call and apply?

      //Answer: Both can be called on function, and the first argument gives the context. The .apply method allows the arguments
      //to be passed in as an array, while the .call method requires them to be listed explicitly.

  // 4) What does .bind do?

      //Answer: It applies an object to the this keyword without invoking the function yet.


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

var user = {
  username: 'Lion-O',
  email: 'sightbeyondsight@swordofomens.com',
  getUsername: function() {
    return this.username;
  }
};



//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
var doIt = user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.

  //Function Invocations Here
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;
  this.moveCar = function() {
      return this.move + 10;
  };
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being
//returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking
//moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will
//allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear
//as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.apply(prius);
getYear.apply(mustang);


//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.apply(myUser); //Fix this

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
  //Answer Here

//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
