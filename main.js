var app =  new Vue ({
    el: '#root',
    data: {
        searchInput: '',
        movies: []
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
            });
        }
    }
});
