let varldshav= ["Atlanten", "Indiska Oceanen", "Stilla havet"];
console.log(varldshav); //Alla 3 hav visas i konsolen

varldshav.push("Medelhavet");
console.log(varldshav); //Medelhavet lades till i slutet av alla världshav med hjälp av "push"

varldshav.pop();
varldshav.shift();
console.log(varldshav); //Det första världshavet togs bort med hjälp av "Pop" och det sista "Medelhavet" togs bort med "Shift"

varldshav.splice(1, 0, "Ishavet");
console.log(varldshav);
