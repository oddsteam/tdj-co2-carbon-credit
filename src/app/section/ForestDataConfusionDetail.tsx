import Image from "next/image";

export default function ForestDataConfusionDetail() {
  return (
    <section className="w-full md:h-[832px] sm:h-[100px] bg-[#011F1F] text-white px-8 flex flex-col items-center justify-center space-y-10">
      <div className="max-w-[960px] text-left space-y-6">
        <p
          className="text-[16px] leading-[32px]"
          style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
        >
          ปัญหาความคลาดเคลื่อนของข้อมูล พื้นที่ป่าเป็นอีกหนึ่งประเด็นสำคัญที่กระทบต่อความน่าเชื่อถือของระบบการประเมินเครดิต
          โดยมีการตั้งข้อสังเกตว่าฐานข้อมูลจาก กรมป่าไม้ ที่ใช้ในกระบวนการออกเครดิตไม่สอดคล้องกับภาพถ่ายดาวเทียมของ GISTDA
          ซึ่งเกิดจากการนิยามและอ้างอิงพื้นที่สีเขียวและพื้นที่ป่าที่แตกต่างกัน
          ในขณะที่ประเทศไทยประกาศนโยบายเพิ่มพื้นที่สีเขียวและป่าไม้ตามยุทธศาสตร์ชาติและเป้าหมาย Net Zero
          แต่ข้อเท็จจริงเบื้องหลังกลับสะท้อนถึงความไม่ชัดเจนของ “ข้อมูลกลาง” ซึ่งเป็นฐานในการกำหนดนโยบาย
          และวัดผลความสำเร็จด้านสิ่งแวดล้อมของประเทศ
        </p>


        <div className="flex justify-center items-center gap-12 bg-white">

          <Image
            src="/images/forest-data-chart.png"
            alt="forest data chart"
            width={400}
            height={300}
          />


          
        </div>

        {/* ข้อความล่าง */}
        <p
          className="text-[16px] leading-[32px]"
          style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
        >
          หากดูในระดับจังหวัด ความแตกต่างยิ่งชัดเจน ความขัดแย้งของชุดข้อมูลนี้ชี้ให้เห็นถึง{" "}
          <span className="text-[#3ED304] font-semibold">“ปัญหามาตรฐานกลาง”</span>{" "}
          ที่ยังไม่ชัดเจน ทั้งในด้านนิยามของพื้นที่ป่าและวิธีการประเมินศักยภาพในการดูดซับคาร์บอน
          ซึ่งนำไปสู่ข้อเรียกร้องจากภาควิชาการให้มีการปฏิรูปกลไกเหล่านี้อย่างจริงจัง
          เพื่อจัดทำมาตรฐานกลางที่ตรวจสอบได้ และเพื่อให้ทุกนโยบายที่ต้องอ้างอิงข้อมูลป่าไม้ของไทยนั้น
          ตั้งอยู่บนพื้นฐานของข้อเท็จจริง
        </p>
      </div>
    </section>
  );
}
