function Animal(name) {
    var foodAmount = 50;
    this.name = name;

    this._getFormattedFoodAmount = function() {
        console.log(foodAmount + 'гр.');
        return this;
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return foodAmount;

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
        return this;
    };

    this.feed = function() {
        console.log('Насыпаем в миску ' + _getFormattedFoodAmount() + ' корма.');
        return this;
    };
}

function Cat(name) {

    this.name = name;

    var self = this;
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function() {
        animalFeed.call(this);
        console.log('Кот доволен ^_^'); 
        return this;
    };

    this.stroke = function (){
        console.log('Гладим кота.');
        return this;
    }

    self.animalFeed();
}

var barsik = new Cat('Барсик');

console.log(barsik.name);
console.log(barsik.animalFeed());
console.log(barsik.dailyNorm(250));
barsik.name.animalFeed().stroke().dailyNorm(250);

barsik = null;



