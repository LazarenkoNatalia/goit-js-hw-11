// key_pixabay 43258927-612e11e8a955b04f9334ad244

  export  async function fetchData(url, options = {}) {
    const response = await fetch(url, options);
    if(!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}
