//constructor
function Pokemon(data) {
  this.name = data.name;
  this.description = data.flavorText
    ? data.flavorText
    : "No description for this Pokemon becuase it is rare";
  this.level = data.level;
  this.hp = parseInt(data.hp);
  this.types = data.types.join("");
  this.abilities = data.abilities
    ? data.abilities.map((ability) => ability.name).join(" ")
    : "There are no abilities for this pokemon";
  this.image = data.images.large || data.images.small;
  this.attacks = data.attacks
    ? data.attacks.map((attack) => attack.name).join(" ")
    : "This pokemon has no attacks abilities";
  this.defence = data.resistances
    ? data.resistances.map((resistance) => resistance.type).join(" ")
    : "This pokemon has no defences abilities";
  this.weaknesses = data.weaknesses
    ? data.weaknesses.map((weakness) => weakness.type).join(" ")
    : "This pokemon has no weaknesses";
  this.evolvesFrom = data.evolvesFrom
    ? data.evolvesFrom
    : "First Version of This kind";
  this.evolvesTo = data.evolvesTo
    ? data.evolvesTo.join("")
    : "Last Version of This kind";
}

module.exports = Pokemon;
