export default function DidYouKnowBanner() {
  return (
    <section className="bg-[#1C3A2F] py-10 px-4">
      <div className="max-w-6xl mx-auto bg-[#042B29] rounded-tl-[3rem] flex flex-col md:flex-row items-center justify-between px-6 py-8">
        {/* Left: Title */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-[#CFF09E]">คนไทย</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">รู้ไหมว่า ?</h2>
        </div>

        {/* Right: Fact */}
        <div className="text-gray-200 text-sm md:text-base max-w-2xl">
          คาร์บอนเครดิตจากปลูกไม้...ปลูกป่า “ชดเชย” ดูดซับคาร์บอนดีที่สุุดกลายเป็นเขียวลวง (Greenwashing)<br />
          ต้นไม้บางชนิดกลับคายคาร์บอน
        </div>
      </div>
    </section>
  );
}
