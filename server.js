const express = require('express');
const app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.route('/api/whoami')
.get((req, res) => {
  const ipaddress = req.headers["host"],
        language = req.headers["accept-language"],
        software = req.headers["user-agent"];
  res.send({ ipaddress, language, software });
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Y' + listener.address().port);
});
