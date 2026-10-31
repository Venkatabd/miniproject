

// Display only the product title inside an <h1> tag.

// let demo = "https://fakestoreapi.com/products";
 
// fetch(demo).then((a)=>
// {
//     return a.json()
// })

// .then((success)=>
// {
//     success.forEach((c) => {
        
//     console.log(c);
  
//     let div=document.createElement("div");
//     div.innerHTML=`<h1>${c.title}</h1>`
    
//    let app=document.querySelector(".api");
//     app.append(div)
//     });

    
// });


// Display the product ID and title inside an <h2> tag.

// let demo1 = "https://fakestoreapi.com/products";
 
// fetch(demo1).then((a)=>
// {
//     return a.json()
// })


// .then((demo2)=>
// {
//     demo2.forEach((c)=>
//     {
//         console.log(c);
        
//        let div1=document.createElement("div");
//        div1.innerHTML=`<h2>${c.id} ${c.title}</h2>`

//        let api1=document.querySelector(".api")
//        api1.append(div1)
//     })
// })

// Display the first 30 characters of each product title.

// let demo2 = "https://fakestoreapi.com/products";
 
// fetch(demo2).then((a)=>
// {
//     return a.json()
// })


// .then((demo3)=>
// {
//     demo3.forEach((c)=>
//     {
//         console.log(c);
        
//        let div1=document.createElement("div");
//        div1.innerHTML=`<p>${c.description.slice(0,30)}</p>`

//        let api1=document.querySelector(".api")
//        api1.append(div1)
//     })
// })

// Display the first 100 characters of each product description.



// let demo2 = "https://fakestoreapi.com/products";
 
// fetch(demo2).then((a)=>
// {
//     return a.json()
// })


// .then((demo3)=>
// {
//     demo3.forEach((c)=>
//     {
//         console.log(c);
        
//        let div1=document.createElement("div");
//        div1.innerHTML=`<p>${c.description.slice(0,100)}</p>`

//        let api1=document.querySelector(".api")
//        api1.append(div1)
//     })
// })

// Display each product's image inside a <div>.


// let demo2 = "https://fakestoreapi.com/products";
 
// fetch(demo2).then((a)=>
// {
//     return a.json()
// })


// .then((demo3)=>
// {
//     demo3.forEach((c)=>
//     {
//         console.log(c);
        
//        let div1=document.createElement("div");
//        div1.innerHTML=`<div><img src ="${c.image}"></div>`

//        let api1=document.querySelector(".api")
//        api1.append(div1)
//     })
// })


// Display the product title, description, and image inside a single <div>.



// let demo5 = "https://fakestoreapi.com/products";
 
// fetch(demo5).then((a)=>
// {
//     return a.json()
// })


// .then((demo5)=>
// {
//     demo5.forEach((c)=>
//     {
//         console.log(c);
        
//        let div1=document.createElement("div");
//        div1.innerHTML=`<h1>${c.title}</h1>
            
//                   <p>${c.description.slice(0,100)}</p>
//                   <img src ="${c.image}">`
//        let api1=document.querySelector(".api")
//        api1.append(div1)
//     })
// })

// Display each product's price inside a <p> tag.


// let demo = "https://fakestoreapi.com/products";
 
// fetch(demo).then((a)=>
// {
//     return a.json()
// })

// .then((success)=>
// {
//     success.forEach((c) => {
        
//     console.log(c);
  
//     let div=document.createElement("div");
//     div.innerHTML=`<p>${c.price}</p>`
    
//    let app=document.querySelector(".api");
//     app.append(div)
//     });

    
// });

// Display each product's category inside an <h3> tag.



// let demo = "https://fakestoreapi.com/products";
 
// fetch(demo).then((a)=>
// {
//     return a.json()
// })

// .then((success)=>
// {
//     success.forEach((c) => {
        
//     console.log(c);
  
//     let div=document.createElement("div");
//     div.innerHTML=`<h3>${c.category}</h3>`
    
