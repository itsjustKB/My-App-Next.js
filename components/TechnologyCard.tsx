"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Technology } from "@/app/lib/definitions";


interface TechnologyCardProps {
  tech: Technology;
}

// export default function TechnologyCard({ name, description }: TechnologyCardProps) {
//   return (
//     <div className="card">
//       <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
//         {name}
//       </h3>
//       <p className="text-gray-600 dark:text-gray-300">{description}</p>
//     </div>
//   );
// }

export default function TechnologyCard({ tech }: TechnologyCardProps) {
  return (
    <div id={`card${tech.id}`}  className="bg-sky-400 h-full">
      <div className="border rounded-lg p-4 h-full;">
        <Image
          src={tech.image_url}
          width={tech.width}
          height={tech.height}
          alt={tech.image_alt}
          className="rounded-md w-full"
          />
          <h2 className="text-xl font-bold mt-2">{tech.name}</h2>
          <p className="text-gray-600 mt-2">{tech.description}</p>
          <Link href={`/technologies/${tech.id}`}
          className="text-red-500 mt-4 inline-block"
          >
            View Details
          </Link>
      </div>
    </div>
  );
}  
