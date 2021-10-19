import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Servicedetails from "../Servicedetails/Servicedetails";

const Details = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/allservices.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const service = services.find((e) => e.id === serviceId);

  return <>{<Servicedetails service={service}></Servicedetails>}</>;
};

export default Details;
