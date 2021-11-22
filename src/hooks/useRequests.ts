import { useEffect, useState } from "react";
import { IProductionRequest } from "../types";

const useRequests = () => {
  const [requests, setRequests] = useState<null | IProductionRequest[]>(null);

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
