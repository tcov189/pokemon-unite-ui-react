import { useState, useEffect } from "react";
import { getApiInfo } from "../services/pokemonUniteApiService";

const useApiInfo = () => {
  const [apiVersion, setApiVersion] = useState('');

  const getApiData = async () => {
    try {
      const res = await getApiInfo();

      setApiVersion(res.data.api_info);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return apiVersion;
}

export default useApiInfo;
