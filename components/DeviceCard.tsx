"use client";

import { useState } from "react";

interface Device {
  id: number;
  name: string;
  status: 'slobodan' | 'zauzet' | 'zauzet aktiviran';
  student: string;
}

interface DeviceCardProps {
  device: Device;
  onUpdateStatus: (id: number, status: Device['status']) => void;
}

const statusColors: { [key in Device['status']]: string } = {
  slobodan: "bg-green-200",
  zauzet: "bg-yellow-200",
  "zauzet aktiviran": "bg-red-200",
};

const DeviceCard: React.FC<DeviceCardProps> = ({ device, onUpdateStatus }) => {
  const [newStatus, setNewStatus] = useState(device.status);

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const status = event.target.value as Device['status'];
    setNewStatus(status);
    onUpdateStatus(device.id, status);
  };

  return (
    <div className={`p-4 rounded shadow-md ${statusColors[device.status]}`}>
      <h3 className="text-lg font-bold">{device.name}</h3>
      <p>ID: {device.id}</p>
      <p>Student: {device.student || "N/A"}</p> {/* Prikazuj "N/A" ako nema studenta */}
      <div className="mt-2">
        <label htmlFor={`status-${device.id}`} className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          id={`status-${device.id}`}
          value={newStatus}
          onChange={handleStatusChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="slobodan">Slobodan</option>
          <option value="zauzet">Zauzet</option>
          <option value="zauzet aktiviran">Zauzet aktiviran</option>
        </select>
      </div>
    </div>
  );
};

export default DeviceCard;
