"use client";

import Image from "next/image";
import { chonburi, ibm } from "@/fonts";


export default function SectionMap() {

  return (
    <section className="w-full h-screen bg-[#011F1F] flex flex-col items-center justify-center text-white text-center space-y-10 px-4 snap-start">
      <p className={`${ibm.className} font-bold text-[32px] leading-[100%] tracking-[-1%]`}>ตำแหน่งโครงการภาคป่าไม้ </p>
        <iframe
        width="960"
        height="660"
        src="https://lookerstudio.google.com/embed/reporting/9d22e19c-5f43-425a-824a-54c98d71a5c8/page/p_taurod9iud"
        style={{ border: 0 }}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        className="rounded-xl shadow-lg"
      />
      <p className={`${ibm.className} font-normal text-[12px] leading-[100%] tracking-[-1%]`}>* ทางทีมได้ใช้ปัญญาประดิษฐ์(AI) ในการช่วยอ่านข้อมูลโครงการจากไฟล์ PDF อาจจะมีข้อมูลบางส่วนคลาดเคลื่อนได้</p>
    </section>
  );
}
