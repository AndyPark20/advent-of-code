//Rock Paper Scissor game
  //Rules:
    //Can only chose between rock, paper, scissor (points are 1, 2, 3 respectively)
    //Won = 6
    //Tie = 3
    //Loss = 0

    //X,Y,Z = Rock, paper, scissor (For me)
    //A,B,C = Rock, paper, scissor (Opponent)

  //Objective
    //There is a guide that the elves have given that shows the prediction of each players options
    //What is the total point for me based on the strategy guide. 
 


const data = require('./stratGuide/data');
let finalProductionData ={opponent:[],me:[]};

//function to convert json data into formatted object  for easier accessability
const formatData =(unformattedData)=>{
  splitCharactersArray = [];
  splitCharactersArray =unformattedData.stratGuide.split(",");
  
  //Loop thru the splitCharacterArray and if the value index is even = opponent, if odd = me
  splitCharactersArray.forEach((values,index)=>{
    index % 2 !== 1 ? finalProductionData.opponent.push(values) : finalProductionData.me.push(values)
  })
}


formatData(data)

console.log('oppponent', finalProductionData.opponent.length);
console.log('me',finalProductionData.me.length)