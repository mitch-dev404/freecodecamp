function cardValues(cards) {
  const suits = ["S", "C", "H", "D"];
  const faceCards = ["J", "Q", "K"];

  const values = cards.map((card) => {
    console.log("===============");
    console.log(`card: ${card}`);
    for (const char of card) {
      console.log(`char: ${char}`);
      if (suits.includes(char)) {
        let value = card.replace(char, "");
        console.log(`card value: ${value}`)
        if (faceCards.includes(value)) {
          value = 10;
        } else if (value == "A") {
          value = 1;
        } else {
          value = parseInt(value);
        }
        console.log(`value: ${value}`);
        return value;
      }
    }
  });
  return values;
}

console.log(cardValues(["AS", "10S", "10H", "6D", "7D"]));
