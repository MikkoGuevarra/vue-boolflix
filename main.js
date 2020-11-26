var app =  new Vue ({
    el: '#root',
    data: {
        searchInput: '',
        movies: [],
        shows: [],
        availableFlags: ['de', 'en', 'es', 'fr', 'it', 'ja'],
        totStars: 5,
        movieTrending: [],
        showTrending: []
    },
    methods: {
        btnEnter() {
            if (this.searchInput.trim() != '') {
                this.movieTrending=[];
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: 'c3629f71ee7deef7be9c4792c3632882',
                        query: this.searchInput
                    }
                }).then(result => {
                    this.movies = result.data.results;
                    // console.log(this.movies);
                });

                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: 'c3629f71ee7deef7be9c4792c3632882',
                        query: this.searchInput
                    }
                }).then(result => {
                    this.shows = result.data.results;
                });
                this.searchInput= "";
                console.log(this.movieTrending);
            }
        },
        getImg(path) {
            let url = 'flags/ntflx.jpg';
            if (path != null) {
                 // url = 'flags/ntflx.jpg';
                 url = 'https://image.tmdb.org/t/p/' + 'w342' + path;
            }

            return url;
        },
        getStars(vote) {
            return Math.round (vote / 2);
        }
    },
    mounted() {
        axios.get('https://api.themoviedb.org/3/trending/movie/week', {
            params: {
                api_key: 'c3629f71ee7deef7be9c4792c3632882'
            }
        }).then(result => {
            this.movieTrending = result.data.results;
            // console.log(this.movieTrending);
        });

        axios.get('https://api.themoviedb.org/3/trending/tv/week', {
            params: {
                api_key: 'c3629f71ee7deef7be9c4792c3632882'
            }
        }).then(result => {
            this.showTrending = result.data.results;
            console.log(this.showTrending);
        });

    }
});
