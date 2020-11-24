var app =  new Vue ({
    el: '#root',
    data: {
        searchInput: '',
        movies: [],
        totStars: 5
    },
    methods: {
        btnEnter() {
            console.log(this.searchInput);
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                    api_key: 'c3629f71ee7deef7be9c4792c3632882',
                    query: this.searchInput
                }
            }).then(result => {
                this.movies = result.data.results;
                // console.log(this.movies);



                this.movies.forEach((movie) => {
                   movie.vote_average = Math.round (movie.vote_average / 2);
                });

            });
        }
    }
});
