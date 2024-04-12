export const checkAuthentication = () => {
    const user_id = localStorage.getItem('user_id');
    const accessToken = localStorage.getItem('accessToken');

    if (user_id && accessToken) {
        return true;
    } else {
        return false;
    }
};