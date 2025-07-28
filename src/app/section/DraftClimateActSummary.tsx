import Image from "next/image";

export default function ThailandClimateActSection() {
  return (
    <section className="w-full min-h-[832px] bg-[#011F1F] text-white flex flex-col py-12">

      <div className="basis-[30%] flex flex-col items-center justify-center gap-4 md:min-h-[300px] mb-12">
        <p
          className="text-[32px] leading-[100%] text-center mb-3"
          style={{ fontFamily: '"Chonburi", cursive' }}
        >
          สรุปร่าง พรบ. ลดโลกร้อน
        </p>
        <p
          className="text-[21px] leading-[130%] text-center text-[#ACACAC] font-medium mb-8"
          style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
        >
          ร่าง พระราชบัญญัติการเปลี่ยนแปลงสภาพภูมิอากาศ <br />
          (Climate Change Act) หรือ พ.ร.บ.ลดโลกร้อน
        </p>
        <p
          className="text-[16px] leading-[170%] text-center text-[#EAEBEA]"
          style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
        >
          ซึ่งถูกพูดถึงมานานในฐานะกฎหมายฉบับแรกที่มุ่งควบคุมการปล่อยก๊าซโดยตรง <br />
          ยังคงค้างอยู่ในกระบวนการนิติบัญญัติและไม่มีกำหนดชัดเจนในการผลักดันออกใช้ <br />
          สาระสำคัญของร่าง พ.ร.บ.ฉบับนี้มี 5 ประเด็นหลัก ได้แก่
        </p>
      </div>


      <div className="basis-[70%] flex flex-row w-full px-12 gap-2">
        {/* ซ้าย */}
        <div className="w-1/3 flex flex-col items-center justify-between rounded-xl gap-6 px-6">
          {/* Card 1 */}
          <div className="w-full bg-[#344243] rounded-[20px] p-4 flex flex-col items-start gap-4">
            <div className="w-[78px] h-[46px] rounded-full bg-[#66BFA3] flex items-center justify-center text-black text-lg font-bold">
              1.
            </div>
            <p className="text-[#3ED304] font-semibold" style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}>
              กำหนดเป้าหมาย Net Zero ปี 2608<br /> และ Carbon Neutrality ปี 2593
            </p>
            <p className="text-[#EAEBEA] text-sm" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
              พร้อมทั้งจัดทำแผนปฏิบัติการและรายงาน
              ข้อมูลการปล่อยก๊าซเรือนกระจก กำหนดให้
              ภาคธุรกิจต้องรายงานข้อมูลการปล่อยก๊าซ
              เรือนกระจกต่อสำนักงานนโยบายและแผน
              ทรัพยากรธรรมชาติและสิ่งแวดล้อม (สผ.)
            </p>
            <p className="text-[#EAEBEA] text-sm indent-8" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
              เพื่อสร้างฐานข้อมูลระดับชาติพร้อมทั้ง
              เสนอแนวทางสนับสนุนการลงทุนด้านเทคโนโลยีสะอาด ผ่านมาตรการทางการเงิน เช่น สินเชื่อดอกเบี้ยต่ำจากกองทุนสิ่งแวดล้อม และธนาคารสีเขียว
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full bg-[#344243] rounded-[20px] p-4 flex flex-col items-start gap-4">
            <div className="w-[78px] h-[46px] rounded-full bg-[#66BFA3] flex items-center justify-center text-black text-lg font-bold">
              2.
            </div>
            <p className="text-[#3ED304] font-semibold" style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}>
              ระบบภาษีคาร์บอนและกลไกการซื้อขายสิทธิปล่อยก๊าซ (ETS)
            </p>
            <p className="text-[#EAEBEA] text-sm" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
              ที่จะเปลี่ยนแรงจูงใจทางเศรษฐกิจให้ธุรกิจ หันมาลดการปล่อยมลพิษ
            </p>
          </div>
        </div>

        {/* กลาง */}
        <div className="w-1/3 flex flex-col items-center justify-between rounded-xl gap-6 px-6">
          {/* Card 3 */}
          <div className="w-full bg-[#344243] rounded-[20px] p-4 flex flex-col items-start gap-4">
            <div className="w-[78px] h-[46px] rounded-full bg-[#66BFA3] flex items-center justify-center text-black text-lg font-bold">
              3.
            </div>
            <p className="text-[#3ED304] font-semibold" style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}>
              บทลงโทษเข้มข้นกับธุรกิจที่ฝ่าฝืน
            </p>
            <p className="text-[#EAEBEA] text-sm" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
              เช่น ปรับสูงสุด 5 ล้านบาท หรือจำคุก 3 ปี
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-full bg-[#344243] rounded-[20px] p-4 flex flex-col items-start gap-4">
            <div className="w-[78px] h-[46px] rounded-full bg-[#66BFA3] flex items-center justify-center text-black text-lg font-bold">
              4.
            </div>
            <p className="text-[#3ED304] font-semibold" style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}>
              กองทุนภูมิอากาศ
            </p>
            <p className="text-[#EAEBEA] text-sm" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
              ที่ออกแบบมาเพื่อรองรับการฟื้นฟู
              หลังภัยพิบัติ โดยเปิดให้ประชาชนมีส่วนร่วมในการบริหาร
            </p>
          </div>

          {/* Card 5 */}
          <div className="w-full bg-[#344243] rounded-[20px] p-4 flex flex-col items-start gap-4">
            <div className="w-[78px] h-[46px] rounded-full bg-[#66BFA3] flex items-center justify-center text-black text-lg font-bold">
              5.
            </div>
            <p className="text-[#3ED304] font-semibold" style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}>
              แผนปรับตัวรับมือภัยพิบัติ
            </p>
            <p className="text-[#EAEBEA] text-sm" style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
              เช่น น้ำท่วม ภัยแล้ง พายุ รวมถึงการจัดการน้ำและระบบเตือนภัย
            </p>
          </div>
        </div>

        <div className="w-1/3 flex items-center justify-center rounded-xl overflow-visible">
          <div className="absolute">
            <Image
              src="/images/golden-balance-scale.png"
              alt="justice scale"
              width={676}
              height={738}

              className="object-contain w-full max-w-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}