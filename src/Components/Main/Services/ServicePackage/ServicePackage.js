import React from "react";
import { Link } from "react-router-dom";

const ServicePackage = (props) => {
  const { name, price, title, id, img } = props.package;
  console.log(props.package);
  return (
    <div className="package border rounded-xl text-center py-5">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="py-3">
        <h4 className="text-2xl font-bold text-green-700">{name}</h4>
        <h1 className="text-2xl font-semibold py-2">
          <span className="text-xl text-gray-400">$</span>
          {price}
        </h1>
        <h5 className="font-semibold">{title}</h5>
        <ul className="features">
          <li>{props.package?.features1}</li>
          <li>{props.package?.features2}</li>
          <li>{props.package?.features3}</li>
          <li>{props.package?.features4}</li>
          <li>{props.package?.features5}</li>
          <li>{props.package?.features6}</li>
          <li>{props.package?.features7}</li>
        </ul>
      </div>
      <Link
        to={`/service/${id}`}
        className="py-2 px-3 bg-green-700 text-white font-bold"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServicePackage;
