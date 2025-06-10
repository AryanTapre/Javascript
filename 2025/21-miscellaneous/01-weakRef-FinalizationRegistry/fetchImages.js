/**
 *  Cache Structure:
 *     key: image-name
 *     value: weakRef(image)
 */

class FetchImage {
    #imgCache;
    #baseURL;    
    
    constructor() {
        this.#imgCache = new Map();
        this.#baseURL = `http://127.0.0.1:5500/2025/21-miscellaneous/GlobalStorage/`;
    }

    #storeImageInCache(imgName, blobImg) {
        const imgWeakref = new WeakRef(blobImg);
        this.#imgCache.set(imgName, imgWeakref);
        return {
            status: true,
            image: blobImg
        }
    }

    async #fetchNewImage(imgName) {
        try {
            const constructURI = this.#baseURL.concat(imgName);
            const img = await fetch(constructURI);
            const blobImg = await img.blob();
            const status = this.#storeImageInCache(imgName, blobImg);
            return status;
        } catch (error) {
            console.error(`SOMETHING WENT WRONG IN fetchNewImage : ${error}`)
        }
    }

    #fetchCacheImage(imgName) {
        const cachedImage = this.#imgCache.get(imgName);
        const img = cachedImage.dref();
        if (img == undefined) {
            return "IMAGE NOT FOUND IN CACHE";
        }
        return img;
    }

    async getImage(imgName) {
        const imgStatus = this.#imgCache.has(imgName);
        
        if (imgStatus) {
            const data =  this.#fetchCacheImage(imgName);
            return {
                origin: "cache",
                data: data
            };
        } else {
            const data =  await this.#fetchNewImage(imgName);            
            return {
                origin: "Internet",
                data: data
            };
        }
    }
}

const img = new FetchImage();
const data = await img.getImage(`2-dark.png`);
console.log(data);