//    let app=document.querySelector(".api");
//     app.append(div)
//     });

    
// });
// Display the product title in uppercase.



// let demo = "https://fakestoreapi.com/products";
 
// fetch(demo).then((a)=>
// {
//     return a.json()
// })

// .then((success)=>
// {
//     success.forEach((c) => {
        
//     console.log(c);
  
//     let div=document.createElement("div");
//     div.innerHTML=`<h2>${c.title.toUpperCase()}</h2>`
    
//    let app=document.querySelector(".api");
//     app.append(div)
//     });

     
// });
// Display the product title and its total character count.



// let demo = "https://fakestoreapi.com/products";
 
// fetch(demo).then((a)=>
// {
//     return a.json()
// })

// .then((success)=>
// {
//     success.forEach((c) => {
        
//     console.log(c);
  
//     let div=document.createElement("div");
//     div.innerHTML=`<h2>${c.title} ${c.title.length}</h2>`

    
//    let app=document.querySelector(".api");
//     app.append(div)
//     });

    
// });
// Display the first 5 products only.
// let demo = "https://fakestoreapi.com/products";
 
// fetch(demo).then((a)=>
// {
//     return a.json()
// })

// .then((success)=>
// {
//     success.slice(0,5).forEach((c) => {
        
//     console.log(c);
  
//     let div=document.createElement("div");
//     div.innerHTML=`<h2>${c.title}</h2>`

    
//    let app=document.querySelector(".api");
//     app.append(div)
//     });

    
// })

// Display products with their IDs, titles, and prices.


// let demo10="https://fakestoreapi.com/products";
//   fetch(demo10).then((a)=>
// {
//     return a.json()
// })

// .then((jsdata)=>
// {
//     jsdata.forEach((c,i,t) => {
//         console.log(c);
//         let div2=document.createElement("div");
//         div2.innerHTML=`<p>${c.id}</p> <h2> Product Title --> is ${c.title}</h2> <h6> Product Price is -->${c.price}</h6>`

//         let div3=document.querySelector(".api")
//         div3.append(div2)
//     });
// })

  
// Display each product's image with a width of 200px.
// let demo10="https://fakestoreapi.com/products";
//   fetch(demo10).then((a)=>
// {
//     return a.json()
// })

// .then((jsdata)=>
// {
//     jsdata.forEach((c,i,t) => {
//         console.log(c);
//         let div2=document.createElement("div");
//         div2.innerHTML=`<img src="${c.image}" style="width:200px">`
    
//         let div3=document.querySelector(".api")
//         div3.append(div2)
//     });
// })

// Add a separate <div> for each product and give it a class name of "card".


// let demo10="https://fakestoreapi.com/products";
//   fetch(demo10).then((a)=>
// {
//     return a.json()
// })

// .then((jsdata)=>
// {
//     jsdata.forEach((c,i,t) => {
//         console.log(c);
//         let div2=document.createElement("div");
//         div2.classList.add("card");
//         div2.innerHTML=`<h1>${c.title}</h1>
            
//                   <p>${c.description.slice(0,100)}</p>
//                   <img src ="${c.image}">`
    
//         let div3=document.querySelector(".api")
//         div3.append(div2)
//     });
// })


// Display the product title and description, limiting the description to 50 characters.

// let demo5 = "https://fakestoreapi.com/products";
 
// fetch(demo5).then((a)=>
// {
//     return a.json()
// })


// .then((demo5)=>
// {
//     demo5.forEach((c)=>
//     {
//         console.log(c);
        
//        let div1=document.createElement("div");
//        div1.innerHTML=`<h1>${c.title}</h1>
            
//                   <p>${c.description.slice(0,50)}</p>`

//        let api1=document.querySelector(".api")
//        api1.append(div1)
//     })
// })

// Display all product titles in the browser console and on the webpage.

// let demo = "https://fakestoreapi.com/products";
 
// fetch(demo).then((a)=>
// {
//     return a.json()
// })

// .then((success)=>
// {
//     success.forEach((c) => {
        
