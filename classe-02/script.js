const maiorPrecoBtc = document.querySelector('#maiorPrecoBtc');
const qtdNegBtc = document.querySelector('#qtdNegBtc');
const ofertaBtc = document.querySelector('#ofertaBtc');
const maiorPrecoEth = document.querySelector('#maiorPrecoEth');
const qtdNegEth = document.querySelector('#qtdNegEth');
const ofertaEth = document.querySelector('#ofertaEth');
const maiorPrecoLtc = document.querySelector('#maiorPrecoLtc');
const qtdNegLtc = document.querySelector('#qtdNegLtc');
const ofertaLtc = document.querySelector('#ofertaLtc');

const btc = fetch(`https://www.mercadobitcoin.net/api/btc/ticker/`);
const eth = fetch(`https://www.mercadobitcoin.net/api/eth/ticker/`);
const ltc = fetch(`https://www.mercadobitcoin.net/api/ltc/ticker/`);

btc.then(res => {
    const promiseBody = res.json();

    promiseBody.then(body => {
        maiorPrecoBtc.textContent = Number(body.ticker.high).toFixed(2);
        qtdNegBtc.textContent = Number(body.ticker.vol).toFixed(2);
        ofertaBtc.textContent = Number(body.ticker.buy).toFixed(2);
    });
});

eth.then(res => {
    const promiseBody = res.json();

    promiseBody.then(body => {
        maiorPrecoEth.textContent = Number(body.ticker.high).toFixed(2);
        qtdNegEth.textContent = Number(body.ticker.vol).toFixed(2);
        ofertaEth.textContent = Number(body.ticker.buy).toFixed(2);
    });
});

ltc.then(res => {
    const promiseBody = res.json();

    promiseBody.then(body => {
        maiorPrecoLtc.textContent = Number(body.ticker.high).toFixed(2);
        qtdNegLtc.textContent = Number(body.ticker.vol).toFixed(2);
        ofertaLtc.textContent = Number(body.ticker.buy).toFixed(2);
    });
});