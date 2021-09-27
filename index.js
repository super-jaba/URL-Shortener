const app = require('./app');
const PORT = require('./config').PORT;


app.listen(PORT, () => console.log(`Server has been started on PORT=${PORT}`));