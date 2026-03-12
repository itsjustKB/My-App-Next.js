import { Technology } from '@/app/lib/definitions';
import Image from 'next/image';

interface TechnologyInfoProps {
  technology: Technology | null;
}

export default function TechnologyInfo({ technology }: TechnologyInfoProps) {
  if (!technology) return null;

  return (
    <div className='p-6 max-w-2xl mx-auto bg-sky-400 h-full'>
      {/* Technology Name */}
      <h1 className='text-3xl font-bold'>{technology.name}</h1>

      {/* Technology Image */}
      <Image
        src={`/${technology.image_url}`}
        alt={technology.image_alt}
        width={technology.width}
        height={technology.height}
        className="w-full rounded-lg mt-4 shadow-md"
      />

      {/* Additional Technology Details */}
      <div className='mt-6 space-y-2 text-gray-700'>
        <p>
          <strong>Technology Name:</strong> {technology.name}
        </p>
        <p>
          <strong>Description:</strong> {technology.description}
        </p>
      </div>

      {/* Link to info page (if needed) */}
      <div className='mt-6'>
        <h2 className="text-xl font-semibold">More Details</h2>
      </div>
    </div>
  );
}