### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
class CardGame

  # best practice, should be in snake case
  def checkforAce(card)
  # line below should use "==" in order to correctly implement a comparison between the expected and actual value
    if card.value = 1
      return true
    else
      return false
    end
  end

# dif should say def, and there should be a comma to separate the two arguments
  dif highest_card(card1 card2)
  if card1.value > card2.value
  # card.name is undefined and should match the above arguments should return "card1.value"
    return card.name
  else
  # will work, but is good practice to add a return statement and requires a property e.g. "card2.value"
    card2
  end
end
# superfluous end statement
end

# best practice, should indent this block
def self.cards_total(cards)
# undefined, total should = 0
  total
  # "should read for card in cards.values"
  for card in cards
    total += card.value
    # to properly convert the integer of total into a string 
    #should read "You have a total of #{total}
    return "You have a total of" + total
  end

end


```
