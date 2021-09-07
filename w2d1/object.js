const library = [];
/**
 *
 * @param {string} title
 * @param {string} author
 * @param {number} libraryId,
 * @returns a new array that has a object with title author and libraryId
 */
function addBook(title, author, libraryId) {
  let object1 = {};
  object1.titile = title;
  object1.author = author;
  object1.libraryId = libraryId;
  return library.push(object1);
}
addBook("dragon", "fili", 510);
addBook("frozen", "winta", 341);
addBook("dagmay hiwet", "miki", 134);
console.log(library);
/**
 * returns new array that have all the title in ascending order
 */
function findTitle() {
  let title = [];
  for (let i = 0; i < library.length; i++) {
    title.push(library[i].titile);
  }
  return title.sort();
}
console.log(findTitle());
/**
 * @returns new array that have all the author in ascending order
 */
function findAuthor() {
  let author = [];
  for (let au of library) {
    author.push(au.author);
  }
  return author.sort();
}

console.log(findAuthor());
/**
 * @returns new array that have all the ID's in ascending order
 */
function findId() {
  let id = [];
  for (let au of library) {
    id.push(au.libraryId);
  }
  return id.sort();
}
console.log(findId());
