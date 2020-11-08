const root_path = '..';

const {describe} = require('mocha');
const assert = require('assert');

const {Fight, WeightClass} = require(`${root_path}/fight`);
const fight_data = require(`${root_path}/fights`);

describe('Fight', function() {
  describe('create_from_fight_data()', function() {
    const fight01 = Fight.create_from_fight_data(fight_data.basic[0]);

    it('sets fighter_a correctly', function() {
      assert.strictEqual('John Doe', fight01.fighter_a);
    });

    it('sets fighter_b correctly', function() {
      assert.strictEqual('Curtis Blow', fight01.fighter_b);
    });

    it('sets weight class correctly', function() {
      assert.strictEqual(WeightClass.light, fight01.weight_class);
    });
  });
});
