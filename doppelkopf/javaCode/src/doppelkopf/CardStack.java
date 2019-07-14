/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package doppelkopf;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Random;
import java.util.Set;
import java.util.SortedSet;
import java.util.TreeSet;
import java.util.Vector;

/**
 *
 * @author DavidPrivat
 */
public class CardStack implements Iterable<Card>{
    private Vector<Card> cards;
    private Game game;
    public CardStack(Game game) {
        this.cards = new Vector<>();
        this.game = game;
    }
    

    @Override
    public Iterator<Card> iterator() {
        return cards.iterator();
    }
    
    public Card getStrongest() {
        Vector<Card> sortedCards = new Vector<>(cards);
        Collections.sort(sortedCards);
        return sortedCards.lastElement();
    }
    
    public Vector<Card> getCards() {
        return cards;
    }
    
    public Card takeCard(int index) {
        Card card = cards.get(index);
        cards.remove(card);
        return card;
    }
    
    public void addCard(Card card) {
        cards.add(card);
    }
    
    public void moveCardTo(int cardIndex, CardStack otherStack) {
        otherStack.addCard(takeCard(cardIndex));
    }
    
    public void moveAllTo(CardStack otherStack) {
        otherStack.getCards().addAll(cards);
        cards.clear();
    }
    
    public int moveCardCountedTo(int cardIndex, CardStack otherStack, int counter) {
        Card card = takeCard(cardIndex);
        card.setLaidIndex(counter);
        otherStack.addCard(card);
        return (counter +1);
    }
    
    public void moveRandomCardTo(CardStack otherStack) {
        int index = (new Random()).nextInt(cards.size());
        moveCardTo(index, otherStack);
    }
    
    
    
}
