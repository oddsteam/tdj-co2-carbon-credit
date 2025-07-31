'use client';
import FlourishEmbed from "@/components/Flourish";
import { useState } from "react";

const tabs = [
  { key: "tab1", label: "กราฟ1", flourishSrc: "visualisation/24432455" },
  { key: "tab2", label: "กราฟ2", flourishSrc: "visualisation/24432456" },
  { key: "tab3", label: "กราฟ3", flourishSrc: "visualisation/24432457" },
];


export default function Section61() {
  const [activeTab, setActiveTab] = useState("tab1");

  const currentSrc = tabs.find(tab => tab.key === activeTab)?.flourishSrc ?? "";

  return (
    <section className="w-full h-screen bg-[#011F1F] text-white px-8 flex  items-center justify-center space-y-10 snap-start">
      <div className="w-1/2 p-6 text-left">
        <p
          className="text-[16px] leading-[32px] indent-8"
          style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
        >
          ปัญหาความคลาดเคลื่อนของข้อมูล พื้นที่ป่าเป็นอีกหนึ่งประเด็นสำคัญที่กระทบต่อความน่าเชื่อถือของระบบการประเมินเครดิต
          โดยมีการตั้งข้อสังเกตว่าฐานข้อมูลจาก กรมป่าไม้ ที่ใช้ในกระบวนการออกเครดิตไม่สอดคล้องกับภาพถ่ายดาวเทียมของ GISTDA
          ซึ่งเกิดจากการนิยามและอ้างอิงพื้นที่สีเขียวและพื้นที่ป่าที่แตกต่างกัน
          ในขณะที่ประเทศไทยประกาศนโยบายเพิ่มพื้นที่สีเขียวและป่าไม้ตามยุทธศาสตร์ชาติและเป้าหมาย Net Zero
          แต่ข้อเท็จจริงเบื้องหลังกลับสะท้อนถึงความไม่ชัดเจนของ “ข้อมูลกลาง” ซึ่งเป็นฐานในการกำหนดนโยบาย
          และวัดผลความสำเร็จด้านสิ่งแวดล้อมของประเทศ
        </p>
        <br />
        <p
          className="text-[16px] leading-[32px] indent-8"
          style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
        >
          หากดูในระดับจังหวัด ความแตกต่างยิ่งชัดเจน ความขัดแย้งของชุดข้อมูลนี้ชี้ให้เห็นถึง{" "}
          <span className="text-[#3ED304] font-semibold">“ปัญหามาตรฐานกลาง”</span>{" "}
          ที่ยังไม่ชัดเจน ทั้งในด้านนิยามของพื้นที่ป่าและวิธีการประเมินศักยภาพในการดูดซับคาร์บอน
          ซึ่งนำไปสู่ข้อเรียกร้องจากภาควิชาการให้มีการปฏิรูปกลไกเหล่านี้อย่างจริงจัง
          เพื่อจัดทำมาตรฐานกลางที่ตรวจสอบได้ และเพื่อให้ทุกนโยบายที่ต้องอ้างอิงข้อมูลป่าไม้ของไทยนั้น
          ตั้งอยู่บนพื้นฐานของข้อเท็จจริง
        </p>
      </div>
      <div className="w-1/2 p-6 text-left">
        <div className="w-full h-[600px] bg-white/10 rounded-xl flex items-center justify-center">
          <FlourishEmbed src={currentSrc} />
        </div>
        <div className="flex justify-center gap-3 mt-6">
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
    </section>
  );
}
