'use client';

import { chonburi, ibm } from "@/fonts";
import Image from "next/image";
import { useState } from "react";

export default function Section69() {
    const [open, setOpen] = useState(false);

    return (
        <section className="bg-[#011F1F] w-full h-screen flex justify-center py-20 px-4 snap-start">
            <div className="w-full max-w-4xl">

                <div className="flex items-center gap-4 mb-10">
                    <div className="w-[164px] h-[164px] relative rounded-full overflow-hidden">
                        <Image src="/images/person/pongchai.png" alt="speaker" fill className="object-cover" />
                    </div>
                    <div className="pl-5 text-white">
                        <p className={`${ibm.className} font-bold text-[20px] leading-none`}>บทสัมภาษณ์</p>
                        <p className={`${chonburi.className} pt-3 font-normal text-[32px] leading-relaxed`}>ดร.พงษ์ชัย<br />ดำรงโรจน์วัฒนา</p>
                    </div>
                </div>


                <div className="rounded-[20px] p-6 md:p-10 text-white bg-[#344243] backdrop-blur-[62px]">
                    <div className="text-center">
                        <p
                            className="text-[34px] font-semibold leading-none text-[#F7931E]"
                            style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
                        >
                            “กับดักแห่งความเหลื่อมล้ำ”
                        </p>
                        <p
                            className="text-[24px] font-semibold leading-none text-[#F7931E] mt-2"
                            style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
                        >
                            โครงสร้างนี้ ออกแบบมาให้ทุนใหญ่ได้เปรียบ ถือครองโครงการแทบทั้งหมด
                        </p>
                    </div>


                    <p className={`${ibm.className} text-[20px] font-normal leading-[38px] mt-5`}>
                        ค่าตรวจประเมินโครงการคาร์บอนเครดิตในภาคป่าไม้ มีต้นทุนสูงถึงหลักแสนบาท หรือเฉลี่ยไร่ละหมื่นบาท ตัวเลขที่แม้จะดูเล็กน้อยในสายตาบริษัทใหญ่ แต่กลับกลายเป็น กำแพงทางการเงิน สำหรับชาวบ้านและกลุ่มอนุรักษ์เล็กๆ
                        ช่องว่างเชิงโครงสร้างนี้ เปิดทางให้กลุ่มทุนขนาดใหญ่เข้าไปถือครองโครงการแทบทั้งหมด ขณะที่ “คนปลูกป่าจริง” ซึ่งเป็นเจ้าของพื้นที่และดูแลทรัพยากรในระยะยาว กลับได้ประโยชน์ในสัดส่วนที่น้อยกว่าเอกชนที่เป็นเจ้าของโครงการ
                        ...
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
                                <Image src="/images/person/pongchai.png" alt="speaker" fill className="object-cover" />
                            </div>
                            <div className="pl-5 text-white">
                                <p className={`${ibm.className} font-bold text-[20px] leading-none`}>บทสัมภาษณ์</p>
                                <p className={`${chonburi.className} pt-3 font-normal text-[32px] leading-relaxed`}>ดร.พงษ์ชัย<br />ดำรงโรจน์วัฒนา</p>
                            </div>
                        </div>

                        <div className="rounded-[20px] p-6 md:p-10 text-white bg-[#344243] backdrop-blur-[62px] max-h-[60vh] overflow-y-auto">
                            <div className="text-center">
                                <p
                                    className="text-[34px] font-semibold leading-none text-[#F7931E]"
                                    style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
                                >
                                    “กับดักแห่งความเหลื่อมล้ำ”
                                </p>
                                <p
                                    className="text-[24px] font-semibold leading-none text-[#F7931E] mt-2"
                                    style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
                                >
                                    โครงสร้างนี้ ออกแบบมาให้ทุนใหญ่ได้เปรียบ ถือครองโครงการแทบทั้งหมด
                                </p>
                            </div>
                            <div className={`${ibm.className} text-[20px] font-normal leading-[38px] pt-10`}>
                                <p className="indent-8">
                                    รองศาสตราจารย์ ดร.พงษ์ชัย ดำรงโรจน์วัฒนา ภาควิชาชีววิทยา คณะวิทยาศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย และรองผู้อำนวยการศูนย์เครือข่ายการเรียนรู้เพื่อภูมิภาค สะท้อนข้อมูลเชิงลึกว่า ค่าตรวจประเมินโครงการคาร์บอนเครดิตในภาคป่าไม้ มีต้นทุนสูงถึงหลักแสนบาท หรือเฉลี่ยไร่ละหมื่นบาท ตัวเลขที่แม้จะดูเล็กน้อยในสายตาบริษัทใหญ่ แต่กลับกลายเป็น กำแพงทางการเงิน สำหรับชาวบ้านและกลุ่มอนุรักษ์เล็กๆ
                                    ช่องว่างเชิงโครงสร้างนี้ เปิดทางให้กลุ่มทุนขนาดใหญ่เข้าไปถือครองโครงการแทบทั้งหมด ขณะที่ “คนปลูกป่าจริง” ซึ่งเป็นเจ้าของพื้นที่และดูแลทรัพยากรในระยะยาว กลับได้ประโยชน์ในสัดส่วนที่น้อยกว่าเอกชนที่เป็นเจ้าของโครงการ
                                    ยิ่งไปกว่านั้น ระบบยังเต็มไปด้วยอุปสรรคที่มองไม่เห็น ตั้งแต่การเข้าถึงข้อมูลที่จำกัด, ระบบตรวจสอบที่ผูกขาดโดยไม่เปิดพื้นที่ให้ภาควิชาการ หรือองค์กรอิสระเข้าร่วม, ไปจนถึงการใช้ “ทรัพยากรสาธารณะ” อย่างป่าสงวนฯ เพื่อสร้างผลประโยชน์ส่วนตนของเอกชน โดยไม่มีการประเมินผลกระทบอย่างรอบด้าน
                                    ความเปราะบางของระบบคาร์บอนเครดิตในภาคป่าไม้ไทยว่า กลไกนี้อาจไม่ได้เปิดโอกาสอย่างเท่าเทียม หากแต่กลายเป็น “กับดักแห่งความเหลื่อมล้ำ” ที่ออกแบบมาให้ทุนใหญ่ได้เปรียบ ขณะที่ภาคประชาชนซึ่งเป็นผู้ดูแลป่าตัวจริง กลับเข้าไม่ถึงโอกาสในระบบ
                                    จุดอ่อนสำคัญอยู่ที่ “ต้นทุนการประเมินที่สูงเกินรับไหว” เช่น ค่าตรวจประเมินโครงการที่สูงถึงไร่ละหลักหมื่นบาท ทำให้การเข้าสู่ระบบกลายเป็นภาระหนักสำหรับรายย่อย อีกทั้งบริษัทรับประเมินมีจำนวนน้อย
                                </p>
                                <p className="indent-8">
                                    ส่งผลให้เกิดลักษณะ “กึ่งผูกขาด” ในตลาดบริการประเมินคาร์บอนเครดิต ซึ่งยิ่งตอกย้ำความเหลื่อมล้ำทางโอกาส
                                    แม้ระบบจะถูกอธิบายว่าเป็นเครื่องมือสร้างรายได้และอนุรักษ์ป่า แต่ในทางปฏิบัติ กลับมี การแบ่งปันผลประโยชน์ที่ไม่เป็นธรรม โดยเฉพาะในกรณีที่พื้นที่ป่าไม้ของรัฐ เช่น ป่าสงวนฯและป่าชายเลน ซึ่งควรเป็นทรัพยากรเพื่อสาธารณะ ถูกนำมาใช้ในการออกเครดิตเพื่อสร้างรายได้ให้กลุ่มทุนบางกลุ่ม ขณะที่ชุมชนในพื้นที่ไม่ได้รับประโยชน์อย่างแท้จริง
                                    “นี่คือคอขวดที่สำคัญที่สุด และเป็นเหตุผลว่าทำไมโครงการขนาดเล็กถึงมีจำนวนน้อย”
                                </p>
                                <p className="indent-8">
                                    ดร.พงษ์ชัยชี้ว่า “ระบบที่ออกแบบมา กลับกลายเป็นกับดักของความเหลื่อมล้ำที่ซ่อนอยู่ในรายละเอียด” โดยเฉพาะต้นทุนด้านการประเมินที่สูงจนกลุ่มรายย่อยหรือภาคประชาชนไม่สามารถแบกรับได้ แม้จะมีหน่วยงานอย่าง ธ.ก.ส. เข้ามาช่วยแบ่งเบาภาระบางส่วน ทั้งในรูปแบบการสนับสนุนค่าประเมิน หรือแบ่งปันผลประโยชน์ แต่ก็ยังไม่เพียงพอในการสร้างความเปลี่ยนแปลงเชิงโครงสร้าง
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
