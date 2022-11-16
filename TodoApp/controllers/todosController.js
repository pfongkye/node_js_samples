export default function todosController(app, collection) {
  app.get("/api/todos", async (_req, res) => {
    const getResults = await collection.find({}).toArray();
    res.json(getResults);
  });
}
