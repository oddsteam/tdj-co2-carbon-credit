import Image from "next/image";

export default function EffectSection() {
  return (
    <section className="bg-[#011F1F] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden">
        {/* Left image - 1/4 */}
        <div className="w-full md:w-2/5 relative h-64 md:h-auto">
          <Image
            src="/bamboo.jpg"
            alt="bamboo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right content - 3/4 */}
        <div className="w-full md:w-3/5 bg-[#17332A] p-6 md:p-10 text-gray-100">
          <p className="text-sm mb-2">แท้จริงแล้ว</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">ผลสืบเนื่องจาก</h2>
          <p className="text-sm md:text-base leading-relaxed">
            ภาวะโลกร้อน (Global Warming)<br />
            ได้สร้างวิกฤติใหญ่เป็นปัญหาระดับนานาชาติ นับวันยิ่งมีการเปลี่ยนไปใช้คำว่า{" "}
            <span className="font-semibold text-white">“โลกเดือด”</span> หรือ{" "}
            <span className="font-semibold text-white">“ภาวะโลกเดือด” (Global Boiling)</span>{" "}
            เพื่อเรียกอาการที่โลกร้อนขึ้นอย่างรุนแรงและรวดเร็วกว่าเดิม ซึ่ง{" "}
            <span className="font-semibold text-white">สาเหตุสำคัญคือการปล่อยก๊าซเรือนกระจก</span>{" "}
            โดยประเทศไทยปล่อยก๊าซเรือนกระจกรวมมากเป็น{" "}
            <span className="font-semibold text-white">อันดับที่ 20 ของโลก</span> จากดัชนี CCPI 2025
            <br /><br />
            ที่มาจากสำนักสื่อภาคประชาสังคมอย่าง TDJ โอเพ่นดาต้า (open data) ที่สะท้อนภาพรวมของ{" "}
            <span className="font-semibold text-white">ปัญหาการปล่อยก๊าซเรือนกระจก</span> และ{" "}
            <span className="font-semibold text-white">การซื้อขายคาร์บอนเครดิตของอุตสาหกรรมไทย</span>
            <br /><br />
            แต่ที่ผ่านมา <span className="font-semibold text-white">มีความไม่โปร่งใส</span> ในการเปิดเผยข้อมูลสู่สาธารณะ
            <br /><br />
            <span className="font-semibold text-white">เสี่ยงต่อผลกระทบโลกร้อนมากขึ้น</span> จากภัยพิบัติ ภัยแล้ง และสภาพอากาศแปรปรวน (Climate change)
          </p>
        </div>
      </div>
    </section>
  );
}
