const assert = require("assert");
const tAddBook = require("./object");
const tFindAuthor = require("./object");
const tFindTitle = require("./object");
const tFindId = require("./object");
describe("library", function () {
  let library = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
    {
      title: "Mockingjay: The Final Book of The Hunger Games",
      author: "Suzanne Collins",
      libraryID: 3245,
    },
  ];

  const titles = [
    "Mockingjay: The Final Book of The Hunger Games",
    "The Road Ahead",
    "Walter Isaacson",
  ];
  const authors = ["Bill Gates", "Steve Jobs", "Suzanne Collins"];
  // const ids = [1254, 3245, 4264];
  const ids = [1254, 4264, 3245];

  it("find titles", function () {
    assert.deepEqual(tFindTitle.findTitles(), titles);
  });

  it("find authors", function () {
    assert.deepEqual(tFindAuthor.findAuthors(), authors);
  });

  it("find ids", function () {
    assert.deepEqual(tFindId.findIDs(), ids);
  });

  it("add book", function () {
    const newBook = { title: "My New Book", author: "Me Too", libraryID: 1144 };
    ids.push(1144);
    authors.push("Me Too");
    titles.push("My New Book");
    // assert.deepEqual(addBook(newBook), newBook);
    assert.deepEqual(tAddBook.addBook("My New Book", "Me Too", 1144), newBook);
    assert.deepEqual(tFindId.findIDs(), ids);
  });
});
