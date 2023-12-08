// data.js
const authors = [
    {
      id: 1,
      name: "Author One",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Author Two",
      bio: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  
  const books = [
    {
      id: 1,
      title: "Book One",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      coverImage: "https://placekitten.com/300/200",
      authorId: 1,
    },
    {
      id: 2,
      title: "Book Two",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      coverImage: "https://placekitten.com/300/200",
      authorId: 1,
    },
    {
      id: 3,
      title: "Book Three",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      coverImage: "https://placekitten.com/300/200",
      authorId: 2,
    },
  ];
  
  export { authors, books };
  