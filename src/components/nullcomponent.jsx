import { useEffect } from "react";
import { setIsAdmin } from "../slices/admin";
import { useSelector, useDispatch } from "react-redux";

const NullComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setIsAdmin(true));
  }, []);

  return <>hii there</>;
};

export default NullComponent;
