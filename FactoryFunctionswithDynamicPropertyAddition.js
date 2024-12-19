function createInventoryItem(name, category, price) {
    return {
      name: name,
      category: category,
      price: price,
      describeItem: function() {
        console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);
      }
    };
  }
  
  function addItemDiscount(item, discountPercent) {
    const discountedPrice = item.price - (item.price * (discountPercent / 100));
    item.discountedPrice = discountedPrice;
  
    item.applyDiscount = function() {
      console.log(`Discounted Price for ${this.name}: ${this.discountedPrice}`);
    };
  
    return item;
  }
  
  const item = createInventoryItem("Laptop", "Electronics", 1500);
  item.describeItem(); // Output: Item: Laptop, Category: Electronics, Price: 1500
  
  const discountedItem = addItemDiscount(item, 10);
  discountedItem.applyDiscount(); // Output: Discounted Price for Laptop: 1350