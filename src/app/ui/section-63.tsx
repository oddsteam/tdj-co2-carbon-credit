import Image from "next/image";

export default function Section63() {
  return (
    <section className="w-full md:h-[832px] sm:h-[100px] bg-[#011F1F] flex items-center justify-center text-white px-6 text-center">
      <div className="w-[80%] flex flex-col items-center space-y-10">
        {/* Header */}
        <h2
          className="text-[42px] leading-[45px]"
          style={{ fontFamily: '"Chonburi", cursive' }}
        >
          ใครได้ผลประโยชน์ ?
        </h2>

        {/* คำพูด + รูปเกษตรกร */}
        <div className="relative w-full max-w-[1130px]">
          <div className="absolute right-0 -top-20">
            <div className="bg-[#3C5A78] text-white px-4 py-2 rounded-xl mb-2 text-sm inline-block">
              “ปลูกแทบตาย ได้แค่น้ำใจ”
            </div>
            <Image
              src="/images/farmer.png"
              alt="farmer"
              width={160}
              height={160}
            />
          </div>
        </div>

        {/* แถบกราฟ 70/20/10 */}
        <div className="w-full max-w-[700px] text-sm">
          <div className="flex h-[50px] w-full text-white text-center font-semibold">
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

          <div className="mt-4 flex h-[50px] w-full text-white text-center font-semibold">
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
