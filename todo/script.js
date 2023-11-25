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

// practice 1
function renderTodoList() {
  const todoListElement = document.querySelector('.todo-list');
  todoListElement.innerHTML = '';

  for (let i = 0; i < todos.length; i++) {
    const buttonElement = document.createElement('button');
    buttonElement.classList.add('checkbox');

    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.append(todos[i].name);

    const todoElement = document.createElement('div');
    todoElement.classList.add('horizon-card', 'todo');
    if (todos[i].done) {
      todoElement.classList.add('finished');
    }
    todoElement.append(buttonElement, nameElement);

    todoListElement.append(todoElement);
  }
}

// practice 2
function addTodo() {
  const inputElement = document.querySelector('.input');
  todos.unshift({
    name: inputElement.value,
    done: false
  });
  renderTodoList();
  inputElement.value = '';
}

renderTodoList();
