const categoriesRefList = document.querySelectorAll("#categories > .item");
console.log(`Number of categories: ${categoriesRefList.length}`);

categoriesRefList.forEach((category) => {

    const categoryName = category.querySelector('h2');
    console.log(`Category: ${categoryName.textContent}`);
    const categoryElementList = category.querySelectorAll("ul > li");
    console.log(`Elements: ${categoryElementList.length}`);

});






