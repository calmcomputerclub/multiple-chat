import { generateRandomString } from "@/utils/rand";
import { useEffect, useState } from "react";

const useRandName = () => {
  const [randName, setRandName] = useState("");

  useEffect(() => {
    setRandName(generateRandomString(8));
  }, []);

  return randName;
};

export default useRandName;
