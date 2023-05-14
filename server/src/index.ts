import "express-async-errors";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
const PORT = process.env.PORT ?? 3000;


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/bomb", async (req, res) => {
  const urls = process.env.URLS;
  if (!urls) throw new Error("no urls provided");

  const urlsArr = urls.split(" ");
  console.log(urlsArr);
  const responsesPromises = urlsArr.map(url => fetch(`${url}/bomb`));
  const responsesResults = await Promise.all(responsesPromises);
  const results = await Promise.all(responsesResults.map(result => result.text()));


  res.status(200);
  res.json({ results });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500);
  res.json({ error: err.message });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
