import Image from "next/image";
import { ibm } from "@/fonts";

export default function ReferencesSection() {
  return (
    <section className="w-full bg-[#103A3A] text-white md:h-[832px]"
     style={{
      fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
     }}>
      <div className="flex flex-col h-full">
        {/* ส่วนบน: รูป + ข้อความ */}
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
                <button className="bg-white text-[#103A3A] px-6 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition">
                  ดูข้อมูลทั้งหมด
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ส่วนล่าง: Contributors */}
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
              <div className="w-full h-[115px] bg-[#F0F8F5] rounded-tl-[61px]  flex items-center justify-center gap-[25px]">
                <Image src="/images/logo-us-dep.png" alt="logo1" width={82} height={82} />
                <Image src="/images/logo-tdj.png" alt="logo2" width={82} height={82} />
                <Image src="/images/logo-tja.png" alt="logo3" width={82} height={82} />
                <Image src="/images/logo-odt.png" alt="logo4" width={82} height={82} />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
