import dayjs from "dayjs";

const sortTodos = (todos) =>
  todos.sort((a, b) => new Date(a.date) - new Date(b.date));

export default {
  todos: (state) => state.todos,
  todosByDate: (state) => (date) =>
    sortTodos(
      state.todos.filter((todo) => dayjs(todo.date).isSame(date, "day"))
    ),
  currentTodos: (state) =>
    sortTodos(
      state.todos.filter((todo) =>
        dayjs(todo.date).isSame(state.selectedDate, "day")
      )
    ),
  selectedTodo: (state) =>
    state.todos.find((todo) => todo.id === state.selectedTodoId),
  selectedDate: (state) => state.selectedDate,
  selectedTodoId: (state) => state.selectedTodoId,
};
