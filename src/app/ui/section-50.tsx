import { ibm } from "@/fonts";
import Image from "next/image";

export default function Section50() {
    return (
        <section className="w-full h-screen  bg-[#011F1F] flex flex-col items-center justify-center text-white text-center space-y-6 snap-start">
            <p className={`${ibm.className} font-bold text-[46px] leading-[100%] tracking-[0%] text-center align-middle`}>“ทุนใหญ่”</p>
            <Image
                src="/images/greenwashing-blur-text.png"
                alt="Greenwashing"
                width={600}
                height={140}
            />
        </section>
    );
}
