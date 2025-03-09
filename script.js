const confirm_btn = document.getElementById('confirm_btn');
confirm_btn.addEventListener('click', (event) => {
    event.preventDefault();
    const new_trade_id = Math.floor(100000 + Math.random() * 900000);
    const new_wallet_id = Math.floor(100000 + Math.random() * 900000);
    document.getElementById('trade_id').text = new_trade_id;
    document.getElementById('trade_id_rus').text = new_trade_id;

    document.getElementById('wallet_id').text = new_wallet_id;
    document.getElementById('wallet_id_rus').text = new_wallet_id;

    const trade_type = document.querySelector('input[name="trade_type"]:checked').id;
    const trade_type_elem = document.getElementById('trade_type');
    const trade_type_elem_rus = document.getElementById('trade_type_rus');

    if (trade_type === 'buy') {
        trade_type_elem.text = 'BUY';
        trade_type_elem_rus.text = 'BUY';
        trade_type_elem.classList.add('green');
        trade_type_elem.classList.remove('red');
        trade_type_elem_rus.classList.add('green');
        trade_type_elem_rus.classList.remove('red');
    } else {
        trade_type_elem.text = 'SELL';
        trade_type_elem_rus.text = 'SELL';
        trade_type_elem.classList.add('red');
        trade_type_elem.classList.remove('green');
        trade_type_elem_rus.classList.add('red');
        trade_type_elem_rus.classList.remove('green');
    }

    const currency = document.getElementById('currency').value;
    const transaction_currency = document.getElementById('transaction_currency').value;


    const opening_price = parseFloat(document.getElementById('opening_price').value);
    const investment = parseFloat(document.getElementById('investment').value);
    const commission_rate = parseFloat(document.getElementById('commission_rate').value) / 100;
    const leverage = document.getElementById('leverage').value;
    const yield = document.getElementById('yield').value;

    const commission = investment * commission_rate;
    const amount = investment / opening_price;
    const profit = investment * yield / 100;

    let closing_price = 0;
    if (trade_type === 'buy') {
        closing_price = opening_price + (profit + commission) / (leverage * amount);
    } else {
        closing_price = opening_price - (profit + commission) / (leverage * amount);
    }


    document.getElementById('trade_currency_draw').text = transaction_currency;
    document.getElementById('trade_currency_draw_rus').text = transaction_currency;

    document.getElementById('opening_price_draw').text = currency + " " + opening_price;
    document.getElementById('opening_price_draw_rus').text = currency + " " + opening_price;

    document.getElementById('closing_price_draw').text = currency + " " + closing_price.toFixed(2);
    document.getElementById('closing_price_draw_rus').text = currency + " " + closing_price.toFixed(2);

    document.getElementById('invested_draw').text = "$ " + investment;
    document.getElementById('invested_draw_rus').text = "$ " + investment;

    document.getElementById('comission_draw').text = "$ " + commission.toFixed(2);
    document.getElementById('comission_draw_rus').text = "$ " + commission.toFixed(2);

    document.getElementById('leverage_draw').text = leverage + "x";
    document.getElementById('leverage_draw_rus').text = leverage + "x";

    document.getElementById('profit_draw').text = profit.toFixed(2) + " $";
    document.getElementById('profit_draw_rus').text = profit.toFixed(2) + " $";

    document.getElementById('yield_draw').text = yield + " %";
    document.getElementById('yield_draw_rus').text = yield + " %";


    const start_date = new Date(document.getElementById('start_date').value);
    const close_date = new Date(document.getElementById('close_date').value);
    const start_time = document.getElementById('start_time');
    const close_time = document.getElementById('close_time');

    let start_date_date = start_date.getDate();
    if (start_date_date < 10) {
        start_date_date = '0' + start_date_date;
    }

    let start_date_month = start_date.getMonth() + 1;
    if (start_date_month < 10) {
        start_date_month = '0' + start_date_month;
    }

    let close_date_date = close_date.getDate();
    if (close_date_date < 10) {
        close_date_date = '0' + close_date_date;
    }
    let close_date_month = close_date.getMonth() + 1;
    if (close_date_month < 10) {
        close_date_month = '0' + close_date_month;
    }

    document.getElementById('start_date_draw').text = `${start_date_date}.${start_date_month}.${start_date.getFullYear()} ` + start_time.value;
    document.getElementById('start_date_draw_rus').text = `${start_date_date}.${start_date_month}.${start_date.getFullYear()} ` + start_time.value;

    document.getElementById('close_date_draw').text = `${close_date_date}.${close_date_month}.${close_date.getFullYear()} ` + close_time.value;
    document.getElementById('close_date_draw_rus').text = `${close_date_date}.${close_date_month}.${close_date.getFullYear()} ` + close_time.value;

});
