import React, { useState } from 'react';
import LeadForm from './LeadForm';

const LeadList = ({ leads }) => {
  const [showForm, setShowForm] = useState(false);

  const handleCreateLead = () => {
    setShowForm(true);
  };

  return (
    <div>
      <h3>Leads</h3>
      <button onClick={handleCreateLead}>Create Lead</button>
      {showForm && <LeadForm setShowForm={setShowForm} />}
      <ul>
        {leads.map((lead) => (
          <li key={lead.id}>
            <p>{lead.name}</p>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadList;
