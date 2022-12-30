export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=iI8lrSYZs2t7hTcL67iW9LIa7IgwSaCP&q=${ category }&limit=10`;
    const resp = await fetch ( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}