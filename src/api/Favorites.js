
export default class Fav {
    getFav() {
        return localStorage.getItem("favorites");
    }
    setFav() {
        localStorage.setItem("favorites", JSON.stringify([]));
        return localStorage.getItem("favorites");
    }
}