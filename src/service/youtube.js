import axios from "axios";

class Youtube {
    constructor(key) {
        this.youtube = axios.create({
            baseURL: "https://youtube.googleapis.com/youtube/v3",
            params:{key:key}
        });
    }
    mostViewed= async() => {
        const { data: { items } } = await this.youtube.get('videos',{
            params: {
                part: "snippet",
                chart: "mostPopular",
                maxResults: 24,
            }
        })
        return items;
    }
    search= async(q) => {
        const { data: { items } } = await this.youtube.get('search', {
            params: {
                part: "snippet",
                maxResults: 24,
                q,
                type: "video",
            }
        })
        return items;
    }
}
export default Youtube