import Firebase from 'github:firebase/firebase-bower@2.3.1';

export class Games {
  heading = 'Users';

  ref = new Firebase('https://oefenwedstrijd.firebaseio.com/');

  createUser() {
    this.ref.createUser({
      email: "jeroenrwever@gmail.com",
      password: "testing123"
    }, function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
      }
    });
  }
}
