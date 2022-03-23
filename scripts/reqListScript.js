function createCategoriesItem(nameCategory) {
  const card = document.createElement('div');
  card.innerHTML = nameCategory;
  card.classList = 'menu-categories__item';

  return card;
}

function createMenuCategories(categories) {
  const menu = document.querySelector('.menu-categories');
  for (let c in categories) {
      menu.append(createCategoriesItem(categories[c]['name']));
  }
}

function createReqListItem(data) {
  const element = document.createElement('div');
  element.innerHTML = `<strong>${data['theme']}</strong>`;
  element.classList = 'res-list__item';

  const statusEl = document.createElement('div');
  statusEl.innerHTML = data['status'];
  statusEl.classList = 'res-list__item__status';
  element.append(statusEl);

  const executorEl = document.createElement('div');
  executorEl.innerHTML = 'Исполнитель: ' + data['executor'];
  executorEl.classList = 'res-list__item__executor';
  element.append(executorEl);

  return element;
}

function createReqList(reqList) {
  const recListDiv = document.querySelector('.req-list');
  const reqListItems = [];
  for (let r in reqList) {
    const itemObj = {};
    itemObj['category'] = reqList[r]['category'];
    itemObj['id'] = reqList[r]['id'];

    const element = createReqListItem(reqList[r]);
    recListDiv.append(element);
    
    itemObj['block'] = element;

    reqListItems.push(itemObj);
  }
}

const urlCategories = 'https://raw.githubusercontent.com/BibaBoba123/TechnicalSupport_Web/main/json/categories.json';
const urlApplications = 'https://raw.githubusercontent.com/BibaBoba123/TechnicalSupport_Web/main/json/applications.json';

fetch(urlCategories)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse) {
    createMenuCategories(jsonResponse['categories']);
  });


fetch(urlApplications)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse) {
    createReqList(jsonResponse['applications']);
  });