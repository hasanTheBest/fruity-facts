const apiResponse = [
  {
    genus: "Malus",
    name: "Apple",
    id: 6,
    family: "Rosaceae",
    order: "Rosaceae",
    nutritions: {
      carbohydrates: 11.4,
      protein: 0.3,
      fat: 0.4,
      calories: 52,
      sugar: 10.3,
    },
  },
  {
    genus: "Prunus",
    name: "Apricot",
    id: 35,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 3.9,
      protein: 0.5,
      fat: 0.1,
      calories: 15,
      sugar: 3.2,
    },
  },
  {
    genus: "Musa",
    name: "Banana",
    id: 1,
    family: "Musaceae",
    order: "Zingiberales",
    nutritions: {
      carbohydrates: 22,
      protein: 1,
      fat: 0.2,
      calories: 96,
      sugar: 17.2,
    },
  },
  {
    genus: "Rubus",
    name: "Blackberry",
    id: 64,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 9,
      protein: 1.3,
      fat: 0.4,
      calories: 40,
      sugar: 4.5,
    },
  },
  {
    genus: "Fragaria",
    name: "Blueberry",
    id: 33,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 5.5,
      protein: 0,
      fat: 0.4,
      calories: 29,
      sugar: 5.4,
    },
  },
  {
    genus: "Prunus",
    name: "Cherry",
    id: 9,
    family: "Rosaceae",
    order: "None",
    nutritions: {
      carbohydrates: 12,
      protein: 1,
      fat: 0.3,
      calories: 50,
      sugar: 8,
    },
  },
  {
    genus: "Durio",
    name: "Durian",
    id: 60,
    family: "Malvaceae",
    order: "Malvales",
    nutritions: {
      carbohydrates: 27.1,
      protein: 1.5,
      fat: 5.3,
      calories: 147,
      sugar: 6.75,
    },
  },
  {
    genus: "Ficus",
    name: "Fig",
    id: 68,
    family: "Moraceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 19,
      protein: 0.8,
      fat: 0.3,
      calories: 74,
      sugar: 16,
    },
  },
  {
    genus: "Ribes",
    name: "Gooseberry",
    id: 69,
    family: "Grossulariaceae",
    order: "Saxifragales",
    nutritions: {
      carbohydrates: 10,
      protein: 0.9,
      fat: 0.6,
      calories: 44,
      sugar: 0,
    },
  },
  {
    genus: "Vitis",
    name: "Grapes",
    id: 47,
    family: "Vitaceae",
    order: "Vitales",
    nutritions: {
      carbohydrates: 18.1,
      protein: 0.72,
      fat: 0.16,
      calories: 69,
      sugar: 15.48,
    },
  },
  {
    genus: "Malus",
    name: "GreenApple",
    id: 72,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 3.1,
      protein: 0.4,
      fat: 0.1,
      calories: 21,
      sugar: 6.4,
    },
  },
  {
    genus: "Psidium",
    name: "Guava",
    id: 37,
    family: "Myrtaceae",
    order: "Myrtales",
    nutritions: {
      carbohydrates: 14,
      protein: 2.6,
      fat: 1,
      calories: 68,
      sugar: 9,
    },
  },
  {
    genus: "Apteryx",
    name: "Kiwi",
    id: 66,
    family: "Actinidiaceae",
    order: "Struthioniformes",
    nutritions: {
      carbohydrates: 15,
      protein: 1.1,
      fat: 0.5,
      calories: 61,
      sugar: 9,
    },
  },
  {
    genus: "Citrus",
    name: "Lemon",
    id: 26,
    family: "Rutaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 9,
      protein: 1.1,
      fat: 0.3,
      calories: 29,
      sugar: 2.5,
    },
  },
  {
    genus: "Citrus",
    name: "Lime",
    id: 44,
    family: "Rutaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 8.4,
      protein: 0.3,
      fat: 0.1,
      calories: 25,
      sugar: 1.7,
    },
  },
  {
    genus: "Vaccinium",
    name: "Lingonberry",
    id: 65,
    family: "Ericaceae",
    order: "Ericales",
    nutritions: {
      carbohydrates: 11.3,
      protein: 0.75,
      fat: 0.34,
      calories: 50,
      sugar: 5.74,
    },
  },
  {
    genus: "Litchi",
    name: "Lychee",
    id: 67,
    family: "Sapindaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 17,
      protein: 0.8,
      fat: 0.44,
      calories: 66,
      sugar: 15,
    },
  },
  {
    genus: "Mangifera",
    name: "Mango",
    id: 27,
    family: "Anacardiaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 15,
      protein: 0.82,
      fat: 0.38,
      calories: 60,
      sugar: 13.7,
    },
  },
  {
    genus: "Cucumis",
    name: "Melon",
    id: 41,
    family: "Cucurbitaceae",
    order: "Cucurbitaceae",
    nutritions: {
      carbohydrates: 8,
      protein: 0,
      fat: 0,
      calories: 34,
      sugar: 8,
    },
  },
  {
    genus: "Citrus",
    name: "Orange",
    id: 2,
    family: "Rutaceae",
    order: "Sapindales",
    nutritions: {
      carbohydrates: 8.3,
      protein: 1,
      fat: 0.2,
      calories: 43,
      sugar: 8.2,
    },
  },
  {
    genus: "Carica",
    name: "Papaya",
    id: 42,
    family: "Caricaceae",
    order: "Caricacea",
    nutritions: {
      carbohydrates: 11,
      protein: 0,
      fat: 0.4,
      calories: 43,
      sugar: 1,
    },
  },
  {
    genus: "Passiflora",
    name: "Passionfruit",
    id: 70,
    family: "Passifloraceae",
    order: "Malpighiales",
    nutritions: {
      carbohydrates: 22.4,
      protein: 2.2,
      fat: 0.7,
      calories: 97,
      sugar: 11.2,
    },
  },
  {
    genus: "Pyrus",
    name: "Pear",
    id: 4,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 15,
      protein: 0.4,
      fat: 0.1,
      calories: 57,
      sugar: 10,
    },
  },
  {
    genus: "Diospyros",
    name: "Persimmon",
    id: 52,
    family: "Ebenaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 18,
      protein: 0,
      fat: 0,
      calories: 81,
      sugar: 18,
    },
  },
  {
    genus: "Ananas",
    name: "Pineapple",
    id: 10,
    family: "Bromeliaceae",
    order: "Poales",
    nutritions: {
      carbohydrates: 13.12,
      protein: 0.54,
      fat: 0.12,
      calories: 50,
      sugar: 9.85,
    },
  },
  {
    genus: "Prunus",
    name: "Plum",
    id: 71,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 11.4,
      protein: 0.7,
      fat: 0.28,
      calories: 46,
      sugar: 9.92,
    },
  },
  {
    genus: "Rubus",
    name: "Raspberry",
    id: 23,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 12,
      protein: 1.2,
      fat: 0.7,
      calories: 53,
      sugar: 4.4,
    },
  },
  {
    genus: "Fragaria",
    name: "Strawberry",
    id: 3,
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {
      carbohydrates: 5.5,
      protein: 0.8,
      fat: 0.4,
      calories: 29,
      sugar: 5.4,
    },
  },
  {
    genus: "Solanum",
    name: "Tomato",
    id: 5,
    family: "Solanaceae",
    order: "Solanales",
    nutritions: {
      carbohydrates: 3.9,
      protein: 0.9,
      fat: 0.2,
      calories: 74,
      sugar: 2.6,
    },
  },
  {
    genus: "Spondias",
    name: "Umbu",
    id: 73,
    family: "Anacardiaceae",
    order: "0",
    nutritions: {
      carbohydrates: 0,
      protein: 0,
      fat: 0,
      calories: 0,
      sugar: 0,
    },
  },
  {
    genus: "Citrullus",
    name: "Watermelon",
    id: 25,
    family: "Cucurbitaceae",
    order: "Cucurbitales",
    nutritions: {
      carbohydrates: 8,
      protein: 0.6,
      fat: 0.2,
      calories: 30,
      sugar: 6,
    },
  },
];

