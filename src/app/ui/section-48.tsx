'use client';

import { chonburi, ibm } from "@/fonts";
import Image from "next/image";
import { useState } from "react";

export default function Section48() {
    const [open, setOpen] = useState(false);

    return (
        <section className="bg-[#011F1F] w-full h-screen flex justify-center py-20 px-4 snap-start">
            <div className="w-full max-w-4xl">

                <div className="flex items-center gap-4 mb-10">
                    <div className="w-[164px] h-[164px] relative rounded-full overflow-hidden">
                        <Image src="/images/person/sonti.png" alt="speaker" fill className="object-cover" />
                    </div>
                    <div className="pl-5">
                        <p className={`${ibm.className} font-bold text-[20px] leading-none`}>บทสัมภาษณ์</p>
                        <p className={`${chonburi.className} pt-3 font-normal text-[32px] leading-none`}>สนธิ คชรัตน์</p>
                    </div>
                </div>


                <div className="rounded-[20px] p-6 md:p-10 text-white bg-[#344243] backdrop-blur-[62px]">
                    <p className={`${ibm.className} text-[24px] font-semibold leading-[150%] font-ibm-plex-thai mb-4 text-[#3ED304]`}>
                        “เรากำลังใช้ต้นไม้บังปล่องควัน กลไกคาร์บอนเครดิตเป็นเครื่องมือ “การค้า” ปลูกป่าแค่ “ชดเชย” ไม่ได้ลดโลกร้อนจริง”
                    </p>

                    <p className={`${ibm.className} text-[20px] font-normal leading-[38px] intet-8`}>
                        ประเทศไทยตั้งเป้าไว้สูงถึง 120 ล้านตัน CO₂ ต่อปี ที่จะต้องดูดซับจากภาคป่าไม้เพื่อให้บรรลุ
                        Carbon Neutrality แต่จากข้อมูลล่าสุด กลับพบว่าป่าไม้ไทยสามารถดูดซับ CO₂ ได้จริงเพียง 29 ล้านตันต่อปี เท่านั้น
                        ช่องว่าง...กว่า 90 ล้านตันนี้ไม่ได้สะท้อนแค่ความท้าทายของระบบการดูดซับคาร์บอนจาก ธรรมชาติ แต่กำลังชี้ให้เห็นว่า เป้าหมายของประเทศอาจกลายเป็น “ภาพฝัน” ...
                    </p>
                    <div className="flex justify-center pt-5">
                        <button
                            className="w-[169px] h-[58px] rounded-[20px] px-[30px] py-[10px] bg-white/10 text-white text-sm font-medium cursor-pointer self-center"
                            style={{
                                fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                                boxShadow: "inset 0 0 8px rgba(255,255,255,0.2)",
                            }}
                            onClick={() => setOpen(true)}
                        >
                            อ่านเพิ่มเติม
                        </button>
                    </div>
                </div>
            </div>

            {open && (
                <div
                    className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-[#011F1F] text-white max-w-4xl w-full max-h-[90vh] rounded-xl p-6 relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-white/70 hover:text-white text-xl"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>

                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-[164px] h-[164px] relative rounded-full overflow-hidden">
                                <Image src="/images/person/sonti.png" alt="speaker" fill className="object-cover" />
                            </div>
                            <div className="pl-5">
                                <p className={`${ibm.className} font-bold text-[20px] leading-none`}>บทสัมภาษณ์</p>
                                <p className={`${chonburi.className} pt-3 font-normal text-[32px] leading-none`}>สนธิ คชรัตน์</p>
                            </div>
                        </div>

                        {/* ✅ scrollable area */}
                        <div className="rounded-[20px] p-6 md:p-10 text-white bg-[#344243] backdrop-blur-[62px] max-h-[60vh] overflow-y-auto">
                            <p className={`${ibm.className} text-[24px] font-semibold leading-[150%] text-[#3ED304] mb-4`}>
                                “เรากำลังใช้ต้นไม้บังปล่องควัน กลไกคาร์บอนเครดิตเป็นเครื่องมือ “การค้า” ปลูกป่าแค่ “ชดเชย” ไม่ได้ลดโลกร้อนจริง”
                            </p>
                            <p className={`${ibm.className} text-[20px] font-normal leading-[38px] indent-8`}>
                                สนธิ คชรัตน์ ผู้ทรงคุณวุฒิด้านสิ่งแวดล้อมและสุขภาพ จากชมรมนักวิชาการด้านสิ่งแวดล้อมไทย ระบุว่า ประเทศไทยตั้งเป้าไว้สูงถึง 120 ล้านตัน CO₂ ต่อปี ที่จะต้องดูดซับจากภาคป่าไม้เพื่อให้บรรลุ Carbon Neutrality แต่จากข้อมูลล่าสุด กลับพบว่าป่าไม้ไทยสามารถดูดซับ CO₂ ได้จริงเพียง 29 ล้านตันต่อปี เท่านั้น ช่องว่างกว่า 90 ล้านตันนี้ ไม่ได้สะท้อนแค่ความท้าทายของระบบการดูดซับคาร์บอนจากธรรมชาติ แต่กำลังชี้ให้เห็นว่า เป้าหมายของประเทศอาจกลายเป็น “ภาพฝัน” หากยังคงยึดติดกับกลไกชดเชย (offsetting) ผ่านการปลูกป่า มากกว่าการลดการปล่อยจากต้นทาง (source reduction) อย่างแท้จริงในทางปฏิบัติ ขณะที่โรงงานและภาคธุรกิจยังคงปล่อยก๊าซเรือนกระจกจากปล่องควันในระดับเดิม กลับเลือกใช้การ ซื้อเครดิตจากโครงการปลูกป่า มา “ชดเชย” การปล่อย โดยไม่มีการลดการปล่อยจริงแต่อย่างใด ยิ่งไปกว่านั้น ตัวเลขอัตราการดูดซับคาร์บอน เช่น 6.09 ตันต่อไร่ ที่ใช้ในการคำนวณเครดิต ยังขาดการตรวจสอบอิสระ และไม่มีงานวิจัยรองรับอย่างชัดเจน
                                กรณีนี้จึงตั้งคำถามถึง “ความน่าเชื่อถือของมาตรฐาน” ในตลาดคาร์บอนไทย และชี้ว่าระบบยังเปิดช่องให้มีการ ฟอกเขียว (Greenwashing) ผ่านโครงการปลูกป่า โดยเฉพาะเมื่อกลไกคาร์บอนเครดิตถูกใช้เป็นเครื่องมือเพื่อ “การค้า” มากกว่าการลดคาร์บอนอย่างจริงจัง“ภาพรวมเหมือนปล่อยลด แต่ปล่องควันยังทำงาน” นายสนธิกล่าว พร้อมชี้ว่า การซื้อเครดิตป่าไม้เพื่อแลกกับสิทธิในการส่งออกไปยังยุโรปตามมาตรการ CBAM (Carbon Border Adjustment Mechanism) เป็นเพียงการปรับตัวเพื่อเลี่ยงภาษี ไม่ใช่ความตั้งใจในการลดคาร์บอนจากต้นทาง คำถามจึงไม่ได้อยู่ที่ว่าเราปลูกต้นไม้พอหรือไม่ แต่อยู่ที่ว่าเรากำลังใช้ต้นไม้บังปล่องควันหรือเปล่า? ประเทศไทยอาจต้องทบทวนแนวทางทั้งระบบ หากต้องการไปให้ถึงเป้าหมาย Carbon Neutrality อย่างแท้จริง ไม่ใช่แค่ตัวเลขบนกระดาษ.
                                หากประเทศไทยยังคงเดินหน้าเพียงในรูปแบบ “การชดเชย” โดยไม่พัฒนาระบบตรวจวัดและรายงานคาร์บอนที่เป็นข้อบังคับอย่างเป็นระบบ อุตสาหกรรมไทยอาจเผชิญกับภาวะสูญเสียความสามารถในการแข่งขันในระยะยาว เมื่อคาร์บอนกลายเป็น “ต้นทุนใหม่” ของเศรษฐกิจโลกที่ไม่มีใครเลี่ยงได้
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}
