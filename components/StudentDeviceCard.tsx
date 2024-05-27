"use client";

interface Device {
  id: number;
  name: string;
  status: 'slobodan' | 'zauzet' | 'zauzet aktiviran';
  student: string;
}

interface StudentDeviceCardProps {
  device: Device;
}

const statusColors: { [key in Device['status']]: string } = {
  slobodan: "bg-green-200",
  zauzet: "bg-yellow-200",
  "zauzet aktiviran": "bg-red-200",
};

const StudentDeviceCard: React.FC<StudentDeviceCardProps> = ({ device }) => {
  return (
    <div className={`p-4 rounded shadow-md ${statusColors[device.status]}`}>
      <h3 className="text-lg font-bold">Uređaj ID: {device.id}</h3>
      <p>Status: {device.status}</p>
    </div>
  );
};

export default StudentDeviceCard;
