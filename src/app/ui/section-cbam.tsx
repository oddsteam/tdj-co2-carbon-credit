"use client";

import { useState } from "react";

export default function SectionCBAM() {
    const [open, setOpen] = useState(false);
    return (
        <section className="w-full h-screen bg-[#011F1F] flex items-center justify-center text-white px-6 snap-start">
            <div className="max-w-[960px] text-left space-y-6">
                <h2
                    className="text-[42px] leading-[100%]"
                    style={{ fontFamily: '"Chonburi", cursive' }}
                >
                    CBAM เขย่าอุตสาหกรรมไทย เมื่อคาร์บอนกลายเป็นต้นทุนใหม่ของเศรษฐกิจโลก ไทยรับมือหรือแค่ซื้อสิทธิปล่อยก๊าซ?
                </h2>

                <p
                    className="text-[22px] leading-[45px] indent-8"
                    style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
                >
                    การบังคับใช้มาตรการ CBAM (Carbon Border Adjustment Mechanism) ของสหภาพยุโรปตั้งแต่ปี 2566 กลายเป็นแรงกระเพื่อมใหญ่ต่ออุตสาหกรรมส่งออกของไทย โดยเฉพาะกลุ่มเหล็ก ซีเมนต์ ปุ๋ย อะลูมิเนียม ไฮโดรเจน และอาหาร ที่ต้องเผชิญกับภาษีนำเข้าสูงขึ้น หากไม่สามารถรายงานการปล่อยก๊าซเรือนกระจกได้ตามมาตรฐานที่ยุโรปกำหนด             มาตรการ CBAM มีเป้าหมายชัดเจนในการป้องกัน “การรั่วไหลของคาร์บอน” จากการนำเข้าสินค้าจากประเทศที่ไม่มีนโยบายสิ่งแวดล้อมเข้มงวดเท่าภายใน EU โดยการคำนวณภาษีจะอิงจากข้อมูลการปล่อยคาร์บอนตลอดวงจรชีวิตของผลิตภัณฑ์ (Life Cycle Assessment: LCA)                                                                                                                                       จุดอ่อนของไทย คือการขาดระบบบังคับในการตรวจวัดและรายงานคาร์บอนอย่างเป็นระบบและโปร่งใส ส่งผลให้ผู้ประกอบการส่วนใหญ่ยังไม่สามารถระบุค่าคาร์บอนฟุตพรินต์ของสินค้าได้อย่างชัดเจน กลายเป็นภาระต้นทุน และลดความสามารถในการแข่งขันในตลาดยุโรปและโลก                                                                                                            เพื่อหลีกเลี่ยงผลกระทบโดยตรง หลายธุรกิจจึงหันมาใช้กลไก “ตลาดคาร์บอนสมัครใจ” เช่น การซื้อขายคาร์บอนเครดิตจากโครงการปลูกป่าหรือโครงการดูดซับก๊าซเรือนกระจกอื่น ๆ เพื่อชดเชยการปล่อยคาร์บอนของตนเอง
                </p>
                <div className="flex justify-center self-center">
                    <button
                        className="w-[169px] h-[58px] rounded-[20px] px-[30px] py-[10px] bg-white/10 text-white text-sm font-medium cursor-pointer"
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

            {open && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="bg-[#0A2C2C] text-white max-w-4xl w-full max-h-[90vh] rounded-xl p-6 overflow-y-auto relative space-y-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-4 right-4 text-white/70 hover:text-white text-xl"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>
                        <h2
                            className="text-[28px] leading-[150%] py-8"
                            style={{ fontFamily: '"Chonburi", cursive' }}
                        >
                            CBAM เขย่าอุตสาหกรรมไทย เมื่อคาร์บอนกลายเป็นต้นทุนใหม่ของเศรษฐกิจโลก ไทยรับมือหรือแค่ซื้อสิทธิปล่อยก๊าซ?
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
                            <p className="indent-8">การบังคับใช้มาตรการ CBAM (Carbon Border Adjustment Mechanism) ของสหภาพยุโรปตั้งแต่ปี 2566 กลายเป็นแรงกระเพื่อมใหญ่ต่ออุตสาหกรรมส่งออกของไทย โดยเฉพาะกลุ่มเหล็ก ซีเมนต์ ปุ๋ย อะลูมิเนียม ไฮโดรเจน และอาหาร ที่ต้องเผชิญกับภาษีนำเข้าสูงขึ้น หากไม่สามารถรายงานการปล่อยก๊าซเรือนกระจกได้ตามมาตรฐานที่ยุโรปกำหนด             มาตรการ CBAM มีเป้าหมายชัดเจนในการป้องกัน “การรั่วไหลของคาร์บอน” จากการนำเข้าสินค้าจากประเทศที่ไม่มีนโยบายสิ่งแวดล้อมเข้มงวดเท่าภายใน EU โดยการคำนวณภาษีจะอิงจากข้อมูลการปล่อยคาร์บอนตลอดวงจรชีวิตของผลิตภัณฑ์ (Life Cycle Assessment: LCA)                                                                                                                                       จุดอ่อนของไทย คือการขาดระบบบังคับในการตรวจวัดและรายงานคาร์บอนอย่างเป็นระบบและโปร่งใส ส่งผลให้ผู้ประกอบการส่วนใหญ่ยังไม่สามารถระบุค่าคาร์บอนฟุตพรินต์ของสินค้าได้อย่างชัดเจน กลายเป็นภาระต้นทุน และลดความสามารถในการแข่งขันในตลาดยุโรปและโลก                                                                                                            เพื่อหลีกเลี่ยงผลกระทบโดยตรง หลายธุรกิจจึงหันมาใช้กลไก “ตลาดคาร์บอนสมัครใจ” เช่น การซื้อขายคาร์บอนเครดิตจากโครงการปลูกป่าหรือโครงการดูดซับก๊าซเรือนกระจกอื่น ๆ เพื่อชดเชยการปล่อยคาร์บอนของตนเอง</p>
                            <br />
                            <p className="indent-8">อย่างไรก็ตาม นักวิชาการเตือนว่า การพึ่งพาการซื้อเครดิตเพียงอย่างเดียว โดยไม่เร่งพัฒนาระบบจัดการคาร์บอนภายในประเทศ อาจเป็นเพียง “การซื้อสิทธิปล่อยก๊าซ” ที่ไม่ยั่งยืน และในระยะยาวอาจทำให้อุตสาหกรรมไทยสูญเสียความสามารถในการแข่งขัน เมื่อ “คาร์บอน” กลายเป็นต้นทุนใหม่ที่หลีกเลี่ยงไม่ได้ในเศรษฐกิจโลก                                              โจทย์ใหญ่ของประเทศไทยวันนี้ จึงไม่ใช่แค่การชดเชย แต่คือการเปลี่ยนผ่านสู่ระบบที่ตรวจวัดได้ โปร่งใส และเป็นที่ยอมรับในระดับสากล</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
