/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package doppelkopf.gameLogic;
/**
 *
 * @author DavidPrivat
 */
public class Player {
    private transient CardStack tricksStack, cardsInHand;
    private transient Game game;
    public Player(CardStack initialStack, Game game) {
        this.game = game;
        cardsInHand = initialStack;
        tricksStack = new CardStack(game);
    }
    
    public void takeTricks (CardStack cardsMid) {
        cardsMid.moveAllTo(tricksStack);
    }
    
    public CardStack getCardsInHand() {
        return cardsInHand;
    }
    
    public CardStack getTrickCards() {
        return tricksStack;
    }
}
