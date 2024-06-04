const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const sequelize = require('./config/database');
const User = require('./models/User');
const Breath = require('./models/Breath');


// 设置视图引擎为EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);


// 解析JSON和表单数据
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 获取并显示breath数据
app.get('/', async (req, res) => {
  try {
    const breathData = await Breath.findAll();
    res.render('index', { title: 'ECharts Example', breathData });
  } catch (error) {
    console.error('Error fetching breath data:', error);
    res.status(500).send('Error fetching breath data');
  }
});

app.post('/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Unable to create user' });
  }
});

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
    app.listen(port, '0.0.0.0', () => {
      console.log(`Example app listening at http://0.0.0.0:${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to create tables:', err);
  });