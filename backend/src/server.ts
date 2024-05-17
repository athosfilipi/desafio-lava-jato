import express from "express";
import cors from "cors";
import apiRouter from "./routes/apiRoutes";

const app = express();
const PORT = process.env.PORT || 3010;
const URL = process.env.URL || 'localhost';

app.use(cors());
app.use(express.json());

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://${URL}:${PORT}`,new Date());
});
