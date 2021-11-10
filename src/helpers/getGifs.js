export const getGifs  = async(category) => {
    const ApiKey = 'oPf76Uc47Nw1mXeWeSb31WvHf207InNz'
    const ApiEndpoint = 'https://api.giphy.com/v1/gifs/search'
    const url = `${ApiEndpoint}?api_key=${ApiKey}&q=${encodeURI(category)}&limit=10`
    const resp = await fetch (url);
    console.log(url);
    const {data} = await resp.json();

    const gifts = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifts;
}