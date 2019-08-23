const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const armySchema = new Schema({
  name: {
    type: String,
    required: true,
    default: 'New Army'
  },
  soldiers: {
      type:Array,
      default:
      [{
            name:'Archer',
            img: 'https://fireemblemwiki.org/w/images/0/0c/Bs_fe08_innes_sniper_bow.png',
            price: 30,
            quantity: 0,
            description: 'Agile and ranged soldiers that will drown enemies troops with arrows. Effective against Swordmen.'
        },
        {
            name: 'Rider',
            img: 'https://fireemblemwiki.org/w/images/6/68/Bs_fe08_ephraim_great_lord_lance.png',
            price: 40,
            quantity: 0,
            description: 'Fast and lethal soldiers that will placate even the far away soldiers. Effective against Archers.'
        },
        {
            name:'Axemen',
            img:'https://fireemblemwiki.org/w/images/4/4a/Bs_fe08_ross_warrior_axe.png',
            price: 40,
            quantity: 0,
            description: 'Brave and aggressive soldiers that will knock down even the biggest enemies. Effective against Riders.'
        },
        {
            name: 'Swordmen',
            img:'https://fireemblemwiki.org/w/images/4/46/Bs_fe08_gerik_mercenary_sword.png',
            price: 30,
            quantity: 0,
            description: 'Tenacious and honorable soldiers that fight with their heart and mind. Effective against Axemen.'
        }]
    },
        
    });
    const Army = mongoose.model('Army', armySchema);
    module.exports = Army;