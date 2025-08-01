'use client';

import FlourishEmbed from "@/components/Flourish";
import { useState } from "react";

const tabs = [
    { key: "tab1", label: "กราฟ1", flourishSrc: "visualisation/24432013" },
    { key: "tab2", label: "กราฟ2", flourishSrc: "visualisation/24432014" },
];

export default function Section52() {
    const [activeTab, setActiveTab] = useState("tab1");

    const currentSrc = tabs.find(tab => tab.key === activeTab)?.flourishSrc ?? "";

    return (
        <section className="w-full h-screen bg-[#011F1F] flex items-center justify-center text-white text-center snap-start">
            <div className="w-full max-w-[1130px] flex flex-row">
                <div className="w-1/2 p-6 text-left">
                    <div className="w-[463px]">
                        <p
                            className="text-[20px] leading-[29px]"
                            style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
                        >
                            ป่าไม้กลายเป็นกลไก
                        </p>
                        <p
                            className="text-[42px] leading-[100%] mb-5 mt-2"
                            style={{ fontFamily: '"Chonburi", cursive' }}
                        >
                            เครื่องมือฟอกเขียว
                        </p>
                        <p
                            className="text-[16px] leading-[32px] indent-8"
                            style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
                        >
                            คาร์บอนเครดิตขององค์กรหรือบริษัทบางแห่งโดยเฉพาะ
                            การใช้ "ป่าสงวนฯ “ป่าชุมชน” ซึ่งเป็นทรัพยากรส่วนรวมของ ประเทศมาใช้ทำโครงการคาร์บอนเครดิตโดยภาคเอกชนและ จัดสรรการแบ่งปันผลประโยชน์แบบเอารัดเอาเปรียบข้อมูลพื้นที่ป่า กรมป่าไม้ แสดงพื้นที่ป่าไม้ของประเทศไทยในระยะ 10 ปี (2556-2566) พบว่าลดลงไป 301,383.78 ไร่
                        </p>
                        <br></br>
                        <p
                            className="text-[18px] leading-[32px] font-bold indent-8"
                            style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
                        >
                            หากนำมาวิเคราะห์จากข้อมูลโครงการคาร์บอนเครดิต
                            ภาคป่า ไม้ทั้ง 110 โครงการ มีถึง 32 โครงการที่ตั้งอยู่บนพื้นที่
                            ป่าสงวนฯฯและป่าชุมชน ซึ่งเริ่มดำเนินการระหว่างปี
                            2556-2557
                        </p>
                        <br></br>
                        <p
                            className="text-[16px] leading-[32px] indent-8"
                            style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
                        >
                            ซึ่งกลายเป็นประเด็น ที่ถูกจับตามองว่าระบบคาร์บอนเครดิตกำลังเปิดช่องให้กลุ่มบริษัทและนายทุนใหญ่เข้าถึงสิทธิ การใช้ พื้นที่ป่า ซึ่งโดยหลักการแล้วควรอยู่ภายใต้ระบบการ
                            จัดการที่เป็นธรรม โปร่งใสและยึดประโยชน์ของสาธารณะเป็นที่ตั้ง
                        </p>
                    </div>
                </div>

                <div className="w-1/2 p-6">
                    <div className="w-full h-full bg-white/10 rounded-xl flex items-center justify-center">
                        <FlourishEmbed src={currentSrc} />
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
            </div>
        </section>
    );
}
