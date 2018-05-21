 class Fight {
    constructor(City,City2) {

    if (this.unitsList && this.unitsList2 !== null) {

        if (unitsList.length > unitsList2.length) {
            console.log(City + " a gagné le combat ");

        }
        else {

            console.log(City + " a perdu le combat " );
        }
    
        if (unitsList.length > unitsList2.length) {
            City.ressource = City.ressource + City2.ressource*0.5;

        }
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

        else {
            for (let j = 0; j < unitsList2.length; j++) {
                let rand = 0;

                rand = Math.random();

                if (rand >0.8) {
                    unitsList2[j].isDead = true;
                } else if (rand>0.6) {
                    unitsList2[j].isDead = true;
                }
             }
  
         }  
      } 
    }
  }
}