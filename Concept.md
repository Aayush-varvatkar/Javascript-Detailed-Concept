> Var :  var can be redeclared and updated, it's a global scope variable
  let :  variable cannot be re-declared but can be updated.  block scope variable
  const:  const can't be redeclared and updated since it's constant 


> Strings are immutable
  Arrays are mutable


  
> DOM_INSERT_ELEMENT

let el = document.createElement("button");          // creates a new button element

node.append(el);                                  // adds new-element at the end of the node (INSIDE)
node.prepend(el);                                 // adds new-element at the start of the node (INSIDE)
node.before(el);                                  // adds new-element before the node (OUTSIDE)
node.after(el);                                   // adds new-element after the node (OUTSIDE)