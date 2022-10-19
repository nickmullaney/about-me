
// let answer1 = prompt('Do you want Pepperoni on your Pizza?');
// console.log(answer1);
// let answer2 = prompt('Do you want anchovies?');
// console.log(answer2);

// //String concatenation
// alert('You answered ' + answer1 + ' to the pepperoni question');
    
// if(answer2 === 'yes' || answer2 === 'YES' || answer2 === 'Yes'){
//   alert('Why do you like anchovies?!?');
// }
// let size = prompt('What size pizza do you want? small, medium or large.');

// if(size === 'large' || size === 'Large'){
//   alert('Large pizza on the way');
// }
// else if(size === 'medium' || size === 'Medium'){
//   alert('Medium pizza on the way');
// }
// else if(size === 'small' || size === 'small'){
//   alert('Small pizza on the way');
// }
// else{
//   alert('You types something other than small, medium or large');
// }

// if(size === 'large' || size === 'medium'){
//   alert('You ordered a large or medium pizza');
// }

// let order = '';

// if(size === 'large' || size === 'medium' || size === 'small'){
//   order = 'You want a ' + size + ' sized pizza';
// }else{
//   order = 'You want a ??? sized pizza';
// }

// if(answer1 === 'yes'){
//   order = order + ' with pepperoni.';
// }
// if(answer2 === 'yes'){
//   order = order + ' with anchovies, (gross)';
// }

// alert(order);

let userName = yourName();
let spice = spiceYouLike();
alert('I also like ' + spice + ' ' + userName + '!');
let visit = userVisits();
alert(visit + ' sounds like a great place to visit ' + userName + '.');
let newSpiceBlend = newSpice();
alert('Thanks for the suggestion ' + userName + '. We love thinking of new combinations and a ' + newSpiceBlend + ' blend, with hints of ' + spice + ' and ingredients from ' + visit + ' would be great!');

function yourName(){
  let valid = false;
  while (valid === false){
    let userName = prompt('What is your name?');
    document.write (userName);
    console.log('user name',userName);
    if(userName === null){
      valid = false;
      yourName();
    }
    else{
      valid = true;
      return userName;
    }
  }
}

function goodbye(userName){
  document.write(userName);
  console.log('user name',userName);
}

function spiceYouLike(){
  let spice = prompt('Which of the 4 flavor profiles do you like most? Sweet, Savory, Spicy, Fragrant');
  console.log('spice',spice);
  if (spice === 'sweet' || spice === 'Sweet'){
    alert ('If you like ' + spice + ', you will love our Valhalla Blend');
  }
  else if(spice === 'savory' || spice === 'Savory' ){
    alert ('If you like ' + spice + ', you will love our Pangea Blend');
  }
  else if(spice === 'spicy' || spice === 'Spicy'){
    alert ('If you like ' + spice + ', you will love our El Dorado Blend');
  }
  else if(spice === 'fragrant' || spice === 'Fragrant'){
    alert ('If you like Nick' + spice + ', you will love our Atlantis Blend');
  }
  else{
    alert('I didn\'t quite catch that? Explore around to find what you like');
  }
  return spice;
}

function userVisits(){
  let visit = prompt('If you could visit any location, where would it be?');
  console.log('Where to visit: ', visit);
  return visit;
}

function newSpice(){
  let newSpice = prompt('What kind of new spice blend would you like to see? Something Zesty, Fruity, Fragrant, etc.');
  console.log('new spice blend adjective: ',newSpice);
  return newSpice;
}



