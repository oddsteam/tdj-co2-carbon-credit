import Image from "next/image";

export default function CarbonCreditCompanies() {
  return (
    <section className="bg-[#263234] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p className="text-sm text-[#CFF09E] mb-1">
          นายทุนใหญ่ ... ลับ ลวง พราง
        </p>
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          ข้อมูลซื้อขาย “คาร์บอนเครดิต” (Carbon Credit) อย่างไร
        </h2>

        <div className="w-full h-[1px] bg-[#1ABC9C] my-6" />

        {/* Main title */}
        <p className="text-sm md:text-base text-gray-200 mb-2">
          เมื่อลงพื้นที่เปรียบเทียบข้อมูลของบริษัทใหญ่ในตลาดหลักทรัพย์
        </p>
        <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-relaxed">
          โครงการคาร์บอนเครดิตภาคป่าไม้<br />
          110 โครงการ พบว่า
        </h3>

        {/* Central image */}
        <div className="w-full flex justify-center">
          <Image
            src="/projects-by-company.png"
            alt="บริษัทที่เกี่ยวข้องกับคาร์บอนเครดิต"
            width={700}
            height={500}
            className="rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
}
