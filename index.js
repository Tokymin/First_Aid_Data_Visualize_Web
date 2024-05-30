const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');

// 设置视图引擎为EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);

app.get('/', (req, res) => {
  res.render('index', { title: 'ECharts Example' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`);
});
