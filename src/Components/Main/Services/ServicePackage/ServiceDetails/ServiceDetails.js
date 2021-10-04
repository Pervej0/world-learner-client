import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  console.log(serviceId);
  const [service, setService] = useState({});
  useEffect(
    () =>
      fetch(`/${serviceId}.json`)
        .then((res) => res.json())
        .then((data) => setService(data)),
    []
  );

  const { name, title, description, img } = service;
  return (
    <div className="py-5 md:px-10 px-3 text-left">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="pt-5">
        <h1 className="text-3xl font-semibold">{title}</h1>
        <h2 className="py-1">
          package name: <span className="text-green-700">{name}</span>
        </h2>
        <p className="text-xl">{description}</p>
        <h2 className="text-2xl font-semibold mt-2">Features:</h2>
        <ul className="my-4">
          <li>{service?.features1}</li>
          <li>{service?.features2}</li>
          <li>{service?.features3}</li>
          <li>{service?.features4}</li>
          <li>{service?.features5}</li>
          <li>{service?.features6}</li>
          <li>{service?.features7}</li>
        </ul>
      </div>
      <Link
        to="/contact"
        className="py-2 px-3 bg-green-700 text-white uppercase font-semibold rounded-xl"
      >
        Purchase
      </Link>
    </div>
  );
};

export default ServiceDetails;
