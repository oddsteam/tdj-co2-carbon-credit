import { ibm } from "@/fonts";

export default function GreenwashingTitle() {
    return (
        <section className="w-full md:h-[832px] sm:h-[100px] bg-[#011F1F] flex flex-col items-center justify-center text-white text-center space-y-6">
            <p className={`${ibm.className} font-bold text-[46px] leading-[100%] tracking-[0%] text-center align-middle`}>“ทุนใหญ่”</p>
        </section>
    );
}
