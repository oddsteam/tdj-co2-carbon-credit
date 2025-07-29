import Image from "next/image";

export default function Section70() {
  return (
    <section className="w-full min-h-[832px] bg-[#011F1F] flex flex-col items-center justify-center text-white text-center space-y-6">
      <p
        className="text-[42px] leading-[100%] text-center"
        style={{ fontFamily: '"Chonburi", cursive' }}
      >
        ไทยต้องมี “กฎหมายลดโลกร้อน”
      </p>
      <p
        className="text-[62px] leading-[100%] text-center text-[#3ED304]"
        style={{ fontFamily: '"Chonburi", cursive' }}
      >
        วาระด่วนแห่งชาติ
      </p>

      {/* ✅ ต้องกำหนด w และ h */}
      <div className="relative w-[811px] h-[859px]">
        <Image
          src="/images/global.png"
          alt="global"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
