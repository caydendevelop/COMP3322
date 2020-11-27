const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 3001;
const app = express();
app.use(cors());
const router = express.Router();

//這是我們的MongoDB資料庫
const dbRoute =
  'mongodb+srv://user0:QHsVaXjwQPf9xJy8@cluster0.ecazw.mongodb.net/nameDB?retryWrites=true&w=majority';

//將我們的後端程式碼與資料庫連線起來
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

//檢查與資料庫的連線是否成功
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//（可選）僅用於記錄和
// bodyParser，將請求體解析為可讀的json格式
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

//這是我們的get方法
//此方法獲取資料庫中的所有可用資料
router.get('/getData', (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

//這是我們的更新方法
//此方法會覆蓋資料庫中的現有資料
router.post('/updateData', (req, res) => {
  const { id, update } = req.body;
  Data.findByIdAndUpdate(id, update, (err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

//這是我們的刪除方法
//此方法刪除資料庫中的現有資料
router.delete('/deleteData', (req, res) => {
  const { id } = req.body;
  Data.findByIdAndRemove(id, (err) => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

//這是我們的創造方法
//此方法在我們的資料庫中新增新資料
router.post('/putData', (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: 'INVALID INPUTS',
    });
  }
  data.message = message;
  data.id = id;
  data.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

//為我們的http請求新增 /api
app.use('/api', router);

//將我們的後端傳送到埠
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));