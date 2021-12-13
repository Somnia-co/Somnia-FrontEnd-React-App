import React from "react";
import "./Card.css";
import { Bar } from 'react-chartjs-2';

function Card(props) {
  return (
    <div className="card">
      Card content here
      {/* <Bar
        data={{
          labels: ['Red', 'Blue', 'Green'],
        }}
        height={200}
        width={400}
        options={{maintainAspectRatio: false}}
      /> */}
    </div>
  );
}

export default Card;
