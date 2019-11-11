const convert = (number, exchangeRate) => {
    const { value, currency } = number;

    const newCurrency = currency === 'EUR' ? 'PLN' : 'EUR';
    const newValue = currency === 'EUR'
        ? value * exchangeRate / 100
        : value / exchangeRate * 100;

    return {
        value: newValue,
        currency: newCurrency
    }
}

export default convert;