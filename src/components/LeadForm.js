// src/components/LeadForm.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const LeadForm = () => {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({ name: "", phone: "", status: "" });

  const token = localStorage.getItem("token");

  const fetchLeads = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/leads", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLeads(res.data);
    } catch (err) {
      alert("Failed to load leads");
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/leads", form, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setForm({ name: "", phone: "", status: "" });
      fetchLeads();
    } catch (err) {
      alert("Error creating lead");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/leads/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchLeads();
    } catch (err) {
      alert("Failed to delete lead");
    }
  };

  return (
    <div>
      <form onSubmit={handleCreate}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
        <input name="status" placeholder="Status" value={form.status} onChange={handleChange} required />
        <button type="submit">Add Lead</button>
      </form>

      <h3>Leads</h3>
      <ul>
        {leads.map((lead) => (
          <li key={lead._id}>
            {lead.name} - {lead.phone} - {lead.status}
            <button onClick={() => handleDelete(lead._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadForm;
