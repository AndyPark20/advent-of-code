require('../../Master_Data/back_pack_data/backPackData.rb')
include Formatted_data

#Global variable
$data = Formatted_data.format_data
$total_count = 0


def checkBackPack 
  $data.each do |back_pack|
    character_array = back_pack.split('')
    first_pocket = []
    second_pocket = []

    character_array.each_with_index do |characters, index|
      if index < character_array.length/2
        first_pocket.push(characters)
      else
        second_pocket.push(characters)
      end
    end
    check_alphabet(first_pocket, second_pocket) 
  end
end

def check_alphabet(first_pocket, second_pocket) 
  upper_case = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  lower_case = upper_case.map {|values| values.downcase}
  found_char = []

  first_pocket.each do |first_pocket_char|
    if second_pocket.find_index(first_pocket_char) != nil && found_char.find_index(first_pocket_char) == nil
      found_character = second_pocket[second_pocket.find_index(first_pocket_char).to_i]
      found_char.push(found_character)
      if upper_case.find_index(found_character) != nil && lower_case.find_index(first_pocket_char) == nil
        $total_count += (upper_case.length.to_i + (upper_case.find_index(found_character).to_i)+1)
      else    
        $total_count += ((lower_case.find_index(found_character).to_i)+1)
      end
    end
  end
  puts $total_count
end

checkBackPack()