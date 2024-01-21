import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

// idea is to create a family of like states for each user post
// each user post each like state so that the scope is limited and not global
const likesAtomFamily = atomFamily({
    key: "likesAtomFamily",
    default: selectorFamily({
        key: "likesAtomSelectorFamily",
        get: post_id => async () => {
            try{
                const response = await axios.get(`/api/posts/${post_id}`);
                const result = await response.data;
                return result.likes?.length;
            }
            catch(error) {
                console.log(error);
                throw error;
            }
        }
    })
})

export default likesAtomFamily;