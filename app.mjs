import logger from 'morgan'
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import eventRouter from './routes/api/events.mjs'
import authRouter from './routes/api/auth.mjs'
dotenv.config()

const app = express()

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// const corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 
// }
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/auth", authRouter)
app.use("/api/events", eventRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.use((err, _, res) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});


export default app