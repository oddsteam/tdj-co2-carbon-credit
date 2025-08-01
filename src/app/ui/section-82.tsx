'use client';

import { chonburi, ibm } from "@/fonts";
import Image from "next/image";
import { useState } from "react";

export default function Section82() {
    const [open, setOpen] = useState(false);

    return (
        <section className="bg-[#747D7A] w-full h-screen flex justify-center py-20 px-4 snap-start">
            <div className="w-full max-w-4xl">

                <div className="flex items-center gap-4 mb-10">
                    <div className="w-[164px] h-[164px] relative rounded-full overflow-hidden">
                        <Image src="/images/person/dr-seri.png" alt="speaker" fill className="object-cover" />
                    </div>
                    <div className="pl-5">
                        <p className={`${ibm.className} font-bold text-[20px] leading-none`}>บทสัมภาษณ์</p>
                        <p className={`${chonburi.className} pt-3 font-normal text-[32px] leading-none`}>รศ.ดร.เสรี ศุภราทิตย์</p>
                    </div>
                </div>


                <div className="rounded-[20px] p-6 md:p-10 text-white bg-[#344243] backdrop-blur-[62px]">
                    <p className={`${ibm.className} text-[24px] font-semibold leading-[150%] font-ibm-plex-thai mb-4 text-[#3ED304]`}>
                        "ไทยปล่อยก๊าซเรือนกระจกไม่ถึง 1% ของโลก แต่ยังได้รับผลกระทบ....อุณหภูมิสูงขึ้น 4-5 องศา ความชื้นเพิ่ม 30% ทำให้ฝนตกหนักอย่างที่ไม่เคยเกิดมาก่อน เช่น จังหวัดน่านถือว่ารุนแรงที่สุดในรอบกว่า 1,000 ปี...."
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
                                <Image src="/images/person/dr-seri.png" alt="speaker" fill className="object-cover" />
                            </div>
                            <div className="pl-5">
                                <p className={`${ibm.className} font-bold text-[20px] leading-none`}>บทสัมภาษณ์</p>
                                <p className={`${chonburi.className} pt-3 font-normal text-[32px] leading-none`}>รศ.ดร.เสรี ศุภราทิตย์</p>
                            </div>
                        </div>

                        {/* ✅ scrollable area */}
                        <div className={`${ibm.className} rounded-[20px] p-6 md:p-10 text-white bg-[#344243] backdrop-blur-[62px] max-h-[60vh] overflow-y-auto text-[20px] font-normal leading-[38px]`}>
                            <p className={`${ibm.className} text-[24px] font-semibold leading-[150%] text-[#3ED304] mb-4`}>
                                "ไทยปล่อยก๊าซเรือนกระจกไม่ถึง 1% ของโลก แต่ยังได้รับผลกระทบ....อุณหภูมิสูงขึ้น 4-5 องศา ความชื้นเพิ่ม 30% ทำให้ฝนตกหนักอย่างที่ไม่เคยเกิดมาก่อน เช่น จังหวัดน่านถือว่ารุนแรงที่สุดในรอบกว่า 1,000 ปี...."
                            </p>
                            <p className="indent-8">
                                รศ.ดร.เสรี ศุภราทิตย์ ผู้อำนวยการศูนย์การเปลี่ยนแปลงภูมิอากาศและภัยพิบัติ มหาวิทยาลัยรังสิต ให้สัมภาษณ์ “ทีมทีดีเจ” ถึงผลกระทบที่คนไทยต้องได้รับ จากการปล่อยก๊าซเรือนกระจก ทั้งปัญหาอุณหภูมิที่สูงขึ้นและภัยพิบัติทางธรรมชาติอื่น ๆ โดยนโยบายลดทั้งภาครัฐและเอกชนเป็นเรื่องแทบเป็นไปไม่ได้ที่จะถึงเป้าหมาย Net Zero ในปี 2065 เพราะมีความไม่โปร่งใสและความซับซ้อนในข้อมูลการปลูกป่าลดคาร์บอน รวมถึงระบบซื้อขายคาร์บอนเครดิต โดยเฉพาะข้อถกเถียงทางกฎหมายที่ยังเป็นอุปสรรคในการจัดการวิกฤตภูมิอากาศแปรปรวน แนะนำให้ลดการสร้างภาพลักษณ์สีเขียวหรือGreen Washing เน้นการทำในสิ่งที่สามารถทำได้จริง
                            </p>
                            <br />
                            <p className="indent-8">
                                ดร.เสรีให้ข้อมูลว่าปัจจุบันนี้ประเทศไทยและคนไทยกำลังเผชิญปัญหาผลกระทบภัยพิบัติโลกร้อน ทำให้สภาพอากาศแปรปรวน มีทั้งภัยแล้งและฝนตกหนักอย่างที่ไม่เคยเกิดขึ้นมาก่อน ได้แก่
                            </p>
                            <br />

                            <p className="font-bold">1.ปัญหาอุณหภูมิสูงขึ้น</p><br></br>
                            <p className="indent-8">
                                จากข้อมูลอุณหภูมิเฉลี่ยประเทศไทยย้อนหลัง 50 ปี ขณะนี้สูงขึ้นแล้วประมาณ 1.2 องศาเซลเซียส แม้ว่าประเทศไทยจะปล่อยก๊าซเรือนกระจกไม่ถึง 1% ของโลก แต่ยังได้รับผลกระทบจากอุณหภูมิทั่วโลกที่สูงขึ้น บางช่วงของฤดูร้อนไทยจออุณหภูมิสูงขึ้นถึง 4 - 5 องศาเซลเซียส
                            </p>

                            <br />
                            <p className="font-bold">2 ปัญหาฝนตกรุนแรง </p><br></br>
                            <p className="indent-8">
                                เนื่องจากอุณหภูมที่สูงขึ้นทุก 1 องศา ทำให้ความชื้นในอากาศเพิ่มขึ้น 7% ดังนั้น หากช่วงฤดูร้อนที่อุณหภูมิสูงขึ้นกว่าปกติถึง 4-5 องศาเซลเซียส ส่งผลให้เกิดฝนตกหนักอย่างที่ไม่เคยเกิดขึ้นมาก่อน เช่น เหตุการณ์ฝนตกที่จังหวัดน่าน ถือว่ารุนแรงที่สุดในรอบกว่า 1,000 ปี และยิ่งมีการตัดไม้ทำลายป่า ไม่ได้เพิ่มการปลูกป่าทดแทนอย่างแท้จริง โดยเฉพาะในภาคเหนือ ทำให้น้ำหลากลงมาเมื่อฝนตกหนัก สุดท้ายน้ำจะไหลเข้าสู่ชุมชนหรือตัวเมืองทำให้น้ำท่วมสูงและรุนแรงมากกว่าในอดีต
                            </p>
                            <br />
                            <p className="indent-8">
                                ผลกระทบภัยพิบัติจากสภาพอากาศแปรปรวนเป็นสิ่งที่หลีกเลี่ยงไม่ได้ ดังนั้น ประเทศไทยควรเน้นการบริหารจัดการ
                            </p>
                            <br />
                            <p className="indent-8">
                                ภายในประเทศ และเพิ่มงบประมาณในการป้องกันภัยพิบัติ รวมถึง นโยบายลดก๊าซเรือนกระจก จัดทำ Roadmap ใหม่ทั้งหมด ต้องมีงบประมาณสนับสนุนจำนวนมาก
                            </p>
                            <br />
                            <p className="indent-8 font-bold">
                                “ปัญหาสำคัญคือ ข้อมูลการปล่อยก๊าซเรือนกระจกและการลดก๊าซของบริษัทต่าง ๆ ยังไม่ชัดเจน มีความกำกวม สับสน และขาดความโปร่งใส ไม่มีมาตรฐานในการบันทึกและประเมินที่ชัดเจน ทำให้บริษัทสามารถ "ตบแต่ง" ข้อมูลได้ จำเป็นต้องมี กฎหมายหรือนโยบายที่จัดการเรื่องข้อมูลให้โปร่งใสและเปิดเผย เพื่อเป็นพื้นฐานในการวาง Road Map ที่ชัดเจน”
                            </p>
                            <br />
                            <p className="indent-8">
                                ช่วงนี้บริษัทเอกชนใหญ่ ๆ ประกาศเป้าหมาย Net Zero ในปี 2050 มีความพยายามใช้ พลังงานหมุนเวียน เช่น โซลาร์เซลล์ และปรับปรุงเทคโนโลยีให้ประหยัดพลังงานมากขึ้น แต่สามารถลดก๊าซเรือนกระจกได้เฉลี่ยเพียง 30% เท่านั้น ทำให้การบรรลุเป้าหมาย Net Zero ของบริษัทเป็นเรื่องยากมาก
                            </p>
                            <br />

                            <p className="indent-8">
                                “การใช้ป่าไม้เป็น ทางเลือกที่ต้นทุนถูกที่สุด ในการลดคาร์บอน” แต่การปลูกป่าเพื่อทำคาร์บอนเครดิตต้องใช้พื้นที่ขนาดใหญ่ ต้องเป็น 1หมื่นไร่ขึ้นไป ใช้เวลานานอย่างน้อย 5 ปี ถือเป็นเรื่องยากมากสำหรับบริษัทส่วนใหญ่ และปัญหาคือป่าไม้จะไม่เพียงพอต่อความต้องการของทุกบริษัท การไปร่วมมือกับป่าสงวน หรือป่าอุทยาน ป่าชุมชน ซึ่งต่างประเทศมองว่าไม่ใช่วิธีที่ดีที่สุดในการลดคาร์บอน ถ้าไม่ได้เพิ่มการปลูกป่าปลูกต้นไม้ขึ้นมาใหม่อย่างแท้จริง
                            </p>
                            <br />

                            <p className="indent-8">
                                สำหรับปัญหาการผลักดันให้ไทยมี “กฎหมายลดโลกร้อน” นั้น ดร.เสรีมองว่า กฎหมายนี้จะมีการเก็บภาษีคาร์บอน หรือบังคับให้ผู้ปล่อยต้องหาวิธีลดก๊าซคาร์บอนฯ ทำให้เผชิญกับการต่อต้านจากหลายฝ่าย เนื่องจากเกรงว่าจะทำให้บริษัทขนาดเล็ก (SME) ไม่สามารถปฏิบัติตามได้และอาจต้องปิดตัวลง และถ้ามีการเก็บภาษีคาร์บอนจริง บริษัทก็จะผลักภาระไปที่ผู้บริโภค ทำให้สินค้ามีราคาแพงขึ้น
                            </p>
                            <br />

                            <p className="indent-8">
                                บริษัทที่ประกาศเป้าหมาย Net Zero แล้วทำไม่ได้ จะเจอ สงครามการค้าที่รุนแรง โดยต่างประเทศจะไม่ซื้อสินค้าและคนไทยรุ่นใหม่ Generation Z ก็เริ่มให้ความสำคัญกับสินค้าที่เป็นมิตรต่อสิ่งแวดล้อม ดังนั้น บริษัทจะเจอทั้งศึกนอกและศึกใน
                            </p>
                            <br />

                            <p className="indent-8">
                                ผู้เชี่ยวชาญให้ข้อคิดว่า ประเทศไทยไม่ควรไปยึดติดกับเป้าหมายโลกร้อนของโลกมากเกินไป แต่ควรหันมา พิจารณาบริหารจัดการภายในประเทศ และ ลงทุนในงบประมาณป้องกันภัยพิบัติ ลดการสร้างภาพลักษณ์ "Green Washing" เน้นทำโครงการลดโลกร้อนที่สามารถทำได้จริง อย่างไรก็ตามการดำเนินงานของบริษัทเหล่านี้ คงต้องเผชิญกับความท้าทายหลายประการ
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            )}

        </section>
    );
}
