import { useEffect, useState } from "react";
import DonationDetails from "../Card/DonationDetails";
import DonationDetail from "./DonationDetail";


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
                    isShow ?  donation.map((card => <DonationDetail key={card.id}card={card}></DonationDetail>))
                    :

                    donation.slice(0, 4).map((card => <DonationDetail key={card.id} card={card}></DonationDetail>))
                   }
                </div>
               {
                donation.length > 4 &&  <button onClick={()=>setIsShow(!isShow)} className="px-3 m-5 rounded-lg text-white bg-[#009444] block mx-auto mt-5">{isShow ? '' : 'See All'}</button>
               }
            </div>
        }
    </div>
    );
};

export default Donation;