export default function Section80() {
    return (
        <section
            className="w-full h-screen flex flex-col items-center justify-center text-center px-4 snap-start"
            style={{
                backgroundImage: `
    
    radial-gradient(102.16% 102.16% at 51.72% 104.21%, #00201F 1%, rgba(255, 255, 255, 1) 100%)
  `,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                fontFamily: '"IBM Plex Sans Thai Looped", sans-serif',
                color: '#1D1E1D',
            }}
        >
            <div className="max-w-4xl space-y-4">
                <h2 className="font-bold text-[31px] leading-[49px] text-center">
                    ประเทศไทยสามารถตอบสนองเป้าหมาย Net Zero<br />
                    ได้อย่างมีคุณภาพถึงเวลาเปลี่ยนเครื่องมือ... <span className="font-normal text-[21px] leading-[38px]">จากการฟอกเขียวเป็นการลดจริง</span>
                </h2>
                <p className="font-normal text-[21px] leading-[38px] max-w-3xl">
                    “คาร์บอนเครดิตจะมีความหมาย ก็ต่อเมื่อมันช่วยลดคาร์บอนได้จริง และสร้างความยุติธรรมได้จริง”
                    เพราะการรักษ์โลกไม่ควรเป็นสิทธิพิเศษของกลุ่มทุนและการเปลี่ยนแปลงสภาพภูมิอากาศ…
                    ไม่ควรเป็นภาระของชาวบ้านเพียงลำพังเราขอเสนอให้หน่วยงานที่เกี่ยวข้องขับเคลื่อน การเปลี่ยนแปลงเชิงโครงสร้างนี้ ร่วมกันตอนนี้ ไม่ใช่วันพรุ่งนี้….
                </p>
            </div>
        </section>
    );
}
