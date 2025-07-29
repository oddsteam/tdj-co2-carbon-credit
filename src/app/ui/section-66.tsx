import Image from "next/image";

export default function Section66() {
    return (
        <section
            className="w-full md:h-[632px] sm:h-[100px] flex flex-col items-center justify-center text-white text-center space-y-4"
            style={{
                background: "linear-gradient(0deg, #393938 0%, #603D2A 53.85%)",
            }}
        >
            <p
                className="text-[42px] leading-[45px]"
                style={{ fontFamily: '"Chonburi", cursive' }}
            >
                ใครกันที่ได้รับ
            </p>
            <div className="relative w-[300px] h-[60px]">
                <Image
                    src="/images/effect-blur-text.png"
                    alt="ผลกระทบ"
                    fill
                    className="object-contain translate-x-30"
                />
            </div>
        </section>
    );
}
