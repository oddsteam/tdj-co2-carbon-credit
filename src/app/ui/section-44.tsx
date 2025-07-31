// components/ClimateImpactCard.tsx
"use client";

import { chonburi, ibm } from "@/fonts";
import Image from "next/image";

export default function Section44() {
  return (
    <section className="relative w-full h-screen overflow-hidden snap-start">
      <div className="absolute inset-0 z-0" style={{
        background: `linear-gradient(180deg, #393938 36.66%, #727D7A 100%)`,
      }} />

      <Image
        src="/images/cloud-2.png"
        alt="cloud background"
        fill
        className="object-cover z-0"

      />

      <div className="relative z-10 max-w-[930px] mx-auto mt-24 p-10 rounded-[50px] backdrop-blur-[62px] bg-black/40 text-white">
        <p className={`${ibm.className} font-normal text-[16px] leading-[29px] tracking-[0] text-white`}>แท้จริงแล้ว</p>
        <h2 className={`${chonburi.className} font-normal text-[42px] leading-[100%] tracking-[0]`}>ผลสืบเนื่องจาก</h2>
        <div className="space-y-4 leading-relaxed text-base pt-10">
          <p className={`${ibm.className} font-normal text-[16px] leading-[31px] tracking-[0.48px] text-white indent-8`}>
            ภาวะโลกร้อน (Global Warming)<br />ได้สร้างวิกฤติใหญ่เป็นปัญหากระทบไปทั่วโลกปัจจุบันมีการเปลี่ยนไปใช้คำว่า "โลกเดือด" หรือ "ภาวะโลกเดือด" (Global Boiling) เพื่อเรียกสภาวะที่โลกร้อนขึ้นอย่างรุนแรงและรวดเร็ว กว่าเดิม ซึ่ง
            <span className="font-bold text-[16px] leading-[31px] tracking-[0.48px] text-[#D39A09]"> สาเหตุสำคัญคือการ ปล่อยก๊าซเรือนกระจก</span>  โดยประเทศไทยปล่อยก๊าซเรือนกระจกมากเป็น
            <span className="font-bold text-[16px] leading-[31px] tracking-[0.48px] text-[#D39A09]">อันดับที่ 24 ของโลก</span> จากดัชนี CCPI 2025
          </p>
          <p className={`${ibm.className} font-normal text-[16px] leading-[31px] tracking-[0.48px] text-white indent-8`}>
            ทีมอาสาสมัครจากชมรมเครือข่ายนักสื่อสารข้อมูลเชิงลึกแห่งประเทศไทย Thailand Data Journalism Network (TDJ) หรือ “ทีดีเจ” ได้นำข้อมูลตัวเลขจาก โอเพ่นดาต้า (open data)
            ของหลายหน่วยงานมาวิเคราะห์ร่วมกัน เพื่อสรุปข้อมูลและภาพรวมของ
            <span className="font-bold text-[16px] leading-[31px] tracking-[0.48px] text-[#D39A09]">ปัญหาการปล่อยก๊าซเรือนกระจก และ การซื้อขายคาร์บอนเครดิตของบริษัทขนาดใหญ่ในไทย </span>
            เพื่อนำไปสู่การช่วยกันหาทางออกที่เหมาะสม และเป็นรูปธรรม
          </p>
          <p className={`${ibm.className} font-normal text-[16px] leading-[31px] tracking-[0.48px] text-white indent-8`}>
            แต่กลับพบว่า
            <span className="font-bold text-[16px] leading-[31px] tracking-[0.48px] text-[#D39A09]">มีความไม่โปร่งใส</span>
            ในการเปิดเผยชุดข้อมูลที่เกี่ยวข้องกับการปล่อยและการลด ก๊าซเรือนกระจกในหลายพื้นที่ และหลายประเภทซึ่งอาจนำไปสู่วิกฤติใหญ่ในอนาคตทำให้คนไทยต้อง
            <span className="font-bold text-[16px] leading-[31px] tracking-[0.48px] text-[#D39A09]">เสี่ยงต่อผลกระทบโลกร้อนมากกว่าเดิมได้ ทั้งจากภัยพิบัติสภาพภูมิอากาศแปรปรวน (Climate change) จากบทลงโทษทางเศรษฐกิจ ผลกระทบต่อภาคการเกษตร ฯลฯ</span>
          </p>
        </div>
      </div>

    </section>
  );
}
