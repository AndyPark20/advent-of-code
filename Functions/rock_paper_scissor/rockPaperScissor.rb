

require_relative "../../Master_Data/rock_paper_scissor/rock_paper_scissor.rb"
include Master_data

$strat_guide = Master_data.format_data

#Rock Paper Scissor game
#Rules:
#Can only chose between rock, paper, scissor (points are 1, 2, 3 respectively)
#Won = 6
#Tie = 3
#Loss = 0

#X,Y,Z = Rock, paper, scissor (For me)
#A,B,C = Rock, paper, scissor (Opponent)

#Objective
#There is a guide that the elves have given that shows the prediction of each players options
#What is the total point for me based on the strategy guide. 

$final_production_data = {opponent:{action:[], score:0, round_match_result: ""},  me: { action: [], score: 0, roundMatchResult: "" }}

# Function to convert json data into formatted object for easier accessability
def format_data() 

  split_characters_array =  $strat_guide

  # Loop thru the split_character_Array and if the value index is even = opponent, if odd = me (currently at 4800 characters)
  split_characters_array.each_with_index do |character, index|
    index % 2 == 0 ? $final_production_data[:opponent][:action].push(character) : $final_production_data[:me][:action].push(character)
  end
end

format_data()

#Function to calculate the action taken from competitors (rock, paper, and scissor values)
def action_comparison()
  #Object storing data about how much each action is worth 
  # A and X == rock
  # B and Y == paper
  # C and Z == scissor
  action_points = {A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3}

  #Loop thru opponent action and compare it to action points library
  $final_production_data[:opponent][:action].each_with_index do |opponent_action, index|
    $final_production_data[:opponent][:score] += action_points[opponent_action.to_sym].to_i
   
    # Since the number of matches are the same, we can pass the index position from opponent directly into myAction
    my_action = $final_production_data[:me][:action][index];
    $final_production_data[:me][:score] += action_points[my_action.to_sym]

    # Calculate match points
    calculate_match_points(opponent_action, my_action)
  end
end

# Function to calculate match points
####Perhaps make two methods? for evaulating and calculating match result points
def calculate_match_points(opponent_action, my_action) 
  #Logic to determine win, loss, or tie
  #####LOOK INTO HASH LOOKUP!!!!
  if ((opponent_action == 'A' && my_action == 'X') || (opponent_action == 'B' && my_action == 'Y') || (opponent_action == 'C' && my_action == 'Z'))
    $final_production_data[:opponent][:round_match_result] = "tie"
    $final_production_data[:me][:round_match_result] = "tie"

  elsif (((opponent_action == 'A' && my_action == 'Z') || (opponent_action == 'B' && my_action == 'X') || (opponent_action == 'C' && my_action == 'Y')))
    $final_production_data[:opponent][:round_match_result] = "win"
    $final_production_data[:me][:round_match_result] = "loss"
    
  elsif (((opponent_action == 'A' && my_action == 'Y') || (opponent_action == 'B' && my_action == 'Z') || (opponent_action == 'C' && my_action == 'X')))
    $final_production_data[:opponent][:round_match_result] = "loss"
    $final_production_data[:me][:round_match_result] = "win"
  end
  #Object storing data about how much win loss and tie are worth in points
  round_match_result ={ win: 6, loss: 0, tie: 3 }
  
  opponent_round_match_result = $final_production_data[:opponent][:round_match_result]
  my_round_match_result = $final_production_data[:me][:round_match_result]

  #Find the value of the match result points from roundMatchResult object and add it to both opponent and my score
  $final_production_data[:opponent][:score] += round_match_result[opponent_round_match_result.to_sym]
  $final_production_data[:me][:score] += round_match_result[my_round_match_result.to_sym]
  
  puts $final_production_data[:me][:score]
end

action_comparison()