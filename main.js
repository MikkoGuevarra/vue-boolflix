var app =  new Vue ({
    el: '#root',
    data: {
        searchInput: '',
        movies: [],
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
                console.log(this.movies);

                this.movies.forEach((movie) => {
                    if (movie.original_language == 'it') {
                       movie.original_language = 'flags/italy.png'
                   } else if (movie.original_language == 'en') {
                       movie.original_language = 'flags/eng.png'
                   } else if (movie.original_language == 'fr') {
                       movie.original_language = 'flags/fra.png'
                   } else if (movie.original_language == 'de') {
                       movie.original_language = 'flags/germ.png'
                   } else if (movie.original_language == 'es') {
                       movie.original_language =  'flags/spain.png'
                   } else {
                       movie.original_language = 'flags/world.png'
                   }

                });

            });
        }

    }
});
