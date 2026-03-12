import { fetchAllTechs } from "@/app/action/fetch";
import TechnologyCard from "@/components/TechnologyCard";
// import Link from "next/link";
// import { getTechnologies } from "@/app/lib/data";

// export default async function Technologies() {
//   const technologies = await getTechnologies();
//   const allTech = await fetchAllTechs();
//   return (
//     <main className="max-w-3xl mx-auto p-8">
//       <h1 className="text-3xl font-bold mb-6">Technologies</h1>
//       <div className="grid gap-6 md:grid-cols-2">
//         {technologies.map((tech) => (
//           <Link key={tech.id} href={`/technologies/${tech.id}`}>            
//             <TechnologyCard
//               name={tech.name}
//               description={tech.description}
//             />
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }


export default async function Technologies() {
  const allTech = await fetchAllTechs();
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 mx-auto">Technologies</h1>
          {allTech.map((tech) => (
            <TechnologyCard key={tech.id} tech={tech} />
          ))}
    </div>
  );
}

