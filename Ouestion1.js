const allUsers=[
     "Anurag",
     "Aditya",
     "Mithun",
     "Hitesh",
     "Anurag",
     "Nirupam",
     "Virat",
     "Mohan",
];

function isUserPresent(user){
     if(allUsers.includes(user)){
          console.log(`Yes ${user} is persent`);
     }
     
     else{
          console.log(`No ${user} is not peresent`);
     }
}

isUserPresent("Mithun");
//OUTPUT: Yess , Mithun is Peresent

isUserPresent("Someone");
//OUTPUT: No, Someone is not peresent


