import { atom, useAtom, useAtomValue } from "jotai";
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

export const useLoadingValue = () => {
  return useAtomValue(loadingAtom);
};

export default useLoading;
