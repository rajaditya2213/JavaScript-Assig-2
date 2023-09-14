const students=
[
     {
          name:"Mithun",
          marks:95,

     },

     {
          name:"Prabir",
          marks:75,
     },

     {
          name:"Aditya",
          marks:92,
     },

     {
          name:"Hitesh",
          marks:70,
     },

     {
          name:"Shivam",
          marks:99,

     },

];

const checkresult=(name) =>{
     for(let student of students){
          if(student.name== name){
               return student.marks > 90
          ?  console.log(
               `Congratulation! ${student.name} You have cleared the exam` 
          )
          :  console.log (`Sorry! ${student.name} You not cleared the exam`);
     }
     }
     console.log('Invalid User!');

}



checkresult("Mithun");
//OUTPUT: Congratulation!  Mithun have cleared the exam

checkresult("Hitesh");
//OUTPUT: Sorry! You not cleared the exam..

checkresult("Someone");
//OUTPUT: Invalid User!

    