export default function ClimateDraftCompareSection() {
  return (
    <section className="w-full bg-[#011F1F] flex flex-col items-center justify-center text-white px-4 py-10 space-y-10">
      {/* Header */}
      <div className="w-full flex flex-col items-center justify-center text-center space-y-4">
        <div className="flex items-center gap-4 justify-center">
          <img
            src="/images/department-of-climate-change.png"
            alt="climate logo"
            className="w-[186px] h-[186px] object-contain"
          />
          <div className="flex flex-col leading-[46px] text-left">
            <span
              className="text-white text-[20px] font-bold"
              style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
            >
              เปรียบเทียบ
            </span>
            <span
              className="text-white text-[24px] font-bold"
              style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}
            >
              ร่าง พ.ร.บ.การเปลี่ยนแปลงสภาพภูมิอากาศ
            </span>
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="grid grid-cols-2 gap-6">
        {/* หน่วยงานรัฐ */}
        <div className="w-[548px] h-[650-px] bg-[#2B3333] rounded-[30px] p-6 space-y-4">
          <h3 className="text-[#66FF00] text-[32px] font-bold leading-none" style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}>
            หน่วยงานรัฐ
          </h3>

          <ul className="list-disc pl-5 text-left text-white space-y-10 text-[16px] pt-5" style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}>
            <li>
              ตั้งเป้าบรรลุ <span className="text-[#71C6BA] font-bold">Carbon Neutrality ในปี 2593</span> และ <span className="text-[#71C6BA] font-bold">Net Zero ภายปี 2608</span> ตามกรอบข้อตกลงปารีส
            </li>
            <li>
              โครงสร้างการบริหาร ใช้<span className="text-[#71C6BA] font-bold">ระบบรวมศูนย์อำนาจ</span>ตัดสินใจอยู่ในมือ ข้าราชการเป็นหลัก
            </li>
            <li>
              เน้นการ<span className="text-[#71C6BA] font-bold">ส่งเสริมกลไกตลาด</span> เช่น คาร์บอนเครดิตและภาษี CBAM เพื่อให้ภาคธุรกิจสามารถปรับตัว
            </li>
            <li>
              รัฐยัง<span className="text-[#71C6BA] font-bold">ไม่บัญญัติสิทธิด้านสิ่งแวดล้อม</span>
            </li>
            <li>
              ร่างของรัฐ<span className="text-[#71C6BA] font-bold">เน้นบทลงโทษทางปกครอง</span> เช่น ปรับสูงสุด 5 ล้านบาทหากรายงานข้อมูลเท็จ
            </li>
          </ul>
        </div>

        {/* ประชาชน */}
        <div className="w-[548px] h-[659px] bg-[#2B3333] rounded-[30px] p-6 space-y-4">
          <h3 className="text-[#66FF00] text-[32px] font-bold leading-none" style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}>
            ประชาชน
          </h3>
          <ul className="list-disc pl-5 text-left text-white space-y-10 text-[16px] pt-5" style={{ fontFamily: '"IBM Plex Sans Thai", sans-serif' }}>
            <li>
              ตั้งเป้าบรรลุ <span className="text-[#71C6BA] font-bold">Carbon Neutrality ปี 2578</span> และ <span className="text-[#71C6BA] font-bold">Net Zero ภายในปี 2593</span> เพื่อรับมือผลกระทบที่เกิดขึ้นจริงแล้วใน กลุ่มเปราะบาง เช่น เกษตรกรและชุมชนชายฝั่ง
            </li>
            <li>
               <span className="text-[#71C6BA] font-bold">เน้นการกระจายอำนาจ</span>เปิดพื้นที่ให้ประชาชนและเยาวชนมีส่วน ร่วมตั้งแต่กระบวนการวางแผนจนถึงการกำกับนโยบายกลไกลด การปล่อยก๊าซเรือนกระจก
            </li>
            <li>
              ใช้แนวทางเข้มงวดกว่า<span className="text-[#71C6BA] font-bold">เสนอจัดเก็บภาษีคาร์บอนโดยตรงจาก อุตสาหกรรมฟอสซิล และจำกัดการใช้คาร์บอนเครดิต</span> เนื่องจากมองว่าเป็นช่องทาง “ฟอกเขียว” ที่ลดความรับผิดชอบของอุตสาหกรรม 
            </li>
            <li>
              หลัก<span className="text-[#71C6BA] font-bold">สิทธิด้านสิ่งแวดล้อม ผ่าน “สิทธิ 13 ข้อ”</span> เช่น สิทธิในการเข้าถึงข้อมูล การเยียวยา และการมีส่วนร่วม
            </li>
            <li>
              <span className="text-[#71C6BA] font-bold">เพิ่มบทลงโทษทางอาญา</span> เช่น โทษจำคุกสูงสุด 5 ปี หากละเมิดสิทธิหรือแอบอ้างข้อมูลเท็จ ซึ่งสะท้อนจุดยืนที่เข้มข้นกว่าต่อการปกป้องสิ่งแวดล้อม
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
