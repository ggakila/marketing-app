import ResponseContext from "@/context/ResponseContext"

const { useContext } = require("react")

const useResponse = () => {
    return useContext(ResponseContext)
}

export default useResponse