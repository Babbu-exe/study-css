function main (){
   putBeeper();
   move();
   turnleft();
   turnright();
   turnleft();
   turnright();
   turnleft();
   turnright();
   turnleft();
  
}
function turnleft(){
   turnLeft();
   move();
   putBeeper();
}
function turnright(){
   turnRight();
   move();
   
}

//more consise way to write the same program//
function main (){
   putBeeper();
   move();
   movedionogalyputbeeper();
   movedionogalyputbeeper();
   movedionogalyputbeeper();
   movedionogalyputbeeper();
  
}
function movedionogalyputbeeper(){
   turnLeft();
   move();
   putBeeper();
   turnRight();
   move();
} 