import Image from "next/image";

export default function SectionCompare() {
  return (
    <section className="w-full aspect-[1280/832] relative snap-start">
      <Image
        src="/images/compare-rules.png"
        alt="compare"
        fill
        className="object-contain"
      />
    </section>
  );
}
