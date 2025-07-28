import Image from "next/image";

export default function WhoIsAffectedDetail() {
    return (
        <section className="w-full bg-[#393938] flex flex-col items-center justify-center text-white py-16 px-4">
            <div className="w-[80%] grid md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div className="bg-[#2F2F2F] rounded-[30px] overflow-hidden flex flex-col">
                    <div className="relative w-full h-[260px]">
                        <Image
                            src="/images/affected-1.png"
                            alt="affected-1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-left px-6 py-4 flex flex-col gap-3">
                        <p className="text-[#FF8000] font-bold text-base leading-[140%]">
                            คาร์บอนเครดิตไม่ถึงมือชุมชน! ค่าตรวจพุ่ง นายทุนฟัน 80% ชาวบ้านขาดทุนตั้งแต่เริ่ม<br />
                            กลุ่มองค์กรภาคประชาสังคมจังหวัดสุรินทร์
                        </p>
                        <p className="text-sm leading-[160%]">
                            ออกมาแสดงจุดยืนชัดเจนต่อต้านโครงการคาร์บอนเครดิตในประเทศไทยโดยมองว่าเป็นเพียงเครื่องมือของทุนใหญ่ในการ “ฟอกเขียว” (Greenwashing) สร้างภาพลักษณ์ว่าใส่ใจสิ่งแวดล้อม ทั้งที่ทำให้เกิดความเหลื่อมล้ำในระดับพื้นที่และมาตราฐานชาติ
                        </p>
                        <button className="mt-2 bg-white text-black rounded-full px-6 py-2 self-start text-sm font-medium">
                            อ่านเพิ่มเติม
                        </button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#2F2F2F] rounded-[30px] overflow-hidden flex flex-col">
                    <div className="relative w-full h-[260px]">
                        <Image
                            src="/images/affected-2.png"
                            alt="affected-2"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="text-left px-6 py-4 flex flex-col gap-3">
                        <p className="text-[#FF8000] font-bold text-base leading-[140%]">
                            ป่าสงวน “คำป่าหลาย” มุกดาหาร รุกป่าชุมชน 600 ไร่ อ้างทำกังหันลม...กราบซื้อที่ดินทำ คาร์บอนเครดิต<br />
                            กลุ่มทุนอ้าง “โครงการสีเขียว” ขับไล่ชาวบ้าน
                        </p>
                        <p className="text-sm leading-[160%]">
                            บทสัมภาษณ์นี้กล่าวถึง บทบาทของ NGO ในการต่อสู้กับโครงการของรัฐและเอกชน ในจังหวัดมุกดาหารและพื้นที่ใกล้เคียง ที่มักอ้างอิงนโยบาย คาร์บอนเครดิต และการลดโลกร้อน แต่กลับสร้างความเดือดร้อนให้กับชาวบ้านในพื้นที่ชุมชน รวมถึงส่วนอื่นๆ เช่น NGO ในพื้นที่ใกล้เคียง
                        </p>
                        <button className="mt-2 bg-white text-black rounded-full px-6 py-2 self-start text-sm font-medium">
                            อ่านเพิ่มเติม
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
