let num = 50;
if (num < 49){
  console.log("not right");
} else if (num > 100) {
  console.log("too much");
} else {
  console.log("ok");
}

/*(num == 50) ? console.log("right") : console.log("not right");*/

switch (num) {
  case num < 49: 
    console.log("not right");
    break;
  case num > 100:
    console.log("too much");
    break;
  case num > 80:
    console.log("too much too");
    break;
  case 50: 
    console.log("right");
    break;
  default: 
    console.log("default");
    break;
}


/*while (num < 55) {
  console.log(num);
  num++;
}*/

/*do{
  console.log(num);
  num++;
}
while(num < 55);*/

/*for(let i = 0; i < 5; i++){
  if(i == 3){
    continue;
  }
  console.log(i);
}*/

/*let i = 1;
while(i < 8){
  if(i==6){
    break;
  }
  console.log(i);
  i++;
}*/

let i = 1;
do{
  console.log(i);
  i++;
}
while(i < 8);

