import express from 'express';
import puppeteer from 'puppeteer';

const app = express();

const cors = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,OPTIONS,DELETE');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}

app
.use(cors)
.get('/login/', (req, res) => {
    res.send('brazhkinanastya01');
})
.get('/test/', async (req, res) => {
    const browser = await puppeteer.launch({args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage,
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--single-process',
        '--disable-gpu'
    ]});
    const page = await browser.newPage();
    await page.goto(req.query.URL);
    await page.click('#bt');
    const input = await page.$('#inp');
    let value = await page.evaluate(inp => inp.value, input);
    res.send(value);
})
.use((req, res) => {
    res.send('brazhkinanastya01');
});

app.listen(process.env.PORT);
