import { useEffect, useState } from "react";

const usePackage = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("./servicesInfo.json")
      .then((res) => res.json())
      .then((data) => setPackages(data))
      .catch((error) => console.log(error));
  }, []);
  return [packages];
};

export default usePackage;
