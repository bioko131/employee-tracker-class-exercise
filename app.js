// START CODING BELOW!!
 
firebase.initializeApp(config);



database.ref().push({
  employee: employee,
  role: role,
  start: start-date,
  rate: monthly-rate,
});


//listener for when something is added to database
  //"child_added"

//load firebase
database.ref().on("child_added", function(snapshot){

 })
//guarantee that first load shows the most recent addition to database

//timestamp -- make sure you see most recent version

//on-click event for Submit button


    //  // Initialize Firebase
    //  var config = {
    //    apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
    //    authDomain: "fir-recent-user.firebaseapp.com",
    //    databaseURL: "https://fir-recent-user.firebaseio.com",
    //    storageBucket: "fir-recent-user.appspot.com"
    //  };
 
    //  firebase.initializeApp(config);
 
    //  // Create a variable to reference the database
    //  var database = firebase.database();
 
    //  // Initial Values
    //  var employeeName = "";
    //  var role = "";
    //  var date = "";
    //  var comment = "";
 
    //  // Capture Button Click
    //  $("#add-user").on("click", function() {
    //    // Don't refresh the page!
    //    event.preventDefault();
 
    //    // YOUR TASK!!!
    //    // Code in the logic for storing and retrieving the most recent user.
    //    // Don't forget to provide initial data to your Firebase database.
    //    name = $("#name-input").val().trim();
    //    email = $("#email-input").val().trim();
    //    age = $("#age-input").val().trim();
    //    comment = $("#comment-input").val().trim();
 
    //    database.ref().push({
    //      name: name,
    //      email: email,
    //      age: age,
    //      comment: comment
    //    });
 
    //  });
 
    //  // Firebase watcher + initial loader HINT: .on("value")
    //  database.ref().on("child_added", function(snapshot) {
 
    //    // Log everything that's coming out of snapshot
    //    console.log(snapshot.val());
    //    console.log(snapshot.val().name);
    //    console.log(snapshot.val().email);
    //    console.log(snapshot.val().age);
    //    console.log(snapshot.val().comment);
 
    //    // Change the HTML to reflect
    //    $("#name-display").html(snapshot.val().name);
    //    $("#email-display").html(snapshot.val().email);
    //    $("#age-display").html(snapshot.val().age);
    //    $("#comment-display").html(snapshot.val().comment);
 
    //    // Handle the errors
    //  }, function(errorObject) {
    //    console.log("Errors handled: " + errorObject.code);
    //  });
   