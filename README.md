#Launay, Chantharath, Chandelier, Vaucher, Bara, Roussel

## Context :

During the antiquity, a fertile period in science and social progress, the beginnings of a static and organized sedentary appeared. Each city aims for eternal exclusive and absolute domination.

## Introduction :

For our game, we made :
- 2 class City and City2 in order to create 2 cities, you'll find it in the [World.js](https://github.com/chrisnlaw/JSd/blob/master/World.js) file 
- 1 class [Units](https://github.com/chrisnlaw/JSd/blob/master/unit.js) which will provide us the status of death of the soldier in the army
- 1 class [Fight](https://github.com/chrisnlaw/JSd/blob/master/fight.js) which illustrate a battle between two armies
- 1 class [Divinity](https://github.com/chrisnlaw/JSd/blob/master/divinity.js) which can provide to cities ressources

## Cities :

Each cities have ressources which are corn and gold, you can then make offer with it to your God. The God will randomly give you more ressources, you'll never lost ressources with offers. 
You can also make units for your army with ressources, each units will be stack in an array.
       
        var unitsList = new Array(Math.floor(Math.random() * 1000));

        for (let i = 0; i < unitsList.length; i++) {
            unitsList[i] = new Units(false);
        }
    }

## War :

To earn ressources you can use the safe way by making offer to your God, however you'll have small profit. To remedy, all you can do is fight. The goal is simple, the city which have the higher number of units in its army win the fight.

If you attack a city and you win :
- You earn 50% of the ennemy ressources
- Each of the units in your army have 20% chance to die

If you attack a city and you loose :
- You lost 50% of your ressources
- Each of the units in your army have 40% chance to die
 

        if (unitsList.length > unitsList2.length) {
            City.ressource = City.ressource + City2.ressource*0.5;       }
        else {
            City2.ressource = City2.ressource + City.ressource*0.5;

        }

        if (unitsList.length > unitsList2.length) {
             for (let i = 0; i < unitsList.length; i++) {
                let rand = 0;

                rand = Math.random();

                if (rand >0.8) {
                    unitsList[i].isDead = true;
                } else if (rand>0.6) {
                    unitsList[i].isDead = true;
                }
            }
            
