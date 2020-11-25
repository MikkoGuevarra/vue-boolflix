var app =  new Vue ({
    el: '#root',
    data: {
        searchInput: '',
        movies: [],
        shows:[],
        totStars: 5
    },
    methods: {
        btnEnter() {
            if (this.searchInput.trim() != '') {
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: 'c3629f71ee7deef7be9c4792c3632882',
                        query: this.searchInput
                    }
                }).then(result => {
                    this.movies = result.data.results;
                    console.log(this.movies);



                    this.movies.forEach((movie) => {
                        movie.vote_average = Math.round (movie.vote_average / 2);
                        // console.log(movie.poster_path);
                    });

                });

                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: 'c3629f71ee7deef7be9c4792c3632882',
                        query: this.searchInput
                    }
                }).then(result => {
                    this.shows = result.data.results;
                    // console.log(this.movies);
                    // console.log(this.shows);

                    this.shows.forEach((show) => {
                        show.vote_average = Math.round (show.vote_average / 2);
                    });

                });
                this.searchInput= "";
            }
        },
        getImg(path) {
            let url = 'flags/ntflx.jpg';
            if (path != null) {
                 // url = 'flags/ntflx.jpg';
                 url = 'https://image.tmdb.org/t/p/' + 'w342' + path;
            }

            return url;
        }
    }
});
