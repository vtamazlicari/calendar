export const SET_TODOS = "SET_TODOS";
export const SET_ERROR = "SET_ERROR";
export const SET_SELECTED_DATE = "SET_SELECTED_DATE";
export const SET_TODO = "SET_TODO";
export const SET_SELECTED_TODO = "SET_SELECTED_TODO";
export const EDIT_TODO = "EDIT_TODO";

export const mutations = {
  [SET_TODOS](state, todos) {
    state.todos = todos;
  },
  [SET_ERROR](state, msg) {
    state.error = msg;
  },
  [SET_SELECTED_DATE](state, date) {
    state.selectedDate = date;
  },
  [SET_SELECTED_TODO](state, id) {
    state.selectedTodoId = id;
  },
  [SET_TODO](state, todo) {
    state.todos = [...state.todos, todo];
  },
  [EDIT_TODO](state, todo) {
    state.todos = [...state.todos.filter(({ id }) => id !== todo.id), todo];
  },
};
