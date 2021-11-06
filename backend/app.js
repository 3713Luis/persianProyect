const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const chalk = require('chalk');
const app = express();
const PORT =  process.env.PORT || 3050;

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use(require('./apis/banner'))
//  app.use(require('./apis/user'));
// app.use(require('./apis/sesion'));
// app.use(require('./apis/deuda'));
// app.use(require('./apis/pago'));
// app.use(require('./apis/acreedor'));
// app.use(require('./apis/cobrador'));

app.listen(PORT, () => console.log(chalk.blue(`Server running on port  ${PORT}`)));

