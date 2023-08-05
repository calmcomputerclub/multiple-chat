import { useCallback, useState } from "react";

// TODO use atom

const useLoading = (initValue = false) => {
  const [loading, setLoading] = useState(initValue);

  const startLoading = useCallback(() => {
    setLoading(true);
  }, []);

  const finishLoading = useCallback(() => {
    setLoading(false);
  }, []);

  return {
    loading,
    startLoading,
    finishLoading,
  };
};

export default useLoading;
