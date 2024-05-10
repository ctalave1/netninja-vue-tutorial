const app = Vue.createApp({
  // root component, data, functions   
  // template: '<h2>I am the template<h2>',
  data: () => ({
    url: "http://www.thewebninja.co.uk",
    showBooks: true,
    books: [
        {
            img: "./assets/1.jpg" ,
            title: "Name of the Wind",
            author: "Patrick Rothfuss",
            isFav: true,
        },
        {
            img: "./assets/2.jpg",
            title: "The Way of Kings",
            author: "Brandon Sanderson",
            isFav: false,
        },
        {
            img: "./assets/3.jpg",
            title: "The Final Empire",
            author: "Brandon Sanderson",
            isFav: true,
        },
    ],
    x: 0,
    y: 0,
  }),
  methods: {
    changeTitle(title) {
      this.title = title;  
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    toggleFav(book) {
      book.isFav  = !book.isFav;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      console.log(data);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    }
  }
});

app.mount("#app");

// Challenge - Add to Favs
//      - attach a click event to each li tag (for each book)
//      - when a user clicks an li, toggle the 'isFav property of that book