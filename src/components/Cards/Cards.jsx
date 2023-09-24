import { useLoaderData } from "react-router-dom";
import AllCards from "./AllCards";


const Cards = () => {
    const cards = useLoaderData();
    return (
        <div className="py-10">
            <h1 className="text-2xl text-center">All Cards</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10"> 
                {
                    cards?.map(card =><AllCards key={card.id} card={card}></AllCards>)
                }
            </div>
        </div>
    );
};

export default Cards;