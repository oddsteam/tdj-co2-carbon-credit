"use client";

import Image from "next/image";
import { ibm } from "@/fonts";

const projectData = [
  {
    name: "PTT",
    logo: "/images/logo-ptt.png",
    projectCount: 6,
    areaTotal: 4370.57,
    areaForest: 675.41,
  },
  {
    name: "PTTEP",
    logo: "/images/logo-pttep.png",
    projectCount: 1,
    areaTotal: 5200,
    areaForest: 5200,
  },
  {
    name: "Banpu",
    logo: "/images/logo-banpu.png",
    projectCount: 1,
    areaTotal: 207.44,
    areaForest: 138.7,
  },
  {
    name: "Bangchak",
    logo: "/images/logo-bangchak.png",
    projectCount: 1,
    areaTotal: 8191.33,
    areaForest: 2273.3,
  },
];

export default function SectionForestChart() {
  const maxArea = Math.max(
    ...projectData.map((d) => Math.max(d.areaTotal, d.areaForest))
  );

  return (
    <section className="w-full h-screen bg-[#011F1F] flex flex-col items-center justify-center text-white text-center space-y-10 px-4 snap-start">
      <p
        className={`${ibm.className} font-bold text-[46px] leading-[100%] tracking-[-1%]`}
      >
        โครงการคาร์บอนเครดิตภาคป่าไม้ <br />
        110 โครงการ พบว่า
      </p>

      <div className="flex justify-center gap-12 flex-wrap">
        {projectData.map((org) => {
          const totalHeight = (org.areaTotal / maxArea) * 150;
          const forestHeight = (org.areaForest / maxArea) * 150;

          return (
            <div key={org.name} className="flex flex-col items-center gap-3">
              <div className="flex gap-1 items-end h-[200px]">
                <div className="flex flex-col items-center">
                  <span className="text-xs mb-1 whitespace-nowrap leading-tight">
                    พื้นที่ปลูกป่า <br />
                    {org.areaForest.toLocaleString()} ไร่
                  </span>
                  <div
                    className="w-[41px] bg-[#9CEA7F]"
                    style={{ height: `${forestHeight}px` }}
                  />
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-xs mb-1 whitespace-nowrap leading-tight">
                    {org.projectCount} โครงการ <br />
                    พื้นที่ {org.areaTotal.toLocaleString()} ไร่
                  </span>
                  <div
                    className="w-[41px] bg-[#305F39]"
                    style={{ height: `${totalHeight}px` }}
                  />
                </div>
              </div>

              {/* Logo */}
              <div className="w-16 h-16 relative">
                <Image
                  src={org.logo}
                  alt={org.name}
                  fill
                  className="object-contain rounded-full bg-white p-2"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
