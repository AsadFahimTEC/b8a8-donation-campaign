import { useEffect, useState } from "react";


const Statistics = () => {
    const [price, setPrice] = useState([]);

    useEffect(()=>{
        fetch('./cards.json')
        .then(res =>res.json())
        .then(data=>console.log(data))
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Statistics;
