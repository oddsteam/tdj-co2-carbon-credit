'use client';

import { useState } from "react";
import { ibm } from "@/fonts";
import { chonburi } from "@/fonts";
import FlourishEmbed from "@/components/Flourish";

const tabs = [
  { key: "tab1", label: "กราฟ1", flourishSrc: "visualisation/22577782" },
  { key: "tab2", label: "กราฟ2", flourishSrc: "visualisation/23409237" },
  { key: "tab3", label: "กราฟ3", flourishSrc: "visualisation/23409316" },
  { key: "tab4", label: "กราฟ4", flourishSrc: "visualisation/23409488" },
];

export default function Section45() {
  const [activeTab, setActiveTab] = useState("tab1");

  const currentSrc = tabs.find(tab => tab.key === activeTab)?.flourishSrc ?? "";

  return (
    <section className="w-full h-screen overflow-hidden text-white py-6 px-4 snap-start"
      style={{
        background: `linear-gradient(0deg, #00201F 8.05%, #9F9F9C 132.87%)`,
      }}>

      <div className="flex flex-col">
        <div className="bg-[#011F1F] text-white px-6 py-8 md:px-12 rounded-bl-[100px] rounded-tr-[100px] w-[90%] h-[175px] mx-auto">
          <div className="flex h-full items-center pl-20">
            <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
              <div className="w-full md:w-2/6 text-lg md:text-xl">
                <div className={`mb-1 ${ibm.className} text-[16px] leading-[29px] font-normal`}>คนไทย</div>
                <div className={`${chonburi.className} text-[42px] leading-[100%] font-normal`}>รู้ไหมว่า ?</div>
              </div>

              <div className="w-full md:w-4/6 text-sm md:text-base leading-relaxed">
                <p className={`${ibm.className} text-[16px] leading-[29px] font-normal pt-5`}>
                  คาร์บอนเครดิตจากป่าไม้...ปลูกป่า “ชดเชย” ดูดซับคาร์บอนดีที่สุด<br />
                  กลไกฟอกเขียว (Greenwashing) ต้นไม้ไม่งับปล่องควันคาร์บอน
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="flex-[4] flex">
        <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-8 mt-4">

          <div className="w-full md:w-1/2 mt-16">
            <p className={`${ibm.className} text-[16px] leading-[29px] font-normal`}>ป่าไม้และพื้นที่สีเขียว หรือ</p>
            <h2 className={`${chonburi.className} text-[42px] leading-[100%] font-normal my-4`}>..ป่าคาร์บอน</h2>
            <div className="max-w-[437px]  w-full">
              <p className={`${ibm.className} text-[16px] leading-[32px] font-normal`}>
                คือวิธีที่มีประสิทธิภาพที่สุดในการลดก๊าซเรือนกระจก เพราะสามารถดูดซับและเก็บกักคาร์บอนได้ออกไซด์ได้ราว 0.95 ตันต่อไร่ต่อปี
                ขึ้นอยู่กับชนิดพันธุ์ พื้นที่ปลูก และการดูแล เป็น 1 ใน 7 วิธีการลดก๊าซเรือนกระจกตามแนวทางของโครงการ T-VER โดย อบก.
                เช่น การเพิ่มประสิทธิภาพพลังงาน พลังงานทดแทน การจัดการของเสีย ฯลฯ
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-4 h-[550px] rounded text-black">
            <FlourishEmbed src={currentSrc} />

            <div className="flex justify-center gap-2 mt-6">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  className={`[width:99px] [height:12px] [border-radius:106px] [opacity:1] [transform:rotate(0deg)] transition-all ease-in-out cursor-pointer ${activeTab === tab.key ? "bg-[#E3E3E3]" : "bg-[#72A6AB]"}`}
                  onClick={() => setActiveTab(tab.key)}
                  aria-label={tab.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
