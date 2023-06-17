const getTodos = () =>
  Promise.resolve([
    {
      id: 1,
      title: "Title 1",
      descriptions: "Description 1",
      date: new Date().toISOString(),
    },
  ]);

export default {
  getTodos,
};
