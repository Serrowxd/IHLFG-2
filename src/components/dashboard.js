import React, { useState } from 'react';
import { Nav } from '../shared/shareReduce';

function Dashboard(props) {
  const [user, setUser] = useState({});

  return (
    <div className="dashboard-wrapper">
      <Nav />
    </div>
  );
}

export default Dashboard;
