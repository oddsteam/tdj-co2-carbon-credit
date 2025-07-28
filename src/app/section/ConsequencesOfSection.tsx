// components/ClimateImpactCard.tsx
"use client";

import Image from "next/image";

export default function ConsequencesOfSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0" style={{
        background: `linear-gradient(180deg, #393938 36.66%, #727D7A 100%)`,
      }} />

      <Image
        src="/images/cloud-2.png"
        alt="cloud background"
        fill
        className="object-cover z-0"

      />


      <div className="relative z-10 max-w-4xl mx-auto mt-24 p-10 rounded-[50px] backdrop-blur-[62px] bg-black/40 text-white">
        <p className="text-sm text-gray-300">แท้จริงแล้ว</p>
        <h2 className="text-4xl font-bold text-white mb-6">ผลสืบเนื่องจาก</h2>
        <div className="space-y-4 leading-relaxed text-base">
          <p>
            ภาวะโลกร้อน (Global Warming) ได้สร้างวิกฤติใหญ่เป็นปัญหาภาวะการระบายไปทั่วโลกปัจจุบันมีการเปลี่ยนไปใช้คำว่า
            “โลกลวก” หรือ “ภาวะโลกลวกเดือด” (Global Boiling) เพื่อเรียกสภาวะที่โลกร้อนขึ้นอย่างรุนแรงและรวดเร็ว
          </p>
          <p>
            จากเดิม ซึ่ง <span className="text-yellow-400 font-semibold">สาเหตุสำคัญคือการ ปล่อยก๊าซเรือนกระจก</span>
            โดยประเทศไทยปล่อยก๊าซเรือนกระจกเป็น
            <span className="text-yellow-400 font-semibold"> อันดับที่ 24 ของโลก</span> จากดัชนี CCPI 2025
          </p>
          <p>
            ทีมอนาลิสจากชมรมคนรุ่นใหม่ได้สำรวจข้อมูลเชิงลึกแหล่งประเทศไทย Thailand Data Journalism Network (TDJ) หรือ
            “ทีดีเจ” ได้ทำการวิเคราะห์ข้อมูลที่ได้จาก โอเพ่นเดต้า (open data)
            ของหน่วยงานภาครัฐและภาคธุรกิจ เพื่อดูรูปแบบข้อมูลและการระบาย
          </p>
          <p>
            <span className="text-yellow-400 font-semibold">
              ปัญหาการปล่อยก๊าซเรือนกระจก และ เครื่องขยายการเรือนร้อนของบริษัทขนาดใหญ่ในไทย
            </span>
            เพื่อเน้นไปสู่การช่วยกันหาทางออกที่เหมาะสม และเป็นรูปธรรม
          </p>
          <p>
            แต่ที่ผ่านมานั้น <span className="text-yellow-400 font-semibold">มีคำถามที่ไม่ตรงไปตรงมา</span> ต่อข้อมูลสู่สังคมว่าจริงที่มาจากการปล่อยและการลด
            ก๊าซเรือนกระจก? มหานครที่เห็นในปัจจุบันกำลังเปลี่ยนไปวิกฤตนี้ถูกนำเสนอคุณค่าทำให้สำนึกยังคง
          </p>
          <p>
            <span className="text-yellow-400 font-semibold">
              เสี่ยงต่อผลกระทบโลกร้อนมากยิ่งขึ้น ทั้งจากตัวชี้วัดสภาพภูมิอากาศแปรปรวน (Climate change)
            </span>{" "}
            จากบทลงโทษทางเศรษฐกิจ ผลกระทบต่อภาคการเกษตร ฯลฯ
          </p>
        </div>
      </div>

    </section>
  );
}
