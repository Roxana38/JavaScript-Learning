
//.116 Object Literal Recap
/*const userOne = {
    username:'ryu',
    email: 'ryu@thenetninja.co.uk',
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    }
  };

  console.log(userOne.email,userOne.username);
  userOne.login();


  const userTwo = {
    username: 'chun-li',
    email: 'chun.li@thenetninja.co.uk',
    login(){
      console.log('the user logged in');
    },
    logout(){
      console.log('the user logged out');
    }
  };
  console.log(userTwo.email,userTwo.username);
  userOne.login();

  // const userThree = new User('shaun', 'shaun@thenetninja.co.uk')
*/
  //117. Classes
 
  /*class User {
    constructor(username,email){
       //set up properties 
       this.username = username;
       this.email=email;
    }
  }
const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');

console.log(userOne,userTwo);

// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to  the new empty object
// 3 - it calls the constructor function to 'build' the object 
*/

//119. Class Methods & Method Chaining

/*class User {
    constructor(username,email){
       //set up properties 
       this.username = username;
       this.email=email;
       this.score = 0;
    }
    login(){
        console.log(`${this.username} just logged in`);
        return this;
      }
      logout(){
        console.log(`${this.username} just logged out`);
        return this;
      }
      incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of ${this.score}`);
        return this;
      }
    }

      //120. Class Inheritance (subclasses)

      class Admin extends User{
        constructor(username,email,title){
        super(username,email);
        this.title=title;
        }

      deleteUser(user){
      users = users.filter(u => u.username !== user.username
      )

      }
   }
  
const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
const userTree = new Admin('shaun','shaun@thenetninja.co.uk ','black-belt ninja');

/*console.log(userOne,userTwo,userTree);

let users = [userOne, userTwo, userTree];
console.log(users);

userTree.deleteUser(userTwo);
console.log(users);*/

// userOne.login();
// userOne.logout();
// userTwo.login();
// userTwo.logout();
//userOne.incScore().incScore()
//userOne.login().incScore().incScore().logout();

//console.log(userTree)


//122.Constructor functions (under the hood)

function User (username,email){
    this.username = username;
    this.email = email;
    /*this.login = function(){
        console.log(`${this.username} has logged in`)
    }*/
}
//123.Prototype Model
User.prototype.login = function(){
    console.log(`${this.username} has logged in`);
    return this;
}

User.prototype.logout = function(){
    console.log(`${this.username} has logged out`);
    return this;
}
/*class User {
    constructor(username,email){
       //set up properties 
       this.username = username;
       this.email=email;
    }
  }*/
//124.Prototypal Inheritance

function Admin(username,email,title){
  User.call(this,username,email) ;
  title.title = title;

}

Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser= function(){
    //delete a user
}

const userOne = new User('mario', 'mario@thenetninja.co.uk');
const userTwo = new User('luigi', 'luigi@thenetninja.co.uk');
const userTree = new Admin('shaun', 'shaun@thenetninja.co.uk ', 'black-belt ninja');

console.log(userOne,userTwo,userTree)
userOne.login().logout();
// the 'new' keyword
// 1 - it creates a new empty object {}
// 2 - it binds the value of 'this' to  the new empty object
// 3 - it calls the constructor function to 'build' the object 








