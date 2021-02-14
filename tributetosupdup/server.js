const express = require('express');
const cors = require('cors')

const app = express();


app.use(cors());
app.use(express.json());
//sample stock data
let stocks = [
    {
      id: '1',
      symbol: 'TSLA',
      company: 'Tesla Inc',
      marketCap: '807.83B',
      price: '800',
      lastTweeted: '02/17/2009',
      tweets: [
          'sample 1 $TSLA',
          'sample 2 $TSLA',
          'sample 3 $TSLA',
          'sample 4 $TSLA ',
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      ]
    },
    {
      id: '2',
      symbol: 'NIO',
      company: 'NIO',
      marketCap: '89.13B',
      price: '62',
      lastTweeted: '05/27/2015',
      tweets: [
        'sample 1 $NIO',
        'sample 2 $NIO',
        'sample 3 $NIO',
        'sample 4 $NIO',
    ]
    },
    {
      id: '3',
      symbol: 'LMND',
      company: 'Lemonade Inc',
      marketCap: '8.70B',
      price: '140',
      lastTweeted: '01/17/2021',
      tweets: [
        'sample 1 $LMND',
        'sample 2 $LMND',
        'sample 3 $LMND',
        'sample 4 $LMND',
    ]
    },
    {
      id: '4',
      symbol: 'SQ',
      company: 'Square Inc',
      marketCap: '519.43',
      price: '300',
      lastTweeted: '02/17/2020',
      tweets: [
        'sample 1 $SQ',
        'sample 2 $SQ',
        'sample 3 $SQ',
        'sample 4 $SQ',
    ]
    }
];

app.get('/', (req,res) => {
    console.log('hello world');
});

app.get('/api/getStocksData', function(req,res) {
    console.log(JSON.stringify(stocks));
    res.send(JSON.stringify(stocks));
});

app.get('/api/getStockData', function(req,res) {
    console.log(req.query.stockID);
    let stock = stocks.find(x => x.id === req.query.stockID);
    res.send(stock);
});


let port = process.env.PORT || 3000;
app.listen(port, function(req,res) {
    console.log(`listening to port ${port}`);
});