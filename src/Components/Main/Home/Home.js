import React from "react";
import usePackage from "../../../Hooks/usePackage";
import Title from "../../Title/Title";
import ServicePackage from "../Services/ServicePackage/ServicePackage";
import Banner from "./Banner";

const Home = () => {
  const [packages] = usePackage();
  return (
    <>
      <main className="md:px-10 px-3">
        {/* homep page banner section */}
        <Banner />
        {/* services package section */}
        <section>
          <Title title="Our Serivces" />
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {packages.slice(2, 6).map((item) => (
              <ServicePackage package={item} key={item.id} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
