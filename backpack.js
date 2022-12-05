const first = require("ee-first");

const data = require('./stratGuide/backPackData');
// const data =['rPWmLCTCQlCQQmmrWLrQShJshhzdhhJjcSjlzRds', 'andys'];
//Psudo code
//Loop thru the master array and split the characters by half.
//assign the characters into small pocket and big pocket

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
    // console.log('firstPocket:', firstPocket, "secondPocket:", secondPocket)
  });
};

const checkAlphabet =()=>{
  const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const lowercase = upperCase.map(values=>{return values.toLowerCase()});
}

checkBackPack();


