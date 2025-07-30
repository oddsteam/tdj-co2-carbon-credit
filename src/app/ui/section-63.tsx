import Image from "next/image";

export default function Section63() {
  return (
    <section className="w-full md:h-[832px] bg-[#011F1F] flex flex-col items-center justify-center text-white px-6 text-center">
      {/* h2 ชิดซ้าย */}
      <div className="w-[70%] text-left mb-10">
        <h2
          className="text-[42px] leading-[45px]"
          style={{ fontFamily: '"Chonburi", cursive' }}
        >
          ใครได้ผลประโยชน์ ?
        </h2>
      </div>

      {/* กล่องเนื้อหาตรงกลาง */}
      <div className="w-[70%] flex flex-col items-center space-y-10">
        {/* กราฟ + รูปชาวนา */}
        <div className="relative w-full">

          <div className="absolute right-0 z-10"
            style={{ transform: 'translateY(-100%)' }}>
            <Image
              src="/images/farmer-pain.png"
              alt="farmer"
              width={400}
              height={400}
            />
          </div>
          <div className="flex h-[100px] w-full text-white text-center font-semibold relative z-0">
            <div className="bg-[#24A148] w-[70%] flex items-center justify-center">
              เอกชน<br />70%
            </div>
            <div className="bg-[#FF7800] w-[20%] flex items-center justify-center">
              ชาวบ้าน<br />20%
            </div>
            <div className="bg-[#C25B00] w-[10%] flex items-center justify-center">
              รัฐ<br />10%

            </div>
          </div>

          <div className="mt-4 flex h-[100px] w-full text-white text-center font-semibold">
            <div className="bg-[#24A148] w-[90%] flex items-center justify-center">
              เอกชน<br />90%
            </div>
            <div className="bg-[#C25B00] w-[10%] flex items-center justify-center">
              รัฐ<br />10%
            </div>
          </div>
        </div>

        {/* อ้างอิง */}
        <p
          className="text-[14px] text-white/70"
          style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
        >
          แหล่งอ้างอิงข้อมูล : <span className="text-red-500">xxxxx</span>
        </p>

        {/* ข้อความอธิบายล่าง */}
        <p
          className="text-[16px] leading-[32px] max-w-[960px]"
          style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
        >
          ป่าไม้กลายเป็นกลไกหรือเครื่องมือฟอกเขียวคาร์บอนเครดิตขององค์กรหรือบริษัทบางแห่ง
          โดยเฉพาะการใช้ “ป่าสงวน” “ป่าชุมชน” “ป่าชายเลน”
          ซึ่งเป็นทรัพยากรส่วนรวมของประเทศมาใช้ทำโครงการคาร์บอนเครดิต โดยภาคเอกชน และ{" "}
          <span className="text-[#3ED304] font-semibold">
            การจัดสรรแบ่งปันผลประโยชน์แบบไม่เป็นธรรม
          </span>
        </p>
      </div>
    </section>
  );
}
