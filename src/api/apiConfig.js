const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '4536f108a28f0c0dfa9d4508d4b149ba',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;