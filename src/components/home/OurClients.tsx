import Image from "next/image";
import { Container } from "../global/Container";
import logo from "../../../public/assets/FedEx-Logo.png";

const OurClients = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 111, 12, 13, 14, 15, 61, 17, 18, 19, 20, 21,
    22, 23,
  ];
  return (
    <Container>
      <div className="text-center py-5">
        <h2 className="text-4xl md:text-6xl font-bold">Our CLients</h2>
        <h3 className=" text-xl md:text-2xl">With who we were work</h3>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center">
        {arr.map((e, i) => {
          if (i < 3)
            return (
              <Image
                key={i}
                className=" max-w-[220px] lg:max-w-[300px] min-w-[150px] transition duration-1000  grayscale hover:filter-none "
                src={logo}
                alt="logo"
              />
            );
        })}
      </div>
      <div className="flex flex-row flex-wrap pb-20  items-center justify-center">
        {arr.map((e, i) => {
          if (i > 2)
            return (
              <Image
                key={i}
                className="max-w-[180px] min-w-[120px] transition duration-1000  grayscale hover:filter-none"
                src={logo}
                alt="logo"
              />
            );
        })}
      </div>
    </Container>
  );
};

export default OurClients;
