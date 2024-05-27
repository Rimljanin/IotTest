"use client";

import { useState } from "react";
import DeviceCard from "../../components/DeviceCard";

interface Device {
  id: number;
  name: string;
  status: 'slobodan' | 'zauzet' | 'zauzet aktiviran';
  student: string;
}

const initialDevices: Device[] = [
  { id: 1, name: "Uređaj 1", status: "slobodan", student: "Pero Perić" },
  { id: 2, name: "Uređaj 2", status: "zauzet", student: "Ivan Horvat" },
  { id: 3, name: "Uređaj 3", status: "zauzet aktiviran", student: "Ana Kovač" },
];

const AdminPage = () => {
  const [devices, setDevices] = useState(initialDevices);

  const handleUpdateStatus = (id: number, status: 'slobodan' | 'zauzet' | 'zauzet aktiviran') => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id
          ? { ...device, status } // Zadržavamo ime studenta, ne mijenjamo student polje
          : device
      )
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900">Admin Panel - IoT Uređaji</h1>
      </header>

      <section className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {devices.map((device) => (
          <DeviceCard
            key={device.id}
            device={device}
            onUpdateStatus={handleUpdateStatus}
          />
        ))}
      </section>
    </main>
  );
};

export default AdminPage;
