function calculateTotalCartValue(){
     let totalValue=0;
     for(i=0;i<arguments.length;i++){
          totalValue=totalValue+arguments[i];
     }
     console.log(`The total Cart value is ${totalValue}`);
     return totalValue;
}

calculateTotalCartValue(125, 20,30);


//OUTPUT: The total cart value is 175...