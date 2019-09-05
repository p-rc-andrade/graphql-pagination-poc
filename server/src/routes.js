import { Router } from "express";

const routes = new Router();

const users = ["Pedro", "Lucía", "Retsuko"];

routes.get("/users", (req, res) => {
  return res.json({ users: users });
});

export default routes;
