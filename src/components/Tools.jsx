import React from 'react'
import Title from "./Title";

const webServices = [
  {
    id: 1,
    name: "Planetscale",
    image: "/assets/planetscale.jpg",
  },
  {
    id: 2,
    name: "Vercel",
    image: "/assets/vercel.png",
  },
  {
    id: 3,
    name: "AWS",
    image: "/assets/aws-logo.png",
  }
]

const styling = [
  {
    id: 1,
    name: "Tailwind CSS",
    image: "/assets/tailwindcss-logo.png",
  },
  {
    id: 2,
    name: "Sass",
    image: "/assets/sass-logo.png",
  },
  {
    id: 3,
    name: "CSS",
    image: "/assets/css-logo.png",
  },
  {
    id: 4,
    name: "Bootstrap",
    image: "/assets/bootstrap-logo.png",
  }
]

const frontend = [
  {
    id: 1,
    name: "React",
    image: "/assets/react-logo.png",
  },
  {
    id: 2,
    name: "Next.js",
    image: "/assets/imgnext.ls-logo.png",
  },
  {
    id: 3,
    name: "Asp.Net",
    image: "/assets/asp.net-logo.png",
  }
]

const backend = [
  {
    id: 1,
    name: "Javascript",
    image: "/assets/js-logo.png",
  },
  {
    id: 2,
    name: "Node.js",
    image: "/assets/node.js-logo.png",
  },
  {
    id: 3,
    name: "C#",
    image: "/assets/C-sharp-logo.png",
  },
];

const Tools = () => {
  return (
    <div className="w-10/12 mx-auto">
      <Title>Technologies</Title>

      <p className="pt-6 mb-[-14px] text-neutral-700 font-bold">Frontend</p>
      <div className="mt-0 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-10">
        {frontend.map((frontend) => (
          <a
            key={frontend.id}
            href=""
            className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
          >
            <div className="flex h-[130px] bg-neutral-800 align-middle items-center justify-center rounded-t-2xl">
              <div className="w-full text-center rounded-t-2xl align-middle items-center justify-center ">
                <img
                  className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
                  src={frontend.image}
                  alt="logo"
                />
              </div>
            </div>
            <div className="p-2 py-5">
              <h1 className="mb-1 font-bold text-center">{frontend.name}</h1>
            </div>
          </a>
        ))}
      </div>

      <p className="pt-6 mb-[-14px] text-neutral-700 font-bold">Backend</p>
      <div className="mt-2 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-10">
        {backend.map((backend) => (
          <a
            key={backend.id}
            href=""
            className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
          >
            <div className="flex h-[130px] bg-neutral-800 align-middle items-center justify-center rounded-t-2xl">
              <div className="w-full text-center rounded-t-2xl align-middle items-center justify-center ">
                <img
                  className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
                  src={backend.image}
                  alt="logo"
                />
              </div>
            </div>
            <div className="p-2 py-5">
              <h1 className="mb-1 font-bold text-center">{backend.name}</h1>
            </div>
          </a>
        ))}
      </div>

      <p className="pt-6 mb-[-14px] text-neutral-700 font-bold">Styling</p>
      <div className="mt-2 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-10">
        {styling.map((styling) => (
          <a
            key={styling.id}
            href=""
            className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
          >
            <div className="flex h-[130px] bg-neutral-800 align-middle items-center justify-center rounded-t-2xl">
              <div className="w-full text-center rounded-t-2xl align-middle items-center justify-center ">
                <img
                  className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125"
                  src={styling.image}
                  alt="logo"
                />
              </div>
            </div>
            <div className="p-2 py-5">
              <h1 className="mb-1 font-bold text-center">{styling.name}</h1>
            </div>
          </a>
        ))}
      </div>

      <p className="pt-6 mb-[-14px] text-neutral-700 font-bold">Web Services</p>
      <div className="mt-2 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:gap-10">
        {webServices.map((webService) => (
          <a
            key={webService.id}
            href=""
            className="border-[0.5px] border-neutral-500 block rounded-2xl my-6"
          >
            <div className="flex h-[130px] bg-neutral-800 align-middle items-center justify-center rounded-t-2xl">
              <div className="w-full text-center align-middle items-center justify-center ">
                <img
                  className="max-w-[80px] rounded-2xl mx-auto brightness-90 contrast-125 align-middle"
                  src={webService.image}
                  alt="logo"
                />
              </div>
            </div>
            <div className="p-2 py-5">
              <h1 className="mb-1 font-bold text-center">{webService.name}</h1>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Tools