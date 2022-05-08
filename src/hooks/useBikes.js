import { useEffect, useState } from "react"

const useBikes = () => {
    const [bikes, setBikes] = useState([]);
    useEffect(() => {
        fetch('https://warm-sierra-80009.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data));
    }, [])

    return [bikes, useBikes];
}
export default useBikes;