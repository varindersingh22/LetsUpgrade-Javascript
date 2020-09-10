let avengers = [{
    name: "Sourav",
    age: 19,
    country: "India",
    hobbies: ["Fighting","Gaming"]
 },
  {
    name: "Sam",
    age: 35,
    country: "America",
    hobbies: ["Reading","Gaming"],
 },
 {
    name: "Shinchan",
    age: 5,
    country: "Japan",
    hobbies: ["Dancing","Cosplay acting"]
  },
{
    name: "Hardeep",
    age: 34,
    country: "India",
    hobbies: ["Running","Gaming"]}];
    //Write a function to display all the objects having age less than 30

for (let i = 0; i < avengers.length; i++) {
    if(avengers[i].age<30){
        console.log(avengers[i]);
    }
    
}

 //Write a function to display all the objects having country India
 for (let i = 0; i < avengers.length; i++) {
    if(avengers[i].country==="India"){
        console.log(avengers[i]);
    }
    
}
