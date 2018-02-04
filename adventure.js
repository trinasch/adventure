//define the size of the game board
var maxX = 3;
var maxY = 3;

//Flag that controls start of game
var startHunt = false;

//Flag that controls game loop
var treasureFound = false;

//Function for button click to start game, resets user and treasure location
function checkStart() {

  while(!startHunt){
    
    //prompt for name at start of game
    var name = prompt("Welcome! What's your name?");
    console.log(name);
    startHunt = true;
    
    //Set random number to hide treasure
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);

    //Hide the treasure in a random location
    var treasureX = randomX;
    var treasureY = randomY;
    
    //user starts at x0, y0 (bottom left of board)
    var userX = 0;
    var userY = 0;
  }
  

  while(!treasureFound || !startHunt){
    var direction = prompt("Which direction do you want to go? (north, south, east, or west)");
    console.log(direction);

    //temp vars, only used for checking validity of new user location after move
    var newX
    var newY

    //see what new location should be 
    //check if new location is valid  
    //check if new location is treasure

    if(direction == "north"){
      newX = userX;
      newY = userY + 1;
      //neither value is < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX;
        userY = newY;
      }else {
        console.log("Thar be zombie sharks! You can't go that direction.")
        alert("Thar be zombie sharks! You can't go that direction.")
      }

    }else if(direction == "east"){
      newX = userX + 1;
      newY = userY;
      //neither value is < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX;
        userY = newY;
      }else {
        console.log("Thar be spicy sandwiches! You can't go that direction.")
        alert("Thar be spicy sandwiches! You can't go that direction.")
      }

    }else if(direction == "south"){
      newX = userX;
      newY = userY - 1;
      //neither value is < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX;
        userY = newY;
      }else {
        console.log("Thar be lava! You can't go that direction.")
        alert("Thar be lava! You can't go that direction.")
      }

    }else if(direction == "west"){
      newX = userX - 1;
      newY = userY;
      //neither value is < 0, neither is > max
      if(newX >= 0 && newY >= 0 && newX <= maxX && newY <= maxY){
        userX = newX;
        userY = newY;
      }else{
        console.log("Thar be a black hole! You can't go that direction.")
        alert("Thar be a black hole! You can't go that direction.")
      }

    }else{
      console.log("Please enter a real direction.");
      alert("Please enter a real direction.");      
    }

    console.log(name, userX, userY);
    console.log(treasureX, treasureY);

    //see if user location matches treasure
    if(userX == treasureX && userY == treasureY){
      treasureFound = true;
    }
  }

  alert("Congrats, " + name + "! You found the treasure.");
  startHunt = false;
  treasureFound = false;
  
}


