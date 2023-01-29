require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const http = require("./httpCommon");
const fsManager = require("./fsManager");

app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const favorites = [];

//List song by artist
app.get("/songs", async (req, res) => {
  const query = req.query;

  const params = {
    media: "music",
    entity: "song",
    attribute: "artistTerm",
    term: query.artistName,
    limit: 25,
  };

  const resultSet = await http.get(`${process.env.ITUNES_API_URL}/search`, {
    params,
  });

  // console.log(resultSet.data, 'resultSet')

  const albums = Array.from(
    new Set(resultSet.data.results.map((item) => item.collectionName))
  );

  console.log(albums, "albums");

  res.json({
    resultsCount: resultSet.data.resultCount,
    almbumsCount: albums.length,
    albums: albums,
    results: resultSet.data.results,
  });
});

//Set song as favorite
app.post("/favorites", async (req, res, next) => {
  const body = req.body;

  const params = {
    id: body.trackId,
  };

  const resultSet = await http.get(`${process.env.ITUNES_API_URL}/lookup`, {
    params,
  });

  if (resultSet.data.resultCount > 0) {
    favorites.push(resultSet.data.results[0]);
    res.json({
      message: "Song successfully set as favorite",
    });
  } else {
    res.status(404).json({
      message: "Song not found",
    });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server runing on port ${process.env.PORT}`);
});
