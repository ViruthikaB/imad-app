var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title:'Article one | Viruthika',
        heading:'Article one',
        date:'Mar 21,2018',
        content:
        `<p>
            This is content of my first page.
            A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over
            a hundred species and thousands of cultivars. They form a group of plants that can be erect shrubs, climbing or trailing with
            stems that are often armed with sharp prickles. Flowers vary in size and shape and are usually large and showy, in colours
            ranging from white through yellows and reds. Most species are native to Asia, with smaller numbers native to Europe, North
            America, and northwestern Africa. Species, cultivars and hybrids are all widely grown for their beauty and often are fragrant.
            Roses have acquired cultural significance in many societies. Rose plants range in size from compact, miniature roses, to
            climbers that can reach seven meters in height. Different species hybridize easily, and this has been used in the development
            of the wide range of garden roses.[ 
        </p>`
    },
'article-two':{
        title:'Article two | Viruthika',
        heading:'Article two',
        date:'Mar 21,2018',
        content:
        `<p>
            This is content of my second page 
        </p>`
    },
'article-three':{
        title:'Article three | Viruthika',
        heading:'Article three',
        date:'Mar 21,2018',
        content:
        `<p>
            This is content of my third page 
        </p>`
    }
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewpart" content="width=device-width,initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                    <hr/>
                    <h3>
                        ${heading}
                    </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
            </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