// spinners
const spinners = `
  <div class="col-12 col-md-12 spinners py-5 px-3">
    <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-info" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="spinner-border text-warning" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
`;

// spinner
const spinner = `
  <div class="spinner-border text-white load-more-spinner" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
`;

// pagination
const paging = {
  page: 0,
  itemPerPage: 6,
  items: apiResponse.length,
};

// Base url of the api
const URL =
  "https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api/fruit/";

// loading fruits
const loadFruit = async (param) => {
  try {
    const res = await fetch(URL + param);
    const data = await res.json();

    displayFruit(data);
  } catch (err) {
    console.log(err);
  }
};
// loadFruit("all");

// Event listener to load
document.addEventListener("DOMContentLoaded", () => {
  selectDOM(".fruit-image-list").innerHTML = spinners;
  setTimeout(() => {
    displayFruit(apiResponse.slice(paging.page, paging.itemPerPage));
  }, 2000);
});

// add click event to show next button
selectDOM(".fruit-image-list").addEventListener("click", (e) => {
  // stop propagation
  e.stopImmediatePropagation();

  if (e.target.className.includes("load-more-button")) {
    e.target.innerHTML =
      spinner + "<span class='load-spinner-text'>loading ...</span>";
    setTimeout(() => {
      showNextItems(paging.page, paging.itemPerPage);

      // remove load more button
      if (
        e.target.parentElement.parentElement.childElementCount <
        paging.page * paging.itemPerPage
      ) {
        e.target.parentElement.parentElement.removeChild(
          e.target.parentElement
        );
      }
    }, 2000);
  }
});

