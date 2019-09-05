import express from "express";
import routes from "./routes";

const App = () => {
  const server = express();
  server.use(express.json());
  server.use(routes);
};

export default App.server;
