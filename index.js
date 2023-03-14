function scuberGreetingForFeet(ride){
  // Write your code here!
  let message;
  if(ride <=400) {
    message = "This one is on me!";
  } else if (ride > 2000) {
    message = "I will gladly take your thirty bucks.";
  } if (ride > 2500) {
    message = "No can do.";
  }
  return message;
}

function ternaryCheckCity(city){
  // Write your code here!
  
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else if( city === "Pittsburgh") {
    return "No go.";
  }
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
