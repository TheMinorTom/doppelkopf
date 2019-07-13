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
public class Card implements Comparable {

    private final CardColor cardColor;
    private final CardValue cardValue;
    private Player owner;
    private final int cardId;
    private boolean isTrump;
    private final Game game;

    private int cardStrength;

    public Card(CardColor color, CardValue value, int id, Game game) {
        this.cardColor = color;
        this.cardValue = value;
        this.cardId = id;
        isTrump = false;
        this.game = game;
        cardStrength = 0;
        calcTrump();
    }

    @Override
    public int compareTo(Object o) {
        Card otherCard = (Card)o;
        return otherCard.getCardStrength() - this.getCardStrength();
    }

    public void calcTrump() {
        if (game.getGamemode().equals(Game.GAME_MODE.NORMAL)) {

            if (cardValue == CardValue.TEN && cardColor == CardColor.HEARTS) {
                cardStrength = 0;
                isTrump = true;
            } else if (cardValue == CardValue.QUEEN) {
                cardStrength = 4 - cardColor.ordinal();
                isTrump = true;
            } else if (cardValue == CardValue.JACK) {
                cardStrength = 8 - cardColor.ordinal();
                isTrump = true;
            } else if (cardColor == CardColor.DIAMONDS) {
                cardStrength = 11 - cardValue.ordinal();
                isTrump = true;
            } else {
                cardStrength = 14 - cardValue.ordinal();
                isTrump = false;
            }
        }
    }

    public void setOwner(Player owner) {
        this.owner = owner;
    }

    public void setTrumph(boolean trump) {
        isTrump = trump;
    }

    public int getId() {
        return cardId;
    }

    public Player getOwner() {
        return owner;
    }

    public CardColor getColor() {
        return cardColor;
    }

    public CardValue getValue() {
        return cardValue;
    }
    
    public int getCardStrength() {
        return cardStrength;
    }

    @Override
    public
            boolean equals(Object o) {
        if (o.getClass().equals(Card.class
        )) {
            if (((Card) o).getId()
                    == this.getId()) {
                return true;
            } else {
                return false;
            }
        } else {
            return super.equals(o);
        }
    }
}
