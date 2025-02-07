
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Navbar from '../components/navbar';

// Define the Chef interface
interface Chef {
  _id: string;
  name: string;
  position: string;
  yearsOfExperience: number;
  specialty: string;
  description: string;
  currentlyActive: boolean;
  imageUrl: string;
}

export default async function Chefs() {
  // Fetch all chefs
  const query = `*[_type == "chef"]{
    _id,
    name,
    position,
    yearsOfExperience,
    specialty,
    description,
    currentlyActive,
    "imageUrl": image.asset->url
  }`;

  let chefs: Chef[] = [];

  try {
    chefs = await client.fetch(query);

    if (chefs.length === 0) {
      return <p>No chefs found</p>;
    }
  } catch (error) {
    console.error('Error fetching chefs:', error);
    return <p>Error fetching chefs. Please try again later.</p>;
  }

  return (


<div>
               
<Navbar/>

<section className="relative w-full h-[410px] bg-cover bg-center" style={{ backgroundImage: "url('/images/header.png');"}}>
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
    <h1 className="text-5xl md:text-5xl font-bold mb-2">Our Chefs</h1>


    <div className="py-4 flex items-center space-x-2 text-orange-500 text-lg md:text-xl">
      <span className="text-white">Home</span>
      <span>&gt;</span>
      <span>Chefs</span> 
    </div>
  </div>
</section> 
    <div className="bg-white pb-96">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-5 py-24">
          <div className="flex flex-wrap -m-4">
            {chefs.map((chef: Chef) => (
              <div key={chef._id} className="p-4 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex flex-col items-center text-center">
                  {/* Chef Image */}
                  <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={chef.imageUrl}
                      alt={chef.name}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'center' }} // Updated style
                    />
                  </div>

                  <div className="w-full">
                    {/* Chef Name */}
                    <h2 className="title-font font-bold text-lg text-gray-900">
                      <span className="font-semibold">Chef Name:</span> {chef.name}
                    </h2>

                    {/* Position */}
                    <h3 className="text-gray-500 mb-3">
                      <span className="font-semibold">Position:</span> {chef.position}
                    </h3>

                    {/* Years of Experience */}
                    <p className="text-gray-500 mb-3">
                      <span className="font-semibold">Years of Experience:</span> {chef.yearsOfExperience}
                    </p>

                    {/* Specialty */}
                    <p className="text-gray-500 mb-3">
                      <span className="font-semibold">Specialty:</span> {chef.specialty}
                    </p>

                    {/* Description */}
                    <p className="text-gray-500 mb-3">
                      <span className="font-semibold">Description:</span> {chef.description}
                    </p>

                    {/* Currently Active */}
                    <p className="text-gray-500">
                      <span className="font-semibold">Currently Active:</span> {chef.currentlyActive ? 'Yes' : 'No'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
</div>

    </div>
  );
}
