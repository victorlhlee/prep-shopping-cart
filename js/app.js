window.onload = function(){


 var items = [
  { "name": "Lusicious Jello Mix", "description": ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65 },
  { "name": "Tarnished Standing Desk", "description": ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99},
  { "name": "Hand-made Hand Grenades", "description": ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44},
  { "name": "Pan-fried Cookie Dough", "description": ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99 },
  { "name": "Fancy Dress Hanger", "description": ["Keep organized", "On Sale"], "price": 67.32 },
  { "name": "Snarky Britsh Mustache 3-Pack", "description": ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99 },
 ];
   
   for(var i = 0; i<items.length; i++){
    console.log(items[i].name);
    console.log(items[i].description);
    console.log(items[i].description[0]);
    console.log(items[i].price);
    
    var list = items[i];
    var nameList = list.name;
    var descriptList = list.description;
    var priceList = list.price;

    var mainElement = document.createElement('div');
    mainElement.id = 'main';
    document.body.appendChild(mainElement);

    var nameElement = document.createElement('div');
    nameElement.id = 'name';
    nameElement.innerHTML = nameList;
    mainElement.appendChild(nameElement);

    var descripElement = document.createElement('div');
    descripElement.id = 'descrip';
    descripElement.innerHTML = descriptList;
    nameElement.appendChild(descripElement);

    var priceElement = document.createElement('div');
    priceElement.id = 'price';
    priceElement.innerHTML = priceList;
    nameElement.appendChild(priceElement);


 }






};