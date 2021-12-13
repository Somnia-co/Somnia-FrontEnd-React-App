import React from "react";
import "./Feedback.css";

function Feedback() {
  return (
    <section id="Feedback">
      <h1>Feedback</h1>
      <table className="Messages">
        <thead className="Header">
          <th>Message</th>
          <th>Rating</th>
          <th>From</th>
          <th>Date</th>
        </thead>
        <tbody className="Body">
          <tr className="Rating">
            <td>Almost perfect!</td>
            <td className="Rating rowFlex">4.5/5</td>
            <td>J. Smith</td>
            <td>14th March</td>
          </tr>
          <tr className="Rating">
            <td>My favourite brand ever:O</td>
            <td className="Rating rowFlex">5.0/5</td>
            <td>B. W. Rich</td>
            <td>14th March</td>
          </tr>
          <tr className="Rating">
            <td>Just... wow!</td>
            <td className="Rating rowFlex">5.0/5</td>
            <td>M. Reeds</td>
            <td>13th March</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Feedback;
