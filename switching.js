var typeOfPet = prompt("What type of pet do you have?");
if (typeOfPet == "dog" || typeOfPet == "cat" || typeOfPet == "parrot") {
  console.log("A " + typeOfPet + " is a normal pet");
}
else if ( typeOfPet == "liger"){
  console.log("Wow, you have a liger!  You are so cool.  Vote for pedro!");
}
else {
  console.log("I have never heard of that type of pet.");
}
