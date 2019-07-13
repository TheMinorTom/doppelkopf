/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package doppelkopf;

import java.util.Collections;
import java.util.HashMap;

/**
 *
 * @author DavidPrivat
 */
public class Game {

    private final HashMap<String, Card> cardsToIdHashMap;
    private GAME_MODE gamemode;
    private Player[] players;
    private CardStack cardsMid;
    public Game() {
        gamemode = GAME_MODE.NORMAL;
        cardsMid = new CardStack(this);
        cardsToIdHashMap = new HashMap<>();
        CardStack allCards = new CardStack(this);
        int currId = 0;
        for (int iVal = 0; iVal < CardValue.values().length; iVal++) {
            for (int iCol = 0; iCol < CardColor.values().length; iCol++) {
                for (int i = 0; i < 2; i++) {
                    Card currCard = new Card(CardColor.values()[iCol], CardValue.values()[iVal], currId, this);
                    cardsToIdHashMap.put(String.valueOf(currId), currCard);
                    allCards.addCard(currCard);
                    currId++;
                }
            }
        }
        
        initPlayers(allCards);
        
        printGame();
        

    }
    
    public void play() {
        
    }

    public void initPlayers(CardStack allCards) {
        players = new Player[4];
        for (int i = 0; i < 4; i++) {
            CardStack playerInitStack = new CardStack(this);
            for(int j = 0; j < 10; j++) {
                allCards.moveRandomCardTo(playerInitStack);
            }
            Collections.sort(playerInitStack.getCards());
            players[i] = new Player(playerInitStack, this);
            
        }

    }
    
    public void printGame() {
        for(int i = 0; i < 4; i++) {
            System.out.println("\n\n---------------------------------------------\n\n" + (i+1) + ". player:\n\n");
            
            for(Card currOutCard: players[i].getCardsInHand()) {
                System.out.println(currOutCard.getColor().toString() + "   " + currOutCard.getValue().toString());
            }
            
        }
        System.out.println("\n\n\n------------------------------------------------------------------------------------------\n\n\n" + "Mid:\n\n");
        for(Card currOutCard: cardsMid) {
                System.out.println(currOutCard.getColor().toString() + "   " + currOutCard.getValue().toString());
            }
    }

    public GAME_MODE getGamemode() {
        return gamemode;
    }

    public HashMap<String, Card> getCardsToIdHashMap() {
        return cardsToIdHashMap;
    }

    public static enum GAME_MODE {

        NORMAL,
        J_SOLO,
        Q_SOLO;

    }
}
