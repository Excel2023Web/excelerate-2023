import React, { useState, useEffect } from "react";
import "./Leaderboard.css";
import axios from "axios";
import { eventsBaseUrl } from "../../utils/urls";

const LeaderTable = () => {
  const [leaders, setLeaders] = useState([]);
  useEffect(() => {
    axios.get(`${eventsBaseUrl}/api/ambassadors/list`).then((response) => {
      setLeaders(response.data);
    });
  }, []);
  return (
    <div className="leaderTable">
      {leaders.map((leader, index) => {
        return (
          <div className="leader__card" key={index}>
            <p>{index+1}</p>
            <div className="leader__name_n_pic">
              <img src={leader.image} alt="" />
              <p>{leader.name}</p>
            </div>
            <p>{leader.totalPoints}</p>
          </div>
        );
      })}
    </div>
  );
};

export default LeaderTable;
