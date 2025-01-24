// add number in string
var a = "Aayush";
var b = 5;
console.log(a + b);

// datatype of above using datatype opretor
console.log(typeof (a+b));

// create const object-- is it possible to change it later
const item = {
  "Aayush": "human",
  "age": 18,
} // not changeable
console.log(item["Aayush"]);

// add new key in previous object
item["friend"]="Sonu";
console.log(item["friend"]);

// create word meaning dictionary
const dictionary = {
  Bitch: "bloody women",
  King: "Ruler of area",
  Queen: "kings wife",
  Anime: "Japanese animation"
}
dictionary["Waifus"]="Female Anime characters";
console.log(dictionary["Waifus"]);