//     console.log(c.title);
  
    
//     });
// })

// Display each product's title and category inside the same <div>.


// let demo5 = "https://fakestoreapi.com/products";
 
// fetch(demo5).then((a)=>
// {
//     return a.json()
// })


// .then((demo5)=>
// {
//     demo5.forEach((c)=>
//     {
//         console.log(c);
        
//        let div1=document.createElement("div");
//        div1.innerHTML=`<h1>${c.title}</h1>
            
//                   <h3>${c.category}</h3>`

//        let api1=document.querySelector(".api")
//        api1.append(div1)
//     })
// })
// .then((suc)=>
// {
//     console.log(" data is successfully loaded");
    
// })
// Display a message inside .api when the API data is successfully loaded.


// let demo5 = "https://fakestoreapi.com/products";
 
// fetch(demo5).then((a)=>
// {
//     return a.json()
// })


// .then((demo5)=>
// {

//     let api1=document.querySelector(".api")
//     demo5.forEach((c)=>
//     {
//         console.log(c);
        
//        let div1=document.createElement("div");
//        div1.innerHTML=`<h1>${c.title}</h1> <h3>${c.category}</h3>`

       
//        api1.append(div1)
//     })
  

//     let msg=document.createElement("h2")
//     msg.innerText="data is successfully loaded";
//     api1.append(msg)

//     console.log("data is loaded successfully");
    

// })

    

// Display "Loading..." inside .api before fetching the API data.



// let demo6 = "https://fakestoreapi.com/products";

// let api1 = document.querySelector(".api");

// api1.innerText = "Loading...";

// fetch(demo6)
//     .then((a) => {
//         return a.json();
//     })
//     .then((demo5) => {

//         api1.innerHTML = "";

        
//         demo5.forEach((c) => {
//             let div1 = document.createElement("div");

//             div1.innerHTML = `
//                 <h1>${c.title}</h1>
//                 <h3>${c.category}</h3>
//                 <p>Price: $${c.price}</p>
//                 <img src="${c.image}" width="100">
//             `;

//             api1.append(div1);
//         });

//         let msg = document.createElement("h2");
//         msg.innerText = "Data is successfully loaded!";
//         api1.append(msg);
//     })
    



// Use .finally() to display "API request completed" after the request finishes.




     
// let demo5 = "https://fakestoreapi.com/products";

// let api1 = document.querySelector(".api");


// api1.innerText = "Loading...";

// fetch(demo5)
//     .then((a) => {
//         return a.json();
//     })
//     .then((demo5) => {

       
//         api1.innerHTML = "";

       
//         demo5.forEach((c) => {
//             let div1 = document.createElement("div");

//             div1.innerHTML = `
//                 <h1>${c.title}</h1>
//                 <h3>${c.category}</h3>
//                 <p>Price: $${c.price}</p>
//                 <img src="${c.image}" width="100">
//                 <hr>
//             `;

//             api1.append(div1);
//         });

//         let msg = document.createElement("h2");
//         msg.innerText = "Data is successfully loaded!";
//         api1.append(msg);
//     })
//     .catch((error) => {
//         api1.innerHTML = "Failed to load data!";
//         console.log("Error:", error);
//     })
//     .finally(() => {
//         console.log("API request completed");
        
//         let complete = document.createElement("p");
//         complete.innerText = "API request completed";
//         api1.append(complete);
//     });


// Create a Product Listing Page using the same API.
// Requirements:
// Display product ID, title, price, description, and image.

// let miniApi="https://fakestoreapi.com/products";

// fetch(miniApi).then((a)=>
// {
//     return a.json()
// })
// .then((jsdata)=>    
// {    jsdata.forEach((c)=>
// {
//    console.log(c);
   
//      let divlast=document.createElement("div")
//     divlast.innerHTML=`<h1>${c.id}</h1><h1>${c.title}</h1><b>${c.price}<b><h4>${c.description.slice(0,50)}</h4><img src="${c.image}">`
//     let divlast1=document.querySelector(".api");
//     divlast1.append(divlast)
// })
   
