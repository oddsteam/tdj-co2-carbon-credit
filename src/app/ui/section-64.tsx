import Image from "next/image";

export default function Section64() {
  return (
    <section className="w-full aspect-[1280/1654] relative snap-start">
      <Image
        src="/images/carbon-magic.png"
        alt="carbon-scam"
        fill
        className="object-contain"
      />
    </section>
  );
}
