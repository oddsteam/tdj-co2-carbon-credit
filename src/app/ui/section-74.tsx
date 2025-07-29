export default function Section74() {
    return (
        <section
            className="w-full min-h-[832px] flex flex-col items-center justify-center text-black text-center space-y-6 px-4"
            style={{
                backgroundImage: `radial-gradient(141.95% 85.88% at 51.72% 87.92%, rgba(255, 255, 255, 0.9) 50%, #00201F 100%)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                fontFamily: '"IBM Plex Sans Thai Looped", sans-serif'
            }}
        >
            {/* background: linear-gradient(0deg, #FFFFFF, #FFFFFF);
linear-gradient(0deg, color(display-p3 1.000 1.000 1.000), color(display-p3 1.000 1.000 1.000)),
radial-gradient(141.95% 85.88% at 51.72% 87.92%, rgba(255, 255, 255, 0.4) 0%, #00201F 100%);
radial-gradient(141.95% 85.88% at 51.72% 87.92%, color(display-p3 1.000 1.000 1.000 / 0.4) 0%, color(display-p3 0.004 0.122 0.122) 100%);
 */}
            <div className="max-w-5xl mt-25">
                <p
                    className="text-[25px] font-normal leading-[38px] text-[#344243]"
                >
                    จากการทำรายงานข่าวด้วยข้อมูลเชิงลึกนี้
                </p>
                <p
                    className="text-[25px] font-bold leading-[38px] text-black mb-6"
                >
                    สรุปได้ว่าคนไทยควรช่วยกันผลักดันนโยบายของรัฐและหน่วยงานที่เกี่ยวข้อง ดังนี้
                </p>
            </div>

            <div className="w-[1124px] h-[330px] rounded-[30px] bg-[#033B36] text-left px-10 py-6 flex flex-col justify-center relative text-white space-y-2">
                <div className="absolute left-6 top-4 text-[#00FF57] text-5xl">“</div>

                <ul className="list-decimal px-10 leading-[38px] space-y-1 text-[21px]">
                    <li>
                        องค์กรทั้งภาครัฐและเอกชนต้องเปิดเผยและรายงานข้อมูลการปล่อยก๊าซเรือนกระจกและ
                        การลดก๊าซเรือนกระจกประจำปี เพื่อสร้าง open Data ระดับชาติ
                    </li>
                    <li>
                        บังคับให้ “ลด + ชดเชย”ปล่อยก๊าซเรือนกระจก” ไม่ใช่ สมัครใจ เหมือนปัจจุบัน
                    </li>
                    <li>
                        คนไทยออกมาเร่งรัด ไทยแลนด์มี “กฎหมายลดโลกร้อน” มีสาระสำคัญ ดังนี้
                        <ol className=" pl-5 space-y-1">
                            <li>
                                3.1 จัดเก็บภาษี + หย่อนภาษี องค์กรหรือหน่วยงานที่เกี่ยวข้องก๊าซเรือนกระจก
                            </li>
                            <li>
                                3.2 ต้องมีบทลงโทษทางแพ่งและทางอาญา
                            </li>
                            <li>
                                3.3 ภาคประชาสังคมมีส่วนร่วมในกระบวนการตัดสินใจ
                            </li>
                        </ol>
                    </li>
                </ul>

                <div className="absolute right-6 bottom-4 text-[#00FF57] text-5xl">”</div>
            </div>
        </section>
    );
}