// })

// Limit the title to 50 characters.

// let miniApi="https://fakestoreapi.com/products";

// fetch(miniApi).then((a)=>
// {
//     return a.json()
// })
// .then((jsdata)=>    
// {    jsdata.forEach((c)=>
// {
//    console.log(c);
   
//      let divlast=document.createElement("div")
//     divlast.innerHTML=`<h1>${c.id}</h1><h1>${c.title.slice(0,50)}</h1><b>${c.price}<b><h4>${c.description.slice(0,50)}</h4><img src="${c.image}">`
//     let divlast1=document.querySelector(".api");
//     divlast1.append(divlast)
// })
   
// })
// Limit the description to 100 characters.

// let miniApi="https://fakestoreapi.com/products";

// fetch(miniApi).then((a)=>
// {
//     return a.json()
// })
// .then((jsdata)=>    
// {    jsdata.forEach((c)=>
// {
//    console.log(c);
   
//      let divlast=document.createElement("div")
//     divlast.innerHTML=`<h1>${c.id}</h1><h1>${c.title}</h1><b>${c.price}<b><h4>${c.description.slice(0,100)}</h4><img src="${c.image}">`
//     let divlast1=document.querySelector(".api");
//     divlast1.append(divlast)
// })
   
// })
// Place every product inside a separate card.

// let miniApi="https://fakestoreapi.com/products";

// fetch(miniApi).then((a)=>
// {
//     return a.json()
// })
// .then((jsdata)=>    
// {    jsdata.forEach((c)=>
// {
//    console.log(c);
   
//      let divlast=document.createElement("div")
 // divlast.classname="card";
//     divlast.innerHTML=`<h1>${c.id}</h1><h1>${c.title}</h1><b>${c.price}<b><h4>${c.description.slice(0,100)}</h4><img src="${c.image}">`
//     let divlast1=document.querySelector(".api");
//     divlast1.append(divlast)
       
// })
   
// })
// Display API errors in red inside .api.
// let miniApi="https://fakestoreapi.com/products";

// fetch(miniApi).then((a)=>
// {
//     return a.json()
// })
// .then((jsdata)=>    
// {    jsdata.forEach((c)=>
// {
//    console.log(c);
   
//      let divlast=document.createElement("div")
//     divlast.innerHTML=`<h1>${c.id}</h1><h1>${c.title}</h1><b>${c.price}<b><h4>${c.description.slice(0,50)}</h4><img src="${c.image}">`
//     let divlast1=document.querySelector(".api");
//     divlast1.append(divlast)
// })
   
// })
// .catch((err)=>
// {
// console.warn(err+" check ur details corrrectly ");
//     let errors=document.createElement("h1")
//     errors.innerHTML=`<h1>${err}</h1>`;
//     errors.innerText="check your details correctly"
//     let api17=document.querySelector(".api");
//     api17.append(errors)
//     errors.style.color="red";
//     errors.style.textAlign="center";
   
// })

// Display "API request completed" using .finally().

let miniApi="https://fakestoreapi.com/products";

fetch(miniApi).then((a)=>
{
    return a.json()
})
.then((jsdata)=>    
{    jsdata.forEach((c)=>
{
   console.log(c);
   
     let divlast=document.createElement("div")
    divlast.innerHTML=`<h1>${c.id}</h1><h1>${c.title}</h1><b>${c.price}<b><h4>${c.description.slice(0,50)}</h4><img src="${c.image}">`
    let divlast1=document.querySelector(".api");
    divlast1.append(divlast)
})
   
})
.catch((err)=>
{
console.warn(err+" check ur details corrrectly ");
    let errors=document.createElement("h1")
    errors.innerHTML=`<h1>${err}</h1>`;
    errors.innerText="check your details correctly"
    let api17=document.querySelector(".api");
    api17.append(errors)
    errors.style.color="red";
    errors.style.textAlign="center";
   
})
.finally(()=>
{
    console.log("Api request completed");
    
})