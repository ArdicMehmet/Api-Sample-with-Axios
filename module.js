import axios from "axios";

const getData = async (userId) => {
    try {
        let { data: getUserJSON } = await getUser(userId);
        let { data: postUserJSON } = await postUser(getUserJSON.id);
        return { ...getUserJSON, post: [...postUserJSON] };

    } catch (err) {
        return { hataMsg: "Bilgi bulunamadı" }
    }

}

const getUser = (userId) => {
    return axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
}
const postUser = (getUserId) => {
    return axios(`https://jsonplaceholder.typicode.com/posts?userId=${getUserId}`);
}
export default getData;