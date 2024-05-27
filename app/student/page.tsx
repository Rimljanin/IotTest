"use client";

import { useState, useEffect } from "react";
import StudentDeviceCard from "../../components/StudentDeviceCard";

interface Device {
  id: number;
  name: string;
  status: 'slobodan' | 'zauzet' | 'zauzet aktiviran';
  student: string;
}

const initialDevices: Device[] = [
  { id: 1, name: "Uređaj 1", status: "slobodan", student: "" },
  { id: 2, name: "Uređaj 2", status: "zauzet", student: "Ivan Horvat" },
  { id: 3, name: "Uređaj 3", status: "zauzet aktiviran", student: "Ana Kovač" },
];

const StudentPage = () => {
  const [device, setDevice] = useState<Device | null>(null);
  const currentStudent = "Ivan Horvat"; // Pretpostavimo da je trenutni student "Ivan Horvat"

  useEffect(() => {
    const rentedDevice = initialDevices.find(
      (device) => device.student === currentStudent
    );
    setDevice(rentedDevice || null);
  }, [currentStudent]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-100">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-gray-900">Moj Uređaj</h1>
      </header>

      {device ? (
        <StudentDeviceCard device={device} />
      ) : (
        <p className="text-xl text-gray-700">Nema iznajmljenog uređaja.</p>
      )}
    </main>
  );
};

export default StudentPage;
