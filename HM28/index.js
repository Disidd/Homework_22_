let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];


function Product(category, type, price) {
  this.category = category;
  this.type = type;
  this.price = price;
}

Product.prototype.render = function() {
  return `
  <tr>
    <td><img src="images/${this.category}/${this.type}.svg" alt="${this.type}" width="50" height="50"></td>
    <td>${this.type}</td>
    <td>${Array.isArray(this.price) ? `${this.price[0]} - ${this.price[1]} USD` : `${this.price} USD`}</td>
  </td>`
}
function renderProducts(products, category) {
  return products
    .map(function(product) {
      return new Product(category, product.type, product.price);
    })
    .map(function(product) {
      return product.render();
    })
    .join('');
}

document.write(`
  <table border="1">
    <thead>
      <tr>
        <th>Image</th>
        <th>Product</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      ${renderProducts(kitchenProducts, 'kitchen')}
      ${renderProducts(devicesProducts, 'devices')}
      ${renderProducts(cosmeticsProducts, 'cosmetics')}
    </tbody>
  </table>
`);