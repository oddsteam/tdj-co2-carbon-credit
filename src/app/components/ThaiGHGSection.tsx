"use client";

import { useState } from "react";

import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from "recharts";

const dataTotal = [
  { year: 2543, emission: 200 },
  { year: 2544, emission: 210 },
  { year: 2545, emission: 220 },
  { year: 2546, emission: 230 },
  { year: 2547, emission: 240 },
  { year: 2548, emission: 250 },
  { year: 2549, emission: 260 },
  { year: 2550, emission: 265 },
  { year: 2551, emission: 270 },
  { year: 2552, emission: 280 },
  { year: 2553, emission: 275 },
  { year: 2554, emission: 260 },
  { year: 2555, emission: 255 },
  { year: 2556, emission: 260 },
  { year: 2557, emission: 270 },
  { year: 2558, emission: 275 },
  { year: 2559, emission: 270 },
  { year: 2560, emission: 265 },
  { year: 2561, emission: 260 },
  { year: 2562, emission: 258 },
  { year: 2563, emission: 255 },
  { year: 2564, emission: 250 },
  { year: 2565, emission: 252 },
];

const dataBySector = [
  { year: 2543, transport: 100, energy: 80, industry: 60, agriculture: 40, forestry: -20 },
  { year: 2544, transport: 105, energy: 82, industry: 62, agriculture: 41, forestry: -22 },
  { year: 2545, transport: 110, energy: 85, industry: 65, agriculture: 42, forestry: -23 },
  { year: 2546, transport: 115, energy: 88, industry: 68, agriculture: 43, forestry: -25 },
  { year: 2547, transport: 120, energy: 90, industry: 70, agriculture: 44, forestry: -28 },
  { year: 2548, transport: 123, energy: 92, industry: 72, agriculture: 45, forestry: -30 },
  { year: 2549, transport: 125, energy: 95, industry: 74, agriculture: 46, forestry: -33 },
  { year: 2550, transport: 128, energy: 97, industry: 76, agriculture: 47, forestry: -36 },
  { year: 2551, transport: 130, energy: 100, industry: 78, agriculture: 48, forestry: -38 },
  { year: 2552, transport: 132, energy: 102, industry: 80, agriculture: 49, forestry: -40 },
  { year: 2553, transport: 130, energy: 100, industry: 79, agriculture: 48, forestry: -42 },
  { year: 2554, transport: 125, energy: 98, industry: 78, agriculture: 47, forestry: -44 },
  { year: 2555, transport: 122, energy: 95, industry: 75, agriculture: 46, forestry: -46 },
  { year: 2556, transport: 120, energy: 92, industry: 74, agriculture: 45, forestry: -47 },
  { year: 2557, transport: 121, energy: 91, industry: 74, agriculture: 45, forestry: -48 },
  { year: 2558, transport: 122, energy: 90, industry: 75, agriculture: 45, forestry: -49 },
  { year: 2559, transport: 123, energy: 89, industry: 75, agriculture: 44, forestry: -50 },
  { year: 2560, transport: 124, energy: 88, industry: 76, agriculture: 43, forestry: -52 },
  { year: 2561, transport: 123, energy: 86, industry: 77, agriculture: 42, forestry: -54 },
  { year: 2562, transport: 122, energy: 85, industry: 78, agriculture: 41, forestry: -56 },
  { year: 2563, transport: 121, energy: 84, industry: 79, agriculture: 40, forestry: -58 },
  { year: 2564, transport: 120, energy: 83, industry: 80, agriculture: 39, forestry: -60 },
  { year: 2565, transport: 118, energy: 82, industry: 81, agriculture: 38, forestry: -62 },
];

const dataDelta = [
  { sector: "ภาคขนส่ง", value: 5000 },
  { sector: "ภาคพลังงาน", value: 2500 },
  { sector: "ภาคอุตสาหกรรม", value: 1000 },
  { sector: "ภาคเกษตร", value: 500 },
  { sector: "ภาคป่าไม้และการใช้ที่ดิน", value: -3000 },
];
export default function GHGChartTabs() {
  const [activeTab, setActiveTab] = useState<"total" | "bySector" | "delta">("total");

  const renderChart = () => {
    if (activeTab === "total") {
      return (
        <BarChart data={dataTotal}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="emission" fill="#3498db" />
        </BarChart>
      );
    } else if (activeTab === "bySector") {
      return (
        <LineChart data={dataBySector}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="transport" name="ภาคขนส่ง" stroke="#e74c3c" />
          <Line type="monotone" dataKey="energy" name="ภาคพลังงาน" stroke="#f39c12" />
          <Line type="monotone" dataKey="industry" name="ภาคอุตสาหกรรม" stroke="#2980b9" />
          <Line type="monotone" dataKey="agriculture" name="ภาคเกษตร" stroke="#27ae60" />
          <Line type="monotone" dataKey="forestry" name="ภาคป่าไม้และที่ดิน" stroke="#16a085" />
        </LineChart>
      );
    } else {
      return (
        <BarChart layout="vertical" data={dataDelta}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="sector" type="category" />
          <Tooltip />
          <Bar dataKey="value" fill="#e74c3c" />
        </BarChart>
      );
    }
  };

  return (
    <section className="bg-[#011F1F] py-16 px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Chart container */}
        <div className="bg-white w-full max-w-2xl p-4 text-black shadow">
          <h2>สถิติการปล่อยก๊าซเรือนกระจกของประเทศไทย</h2>
          <p>GHG Emission</p>
          <p>ระหว่างปี 2543 - 2565</p>
          <ResponsiveContainer width="100%" height={360}>
            {renderChart()}
          </ResponsiveContainer>
          <p className="text-xs text-center text-gray-600 mt-2">
            Source: Thailand’s First Biennial Transparency Report
          </p>
        </div>

        {/* Tab Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {["total", "bySector", "delta"].map((key) => (
            <button
              key={key}
              className={`[width:99px] [height:17px] [border-radius:106px] [opacity:1] [transform:rotate(0deg)] transition-all ease-in-out cursor-pointer ${
                activeTab === key ? "bg-[#E3E3E3]" : "bg-[#72A6AB]"
              }`}
              onClick={() => setActiveTab(key as any)}
              aria-label={key}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
