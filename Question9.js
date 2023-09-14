function uniqueCharactersCheck(toString){
     const charSet= new Set();

     for(const char of toString){
          if(charSet.has(char)){
               console.log("The input string contain unique duplicates");
               return false;
          }
          charSet.add(char);
     }

     console.log("The input string contains duplicates");
     return true;

}

uniqueCharactersCheck("mithun");
//OUTPUT: The input string contains duplicates

uniqueCharactersCheck("anurag");
//OUTPUT: The input string contain uniwue duplicates
