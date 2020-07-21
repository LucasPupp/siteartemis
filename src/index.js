const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const porta = 3333;
const app = express();
const router = express.Router();

app.use(morgan('dev'));
app.use(cors());
router.get('/', (req,res)=>{
  return res.sendFile(path.join(__dirname,"..","/public/index.html"));
  return
});
app.use('/', router);
app.listen(porta, ()=>{
  console.log('api funcionando')
})