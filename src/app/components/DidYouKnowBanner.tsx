export default function DidYouKnowBanner() {
  return (
    <section className="bg-[#1C3A2F] py-10 px-4">
      <div className="max-w-6xl mx-auto h-[183px] bg-[#011F1F] [border-top-right-radius:100px] [border-bottom-left-radius:100px] flex flex-col md:flex-row items-center justify-between px-6 py-8">
        {/* max-w-6xl mx-auto flex flex-col md:flex-row items-start p-8 
        [border-top-right-radius:100px] [border-bottom-left-radius:100px] bg-[#011F1F] */}
        {/* Left: Title */}
        <div className="mb-4 md:mb-0">
          <p className="text-sm">คนไทย</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white">รู้ไหมว่า ?</h2>
        </div>

        {/* Right: Fact */}
        <div className="text-gray-200 text-sm md:text-base max-w-2xl">
          คาร์บอนเครดิตจากปลูกไม้...ปลูกป่า “ชดเชย” ดูดซับคาร์บอนดีที่สุุดกลายเป็นเขียวลวง (Greenwashing)<br />
          ต้นไม้บางชนิดกลับคายคาร์บอน
        </div>
      </div>
      <iframe width="600" height="450" src="https://lookerstudio.google.com/embed/reporting/9d22e19c-5f43-425a-824a-54c98d71a5c8/page/p_taurod9iud" frameborder="0" style="border:0" allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
    </section>
  );
}
