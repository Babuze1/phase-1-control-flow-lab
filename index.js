function scuberGreetingForFeet(someValue) {
  
  let result

  if (someValue<= 400) {
    
    result = 'This one is on me!';
  
  }  

  else if (someValue> 2500) {
    
    result = 'No can do.';
  
  }else {
    
    result = 'I will gladly take your thirty bucks.'

  }

  return result

}


function ternaryCheckCity(city) {
    
  return (city === 'NYC' ? ('Ok, sounds good.') : ("No go."))
}

let generous;

function switchOnCharmFromTip(responce) {

  
  switch (responce) {

    case 'generous':
      return('Thank you so much.');
      break;
    
    case 'not as generous' :
      return('Thank you.');
      break;
      
    default:
      return('Bye.');


  }
}