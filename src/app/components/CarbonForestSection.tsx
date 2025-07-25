"use client";

import { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

const colors = ["#3498db", "#2ecc71", "#f39c12", "#e74c3c", "#9b59b6", "#1abc9c"];

const mockData = {
  bar: [
    { name: '2560', value: 30 },
    { name: '2561', value: 45 },
    { name: '2562', value: 50 },
    { name: '2563', value: 40 },
    { name: '2564', value: 70 },
    { name: '2565', value: 55 },
  ],
  line: [
    { name: '2560', ปริมาณก๊าซ: 400, การลดก๊าซ: 240 },
    { name: '2561', ปริมาณก๊าซ: 300, การลดก๊าซ: 139 },
    { name: '2562', ปริมาณก๊าซ: 200, การลดก๊าซ: 980 },
    { name: '2563', ปริมาณก๊าซ: 278, การลดก๊าซ: 390 },
    { name: '2564', ปริมาณก๊าซ: 189, การลดก๊าซ: 480 },
    { name: '2565', ปริมาณก๊าซ: 239, การลดก๊าซ: 380 },
  ],
  pie: [
    { name: 'ปลูกป่า', value: 40 },
    { name: 'พลังงาน', value: 25 },
    { name: 'ขนส่ง', value: 15 },
    { name: 'อุตสาหกรรม', value: 20 },
  ],
};

const tabs = [
  { key: "tab1", label: "ป่าคาร์บอน", chartType: "bar" },
  { key: "tab2", label: "พลังงาน", chartType: "line" },
  { key: "tab3", label: "ขนส่ง", chartType: "bar" },
  { key: "tab4", label: "อุตสาหกรรม", chartType: "line" },
  { key: "tab5", label: "เกษตร", chartType: "pie" },
  { key: "tab6", label: "อื่นๆ", chartType: "pie" },
];

export default function CarbonForestTabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderChart = (type: string) => {
    switch (type) {
      case "bar":
        return (
          <BarChart data={mockData.bar}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2ecc71" />
          </BarChart>
        );
      case "line":
        return (
          <LineChart data={mockData.line}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="ปริมาณก๊าซ" stroke="#3498db" />
            <Line type="monotone" dataKey="การลดก๊าซ" stroke="#e67e22" />
          </LineChart>
        );
      case "pie":
        return (
          <PieChart>
            <Pie
              data={mockData.pie}
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
              dataKey="value"
            >
              {mockData.pie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        );
      default:
        return (
          <BarChart data={mockData.bar}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2ecc71" />
          </BarChart>
        );
    }
  };

  const chartType = tabs.find(tab => tab.key === activeTab)?.chartType ?? "bar";

  return (
    <section className="bg-[#1C3A2F] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left: Text */}
        <div className="w-full md:w-1/2">
          <p className="text-[#CFF09E] text-sm">ป่าไม้และพื้นที่สีเขียว หรือ</p>
          <h2 className="text-3xl font-bold text-white mb-4">ป่าคาร์บอน</h2>
          <p className="text-sm leading-relaxed text-gray-200">
            คือวิธีที่มีประสิทธิภาพที่สุดในการลดก๊าซเรือนกระจก เพราะสามารถดูดซับและเก็บกักคาร์บอนได้ออกไซด์ได้ราว 0.95 ตันต่อไร่ต่อปี
            ขึ้นอยู่กับชนิดพันธุ์ พื้นที่ปลูก และการดูแล เป็น 1 ใน 7 วิธีการลดก๊าซเรือนกระจกตามแนวทางของโครงการ T-VER โดย อบก.
            เช่น การเพิ่มประสิทธิภาพพลังงาน พลังงานทดแทน การจัดการของเสีย ฯลฯ
          </p>
        </div>

        {/* Right: Chart */}
        <div className="w-full md:w-1/2 bg-white p-4 rounded text-black">
          <h3 className="font-semibold mb-2">กราฟแสดงข้อมูลโครงการ</h3>
          <ResponsiveContainer width="100%" height={300}>
            {renderChart(chartType)}
          </ResponsiveContainer>

          {/* Tabs */}
          <div className="flex justify-center gap-2 mt-6">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`w-4 h-4 rounded-full ${
                  activeTab === tab.key ? "bg-[#2ecc71]" : "bg-gray-300"
                }`}
                onClick={() => setActiveTab(tab.key)}
                aria-label={tab.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
