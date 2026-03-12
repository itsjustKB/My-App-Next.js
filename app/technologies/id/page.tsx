import { getTechnologyById } from "@/app/lib/data";
import TechnologyInfo from "@/components/TechnologyInfo";

export default async function TechnologyDetails({ params }: { params: { id: string } }) {
  const tech = await getTechnologyById(params.id);
  if (!tech) {
    return (
      <main className="max-w-3xl mx-auto p-8">
        <h1 className="text-2xl font-semibold">Not found</h1>
        <p>The technology you requested does not exist.</p>
      </main>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      {/* send entire object, component handles null internally */}
      <TechnologyInfo technology={tech} />
    </main>
  );
}
