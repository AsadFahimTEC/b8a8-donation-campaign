import { useEffect, useState } from "react";
import DonationDetails from "../Card/DonationDetails";


const Donation = () => {
    const [donation, setDonation] = useState([]);
    const [nodata, setNoData] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donations'));
        if(donationItems ){
            setDonation(donationItems );
        }
        else{
            setNoData('No data found')
        }
    }, [])

    const handleRemove = () =>{
        localStorage.clear();
        setDonation([]);
        setNoData('No data found')
    }

    return (
        <div>
        {
            nodata ? <p className="h-[80vh] flex justify-center items-center">{nodata}</p>: <div>

               <div>
               {
                    donation.length > 0 && <button onClick={handleRemove} className="px-5 bg-green-200 block mx-auto">Deleted All Favorites</button>
                }
              
               </div>

                <div className="grid grid-cols-2 gap-5">
                   {
                    isShow ?  donation.map((card => <DonationDetails key={card.id}card={card}></DonationDetails>))
                    :

                    donation.slice(0, 2).map((card => <DonationDetails key={card.id} card={card}></DonationDetails>))
                   }
                </div>
               {
                donation.length > 4 &&  <button onClick={()=>setIsShow(!isShow)} className="px-5 bg-green-200 block mx-auto mt-5">{isShow ? 'See Less' : 'See More'}</button>
               }
            </div>
        }
    </div>
    );
};

export default Donation;