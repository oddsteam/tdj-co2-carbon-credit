import { ibm } from "@/fonts";

export default function Section75() {
  return (
    <section className="relative w-full md:h-screen overflow-hidden snap-start">
      <img
        src="/images/bg-forest.png"
        alt="Background"
        className="w-full h-screen"
      />

      <div className={`${ibm.className} absolute top-[45%] left-[17%] text-white leading-[100%] text-left`}>
        <div className="text-[44px] font-medium">เจาะ Open Data</div>
        <div className="font-bold mt-12">
          <span className="text-[54px]">"เปิด 3 มายากลก๊าซเรือนกระจก"</span>
          {/* <span className="text-[86px]">“ทุนใหญ่”</span> */}
        </div>
      </div>

      <div className="absolute bottom-[15%] left-1/2 translate-x-[-50%] text-white text-xl md:text-2xl text-center">
        <div className="font-kart text-[84px] leading-[70px] text-center" style={{ fontFamily: '"Kart-Satapat", sans-serif' }}>
          ทุนใหญ่ <br /> Greenwashing ป่าเขียว
        </div>
      </div>

      <img
        src="/images/bottom-forest.png"
        alt="Ground"
        className="absolute bottom-0 w-full"
      />
    </section>
  );
}
