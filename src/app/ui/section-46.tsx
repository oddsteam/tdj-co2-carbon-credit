import { chonburi, ibm } from "@/fonts";
import Image from "next/image";

export default function Section46() {
    return (
        <section className="bg-[#011F1F] w-full h-screen text-white flex justify-center items-center snap-start">
            <div className="bg-[#344243] text-black rounded-[20px] w-[90%] flex">
                <div className="w-[27%] p-6 relative rounded-[20px]">
                    <Image
                        src="/images/monstera-leaf.png"
                        alt="leaf"
                        fill
                        className="object-cover rounded-l-[20px]"
                    />
                </div>

                <div className="w-[73%] p-6 text-white px-15">
                    <p className={`${ibm.className} font-normal text-[20px] leading-[29px] mt-5`}>เปิดข้อมูลคาร์บอนเครดิตป่าไม้ อบก.  ราคาพุ่ง</p>
                    <h2 className={`${chonburi.className} font-normal text-[42px] leading-[100%] mt-5`}>แรงแตะ 3,000 บาทต่อหน่วย</h2>
                    <p className={`${ibm.className} font-normal text-[16px] leading-[38px] mt-10 indent-8`}>
                        ฐานข้อมูลล่าสุดของ อบก. ปี 2568 พบว่า มีโครงการที่ได้ 
                        <span className="font-bold "> รับการขึ้นทะเบียนรับรองทั้งหมด 500 โครงการ โดยในจำนวนนี้เป็นโครงการในภาคป่าไม้เพียง 110 โครงการ หรือคิดเป็น สัดส่วนเพียง 22% ของทั้งหมด </span>
                        แม้จะมีจำนวนน้อยแต่โครงการประเภทนี้กลับถูกจัดอยู่ในกลุ่มที่มีราคาสูงที่สุด เมื่อเทียบกับคาร์บอนเครดิตจากกิจกรรมประเภทอื่น
                    </p>
                    <br/>
                    <p className={`${ibm.className} font-normal text-[16px] leading-[38px] indent-8`}>
                        องค์การบริหารจัดการก๊าซเรือนกระจก (อบก.) เป็นหน่วยงานหลักของรัฐในการขับ เคลื่อนประเทศสู่เป้าหมายเศรษฐกิจและสังคมคาร์บอนต่ำ ระบุว่า “คาร์บอนเครดิตป่าไม้” คือปริมาณก๊าซเรือนกระจกที่สามารถลดหรือกักเก็บได้จากกิจกรรมการปลูกป่า ฟื้นฟูป่า หรืออนุรักษ์ป่า โดยดำเนินการภายใต้กรอบของโครงการ T-VER (Thailand Voluntary Emission Reduction Program) ซึ่งต้องผ่านการรับรองอย่างเป็นทางการจาก อบก.
                    </p>
                    <br/>
                    <p className={`${ibm.className} font-normal text-[16px] leading-[38px]  indent-8`}>
                        โครงการคาร์บอนเครดิตภาคป่าไม้มีกรอบเวลาดำเนินงานยาวนานถึง 15 ปี โดยผู้พัฒนาต้องรับหน้าที่พลิกฟื้นพื้นที่รกร้างหรือป่าเสื่อมโทรมให้กลับมาอุดมสมบูรณ์ ผ่านการปลูก บำรุงรักษา และอนุรักษ์อย่างต่อเนื่อง
                    </p>
                    <br/>
                    <p className={`${ibm.className} font-normal text-[16px] leading-[38px]  indent-8`}>
                        ข้อมูลจากสถิติคาร์บอนเครดิตภาคสมัครใจของประเทศไทย ประจำปี 2568 ชี้ว่า ราคาซื้อขายผ่านช่องทาง “ทวิภาคี” หรือการเจรจาโดยตรงระหว่างผู้ซื้อและผู้ขาย มี ราคาเฉลี่ยอยู่ที่ 306.59 บาท ต่อ tCO2eq ขณะที่ราคาต่ำสุดอยู่ที่ 55 บาท และสูงสุดพุ่งถึง 3,000 บาทต่อ tCO2eq ซึ่งสะท้อนถึงความผันผวนของตลาด และมูลค่าที่สูงของโครงการในภาคป่าไม้ โดยเฉพาะเมื่อเทียบกับประเภทอื่นที่ใช้กลไกเทคโนโลยีแทนธรรมชาติ
                    </p>
                </div>
            </div>
        </section>
    );
}
