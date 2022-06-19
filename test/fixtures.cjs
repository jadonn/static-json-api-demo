const polka = require('polka');
const serve = require('sirv')('_site');

const { PORT=8080 } = process.env;
const server = polka().listen(PORT, () => {
    console.log(`> Running on localhost:${PORT}`);
});


exports.mochaGlobalSetup = async function() {
    server.use(serve)
        .get('/health', (req, res)=> {
            res.end('OK')
        });
}

exports.mochaGlobalTeardown = async function() {
    process.exit(0)
}