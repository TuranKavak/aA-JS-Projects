export const fetchSearchGiphys = searchTerm => (
    $.ajax({
        method: 'GET',
        url: `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=eviHpKKJErZhwu2LnExsrINqIDP4Srap&limit=4`
    })
);

