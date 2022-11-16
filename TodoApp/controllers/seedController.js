import { Collection } from "mongodb";

/**
 * Seed database (populate with initial data) 
 * @param {Express.Application} app 
 * @param {Collection} collection 
 */
export default async function seedController(app, collection) {
  app.post("/api/admin/todos", async (_, res) => {
    const insertResult = await collection.insertMany([
      {
        user: "Rowland",
        isDone: false,
        description: "amet reprehenderit ex officia cillum",
        hasAttachment: false,
      },
      {
        user: "Kim",
        isDone: false,
        description: "deserunt tempor commodo nulla excepteur",
        hasAttachment: false,
      },
      {
        user: "Howard",
        isDone: false,
        description: "nisi sit culpa nulla anim",
        hasAttachment: false,
      },
      {
        user: "Claudette",
        isDone: false,
        description: "duis deserunt laborum dolor ex",
        hasAttachment: false,
      },
    ]);

    res.json(insertResult);
  });
}
