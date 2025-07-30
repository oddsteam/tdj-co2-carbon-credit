import Image from "next/image";

export default function Section60() {
    return (
        <section className="w-full h-screen bg-[#011F1F] flex flex-col items-center justify-center text-white text-center space-y-6 snap-start">
            <p
                className="text-[60px] leading-[100%] text-center"
                style={{ fontFamily: '"Chonburi", cursive' }}
            >
                สับสน <span
                    className="text-[40px] leading-[100%] text-center"
                    style={{ fontFamily: '"Chonburi", cursive' }}
                >“ข้อมูลป่าเขียวไทย”</span>
            </p>
            <p
                className="text-[40px] leading-[100%] text-center text-[#3ED304]"
                style={{ fontFamily: '"Chonburi", cursive' }}
            >
                ตัวเลขต่างกัน 1 เท่า
            </p>

            <div>


                <Image
                    src="/images/compare-forest.png"
                    alt="บริษัทที่เกี่ยวข้องกับคาร์บอนเครดิต"
                    width={700}
                    height={500}
                    className="rounded-lg shadow"
                />
            </div>
            <p
                className="text-[15px] leading-[34px] text-center text-[#99B79A]"
                style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
            >
                แหล่งอ้างอิงข้อมูล : กรมป่าไม้ กับ GISTDA
            </p>

        </section>
    );
}
