const first = require("ee-first");

// const data = require('./stratGuide/backPackData');
const data = ['ZCWhhCsJCzSJzSbzgsmPTGNNPPNGjgLTLjgn'];


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
    checkAlphabet(firstPocket, secondPocket);
  });
};

const checkAlphabet =(firstPocket, secondPocket)=>{
  console.log('first', firstPocket);
  console.log('second', secondPocket);
  let totalCount =0;
  const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const lowerCase = upperCase.map(values=>{return values.toLowerCase()});
  console.log('lowercase', lowerCase.indexOf('g'))
  firstPocket.forEach((firstPocketChar,indexPosition)=>{
    if(secondPocket.indexOf(firstPocketChar) !== -1){
      const foundCharacter = secondPocket[secondPocket.indexOf(firstPocketChar)];
      console.log('uppercase', foundCharacter);
      if(upperCase.indexOf(foundCharacter)){
        totalCount += (upperCase.length + upperCase.indexOf(foundCharacter)+1);
      }else if (lowerCase.indexOf(foundCharacter)){
        totalCount += (lowerCase.indexOf(foundCharacter)+1);
      }
    }
  });
  console.log(totalCount);
};

checkBackPack();


