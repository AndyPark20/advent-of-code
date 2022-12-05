// const data = require('./stratGuide/backPackData');
const data ='rPWmLCTCQlCQQmmrWLrQShJshhzdhhJjcSjlzRds';
//Psudo code
//Loop thru the master array and split the characters by half.
//assign the characters into small pocket and big pocket

let totalCount =0;

const checkBackPack =()=>{
  const firstPocket =[];
  const secondPoket =[];
  data.forEach(backPack => {
    backPack.forEach((characters,index)=>{
      if((index+1/2) <= characters.length){
        firstPocket.push(characters[index]);
      }else{
        secondPoket.push(characters[index]);
      };
    });
  });
};

const checkAlphabet =()=>{
  const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const lowercase = upperCase.map(values=>{return values.toLowerCase()});
}


