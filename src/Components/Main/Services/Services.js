import React, { useEffect, useState } from "react";
import ServicePackage from "./ServicePackage/ServicePackage";
import "./Service.css";
import usePackage from "../../../Hooks/usePackage";
import Title from "../../Title/Title";

const Services = () => {
  const [packages] = usePackage();

  return (
    <>
      <main>
        <section className="service-banner flex justify-center items-center">
          <h1 className="text-4xl text-white">Services</h1>
        </section>
        <div className="md:px-10 px-3 pt-6">
          <Title title="Our Services" />
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {packages?.map((item) => (
              <ServicePackage package={item} key={item.id} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Services;
