console.log('Welcome to Currency Converter!');
convertionPriceUSD = {'USD':1,
    'JPY': 113.5,
    'EUR': 0.89,
    'RUB': 74.36,
    'GBP': 0.75
}
for (let currency in convertionPriceUSD) {
    console.log(`1 USD equals ${convertionPriceUSD[currency]} ${currency}`)
}
const input = require('sync-input');

function convertFromTo() {
    console.log('What do you want to convert?');
    const convertFrom = input("From: >").toUpperCase();
    if (!convertionPriceUSD.hasOwnProperty(convertFrom)) {
        console.log("Unknown currency");
        return false;
    }
    const convertTo = input("To: >").toUpperCase();
    if (!convertionPriceUSD.hasOwnProperty(convertTo)) {
        console.log("Unknown currency");
        return false;
    }
    const amount = Number(input("Amount: >"));
    if (isNaN(amount)) {
        console.log('The amount has to be a number')
        return false;
    } else if (amount >= 1) {
        let result = convertionPriceUSD[convertTo] * amount / convertionPriceUSD[convertFrom];
        console.log(`Result: ${amount} ${convertFrom} equals ${result.toFixed(4)} ${convertTo}`);
    } else {
        console.log("The amount cannot be less than 1");
        return false;
    }
    return true;
}

while (true) {
    console.log("What do you want to do?")
    console.log('1-Convert currencies 2-Exit program')
    let action = input();
    if (action === '1') {
        while(!convertFromTo()) {}
    }
    else if (action === '2') {
        console.log('Have a nice day!')
        break;
    }
    else {
        console.log('Unknown input')
    }
}
