let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
/*
for(let i=0; i<sportsOne.length; i++){
    console.log(sportsOne[i]);
}
*/

// Let's use the simplied for loop

for(let tempSport of sportsOne){
    if(tempSport == "Tennis"){
        console.log(tempSport + "My favorite");
    }else{
        console.log(tempSport);
    }
    
}