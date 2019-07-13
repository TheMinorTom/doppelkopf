/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package doppelkopf;

/**
 *
 * @author DavidPrivat
 */
public class Player {
    private CardStack tricksStack, cardsInHand;
    private Game game;
    public Player(CardStack initialStack, Game game) {
        this.game = game;
        cardsInHand = initialStack;
        tricksStack = new CardStack(game);
    }
    
    public CardStack getCardsInHand() {
        return cardsInHand;
    }
}
