import axios from "axios";

const followUser = async (id, toast, setUserData) => {
    try {
        const response = await axios.put(`/api/users/follow/${id}`, null, {withCredentials: true});
        const result = await response.data;
        localStorage.setItem("user", JSON.stringify(result?.user));
        setUserData(result?.user);
        toast({
            title: `${result?.status ? "Followed" : "Unfollowed"}`,
            description: result?.message,
            status: "success",
            duration: 3000,
            isClosable: true
        })
        return result?.status;
    }
    catch(error) {
        console.log(error);
        toast({
            title: "Error",
            description: error?.response?.data?.message,
            status: "error",
            duration: 3000,
            isClosable: true
        })
    }
}

export default followUser;