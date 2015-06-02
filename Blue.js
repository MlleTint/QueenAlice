
function goToBlue(){

  var curious = prompt("You wake up in a field of flowers. There is adventure in every direction. You see the white rabbit go into a direction, will you be able to catch him? Pick one. : 1) North, 2) East, 3) East");

  switch (curious) {
    case "1":
    goNorth();
    break;
    case "2":
    goEast();
    break;
    case "3":
    goSouth();
    break;
    default:
    console.log("Sorry I didn't catch that, please reply again");
    goToBlue();
  }
}

function goNorth(){
  var curiouser = prompt("You follow the white rabbit down a rabbit hole. Down, down, down! You fall and find yourself within a room with a small table with a small bottle with a label that says drink me, and a smll plate of cookies with a label that says eat me.Are you hungry or thirsty: 1) Eat me!,  2) Drink me!");

  if (curiouser ==="1"){
    console.log("You've grown ten feet tall, you begin to cry and are swallowed up by yours tears and washed out of the house");
    goToBlue();
  }
  else if (curiouser === "2"){
    console.log("If you drink much from a bottle marked poison it is certain to disagree with you sooner or later.");
  shrink(); 
  }
  else {
    console.log("Sorry I didn't catch that, please reply again");
  goNorth();
  }
}
  

  function shrink(){
    var redQueen = prompt("You have found yourself in the Red Queen's garden. She has spotted you and challenged you to a game of croquet. But you also see the white rabbit dart by. What will you do? : 1) Catch that rabbit!,  2) Play against the Red Queen" );

    if (redQueen ==="1"){
      console.log("Off with your head!!!");
      goToBlue();
    }
    else if (redQueen === "2")
    { console.log("You have coquered the Red Queen at her own game!");
   croquet(); }
   else
    {console.log("Sorry I didn't catch that, please reply again");
  shrink();
}

  }

  function croquet(){
    
    var queenAlice = prompt("You have conquered the Red Queen, the people of Wonderland have named you Queen Alice. What do you want to do as your first action as Queen Alice? : 1) Think of six impossible things before breakfast! 2) Go to a Mad Tea Party! ");

    if (queenAlice ==="1")
      {console.log("You can think of more impossible things, start over!");
    goToBlue();
      }
      else if (queenAlice === "2")
       { console.log("You turn down the path to go to the Mad Tea Party, you see the white rabbit and start to chase him, you trip and hit your head. You come to, and realize it was all a dream.");
      shrink(); }
      else
        {console.log("Sorry I didn't catch that, please reply again");
      croquet();}
 }

    