const convert = (number, exchangeRate) => {
    const { value, currency } = number;

    const newCurrency = currency === 'EUR' ? 'PLN' : 'EUR';
    const newValue = currency === 'EUR'
        ? value * exchangeRate
        : value / exchangeRate;

    return {
        value: newValue,
        currency: newCurrency
    }
}

export default convert;