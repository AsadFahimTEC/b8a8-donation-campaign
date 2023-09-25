import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const Statistics = () => {
  const cards = useLoaderData();
  console.log(cards);

  const data = cards.map((card) => ({
    name: card.category,
    value: parseFloat(card.price.replace("$", "")),
  }));
  // console.log(data);

  const totalSum = data.reduce((acc, entry) => acc + entry.value, 0);
  // console.log(totalSum);

  const dataPercentage = data.map((entry) => ({
    ...entry,
    percentage: ((entry.value / totalSum) * 100).toFixed(2),
  }));
  // console.log(dataPercentage);

  const colors = ["#FF444A", "#00C49F"];

  const CustomToolTip = ({ active, payload }) => {
    if (active) {
      const { name, value, payload: datapayload } = payload[0];
      return (
        <div className="custom-tooltip">
          <p>{`${name} : $${value}`}</p>
          <p>{`Percentage: ${datapayload.percentage}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        data={dataPercentage}
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
      >
        {dataPercentage.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip content={<CustomToolTip />} />
      <Legend />
    </PieChart>
  );
};

export default Statistics;
