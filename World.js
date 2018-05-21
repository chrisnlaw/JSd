const {Divinity} = require('./divinity.js');

class City {

    constructor(name,corn,gold_)  {
     this.name=name;
     this.corn_ = 100;
     this.gold_ = 100;    
     this.ressource = this.corn_+this.gold_;
     this.myDivinity = new Divinity();

    var unitsList = new Array(Math.floor(Math.random() * 1000));

        for (let i = 0; i < unitsList.length; i++) {
            unitsList[i] = new Units(false);
        }
    }

    get cor() {
        return this.corn;
    }

    get gaincor() {
        return this.gaincorn;
    }

    get unitsLis() {
        return this.unitsList;
    }
    set corn(Corn) {
        this._corn = Corn;
    }

    set gold(Gold) {
        this._gold = Gold;
    }
    recrute() {
        var unit = new Units(false);
        this.unitsList.push(unit);
    }
  }
class City2 {

    constructor(name,corn,gold_)  {
     this.name=name;
     this.corn_ = 50;
     this.gold_ = 30;
     this.ressource = this.corn_+this.gold_;
     this.myDivinity = new Divinity();

    var unitsList2 = new Array(Math.floor(Math.random() * 1000));

        for (let i = 0; i < unitsList2.length; i++) {
            unitsList2[i] = new Units(false);
        }
    }

    get cor() {
        return this.corn;
    }

    get unitsLis() {
        return this.unitsList2;
    }
    set corn(Corn) {
        this._corn = Corn;
    }

    set gold(Gold) {
        this._gold = Gold;
    }
    recrute() {
        var unit = new Units(false);
        this.unitsList2.push(unit);
    }

}

}