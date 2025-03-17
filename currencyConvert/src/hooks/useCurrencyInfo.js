import { useEffect, useState } from "react";


const useCurrencyInfo = (currency) => {
    const [data, setData] = useState({});
    useEffect(() => {
        const api_key = import.meta.env.CURRENCY_API_KEY;

        fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${api_key}&base=${currency}`)
            .then((res) => res.json())
            .then((res) => setData(res.rates));
        console.log(data);
    }, [currency])

    return data;
}

export default useCurrencyInfo;