import { ibm } from "@/fonts";

export default function HeroSection() {
  return (
    <div>
      <div className="relative w-full h-auto overflow-hidden">
        <img
          src="/images/bg-forest.png"
          alt="Background"
          className="w-full h-screen"
        />

        <div className={`${ibm.className} absolute top-[45%] left-[17%] text-white leading-[100%] text-left`}>
          <div className="text-[44px] font-medium">เจาะข้อมูล</div>
          <div className="font-bold mt-12">
            <span className="text-[46px]">กลลวงคาร์บอนเครดิต </span>
            <span className="text-[86px]">“ทุนใหญ่”</span>
          </div>
        </div>

        <div className="absolute bottom-[15%] left-1/2 translate-x-[-50%] text-white text-xl md:text-2xl text-center">
          <div className="font-kart text-[84px] leading-[70px] text-center" style={{ fontFamily: '"Kart-Satapat", sans-serif' }}>
            ลับลวงพราง <br /> Greenwashing ป่าเขียว
          </div>
        </div>

        <img
          src="/images/bottom-forest.png"
          alt="Ground"
          className="absolute bottom-0 w-full"
        />
      </div>
      <div className="relative w-full h-auto overflow-hidden">
        <img
          src="/images/hero-2.png"
          alt="Background"
          className="w-full h-screen"
        />
      </div>
      <div className="relative w-full h-auto">
        <img
          src="/images/hero-3.png"
          alt="Background"
          className="w-full h-screen"
        />
        <img
          src="/images/cloud-1.png"
          alt="Ground left"
          className="absolute -top-[20%] w-full"
        />
      </div>
    </div>
  );
}
