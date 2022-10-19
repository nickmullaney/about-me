
// function topping(){
//   let answer1 = prompt('Do you want pepperoni on your pizza?');
//   console.log(answer1);
// }
let answer1 = prompt('Do you want Pepperoni on your Pizza?');
console.log(answer1);
let answer2 = prompt('Do you want anchovies?');
console.log(answer2);

//String concatenation
alert('You answered ' + answer1 + ' to the pepperoni question');
    
if(answer2 === 'yes' || answer2 === 'YES' || answer2 === 'Yes'){
  alert('Why do you like anchovies?!?');
}
let size = prompt('What size pizza do you want? small, medium or large.');

if(size === 'large' || size === 'Large'){
  alert('Large pizza on the way');
}
else if(size === 'medium' || size === 'Medium'){
  alert('Medium pizza on the way');
}
else if(size === 'small' || size === 'small'){
  alert('Small pizza on the way');
}
else{
  alert('You types something other than small, medium or large');
}

if(size === 'large' || size === 'medium'){
  alert('You ordered a large or medium pizza');
}

let order = '';

if(size === 'large' || size === 'medium' || size === 'small'){
  order = 'You want a ' + size + ' sized pizza';
}else{
  order = 'You want a ??? sized pizza';
}

if(answer1 === 'yes'){
  order = order + ' with pepperoni.';
}
if(answer2 === 'yes'){
  order = order + ' with anchovies, (gross)';
}

alert(order);
