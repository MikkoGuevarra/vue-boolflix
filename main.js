var app =  new Vue ({
    el: '#root',
    data: {
        searchInput: '',
        movies: [],
        shows: [],
        availableFlags: ['de', 'en', 'es', 'fr', 'it', 'ja'],
        totStars: 5,
        searched: false,
        titleSaved: ""
    },
    methods: {
        btnEnter() {
            this.searched = true;
            this.titleSaved = this.searchInput
            if (this.searchInput.trim() != '') {
                this.movies = [];
                axios.get('https://api.themoviedb.org/3/search/movie', {
                    params: {
                        api_key: 'c3629f71ee7deef7be9c4792c3632882',
                        query: this.searchInput
                    }
                }).then(result => {
                    this.movies = this.movies.concat(result.data.results);
                    this.movies.forEach((movie) => {
                        axios.get('https://api.themoviedb.org/3/movie/' + movie.id + '/credits', {
                            params: {
                                api_key: 'c3629f71ee7deef7be9c4792c3632882'
                            }
                        }).then(rex => {
                            Vue.set = (movie, 'cast', rex.data.cast.slice(0, 5))
                            console.log(Vue.set);
                        });
                    });
                    // console.log(this.getCast(340102, this.movies))

                });

                axios.get('https://api.themoviedb.org/3/search/tv', {
                    params: {
                        api_key: 'c3629f71ee7deef7be9c4792c3632882',
                        query: this.searchInput
                    }
                }).then(result => {
                    this.movies = this.movies.concat(result.data.results);
                    // this.movies.forEach((movie) => {
                    //     axios.get('https://api.themoviedb.org/3/tv/' + movie.id + '/credits', {
                    //         params: {
                    //             api_key: 'c3629f71ee7deef7be9c4792c3632882'
                    //         }
                    //     }).then(rex => {
                    //         Vue.set = (movie, 'cast', rex.data.cast.slice(0, 5))
                    //         console.log(movie);
                    //     });
                    // });
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
            this.movies = this.movies.concat(result.data.results);
        });

        axios.get('https://api.themoviedb.org/3/trending/tv/week', {
            params: {
                api_key: 'c3629f71ee7deef7be9c4792c3632882'
            }
        }).then(result => {
            this.movies = this.movies.concat(result.data.results);
        });

    }
});
