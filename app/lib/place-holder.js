// Define User objects
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
];

// Define Todo objects and link them to users
const todos = [
  {
    id: 1,
    title: "Learn JavaScript",
    description: "Complete the JavaScript basics tutorial",
    completed: false,
    userId: 1, // Linked to user with id 1 (John Doe)
  },
  {
    id: 2,
    title: "Read a Book",
    description: "Read at least 30 pages of a book",
    completed: false,
    userId: 2, // Linked to user with id 2 (Jane Smith)
  },
  {
    id: 3,
    title: "Exercise",
    description: "Go for a 30-minute run",
    completed: true,
    userId: 1, // Linked to user with id 1 (John Doe)
  },
];
