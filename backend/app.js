const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
const app = express();
const cors = require('cors');
const PORT =  process.env.PORT || 3050;
const path = require('path');
app.use(express.static(path.join(__dirname, '/apis/utils/imagenes')));
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(require('./apis/banner'))
 app.use(require('./apis/categoria'));
 app.use(require('./apis/articulo'));

app.listen(PORT, () => console.log(chalk.blue(`Server running on port  ${PORT}`)));

