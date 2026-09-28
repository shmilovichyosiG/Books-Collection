const ALL_LABEL = "-- הכל --";

let allBooks = []; // [{ index, name, style, author, publisher, imageUrl }]

const els = {
  styleFilter: document.getElementById("styleFilter"),
  publisherFilter: document.getElementById("publisherFilter"),
  authorFilter: document.getElementById("authorFilter"),
  searchInput: document.getElementById("searchInput"),
  bookNamesList: document.getElementById("bookNamesList"),
  clearFiltersBtn: document.getElementById("clearFiltersBtn"),
  booksGrid: document.getElementById("booksGrid"),
  emptyMessage: document.getElementById("emptyMessage"),
  resultsCount: document.getElementById("resultsCount"),
};

/* ---------- אתחול ---------- */

function init() {
  if (typeof BOOKS_DATA === "undefined") {
    els.resultsCount.textContent = "לא נמצא books-data.js - יש להריץ build.bat קודם";
    return;
  }

  allBooks = BOOKS_DATA;

  populateFilterOptions();
  populateBookNamesList();
  render();
}

/* ---------- מילוי תיבות הסינון ---------- */

function distinctSorted(values) {
  return [...new Set(values.filter((v) => v))].sort((a, b) => a.localeCompare(b, "he"));
}

function fillSelect(selectEl, values) {
  selectEl.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = ALL_LABEL;
  allOption.textContent = ALL_LABEL;
  selectEl.appendChild(allOption);

  values.forEach((v) => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    selectEl.appendChild(opt);
  });
}

function populateFilterOptions() {
  fillSelect(els.styleFilter, distinctSorted(allBooks.map((b) => b.style)));
  fillSelect(els.publisherFilter, distinctSorted(allBooks.map((b) => b.publisher)));
  fillSelect(els.authorFilter, distinctSorted(allBooks.map((b) => b.author)));
}

function populateBookNamesList() {
  els.bookNamesList.innerHTML = "";
  distinctSorted(allBooks.map((b) => b.name)).forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    els.bookNamesList.appendChild(opt);
  });
}

/* ---------- סינון ותצוגה ---------- */

function getFilteredBooks() {
  const style = els.styleFilter.value;
  const publisher = els.publisherFilter.value;
  const author = els.authorFilter.value;
  const search = els.searchInput.value.trim().toLowerCase();

  return allBooks.filter((b) => {
    if (style !== ALL_LABEL && b.style !== style) return false;
    if (publisher !== ALL_LABEL && b.publisher !== publisher) return false;
    if (author !== ALL_LABEL && b.author !== author) return false;
    if (search && !b.name.toLowerCase().includes(search)) return false;
    return true;
  });
}

function render() {
  const filtered = getFilteredBooks();

  els.resultsCount.textContent = `${filtered.length} מתוך ${allBooks.length} ספרים`;
  els.booksGrid.innerHTML = "";

  if (filtered.length === 0) {
    els.emptyMessage.classList.remove("hidden");
    return;
  }
  els.emptyMessage.classList.add("hidden");

  filtered.forEach((book) => {
    const card = document.createElement("article");
    card.className = "book-card";
    card.innerHTML = `
      <div class="book-cover">
        <img src="${book.imageUrl}" alt="${escapeHtml(book.name)}" loading="lazy" />
      </div>
      <div class="book-info">
        <span class="book-style">${escapeHtml(book.style || "")}</span>
        <div class="book-name">${escapeHtml(book.name)}</div>
        <div class="book-author">${escapeHtml(book.author || "")}</div>
        <div class="book-publisher">${escapeHtml(book.publisher || "")}</div>
      </div>
    `;
    els.booksGrid.appendChild(card);
  });
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- אירועים ---------- */

els.styleFilter.addEventListener("change", render);
els.publisherFilter.addEventListener("change", render);
els.authorFilter.addEventListener("change", render);
els.searchInput.addEventListener("input", render);

els.clearFiltersBtn.addEventListener("click", () => {
  els.styleFilter.value = ALL_LABEL;
  els.publisherFilter.value = ALL_LABEL;
  els.authorFilter.value = ALL_LABEL;
  els.searchInput.value = "";
  render();
});

init();
