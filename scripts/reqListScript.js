const nameJsonFile = 'categories.json';
const url = `https://raw.githubusercontent.com/BibaBoba123/TechnicalSupport_Web/main/json/${nameJsonFile}`;

function createCategoriesItem(nameCategory) {
    const card = document.createElement('div');
    card.innerHTML = nameCategory;
    card.classList = 'menu-categories__item';

    return card;
}

function createMenuCategories(categories) {
    console.log(categories);
    const menu = document.querySelector('.menu-categories');
    for (let c in categories) {
        const card = createCategoriesItem(categories[c]['name']);
        menu.append(card);
    }
}

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse) {
    createMenuCategories(jsonResponse['categories']);
  });
