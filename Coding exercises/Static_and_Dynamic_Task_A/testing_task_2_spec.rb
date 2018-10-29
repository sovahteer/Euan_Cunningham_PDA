require 'minitest/autorun'
require 'minitest/rg'
require_relative ('testing_task_2.rb')

class TestCardGame < MiniTest::Test

    def setup()
        @card_game = CardGame.new()
        @cards = {
            "Ace of Spades" => Card.new("Spades", 1),
            "Two of Hearts" => Card.new("Hearts", 2)
        }
    end

    def test_check_for_ace
      is_an_ace = @card_game.check_for_ace(@cards["Ace of Spades"])
      assert_equal(true, is_an_ace)
    end

    def test_highest_card
        highest_card = @card_game.highest_card(@cards["Ace of Spades"], @cards["Two of Hearts"])
        assert_equal(2, highest_card)
    end

    def test_cards_total
        total = CardGame.cards_total(@cards)
        assert_equal("You have a total of 3", total)
    end

end