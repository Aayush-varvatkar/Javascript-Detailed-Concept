let marks_class_12 = [91, 86, 65, 23, null, true, "absent"]; // 7 index elements
console.log("initial result", marks_class_12);

/*
console.log(marks_class_12[0]);
console.log(marks_class_12[2]);
console.log(marks_class_12[4]);
console.log(marks_class_12[6]);
console.log(marks_class_12[7]); //will be print as undefined
*/

marks_class_12[7] = 33 //adding new index element in array
//console.log(marks_class_12[7]); 

marks_class_12[0] = 52 //changing value of existing index element in array
//console.log(marks_class_12[0]);

console.log("final result", marks_class_12);

console.log("length of array", marks_class_12.length);
console.log(typeof marks_class_12);   


// quiz
for(let i=0; i<marks_class_12.length; i++){
  console.log(marks_class_12[i]);
}