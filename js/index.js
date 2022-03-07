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
const controls = {
  page: 0,
  itemPerPage: 6,
  filteredItems: null,
};

// DOM References
const fruitList = selectDOM(".fruit-list");

// Event listener to load
document.addEventListener("DOMContentLoaded", () => {
  loadFruits(apiResponse);
});

// add click event to show next items
fruitList.addEventListener("click", (e) => {
  // stop propagation
  e.stopImmediatePropagation();

  // increase page number
  controls.page++;

  if (e.target.className.includes("load-more-button")) {
    e.target.innerHTML =
      spinner + "<span class='load-spinner-text'>loading ...</span>";
    setTimeout(() => {
      showNextItems(controls.page, controls.itemPerPage);

      // remove load more button
      if (
        e.target.parentElement.parentElement.childElementCount <=
        (controls.page + 1) * controls.itemPerPage
      ) {
        e.target.parentElement.parentElement.removeChild(
          e.target.parentElement
        );
      }
    }, 2000);
  }
});

// Event listener to filter
selectDOM(".filter-fruit-nav").addEventListener("change", (e) => {
  e.stopImmediatePropagation();

  // if first option, placeholder value
  if (e.target.value === "default") return;

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

// Event listener to clear filter
selectDOM(".clear-filter").addEventListener("click", () => {
  loadFruits(apiResponse);

  // set page number to zero, default
  controls.page = 0;

  // set filtered data to null
  controls.filteredItems = null;

  // set select value to default
  selectDOM("#family").value = "default";
  selectDOM("#order").value = "default";
  selectDOM("#genus").value = "default";
});

// load fruits
function loadFruits(response) {
  fruitList.innerHTML = spinners;
  setTimeout(() => {
    displayFruit(response.slice(controls.page, controls.itemPerPage));
  }, 2000);
}

// filter Items
function filteredFruits(responseToFilter, e) {
  fruitList.innerHTML = spinners;
  const { id, value } = e.target;

  const data = responseToFilter.filter(
    (item) => item[id].toLowerCase() === value.toLowerCase()
  );

  // set filtered Items
  controls.filteredItems = data;

  // console.log("api filter", responseToFilter, data);

  setTimeout(() => {
    displayFruit(data.slice(0, controls.itemPerPage), true);
  }, 2000);
}

// displaying fruits
function displayFruit(data, filter = false) {
  if (filter) {
    controls.page = 0;
  }

  if (0 === controls.page || filter) {
    // add inner html to fruit-image-list row
    addInnerHtml(data, fruitList);
  } else {
    insertBeforeNextBtn(data, fruitList);
    fruitList.lastElementChild.children[0].innerHTML = "Load More";
  }

  // at least 6 data
  if (filter) {
    if (
      controls.filteredItems.length >
        (controls.page + 1) * controls.itemPerPage &&
      0 === controls.page
    ) {
      createLoadMoreButton(fruitList);
    }
  } else {
    if (
      apiResponse.length > controls.page * controls.itemPerPage &&
      0 === controls.page
    ) {
      createLoadMoreButton(fruitList);
    }
  }
}

// showing next fruit items
function showNextItems(page, items) {
  if (controls.filteredItems) {
    displayFruit(
      controls.filteredItems.slice(page * items, page * items + items)
    );
  } else {
    displayFruit(apiResponse.slice(page * items, page * items + items));
  }
}

// create next button element
function createLoadMoreButton(parent) {
  const col = document.createElement("div");
  col.classList.add("col-12", "text-center");

  col.innerHTML = `<button class="btn btn-primary load-more-button">Load More</button>`;

  parent.appendChild(col);
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

// showing fruits meta info - nutritions value
function showNutrition(nutritions) {
  const listItem = Object.entries(nutritions).map((item) => {
    const [name, amount] = item;

    return `<li class="list-group-item text-secondary"><span class="text-capitalized">${name}</span> <span>${amount}</span></li>`;
  });

  return listItem.join("");
}

// select dom element
function selectDOM(selector) {
  return document.querySelector(selector);
}
