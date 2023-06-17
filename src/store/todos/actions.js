import { v4 as uuidv4 } from "uuid";
import Api from "@/api";
import {
  SET_ERROR,
  SET_SELECTED_DATE,
  SET_SELECTED_TODO,
  SET_TODO,
  SET_TODOS,
  EDIT_TODO,
} from "./mutations";

export default {
  getTodos: async ({ commit }) => {
    try {
      const response = await Api.getTodos();

      commit(SET_TODOS, response);
    } catch (error) {
      commit(SET_ERROR, error);

      throw new Error(error);
    }
  },
  addTodo: ({ commit }, todo) => commit(SET_TODO, { ...todo, id: uuidv4() }),
  selectDate: ({ commit }, date) => commit(SET_SELECTED_DATE, date),
  removeTodo: ({ state, commit }, id) => {
    const todos = state.todos.filter((todo) => todo.id !== id);

    commit(SET_TODOS, todos);
  },
  editTodo: ({ commit }, todo) => commit(EDIT_TODO, todo),
  selectTodo: ({ commit }, id) => commit(SET_SELECTED_TODO, id),
};
