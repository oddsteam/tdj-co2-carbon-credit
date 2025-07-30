'use client';

import FlourishEmbed from "@/components/Flourish";
import { chonburi } from "@/fonts";
import { useState } from "react";

const tabs = [
  { key: "tab1", label: "กราฟ1", flourishSrc: "visualisation/24425984" },
  { key: "tab2", label: "กราฟ2", flourishSrc: "visualisation/24426718" },
  { key: "tab3", label: "กราฟ3", flourishSrc: "visualisation/24426719" },
];

export default function Section43() {
  const [activeTab, setActiveTab] = useState("tab1");

  const currentSrc = tabs.find(tab => tab.key === activeTab)?.flourishSrc ?? "";

  return (
    <section className="bg-[linear-gradient(180deg,_#1C1B18_0%,_#393938_100%)] py-16 px-6 text-white h-screen snap-start">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="w-full max-w-2xl text-left">
          <p className="font-ibm-looped text-[16px] leading-[29px] pt-10">ข้อมูล</p>
          <h2 className={`${chonburi.className} text-[42px] leading-[100%]`}>
            สถิติย้อนหลัง
          </h2>
        </div>

        <div className="w-full max-w-2xl p-4 text-black shadow mt-6">
          <div className="w-full h-[400px]">
            <FlourishEmbed src={currentSrc} />
          </div>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`[width:99px] [height:17px] [border-radius:106px] [opacity:1] [transform:rotate(0deg)] transition-all ease-in-out cursor-pointer ${activeTab === tab.key ? "bg-[#E3E3E3]" : "bg-[#72A6AB]"}`}
              onClick={() => setActiveTab(tab.key)}
              aria-label={tab.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
