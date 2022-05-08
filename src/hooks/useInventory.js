import { useEffect, useState } from "react"

const useInventory = id => {
    const [inventoryItem, setInventoryItem] = useState({})
    useEffect(() => {
        const url = `https://secure-cliffs-70594.herokuapp.com/cars/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setInventoryItem(data))
    }, [id])
    return [inventoryItem]
}
export default useInventory