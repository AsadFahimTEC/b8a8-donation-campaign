import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie,  Cell, Label } from 'recharts';


const Statistics = () => {
    const totalDonations = useLoaderData();

    // console.log(totalDonations);
    
    const [storage, setStorage] = useState();

    useEffect(()=>{
        const yourDonation = JSON.parse(localStorage.getItem("donations"));
        setStorage(yourDonation.length);
       
    }, [])

    // console.log(storage);

    const remainder = totalDonations.length - storage;
    const remainderPercentage = (remainder/totalDonations.length)*100;
    const storagePercentage = (storage/totalDonations.length)*100;
    // console.log(remainderPercentage, storagePercentage);

   const data = [
    {name: 'your donation', value: storagePercentage},
    {name: 'total donation', value: remainderPercentage}
   ]

   const COLORS = ['#FF444A', '#00C49F'];

    return (
        
        <div className="flex justify-center items-center h-screen">
          <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`label-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
          
         
        </div>

        
    );
};

export default Statistics;
