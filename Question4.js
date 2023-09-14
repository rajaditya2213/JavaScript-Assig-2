const products=[
     {name: "Laptop", price:120000},
     {name: "Mobile", price:70000},
     {name: "Laptop Bag", price:20000},
     {name: "Watch", price:20000},
     {name: "Mobile Charger", price:1500},
]

let maxProduct={ name:"",  price:0 };
let minProduct={ name:"",  price:0 };

for(let product of products){
     if(product.price>maxProduct.price)
      {
          maxProduct=product;
      }

     if(product.price < minProduct.price)
     {
          minProduct=product;

     }
}

console.log(`The product with maximum amount is ${maxProduct.name} which is priced RS. 120000`);
//OUTPUT: The product with maximum amount is Laptop which is priced Rs. 120000

console.log(`The product with minimum amount is ${minProduct.name} which is priced Rs. 1500`);
//OUTPUT: The product with minimum amount is Mobile charger which is priced Rs. 1500
