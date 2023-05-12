import './chart.css';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ReferenceLine, ResponsiveContainer } from 'recharts';

import { useState } from 'react';

// Sample data



function Button({ id, isActive, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: isActive ? '#72236A' : 'gray' }}
      onClick={onClick}  >
      {children}
    </button>
  );
}

const Chart = ({ exercises, meals }) => {
  
  const [activeButtonId, setActiveButtonId] = useState('button1');

  console.log(exercises);

  const data_set_1 = [
    { day: '03/04', Calories: 400 },
    { day: '04/04', Calories: 700 },
    { day: '05/04', Calories: 200 },
    { day: '06/04', Calories: 1000 },
    { day: '07/04', Calories: 200 },
    { day: '08/04', Calories: 200 },
    { day: '09/04', Calories: 200 },
  ];
  
  const data_set_2 = [
    { date: '03/04', totalExercises: 3 },
    { date: '04/04', totalExercises: 4 },
    { date: '05/04', totalExercises: 6 },
    { date: '06/04', totalExercises: 2 },
    { date: '07/04', totalExercises: 1 },
    { date: '08/04', totalExercises: 9 },
    { date: '09/04', totalExercises: 0 },
  ];
  
  const data_set_3 = [
    { day: '03/04', Weight: 67.0 },
    { day: '04/04', Weight: 66.5 },
    { day: '05/04', Weight: 66.5 },
    { day: '06/04', Weight: 66.0 },
    { day: '07/04', Weight: 66.0 },
    { day: '08/04', Weight: 65.5 },
    { day: '09/04', Weight: 65.5 },
  ];


  const handleButtonClick = (id) => {
    setActiveButtonId(id);
  };


  let data;
  if (activeButtonId === 'button1') {
    data = data_set_1;
  }
  if (activeButtonId === 'button2') {
    data = exercises;
    //console.log(data_set_2);
  }
  if (activeButtonId === 'button3') {
    data = data_set_3;
  }

  return (
    <>
      <>
        <ResponsiveContainer width="80%" height={600}>
          <BarChart data={data}>
            <Bar dataKey={activeButtonId === 'button1' ? "Calories" :
              activeButtonId === 'button2' ? "totalExercises" :
                "Weight"} fill="#8884d8" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <ReferenceLine y={activeButtonId === 'button1' ? 100 :
              activeButtonId === 'button2' ? 3 :
                66.0} label="Goal" stroke="red" strokeWidth={2} />
          </BarChart>
        </ResponsiveContainer>
        <div className='chart_menu'>
          <Button
            id="button1"
            isActive={activeButtonId === "button1"}
            onClick={() => handleButtonClick("button1")}>
            Calories
          </Button>
          <Button
            id="button2"
            isActive={activeButtonId === "button2"}
            onClick={() => handleButtonClick("button2")}>
            Exercises
          </Button>
          <Button
            id="button3"
            isActive={activeButtonId === "button3"}
            onClick={() => handleButtonClick("button3")}>
            Weight
          </Button>
        </div>
      </>
    </>
  );
}

export default Chart;
