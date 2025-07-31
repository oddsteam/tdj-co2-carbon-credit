'use client';

import { chonburi, ibm } from "@/fonts";
import Image from "next/image";
import { useState } from "react";

export default function Section58() {
    const [open, setOpen] = useState(false);

    return (
        <section className="bg-[#011F1F] h-screen w-full flex justify-center py-20 px-4 snap-start">
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
                    <div className="text-center space-y-2">
                        <p
                            className="text-[30px] leading-[100%] font-semibold text-[#3ED304]"
                            style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
                        >
                            5 ปมปัญหา ลับลวงพราง “ฟอกเขียวทางลัด” ปลูกป่าแค่ “ชดเชย”
                        </p>

                        <p
                            className="text-[24px] leading-[100%] font-semibold text-[#3ED304] py-2"
                            style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
                        >
                            ไม่ได้ลดโลกร้อนจริงชาวบ้านเป็นแค่ “แรงงานเงา” ไม่มีสิทธิ์มีเสียง
                        </p>

                        <p
                            className="text-[24px] leading-[100%] font-semibold text-[#3ED304] px-2 inline-block"
                            style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
                        >
                            ...แต่ที่สหรัฐอเมริการัฐบาลจ้างชาวบ้านปลูกป่าและเป็นเจ้าของเครดิต
                        </p>
                    </div>

                    <p className={`${ibm.className} text-[20px] font-normal leading-[38px]`}>
                        1. ป่าดูดซับคาร์บอนโมเดลที่อิงความเชื่อมากกว่าข้อมูล
                        <br />
                        2. ปัญหาการไล่ที่ เมื่อการปลูกป่ากลายเป็นข้อพิพาทในชุมชน
                        <br />
                        3. แบ่งผลประโยชน์ไม่เท่าเทียม ปลูกแทบตาย ได้แค่น้ำใจ
                        <br />
                        4. ฟอกเขียวทางลัด
                        <br />
                        5. ต่างประเทศเลือกคนไทยเลือกทุน ...
                        <br />
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
                        className="bg-[#011F1F] text-white max-w-5xl w-full max-h-[90vh] rounded-xl p-6 relative"
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

                        <div className="rounded-[20px] p-6 md:p-10 text-white bg-[#344243] backdrop-blur-[62px] max-h-[60vh] overflow-y-auto">
                            <div className="text-center space-y-2">
                                <p
                                    className="text-[30px] leading-[100%] font-semibold text-[#3ED304]"
                                    style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
                                >
                                    5 ปมปัญหา ลับลวงพราง “ฟอกเขียวทางลัด” ปลูกป่าแค่ “ชดเชย”
                                </p>

                                <p
                                    className="text-[24px] leading-[100%] font-semibold text-[#3ED304] py-2"
                                    style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
                                >
                                    ไม่ได้ลดโลกร้อนจริงชาวบ้านเป็นแค่ “แรงงานเงา” ไม่มีสิทธิ์มีเสียง
                                </p>

                                <p
                                    className="text-[24px] leading-[100%] font-semibold text-[#3ED304] px-2 inline-block"
                                    style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
                                >
                                    ...แต่ที่สหรัฐอเมริการัฐบาลจ้างชาวบ้านปลูกป่าและเป็นเจ้าของเครดิต
                                </p>
                            </div>
                            <div className={`${ibm.className} text-[20px] font-normal leading-[38px] pt-10`}>
                                <p>ผู้ทรงคุณวุฒิด้านสิ่งแวดล้อมและสุขภาพ วิเคราะห์ 5 ปมปัญหาหลัก กลไกปลูกป่าเพื่อคาร์บอน ที่สะท้อนให้เห็นถึงความไม่โปร่งใสดังนี้</p>
                                <br />
                                <p>1. ป่าดูดซับคาร์บอนโมเดลที่อิงความเชื่อมากกว่าข้อมูล
                                    แนวทางหลักของการสร้างคาร์บอนเครดิตในไทย คือการให้ภาคเอกชน “เช่าพื้นที่” เพื่อปลูกป่า โดยอ้างอิงรายชื่อไม้ 58 ชนิดที่กระทรวงทรัพยากรธรรมชาติฯ กำหนดว่าเป็นพันธุ์ไม้ที่ดูดซับคาร์บอนได้ดี ทว่า การวัดผลจริงของการดูดซับคาร์บอนในแต่ละพื้นที่ยังขาดระบบตรวจสอบที่เข้มงวด ทำให้เกิดข้อสงสัยว่า “เครดิต” ที่ได้มานั้น สะท้อนการลดก๊าซเรือนกระจกอย่างแท้จริงหรือไม่</p>
                                <br />
                                <p>
                                    2. ปัญหาการไล่ที่ เมื่อการปลูกป่ากลายเป็นข้อพิพาทในชุมชน ในหลายพื้นที่เริ่มมี ข้อพิพาทระหว่างภาคเอกชนกับชาวบ้าน โดยเฉพาะกรณีบริษัทขนาดใหญ่ในกลุ่มอุตสาหกรรมทรัพยากร, พลังงานและสาธารณูปโภค เข้าไปเช่าที่ดินเพื่อปลูกป่าในพื้นที่ที่ชาวบ้านเคยใช้เป็นป่าชุมชน นำไปสู่การไล่ชาวบ้านออกจากพื้นที่โดยไร้กระบวนการเยียวยา ชุมชนจึงรู้สึกว่าไม่ได้รับความเป็นธรรม และ “ไม่มีส่วนได้ส่วนเสีย” กับสิ่งที่เกิดขึ้นในพื้นที่ของตนเอง
                                </p>
                                <br />
                                <p> 3. แบ่งผลประโยชน์ไม่เท่าเทียม ปลูกแทบตาย ได้แค่น้ำใจ
                                    ข้อมูลจากหลายพื้นที่ชี้ว่า สัดส่วนผลประโยชน์จากคาร์บอนเครดิตยัง เอนเอียงไปทางภาคเอกชน ตัวอย่างเช่น โครงการปลูกป่าชายเลนบางแห่ง ภาคเอกชนได้รับส่วนแบ่งสูงถึง 70% ขณะที่ชาวบ้านที่ลงแรงปลูกและดูแลได้เพียง 20% ส่วนรัฐรับเพียง 10% เท่านั้น เกิดเสียงวิจารณ์ในชุมชนว่า “ปลูกแทบตาย ได้แค่น้ำใจ” ด้านหนึ่ง โครงการใหญ่ที่บริษัทเอกชนเช่าพื้นที่ป่าจากกรมป่าไม้หลายล้านไร่ มักไม่มีการชดเชยหรือเปิดทางให้ชาวบ้านที่ผูกพันกับผืนป่าเข้ามามีส่วนร่วมในระบบ
                                </p><br />
                                <p>4. ฟอกเขียวทางลัด เลี่ยงการเปลี่ยนแปลงต้นทาง แทนที่จะลงทุนเปลี่ยนเครื่องจักรให้ปล่อยคาร์บอนน้อยลง หรือหันมาใช้พลังงานสะอาด บางบริษัทเลือกปลูกป่าเพื่อสร้างเครดิตในราคาถูก และนำไปหักลบกับการปล่อย CO₂ ในระบบบัญชี “สิ่งแวดล้อม” ของตน เป็นการเลือกทางลัดที่ “ดูดีแต่ไม่ยั่งยืน” และ เบี่ยงเบนจากเป้าหมายการลดการปล่อยจริงจากต้นทาง
                                </p><br />
                                <p>5. ต่างประเทศเลือกคน - ไทยเลือกทุน โมเดลของไทยยังห่างไกลจากตัวอย่างที่ชัดเจนอย่างโดยระบบของไทยกลับให้เอกชนเช่าพื้นที่ปลูกป่าเพื่อสร้างเครดิต แล้วนำไปขายในตลาด โดยประชาชนในพื้นที่กลายเป็นเพียง “แรงงานเงา” ที่ไม่มีสิทธิ์มีเสียงใน ขณะที่ตัวอย่างจาก สหรัฐอเมริกา ซึ่งรัฐบาลว่าจ้างชาวบ้านเป็นผู้ปลูกป่าและเป็นเจ้าของเครดิต ก่อนแบ่งรายได้กลับไปยังชุมชนอย่างเป็นธรรม กลายเป็นกลไกที่ไม่เพียงลดคาร์บอน
                                    <br /><br />แต่ยังส่งเสริมเศรษฐกิจฐานราก และสร้างความสัมพันธ์ระหว่างคนกับป่าอย่างแท้จริง
                                    “หากไม่เปลี่ยนแปลงระบบให้โปร่งใสและกระจายผลประโยชน์อย่างเป็นธรรม คาร์บอนเครดิตจะกลายเป็นอีกหนึ่ง ‘แผนการตลาด’ ที่สวยงามในเอกสาร แต่สร้างรอยร้าวในชุมชนจริง” นายสนธิเตือน พร้อมเสนอว่า การมีส่วนร่วมของชุมชนและความโปร่งใส ต้องกลายเป็นหัวใจหลักของระบบ มิใช่เพียงองค์ประกอบเสริม
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
