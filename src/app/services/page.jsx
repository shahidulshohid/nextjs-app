import Link from "next/link";

const ServicesPage = () => {
  const data = [
    {
      id: 1,
      imageId: "https://i.ibb.co.com/SWr7tjW/gettyimages-1369917180-612x612.jpg",
      description: "A serene beach with golden sand and clear blue water.",
    },
    {
      id: 2,
      imageId: "https://i.ibb.co.com/F4FH5cVj/portrait-female-teacher-holding1-yellow-files-pencil-green-140725-150275.jpg",
      description: "A modern city skyline at night, glowing with lights.",
    },
    {
      id: 3,
      imageId: "https://i.ibb.co.com/qMMBBCtX/materials1jpg.jpg",
      description: "A dense forest with tall green trees and misty air.",
    },
    {
      id: 4,
      imageId: "https://i.ibb.co.com/cchnkj9q/nice-see-you-group-young-people-casual-clothes-working-modern-office-146671-16474.jpg",
      description: "A snow-covered mountain peak under a bright blue sky.",
    },
    {
      id: 5,
      imageId: "https://i.ibb.co.com/SWr7tjW/gettyimages-1369917180-612x612.jpg",
      description:
        "A cozy cabin in the woods with smoke rising from the chimney.",
    },
    {
        id: 6,
        imageId: "https://i.ibb.co.com/SWr7tjW/gettyimages-1369917180-612x612.jpg",
        description: "A serene beach with golden sand and clear blue water.",
      },
  ];
  return (
    <div>
      <p className="font-bold text-3xl text-center mb-5">Services page</p>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
     {data.map((d) => (
        <div key={d.id}>
          <Link href={`services/${d.id}`}>
            <img
              src={d.imageId}
              alt="Service Image"
              className="w-64 h-40 object-cover"
            />
          </Link>
        </div>
      ))}
     </div>
    </div>
  );
};

export default ServicesPage;
