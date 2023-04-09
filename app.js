const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));

// 下記のルーティングを削除してください
// 削除ここまで

// ルートURLで表示されるように変更してください
app.get('/', (req, res) => {
  res.render('top.ejs');
});

app.get('/index', (req, res) => {
  res.render('index.ejs');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


