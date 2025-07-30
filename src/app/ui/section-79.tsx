export default function Section79() {
    return (
        <section className="w-full h-screen bg-[#011F1F] flex flex-col items-center justify-center text-white text-center space-y-6 px-6 snap-start">
            <p
                className="text-[20px] leading-[100%]"
                style={{ fontFamily: '"Chonburi", cursive' }}
            >
                สิ่งที่ TDJ...
            </p>
            <p
                className="text-[42px] leading-[100%]"
                style={{ fontFamily: '"Chonburi", cursive' }}
            >
                เรียกร้องว่าต้องมี
            </p>

            <div className="flex flex-col gap-4 max-w-4xl text-[21px] leading-[38px] tracking-wide text-[#A0C0BD]"
                style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}>
                <p>
                    “ร่าง พรบ.ลดโลกร้อน” ... ควร
                    <span className="text-white">ลดหย่อนภาษีให้ผู้ลดการปล่อยมลพิษ</span>
                    อย่างจริงจัง
                </p>
                <p>
                    “ร่าง พรบ.ลดโลกร้อน”... 
                    <span className="text-white">บังคับ</span>
                    โรงงานปล่อย CO2 ต้อง
                    <span className="text-white">จ่ายภาษีคาร์บอน + จ่ายเงินเข้ากองทุน</span>
                </p>
                <p>
                    “ร่าง พรบ.ลดโลกร้อน” ...มีทั้งของหน่วยงาน
                    <span className="text-white">รัฐและเครือข่ายภาคประชาชน</span>
                </p>
            </div>
        </section>
    );
}
