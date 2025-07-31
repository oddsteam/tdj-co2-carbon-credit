import Image from "next/image";

export default function SectionGlobalWarnigAct() {
  return (
    <section className="w-full aspect-[1280/832] relative snap-start">
      <Image
        src="/images/global-warming-act.png"
        alt="compare"
        fill
        className="object-contain"
      />
    </section>
  );
}
