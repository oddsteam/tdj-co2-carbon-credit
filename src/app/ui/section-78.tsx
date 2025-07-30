"use client";

import Image from "next/image";
import { useState } from "react";
import { ibm } from "@/fonts";

export default function Section78() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="w-full bg-[#103A3A] text-white md:h-[832px]"
      style={{
        fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
      }}
    >
      <div className="flex flex-col h-full">
        {/* ส่วนบน */}
        <div className="w-full max-h-[591px] flex-grow-[3] py-16 px-4 md:px-20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 h-full">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/images/references-full.png"
                alt="reference documents combined"
                width={500}
                height={500}
                className="max-w-full h-auto"
              />
            </div>

            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
              <h2 className={`${ibm.className} font-bold text-[36px] leading-tight`}>
                แหล่งอ้างอิงข้อมูล
              </h2>
              <p className={`${ibm.className} font-normal text-[21px] leading-[38px] text-white/80`}>
                ขอขอบคุณข้อมูลจากหน่วยงานต่างๆ ที่ได้เผยแพร่ข้อมูลสู่สาธารณะ
                เพื่อให้เรานำข้อมูลมาวิเคราะห์
              </p>
              <div className="flex justify-center lg:justify-start">
                <button
                  className="w-[169px] h-[58px] rounded-[20px] px-[30px] py-[10px] bg-white/10 text-white text-sm font-medium cursor-pointer"
                  style={{
                    fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                    boxShadow: "inset 0 0 8px rgba(255,255,255,0.2)",
                  }}
                  onClick={() => setOpen(true)}
                >
                  ดูข้อมูลทั้งหมด
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ส่วนล่าง */}
        <div className="w-full flex-grow-[2]">
          <div className="flex flex-col lg:flex-row h-full">
            <div className="bg-[#022020] text-white w-full lg:w-[60%] px-8 py-6 space-y-4">
              <p className="font-bold text-[24px] leading-[100%] text-[#0BA17B] pt-5">
                Contributed
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm pt-5">
                <div>
                  <p className="font-bold text-[16px] leading-[100%] text-[#0BA17B]">Content & Data</p>
                  <p className="font-bold text-[16px] leading-[100%] pt-4">Chanita Ngammuan</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] leading-[100%] text-[#0BA17B]">Developer</p>
                  <p className="font-bold text-[16px] leading-[100%] pt-4">Alif Ruksaithong</p>
                </div>
                <div>
                  <p className="font-bold text-[16px] leading-[100%] text-[#0BA17B]">Designer</p>
                  <p className="font-bold text-[16px] leading-[100%] pt-4">Boonyavee Thanabumrung</p>
                </div>
              </div>
            </div>

            <div className="bg-[#022020] w-full lg:w-[40%] flex flex-col justify-end">
              <div className="w-full h-[115px] bg-[#F0F8F5] rounded-tl-[61px] flex items-center justify-center gap-[25px]">
                <Image src="/images/logo-us-dep.png" alt="logo1" width={82} height={82} />
                <Image src="/images/logo-tdj.png" alt="logo2" width={82} height={82} />
                <Image src="/images/logo-tja.png" alt="logo3" width={82} height={82} />
                <Image src="/images/logo-odt.png" alt="logo4" width={82} height={82} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-[#597676] text-white max-w-4xl w-full max-h-[90vh] rounded-xl p-6 overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white text-xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <h2
              className="mb-4 text-center font-normal py-8"
              style={{
                fontFamily: '"Chonburi", cursive',
                fontWeight: 400,
                fontSize: "42px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              แหล่งอ้างอิงข้อมูล
            </h2>
            <div
              className="font-bold"
              style={{
                fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "38px",
                letterSpacing: "0%",
              }}
            >
              <p className="text-[#103A3A]">ผู้ให้สัมภาษณ์</p>
              <p className="indent-8">สนธิ คชรัตน์ ผู้ทรงคุณวุฒิด้านสิ่งแวดล้อมและสุขภาพ จากชมรมนักวิชาการด้านสิ่งแวดล้อมไทย</p>
              <p className="indent-8">รองศาสตราจารย์ ดร.พงษ์ชัย ดำรงโรจน์วัฒนา ภาควิชาชีววิทยา คณะวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย และรองผู้อำนวยการศูนย์เครือข่ายการเรียนรู้เพื่อภูมิภาค</p>
              <p className="indent-8">สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (องค์การมหาชน) หรือ GISTDA</p>
              <p className="indent-8">นายอดิศักดิ์ ตุ้มอ่อน เจ้าหน้าที่ โครงการขับเคลื่อนนโยบายสาธารณะด้านทรัพยากรแร่ โครงการขับเคลื่อนนโยบายสาธารณะด้านทรัพยากรแร่ THE PROJECT FOR PUBLIC POLICY NO MINERAL RESOURCES : PPM</p>
              <p className="indent-8">กลุ่มองค์กรภาคประชาสังคมจังหวัดสุรินทร์</p>
              <p className="indent-8">นายณัฐพรรษ ตันบุญเอก ประธานเจ้าหน้าที่การเงินกลุ่ม บริษัท ดับบลิวเอชเอ คอร์ปอเรชั่น จำกัด (มหาชน)</p>

              <br />
              <br />
              <p className="text-[#103A3A]">การสนับสนุนข้อมูล</p>
              <p className="indent-8">องค์การบริหารจัดการก๊าซเรือนกระจก (องค์การมหาชน) หรือ อบก.</p>
              <p className="indent-8">กองขับเคลื่อนการลดก๊าซเรือนกระจก กรมการเปลี่ยนแปลงสภาพภูมิอากาศและสิ่งแวดล้อม</p>

              <br />
              <br />
              <p className="text-[#103A3A]">ที่มาข้อมูลจากอินเตอร์เน็ต</p>
              <p className="indent-8">https://ccpi.org/country/tha/</p>
              <p className="indent-8">https://www.dcce.go.th/datacenter/4376/</p>
              <p className="indent-8">https://tver.tgo.or.th/index.php</p>
              <p className="indent-8">https://carbonmarket.tgo.or.th/</p>
              <p className="indent-8">https://www.set.or.th/th/market/information/securities-list/thaiesghttps://forestinfo.forest.go.th/Content.aspx?id=9</p>
              <p className="indent-8">https://www.dcce.go.th/4335/https://www.ilaw.or.th/articles/49357https://sdfthai.org/prb-climate-change/</p>
              <p className="indent-8">https://www.bangkokbiznews.com/environment/1177784</p>
              <p className="indent-8">https://hub.mnre.go.th/th/knowledge/detail/63468</p>
            </div>
                      </div>
                    </div>
      )}
    </section>
  );
}
