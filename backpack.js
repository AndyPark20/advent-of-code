const first = require("ee-first");

// const data = require('./stratGuide/backPackData');
const data = ['rPWmLCTCQlCQQmmrWLrQShJshhzdhhJjcSjlzRds'];

let totalCount =0;

const checkBackPack =()=>{

  data.forEach(backPack => {
    let characterArray= backPack.split('');
    let firstPocket =[];
    let secondPocket =[];
    characterArray.forEach((characters,index)=>{
      if(index < characterArray.length/2){
       firstPocket.push(characters);
      }else{
        secondPocket.push(characters);
      };
    });
    console.log('firstPocket', firstPocket);
    console.log('secondPocket', secondPocket);
    checkAlphabet(firstPocket, secondPocket);
  });
};

const checkAlphabet =(firstPocket, secondPocket)=>{
  const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const lowerCase = upperCase.map(values=>{return values.toLowerCase()});
  firstPocket.forEach((firstPocketChar, firstPocketCharIndex)=>{
    if(secondPocket.indexOf(firstPocketChar) !== -1){
      console.log(firstPocket[secondPocket.indexOf(firstPocketChar)]);
    }
  });
};

checkBackPack();


