import { ibm } from "@/fonts";
import Image from "next/image";

export default function Section51() {
    return (
        <section className="w-full md:h-screen bg-[#011F1F] flex flex-col items-center justify-center text-white text-center space-y-6 snap-start">
            <div className="w-[1130px] h-[384px] mx-auto bg-[#17332A] text-white px-10 py-8 rounded-tr-[100px] rounded-bl-[100px] flex">
                <div className="w-[28%] flex flex-col justify-start text-left pt-5">
                    <p
                        className="text-[16px] leading-[29px] text-left"
                        style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
                    >
                        คนไทย
                    </p>
                    <p
                        className="text-[42px] leading-[100%] mt-1 text-left"
                        style={{ fontFamily: '"Chonburi", cursive' }}
                    >
                        รู้ไหมว่า <span className="text-white/70">?</span>
                    </p>
                </div>

                {/* ขวา 70% */}
                <div className="w-[72%] flex flex-col pl-10 text-left pt-15">
                    <div className="text-sm leading-7 text-[16px] leading-[29px]" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
                        <p>
                            บริษัทในตลาดหลักทรัพย์เพียง 63 บริษัท ในปี 2567 และ ปี 2568 (30 เมษายน) เพียง 245 บริษัท จากทั้งหมด 922 บริษัทที่ยอมเปิดข้อมูลปล่อยก๊าซเรือนกระจก
                        </p>
                        <p>บริษัทยักษ์  ....  ใช้วิธีไหนลด + ชดเชยการปล่อยก๊าซเรือนกระจก</p>
                        <p>นายทุนใหญ่ ...  ลับ ลวง พราง ข้อมูลซื้อขาย”คาร์บอนเครดิต” (Carbon Credit) อย่างไร</p>
                        <p>ไทยแลนด์...   กำลังโดนเก็บ “ภาษีคาร์บอนข้ามพรมแดน” ฉบับแรกของโลกจากอียู (CBAM)</p>
                        <p>นายทุน รู้หรือไม่......“คาร์บอนเครดิตไทย “ ไม่ผ่านเกณฑ์ EU บทเรียนราคาแพง ต้นทุนจมดิ่ง</p>
                    </div>

                    <div className="flex justify-between items-start mt-10">
                        <p className="text-[#8FF259] text-[16px] leading-[29px]" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
                            บริษัทในตลาดหลักทรัพย์ที่ยอมเปิดเผยข้อมูล <br />
                            ปล่อยก๊าซเรือนกระจก
                        </p>

                        <Image
                            src="/images/set-open-data-blur-text.png"
                            alt="Greenwashing"
                            width={300}
                            height={86}
                            className="translate-y-10 -translate-x-50"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
