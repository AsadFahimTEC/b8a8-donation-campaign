import { useLoaderData } from "react-router-dom";
import AllCards from "./AllCards";


const Cards = () => {
    const cards = useLoaderData();
    return (
        <div className="py-10 mx-5 md:mx-10 my-5 md:my-10">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10"> 
                {
                    cards?.map(card =><AllCards key={card.id} card={card}></AllCards>)
                }
            </div>
        </div>
    );
};

export default Cards;