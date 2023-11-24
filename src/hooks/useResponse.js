import { useContext } from "react";
import ResponseContext from "@/context/ResponseContext";

const useResponse = () => {
	return useContext(ResponseContext);
};

export default useResponse;
