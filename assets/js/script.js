import {productList} from "./data.js"
const container = document.getElementById('container')

 
 for(let item=0;item<productList.length;item++)
 {
     const{src,name,description,price,not_price,offer}= productList[item]

     const carddiv= document.createElement('div')
     carddiv.className = 'card'

     carddiv.innerHTML = `<img class="product-image" src="${src}" alt="">
     <div class="product-info">
         <div class="product-name"><Strong>${name}</Strong></div>
         <small class="product-description">${description}</small>
         <div class="price-box">
             <strong>${price}</strong> <Small class="not-price">${not_price}</Small><small class="off">${offer}</small></div>
     </div>`
 
     container.appendChild(carddiv)
 }