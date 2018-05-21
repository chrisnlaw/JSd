
const {City} = require('./World.js');
const {Divinity} = require('./divinity.js');
const {unit} = require('./unit.js');
const {Fight} = require('./Fight.js');


const Resident = new City('Paris', 50, 100);
const Ennemy = new City2('Tokyo', 50, 100);

GOD = new Divinity('test', 1);
GOD.init();


let choix = prompt('Que voulez vous faire ? 0 pour passer le tour, 1 pour offrir à notre dieu des corn et du gold),' +
			' 2 pour attaquer Ennemie', '');

		while (choix !== 0) {
			if (choix === 1) {
			 
                 const offer = Resident.corn_;
                 Resident.corn_ -= offer;
                 this.myDivinity.offeringCorn(offer); // pas dans le constructeur
     
    
			   const offer = Resident.gold_;
                Resident.gold_ -= offer;
               this.myDivinity.offeringCorn(offer); // pas dans le constructeur
   
               this.myDivinity.worldEvents.on('favor', favor => {
               Resident.corn_ += favor.corn;
               Resident.gold_ += favor.gold;
               });

               this.myDivinity.worldEvents.on('blessing', favor => {
               Resident.corn_ += favor.corn;
               Resident.gold_ += favor.gold;
               });
    
               this.myDivinity.worldEvents.on('retribution', favor => {
               Resident.corn_ += favor.corn;
               Resident.gold_ += favor.gold;
                });  


			    const offer = Ennemy.corn_;
                 Ennemy.corn_ -= offer;
                 this.myDivinity.offeringCorn(offer); // pas dans le constructeur
     
    
			   const offer = Ennemy.gold_;
                Ennemy.gold_ -= offer;
               this.myDivinity.offeringCorn(offer); // pas dans le constructeur
   
               this.myDivinity.worldEvents.on('favor', favor => {
               Ennemy.corn_ += favor.corn;
               Ennemy.gold_ += favor.gold;
               });

               this.myDivinity.worldEvents.on('blessing', favor => {
               Ennemy.corn_ += favor.corn;
               Ennemy.gold_ += favor.gold;
               });
    
               this.myDivinity.worldEvents.on('retribution', favor => {
               Ennemy.corn_ += favor.corn;
               Ennemy.gold_ += favor.gold;
                });  


			}   
			     else if (choix === 2) {
				War = new Fight(Resident,Ennemy);
			} 

}
