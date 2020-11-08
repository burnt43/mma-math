const Result = {
  ko: 1000,
  tko: 2000,
}

const WeightClass = {
  atom: 1000,
  straw: 2000,
  fly: 3000,
  bantam: 4000,
  feather: 5000,
  light: 6000,
  welter: 7000,
  middle: 8000,
  lightheavy: 9000,
  heavy: 10000,
};

class Fight {
  static create_from_fight_data(fight_data) {
    let weight_class;
    if (fight_data.weight_class === 'Atomweight') {
      weight_class = WeightClass.atom;
    } else if (fight_data.weight_class === 'Strawweight') {
      weight_class = WeightClass.straw;
    } else if (fight_data.weight_class === 'Flyweight') {
      weight_class = WeightClass.fly;
    } else if (fight_data.weight_class === 'Bantamweight') {
      weight_class = WeightClass.bantam;
    } else if (fight_data.weight_class === 'Featherweight') {
      weight_class = WeightClass.feather;
    } else if (fight_data.weight_class === 'Lightweight') {
      weight_class = WeightClass.light;
    } else if (fight_data.weight_class === 'Welterweight') {
      weight_class = WeightClass.welter;
    } else if (fight_data.weight_class === 'Middleweight') {
      weight_class = WeightClass.middle;
    } else if (fight_data.weight_class === 'Light heavyweight') {
      weight_class = WeightClass.lightheavy;
    } else if (fight_data.weight_class === 'Heavyweight') {
      weight_class = WeightClass.heavy;
    }

    return new Fight(
      fight_data.fighter_a,
      fight_data.fighter_b,
      weight_class
    )
  }

  constructor(fighter_a, fighter_b, weight_class, happened_on, winner, result) {
    Object.assign(this, {fighter_a, fighter_b, weight_class, happened_on, winner, result});
  }
}

class FightStorage {
  static create_from_fights_data(fights_data) {
    return new FightStorage(
      fights_data.map(function(index, fight_data) {
        return;
      })
    );
  }

  constructor(fights) {
  }
}

class FightPredictor {
  constructor(fights, options = {
  }) {
    Object.assign(this, {fights, options});
  }
}

exports.Fight = Fight;
exports.FightStorage = FightStorage;
exports.FightPredictor = FightPredictor;
exports.WeightClass = WeightClass;
