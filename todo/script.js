const todos = [
  {
    name: "Calculus HW2",
    done: false,
  },
  {
    name: "Side Project Figma",
    done: false,
  },
  {
    name: "Course Slide",
    done: false,
  },
  {
    name: "Write Blog Post",
    done: true,
  },
  {
    name: "Test",
    done: true,
  },
];

// this function receive array of objects
// and return array of string
// [
//   "Calculus HW2 is still in progress.",
//   "Side Project Figma is still in progress.",
//   "Course Slide is still in progress.",
//   "Write Blog Post is completed.",
//   "Test is completed.",
// ];

// try to not use if, for, while
function getTodosStatus(todos) {
  return todos.map((todo) => (
    `${todo.name} is ${todo.done ? "completed" : "still in progress."}`
  ));
}

console.log(getTodosStatus(todos));
