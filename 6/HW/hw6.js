categoryList = ['vegetables', 'fruits'];
vegetablesList = ['cabbage', 'avocado', 'tomato'];
fruitsList = ['grapes', 'raspberry', 'coconut'];
vegetablesPrices = [8, 30, 10]; 
fruitsPrices = [20, 25, 50]; 

finalSum = 0;

do {
    period = prompt('Enter period: winter or summer.').replaceAll(' ', '').toLowerCase();
} while(period !== 'winter' && period !== 'summer');

if (period === 'winter') {
    coefficient = 2;
} else {
    coefficient = 0.8;
}

do {
    category = prompt('Choose category in which you want to buy products: vegetables or fruits.').replaceAll(' ', '').toLowerCase();
} while(!categoryList.includes(category));

if (category === 'vegetables') {
    do {
        product = prompt('Choose product from category vegetables: cabbage, avocado or tomato.').replaceAll(' ', '').toLowerCase();
        vegetableType = vegetablesList.indexOf(product);
        priceOfProduct = vegetablesPrices[vegetableType];
    } while(!vegetablesList.includes(product));
} else {
    do {
        product = prompt('Choose product from category fruits: grapes, raspberry or coconut.').replaceAll(' ', '').toLowerCase();
        fruitType = fruitsList.indexOf(product);
        priceOfProduct = fruitsPrices[fruitType];
    } while(!fruitsList.includes(product));
}

do {
    countOfProduct = parseInt(prompt(`Enter count of ${product}`).replaceAll(' ', '')); 
} while (isNaN(countOfProduct) || countOfProduct <= 1);

finalSum = countOfProduct * coefficient * priceOfProduct;

productImg = `<img src='images/${category}/${product}.svg' alt='${product}' width='100' height='100' />`;

document.write(`
    <div class='product' align='center'>
        ${productImg}
        <p>Selected product: <b>${product}</b></p>
        <p>Count of ${product}: <b>${countOfProduct}</b></p>
        <p>Selected period: <b>${period}</b></p>
        <p>Selected category: <b>${category}</b></p>
        <p>Final sum: <b>${finalSum} UAH</b></p>
    </div>
`);
