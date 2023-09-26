import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie,  Cell } from 'recharts';


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

   const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (
        
        <div className="flex justify-center items-center">
          <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`}
               fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div>
           <div className="text-[#0B0B0B] text-sm text-center font-normal"><h3>Your Donation</h3></div>
            <div className="w-25 h-3 bg-[#00C49F] rounded-sm"></div>
            <div className="text-[#0B0B0B] text-sm text-center font-normal"><h3>Total Donation</h3></div>
            <div className="w-25 h-3 bg-[#FF444A] rounded-sm"></div>
            </div>

          </div>

        
    );
};

export default Statistics;
