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



const { match } = require('assert');
const data = require('./stratGuide/data');
let finalProductionData = { opponent: { action: [], score: 0, roundMatchResult: "" }, me: { action: [], score: 0, roundMatchResult: "" } };



//function to convert json data into formatted object  for easier accessability
const formatData = (unformattedData) => {
  splitCharactersArray = [];
  splitCharactersArray = unformattedData.stratGuide.split(",");

  //Loop thru the splitCharacterArray and if the value index is even = opponent, if odd = me
  splitCharactersArray.forEach((values, index) => {
    index % 2 !== 1 ? finalProductionData.opponent.action.push(values) : finalProductionData.me.action.push(values)
  });
};


formatData(data);

//Function to calculate the action taken from competitors (rock, paper, and scissor values)
const actionComparison = (recordedActionData) => {

  //Object storing data about how much each action is worth 
  const actionPoints = { "A": 1, "B": 2, "C": 3, "X": 1, "Y": 2, "Z": 3 };

  //Loop thru opponent action and compare it to action points library
  recordedActionData.opponent.action.forEach((opponentAction, index) => {
    recordedActionData.opponent.score += actionPoints[opponentAction];

    //Since the number of matches are the same, we can pass the index position from opponent directly into myAction
    const myAction = recordedActionData.me.action[index];
    recordedActionData.me.score += actionPoints[myAction];

    if (actionPoints[opponentAction] === actionPoints[myAction]) {
      finalProductionData.opponent.roundMatchResult = "tie";
      finalProductionData.me.roundMatchResult = "tie";
    } else if (actionPoints[opponentAction] > actionPoints[myAction]) {
      finalProductionData.opponent.roundMatchResult = "win";
      finalProductionData.me.roundMatchResult = "loss";
    } else {
      finalProductionData.opponent.roundMatchResult = "loss";
      finalProductionData.me.roundMatchResult = "win";
    }

    //Calculate match points
    calculateMatchPoints(index, actionPoints[opponentAction], actionPoints[myAction]);
  });
};

//Function to calculate match points
const calculateMatchPoints = (matchRound) => {

  //Object storing data about how much win loss and tie are worth in points
  const roundMatchResult = { "win": 6, "loss": 3, "tie": 0 };

  const opponentroundMatchResult = finalProductionData.opponent.roundMatchResult;
  const myroundMatchResult = finalProductionData.me.roundMatchResult;

  //Find the value of the match result points from roundMatchResult object and add it to both opponent and my score
  finalProductionData.opponent.score += roundMatchResult[opponentroundMatchResult];
  finalProductionData.me.score += roundMatchResult[myroundMatchResult];
}



actionComparison(finalProductionData)
console.log('finalProductionData', finalProductionData)


