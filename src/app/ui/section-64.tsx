import Image from "next/image";

export default function Section64() {
  return (
    <section className="w-full aspect-[2560/3872] relative">
      <Image
        src="/images/canbon-credit-scam.png"
        alt="carbon-scam"
        fill
        className="object-contain"
      />
    </section>
  );
}
