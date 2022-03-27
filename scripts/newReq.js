const usersJson = 'users.json';
const categoriesJson = 'categories.json';
const baseUrl = `https://raw.githubusercontent.com/BibaBoba123/TechnicalSupport_Web/main/json/`;



function initCategoryList() {
    const categoryList = document.querySelector('.category-list');
    const categoriesUrl = baseUrl.concat(categoriesJson);
    fetch(categoriesUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const categories = data['categories'];
        categories.forEach(category => {
            let option = document.createElement('option');
            option.value = category['id'];
            option.innerText = category['name'];
            categoryList.appendChild(option);
        });
    })
}


function initUserInfo() {
    const userName = document.querySelector('.user-name');
    const userPost = document.querySelector('.user-post');
    const userLogin = document.querySelector('.user-login');

    userName.innerText = 'semenov@kubsu.edu.ru';
    userPost.innerText = 'Семенов Семен Семенович';
    userLogin.innerText = 'Программист';
}

function init() {
    initUserInfo();
    initCategoryList();
}

init();