// Event listener to filter
selectDOM(".filter-fruit-nav").addEventListener("click", (e) => {
  e.stopImmediatePropagation();

  switch (e.target.id) {
    case "genus":
      filteredFruits(apiResponse, e);
      return;
    case "order":
      filteredFruits(apiResponse, e);
      return;
    case "family":
      filteredFruits(apiResponse, e);
      return;
  }
});

// filter Items
function filteredFruits(responseToFilter, e) {
  selectDOM(".fruit-image-list").innerHTML = spinners;

  const data = responseToFilter.filter(
    (item) =>
      item[e.target.id].toLowerCase() === e.target.innerText.toLowerCase()
  );

  console.log("api filter", responseToFilter, data);

  setTimeout(() => {
    displayFruit(data.slice(0, paging.itemPerPage), true);
  }, 2000);
}

// displaying fruits
function displayFruit(data, filter = false) {
  const imagesList = selectDOM(".fruit-image-list");

  if (filter) {
    paging.page = 0;
  }

  if (0 === paging.page || filter) {
    // add inner html to fruit-image-list row
    addInnerHtml(data, imagesList);
  } else {
    insertBeforeNextBtn(data, imagesList);
    imagesList.lastElementChild.children[0].innerHTML = "Load More";
  }

  // at least 6 data
  if (apiResponse.length >= data.length && 0 === paging.page) {
    createLoadMoreButton(imagesList);
  }

  // page increase to
  paging.page++;
}

// showing fruits meta info - nutritions value
function showNutrition(nutritions) {
  const listItem = Object.entries(nutritions).map((item) => {
    const [name, amount] = item;

    return `<li class="list-group-item text-secondary"><span class="text-capitalized">${name}</span> <span>${amount}</span></li>`;
  });

  return listItem.join("");
}

// showing next fruit items
function showNextItems(page, items) {
  displayFruit(apiResponse.slice(page * items, page * items + items));
}

// create next button element
function createLoadMoreButton(parent) {
  const col = document.createElement("div");
  col.classList.add("col-12", "text-center");

  col.innerHTML = `<button class="btn btn-primary load-more-button">Load More</button>`;

  parent.appendChild(col);
}

// select dom element
function selectDOM(selector) {
  return document.querySelector(selector);
}

// add inner html to image-list row
function addInnerHtml(fruits, parent) {
  const listItem = fruits.map(({ name, family, order, genus, nutritions }) => {
    return `
    <div class="col">
      ${fruitsCardHtml(name, family, order, genus, nutritions)}
      </div>
    </div>
    `;
  });

  parent.innerHTML = listItem.join("");
}

// insert before next button
function insertBeforeNextBtn(fruits, parent) {
  fruits.forEach(({ name, family, order, genus, nutritions }) => {
    // create a new col
    const col = document.createElement("div");
    col.classList.add("col");
    const html = fruitsCardHtml(name, family, order, genus, nutritions);

    col.innerHTML = html;
    parent.insertBefore(col, parent.lastElementChild);
  });
}

// fruits card html
function fruitsCardHtml(name, family, order, genus, nutritions) {
  return `
  <div class="card bg-light shadow">
    <div class="card-body">
      <h5 class="card-title text-center">${name}</h5>
      <div class="card-text">
        <p class="mb-0 text-secondary">Genus:  ${genus}</p>
        <p class="mb-0 text-secondary">Family: ${family}</p>
        <p class="mb-0 text-secondary">Order: ${order}</p>
        <p>Nutrition:</p>
        <ol class="list-group list-group-numbered">
        ${showNutrition(nutritions)}
        </ol>
      </div>
    </div>
  `;
}
