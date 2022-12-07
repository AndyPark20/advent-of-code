

// const data = require('./stratGuide/backPackData');
const data =['NWVqqcHHNpsNcNVdVlhCMlHQQMQQzLfzQPttFGPMLSLgtF']

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
    checkAlphabet(firstPocket, secondPocket);
  });
};

const checkAlphabet =(firstPocket, secondPocket)=>{
  const upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const lowerCase = upperCase.map(values=>{return values.toLowerCase()});
  let foundChar =[];

  firstPocket.forEach((firstPocketChar,indexPosition)=>{
    if(secondPocket.indexOf(firstPocketChar) !== -1 && foundChar.indexOf(firstPocketChar) === -1){
      const foundCharacter = secondPocket[secondPocket.indexOf(firstPocketChar)];
      foundChar.push(foundCharacter);
      console.log(foundChar)
      if(upperCase.indexOf(foundCharacter) !== -1 && lowerCase.indexOf(foundCharacter) === -1){
        totalCount += (upperCase.length + upperCase.indexOf(foundCharacter)+1);
      }else{
        totalCount += (lowerCase.indexOf(foundCharacter)+1);
      }
    }
  });
  console.log(totalCount);
};

checkBackPack();


