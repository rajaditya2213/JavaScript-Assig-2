

const productDetails={

     name:"Apple 2020 MacBook Air laptop",
     price:82000,
     color:"Grey",
     harddisk:"256 GB",
};


console.log("Below are the product details: ");


for(let keys of Object.keys(productDetails)){
     console.log(`${keys} : ${productDetails[keys]}`);
}

//OUTPUT:
//Below are the product details
//name:Apple 2020 MacBook Air Laptop
//82000
//Grey
//256 GB
