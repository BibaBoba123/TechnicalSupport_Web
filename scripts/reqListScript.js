function makeNonActiveMenu() {
  const categoriesArr = document.querySelectorAll('.menu-categories__item_active');
  for (let el of categoriesArr) {
    el.classList.toggle('menu-categories__item_active');
  }
}

function clickMenuCategoriesItem(event, reqListObj) {
  const recListDiv = document.querySelector('.req-list');
  recListDiv.innerHTML = '';

  if (event.target.innerHTML == 'Все') {
    for (let k in reqListObj) {
      recListDiv.append(reqListObj[k]['block']);
    }
  } else {
    for (let k in reqListObj) {
      if (reqListObj[k]['category'] === event.target.innerHTML) {
        recListDiv.append(reqListObj[k]['block']);
      }
    }
  }
  
  makeNonActiveMenu();
  event.target.classList.toggle('menu-categories__item_active');
}

function createCategoriesItem(nameCategory, reqListObj) {
  const card = document.createElement('div');
  card.innerHTML = nameCategory;
  card.classList = 'menu-categories__item';

  card.addEventListener('click', (e) => clickMenuCategoriesItem(e, reqListObj));
  
  if (nameCategory === 'Все') {
    card.classList.toggle('menu-categories__item_active');
  }
  return card;
}

function createMenuCategories(categories, reqListObj) {
  const menu = document.querySelector('.menu-categories');
  menu.append(createCategoriesItem('Все', reqListObj));
  
  for (let c in categories) {
      menu.append(createCategoriesItem(categories[c]['name'], reqListObj));
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

  return reqListItems;
}

const urlCategories = 'https://raw.githubusercontent.com/BibaBoba123/TechnicalSupport_Web/main/json/categories.json';
const urlApplications = 'https://raw.githubusercontent.com/BibaBoba123/TechnicalSupport_Web/main/json/applications.json';


fetch(urlApplications)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonResponse) {
    const reqListObj = createReqList(jsonResponse['applications']);

    fetch(urlCategories)
      .then(function(response) {
        return response.json();
      })
      .then(function(jsonResponse) {
        createMenuCategories(jsonResponse['categories'], reqListObj);
      });
  });