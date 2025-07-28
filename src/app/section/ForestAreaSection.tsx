import { chonburi, ibm } from "@/fonts";

export default function ForestAreaSection() {
    return (
        <section className="w-full md:h-[832px] sm:h-[100px] bg-[#011F1F] flex flex-col items-center justify-center text-white text-center space-y-6">
            <div className="flex-0 h-[40%] flex items-center justify-center mt-10">
                <div className="w-[1112px] h-[241px] bg-[#17332A] rounded-tr-[100px] rounded-bl-[100px] mx-auto flex flex-col md:flex-row justify-center px-10 py-8">
                    <div className="w-full md:w-2/6 text-lg md:text-xl text-left ">
                        <div className={`mb-1 ${ibm.className} text-[16px] leading-[29px] font-normal`}>คนไทย</div>
                        <div className={`${chonburi.className} text-[42px] leading-[100%] font-normal`}>รู้ไหมว่า ?</div>
                    </div>

                    <div className="w-full md:w-4/6 text-sm md:text-base leading-relaxed pt-10">
                        <div className="text-sm leading-7">
                            <ul
                                className="text-[16px] leading-[29px] text-left list-disc pl-6"
                                style={{ fontFamily: '"IBM Plex Sans Thai Looped", sans-serif' }}
                            >
                                <li>พื้นที่ป่าไม้ไทย 10 ปี ลด 3 แสนไร่</li>
                                <li>พื้นที่สีเขียวในเป้าหมายยุทธศาสตร์ชาติ ต้องเพิ่มขึ้นเป็น 55%</li>
                                <li>คาร์บอนเครดิต ไม่ได้เพิ่มพื้นที่ป่าเขียว</li>
                                <li>ผลประโยชน์ 70:20:10 เอกชนได้ 70% (ป่าชุมชนและป่าชายเลน)</li>
                                <li>ผลประโยชน์ 90:10 เอกชนได้ 90% (ป่าสงวน)</li>
                            </ul>


                        </div>
                    </div>
                </div>

            </div>

            <div className="flex-1 h-[60%] flex items-center justify-center text-left">
                <div className="w-[532px] h-[331px] bg-white mx-auto">

                </div>
            </div>
        </section>
    );
}
