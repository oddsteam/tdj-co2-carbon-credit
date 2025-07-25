export default function DidYouKnowFacts() {
  return (
    <section className="bg-[#011F1F] py-12 px-4 text-white">
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-start p-8 
        [border-top-right-radius:100px] [border-bottom-left-radius:100px] bg-[#17332A]"
      >
        {/* Left Title */}
        <div className="md:w-1/3 mb-6 md:mb-0">
          <p className="text-sm text-[#CFF09E] mb-1">คนไทย</p>
          <h2 className="text-3xl font-bold text-white">รู้ไหมว่า ?</h2>
        </div>

        {/* Right Content */}
        <div className="md:w-2/3 space-y-2 text-sm md:text-base text-gray-100 leading-relaxed">
          <p>
            ไทยแลนด์... <span className="font-semibold text-white">ปล่อยก๊าซเรือนกระจกอันดับที่ 24 ของโลก</span> ในดัชนี CCPI 2025
          </p>
          <p>
            ไทยแลนด์... <span className="font-semibold text-white">ปล่อยปีละ 385.94 MtCO2e</span>
          </p>
          <p>
            ไทยแลนด์... ตั้งเป้าลดก๊าซ 120 ล้านตัน ลดได้จริง 8.64 ล้านตันในปี 2564 <br />
            ที่มีการแพร่ระบาดของโควิด
          </p>
          <p>
            ไทยแลนด์... ขึ้นว่า 25 ปีข้างหน้าอาจบรรลุความเป็นกลางทางคาร์บอนในปี 2593
          </p>
          <p>
            ไทยแลนด์... ขึ้นว่า 40 ข้างหน้าอาจปล่อยก๊าซเรือนกระจกเหลือ “ศูนย์” ในปี 2608
          </p>
          <p>
            ไทยแลนด์... <span className="font-semibold text-white">เสี่ยงรับผลกระทบโลกร้อน - โลกร้อน อันดับ 30 ของโลก</span>
          </p>
          <p>
            ทั้งเศรษฐกิจอาจเสียหายและภัยพิบัติจากสภาพภูมิอากาศแปรปรวน (Climate change)
          </p>
          <p>
            ไทยแลนด์... ปัจจุบันกำลังโดนเก็บ “ภาษีคาร์บอนข้ามพรมแดน” ฉบับแรกของโลกจากอียู (CBAM)
          </p>
        </div>
      </div>
    </section>
  );
}
