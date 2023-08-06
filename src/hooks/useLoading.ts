import { atom, useAtom } from "jotai";
import { useCallback } from "react";

const loadingAtom = atom(false);
const useLoading = () => {
  const [loading, setLoading] = useAtom(loadingAtom);

  const startLoading = useCallback(() => {
    setLoading(true);
  }, [setLoading]);

  const finishLoading = useCallback(() => {
    setLoading(false);
  }, [setLoading]);

  return {
    loading,
    startLoading,
    finishLoading,
  };
};

export default useLoading;
