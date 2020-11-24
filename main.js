var app =  new Vue ({
    el: '#root',
    data: {
        searchInput: '',
        movies: [],
        currentLang:''
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
                this.movies.forEach((item, i) => {
                    this.flag()
                });

            });
        },
        flag() {
            this.movies.forEach((movie) => {
                // console.log(movie.original_language);
                // switch (movie.original_language) {
                //     case 'it':
                //         this.currentLang = 'flags/italy.png'
                //         break;
                //     case 'en':
                //         this.currentLang = 'flags/eng.png'
                //         break;
                //     case 'fr':
                //         this.currentLang = 'flags/fra.png'
                //         break;
                //     case 'de':
                //         this.currentLang = 'flags/germ.png'
                //         break;
                //     case 'es':
                //         this.currentLang = 'flags/spain.png'
                //         break;
                //     default:
                //         break;
                //
                // }
                if (movie.original_language == 'it') {
                    this.currentLang = 'flags/italy.png'
                } else if (movie.original_language == 'en') {
                    this.currentLang = 'flags/eng.png'
                } else if (movie.original_language == 'fr') {
                    this.currentLang = 'flags/fra.png'
                } else if (movie.original_language == 'de') {
                    this.currentLang = 'flags/germ.png'
                } else if (movie.original_language == 'es') {
                    this.currentLang =  'flags/spain.png'

                }

            });
        }
    }
});
