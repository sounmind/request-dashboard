import { useEffect, useState } from "react";
import { IProductionRequest } from "../types";

const useRequests = () => {
  const [requests, setRequests] = useState<[] | IProductionRequest[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5000/requests");
      const data = await response.json();

      setRequests(data);
    })();
  }, []);

  return { requests };
};

export default useRequests;
