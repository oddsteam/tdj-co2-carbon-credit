export default function HeroSection() {
  return (
    <div className="relative w-full h-[80vh]">
      {/* Layer 1: Background image */}
      <img
        src="/forest-hero.jpg" // เปลี่ยนเป็นชื่อไฟล์ของคุณ
        alt="Forest background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Optional: Overlay เพื่อให้ข้อความอ่านง่ายขึ้น */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Layer 2: Text */}
      <div className="absolute bottom-30 left-6 text-white z-20">
        <p className="text-3xl text-white text-center font-semibold relative z-10">
          เจาะข้อมูล<span className="relative inline-block px-6 py-2 z-10">กลลวงคาร์บอนเครดิต
            <span
              className="absolute inset-0 -top-4 -left-7 -right-6 -bottom-3  scale-130 bg-no-repeat bg-contain bg-center z-[-1] pointer-events-none"
              style={{
                backgroundImage: "url('hand-circle.png')",
              }}
            />
          </span>
          “ทุนใหญ่”
        </p>
        <p className="pt-5 md:text-base drop-shadow">
          ลับลวงพราง Greenwashing ป่าเขียว
        </p>
      </div>
    </div>
  )
}
