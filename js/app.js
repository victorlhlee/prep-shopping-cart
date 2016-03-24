window.onload = function(){

 console.log('test');

 var products = [
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65 },
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
];
   function getItems (stuff){
    for (var i = 0; i<stuff.length; i++){
      console.log(stuff[i]);
      console.log(stuff[i].name);
      console.log(stuff[i].description);
      console.log(stuff[i].price);

      var mainContainer = document.getElementById('mainWrap');
      mainContainer = document.createElement('div');
      mainContainer.id = 'main';
      mainWrap.appendChild(mainContainer);

      var nameElement = document.createElement('div');
      nameElement.id = 'name';
      nameElement.innerHTML = stuff[i].name;
      mainContainer.appendChild(nameElement);

      var descripElement = document.createElement('div');
      descripElement.id = 'description';
      descripElement.innerHTML = stuff[i].description;
      nameElement.appendChild(descripElement);

      var priceElement = document.createElement('div');
      priceElement.id = 'price';
      priceElement.innerHTML = stuff[i].price;
      nameElement.appendChild(priceElement);

      var quantityElement = document.createElement('div');
      quantityElement.id = 'quantity';
      nameElement.appendChild(quantityElement);


    }
    return stuff;
   }

   getItems(products);

   var subContainer = document.getElementById('subWrap');
   subContainer = document.createElement('div');
   subContainer.id = 'subtotal';
   subContainer.innerHTML = "Subtotal";
   subWrap.appendChild(subContainer);


};

