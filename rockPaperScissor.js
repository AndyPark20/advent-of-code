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
 


  const response = async ()=>{
    const data = await fetch('https://adventofcode.com/2022/day/2/input', {mode: 'no-cors'});
    const finalData = await data.json();
    console.log(finalData);
  }


  response();
