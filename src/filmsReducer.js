export let initialState = {
  currentFilm: {
    title: "ASSASSIN'S CREED",
    rating: "4.3",
    janres: "Action, Adventure, History",
    info: `There Are Growing Dangers In The 
      Wizarding World Of 1926 New York. 
      Something Mysterious Is Leaving A Path
       Of Destruction In The Streets, Threatening
        To Expose The Wizarding Community To The Second Salemers, 
        A Fanatical Faction Of No-Majs (American For Muggles) Bent On
         Eradicating Them. And The Powerful,
          Dark Wizard Gellert Grindelwald, After Wreaking Havoc
           In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
    imgUrl:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2483297e-51d1-4d4e-9876-af8a6a2e607c/dad26yg-b418733d-77ac-4c60-a589-0821b85952e1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjQ4MzI5N2UtNTFkMS00ZDRlLTk4NzYtYWY4YTZhMmU2MDdjXC9kYWQyNnlnLWI0MTg3MzNkLTc3YWMtNGM2MC1hNTg5LTA4MjFiODU5NTJlMS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.TnhjlhejvWlofxkTrMcDqrrBGaHqi-F5BJ-4wDMLKak",
    videoUrl: "https://www.youtube.com/watch?v=gfJVoF5ko1Y",
  },
  sortedFilms: [],
  favorites: [],
  films: [
    {
      title: "ASSASSIN'S CREED",
      rating: "4.3",
      janres: "Action, Adventure, History",
      info: `There Are Growing Dangers In The 
        Wizarding World Of 1926 New York. 
        Something Mysterious Is Leaving A Path
         Of Destruction In The Streets, Threatening
          To Expose The Wizarding Community To The Second Salemers, 
          A Fanatical Faction Of No-Majs (American For Muggles) Bent On
           Eradicating Them. And The Powerful,
            Dark Wizard Gellert Grindelwald, After Wreaking Havoc
             In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2483297e-51d1-4d4e-9876-af8a6a2e607c/dad26yg-b418733d-77ac-4c60-a589-0821b85952e1.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMjQ4MzI5N2UtNTFkMS00ZDRlLTk4NzYtYWY4YTZhMmU2MDdjXC9kYWQyNnlnLWI0MTg3MzNkLTc3YWMtNGM2MC1hNTg5LTA4MjFiODU5NTJlMS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.TnhjlhejvWlofxkTrMcDqrrBGaHqi-F5BJ-4wDMLKak",
      videoUrl: "https://www.youtube.com/watch?v=gfJVoF5ko1Y",
    },
    {
      title: "FANTASTIC BEASTS",
      rating: "4.6",
      janres: "Action, Adventure, Fantasy",
      info: `There Are Growing Dangers In The 
        Wizarding World Of 1926 New York. 
        Something Mysterious Is Leaving A Path
         Of Destruction In The Streets, Threatening
          To Expose The Wizarding Community To The Second Salemers, 
          A Fanatical Faction Of No-Majs (American For Muggles) Bent On
           Eradicating Them. And The Powerful,
            Dark Wizard Gellert Grindelwald, After Wreaking Havoc
             In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51dfFYMXwhL._AC_.jpg",
      videoUrl: "https://www.youtube.com/watch?v=ViuDsy7yb8M",
    },
    {
      title: "now you see me 2",
      rating: "4.2",
      janres: "Action, Adventure, Thriller",
      info: `There Are Growing Dangers In The 
        Wizarding World Of 1926 New York. 
        Something Mysterious Is Leaving A Path
         Of Destruction In The Streets, Threatening
          To Expose The Wizarding Community To The Second Salemers, 
          A Fanatical Faction Of No-Majs (American For Muggles) Bent On
           Eradicating Them. And The Powerful,
            Dark Wizard Gellert Grindelwald, After Wreaking Havoc
             In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEBoceWfh_s-hJwt7ZXwAWKVuDBtTrFzG3mQ&usqp=CAU",
      videoUrl: "https://www.youtube.com/watch?v=4I8rVcSQbic",
    },
    {
      title: "tarzan",
      rating: "4.5",
      janres: "Action, Adventure, Fantasy, Drama",
      info: `There Are Growing Dangers In The 
        Wizarding World Of 1926 New York. 
        Something Mysterious Is Leaving A Path
         Of Destruction In The Streets, Threatening
          To Expose The Wizarding Community To The Second Salemers, 
          A Fanatical Faction Of No-Majs (American For Muggles) Bent On
           Eradicating Them. And The Powerful,
            Dark Wizard Gellert Grindelwald, After Wreaking Havoc
             In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl: "https://movieposters2.com/images/1393779-b.jpg",
      videoUrl: "https://www.youtube.com/watch?v=oZFJFJia5Ec",
    },
    {
      title: "doctor strange",
      rating: "4.0",
      janres: "Action, Fantasy",
      info: `There Are Growing Dangers In The 
        Wizarding World Of 1926 New York. 
        Something Mysterious Is Leaving A Path
         Of Destruction In The Streets, Threatening
          To Expose The Wizarding Community To The Second Salemers, 
          A Fanatical Faction Of No-Majs (American For Muggles) Bent On
           Eradicating Them. And The Powerful,
            Dark Wizard Gellert Grindelwald, After Wreaking Havoc
             In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/A12-NFRep6L._AC_SL1500_.jpg",
      videoUrl: "https://www.youtube.com/watch?v=W_sgvg1ISjE",
    },
    {
      title: "captain america",
      rating: "4.0",
      janres: "Action, Fantasy, Thriller",
      info: `There Are Growing Dangers In The 
        Wizarding World Of 1926 New York. 
        Something Mysterious Is Leaving A Path
         Of Destruction In The Streets, Threatening
          To Expose The Wizarding Community To The Second Salemers, 
          A Fanatical Faction Of No-Majs (American For Muggles) Bent On
           Eradicating Them. And The Powerful,
            Dark Wizard Gellert Grindelwald, After Wreaking Havoc
             In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/71pXkYJfZaL._AC_SL1006_.jpg",
      videoUrl: "https://www.youtube.com/watch?v=Ep59OGViCQI",
    },
    {
      title: "alice in wonderland",
      rating: "4.8",
      janres: "Adventure, Fantasy",
      info: `There Are Growing Dangers In The 
        Wizarding World Of 1926 New York. 
        Something Mysterious Is Leaving A Path
         Of Destruction In The Streets, Threatening
          To Expose The Wizarding Community To The Second Salemers, 
          A Fanatical Faction Of No-Majs (American For Muggles) Bent On
           Eradicating Them. And The Powerful,
            Dark Wizard Gellert Grindelwald, After Wreaking Havoc
             In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/61fGphyLJcL._AC_.jpg",
      videoUrl: "https://www.youtube.com/watch?v=rIPSFN22jqg",
    },
    {
      title: "finding dory",
      rating: "4.9",
      janres: "Cartoon, Adventure",
      info: `There Are Growing Dangers In The 
        Wizarding World Of 1926 New York. 
        Something Mysterious Is Leaving A Path
         Of Destruction In The Streets, Threatening
          To Expose The Wizarding Community To The Second Salemers, 
          A Fanatical Faction Of No-Majs (American For Muggles) Bent On
           Eradicating Them. And The Powerful,
            Dark Wizard Gellert Grindelwald, After Wreaking Havoc
             In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51tGqlTyMtL._AC_.jpg",
      videoUrl:
        "https://www.youtube.com/watch?v=J8c6v8lT7go&list=PLrFtXMt64ZuoCPWnBkEiPQlkDtGF1MXB4",
    },
    {
      title: "the bfg",
      rating: "4.7",
      janres: "Adventure, Fantasy, Drama",
      info: `There Are Growing Dangers In The 
        Wizarding World Of 1926 New York. 
        Something Mysterious Is Leaving A Path
         Of Destruction In The Streets, Threatening
          To Expose The Wizarding Community To The Second Salemers, 
          A Fanatical Faction Of No-Majs (American For Muggles) Bent On
           Eradicating Them. And The Powerful,
            Dark Wizard Gellert Grindelwald, After Wreaking Havoc
             In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://i.pinimg.com/originals/bb/f3/a4/bbf3a41ed4b9e6700b7178317ecd0c6e.jpg",
      videoUrl:
        "https://www.youtube.com/watch?v=y1fZg0hhBX8&list=PLGan2jGybCpVthtU7NTH8jmqmv9D4OOog",
    },
    {
      title: "independance day",
      rating: "4.5",
      janres: "Action, Thriller",
      info: `There Are Growing Dangers In The 
        Wizarding World Of 1926 New York. 
        Something Mysterious Is Leaving A Path
         Of Destruction In The Streets, Threatening
          To Expose The Wizarding Community To The Second Salemers, 
          A Fanatical Faction Of No-Majs (American For Muggles) Bent On
           Eradicating Them. And The Powerful,
            Dark Wizard Gellert Grindelwald, After Wreaking Havoc
             In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://cdn.shopify.com/s/files/1/1416/8662/products/independence_day_1996_styleC_original_film_art_0242385c-1916-4017-9377-d31dd5cbbbd8_1200x.jpg?v=1604877246",
      videoUrl:
        "https://www.youtube.com/watch?v=vjFG-4Ge668&list=PLGRSgQ__iq-ePC-a5bmIU-SnCZJcVIQLA",
    },
    {
      title: "ice age",
      rating: "4.9",
      janres: "Adventure, Cartoon, Comedy",
      info: `There Are Growing Dangers In The 
        Wizarding World Of 1926 New York. 
        Something Mysterious Is Leaving A Path
         Of Destruction In The Streets, Threatening
          To Expose The Wizarding Community To The Second Salemers, 
          A Fanatical Faction Of No-Majs (American For Muggles) Bent On
           Eradicating Them. And The Powerful,
            Dark Wizard Gellert Grindelwald, After Wreaking Havoc
             In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Ice_Age_Continental_Drift.jpg/220px-Ice_Age_Continental_Drift.jpg",
      videoUrl: "https://www.youtube.com/watch?v=mKIC30W8APM",
    },
    {
      title: "moana",
      rating: "4.9",
      janres: "Adventure, Cartoon, Comedy",
      info: `There Are Growing Dangers In The 
        Wizarding World Of 1926 New York. 
        Something Mysterious Is Leaving A Path
         Of Destruction In The Streets, Threatening
          To Expose The Wizarding Community To The Second Salemers, 
          A Fanatical Faction Of No-Majs (American For Muggles) Bent On
           Eradicating Them. And The Powerful,
            Dark Wizard Gellert Grindelwald, After Wreaking Havoc
             In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRFkYwtDP4XuqBZRl8CshvE_XIBugZhO51RA&usqp=CAU",
      videoUrl: "https://www.youtube.com/watch?v=79DijItQXMM",
    },
  ],
  filmsHeader: [
    {
      title: "ASSASSIN'S CREED",
      rating: "4.3",
      janres: "Action, Adventure, History",
      info: `There Are Growing Dangers In The 
          Wizarding World Of 1926 New York. 
          Something Mysterious Is Leaving A Path
           Of Destruction In The Streets, Threatening
            To Expose The Wizarding Community To The Second Salemers, 
            A Fanatical Faction Of No-Majs (American For Muggles) Bent On
             Eradicating Them. And The Powerful,
              Dark Wizard Gellert Grindelwald, After Wreaking Havoc
               In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://i.pinimg.com/originals/9e/2e/a1/9e2ea17603714296c60563e4aac4b296.jpg",
      videoUrl: "https://www.youtube.com/watch?v=gfJVoF5ko1Y",
    },
    {
      title: "FANTASTIC BEASTS",
      rating: "4.6",
      janres: "Action, Adventure, Fantasy",
      info: `There Are Growing Dangers In The 
          Wizarding World Of 1926 New York. 
          Something Mysterious Is Leaving A Path
           Of Destruction In The Streets, Threatening
            To Expose The Wizarding Community To The Second Salemers, 
            A Fanatical Faction Of No-Majs (American For Muggles) Bent On
             Eradicating Them. And The Powerful,
              Dark Wizard Gellert Grindelwald, After Wreaking Havoc
               In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl: "https://wallpaperaccess.com/full/880222.jpg",
      videoUrl: "https://www.youtube.com/watch?v=ViuDsy7yb8M",
    },
    {
      title: "now you see me 2",
      rating: "4.2",
      janres: "Action, Adventure, Thriller",
      info: `There Are Growing Dangers In The 
          Wizarding World Of 1926 New York. 
          Something Mysterious Is Leaving A Path
           Of Destruction In The Streets, Threatening
            To Expose The Wizarding Community To The Second Salemers, 
            A Fanatical Faction Of No-Majs (American For Muggles) Bent On
             Eradicating Them. And The Powerful,
              Dark Wizard Gellert Grindelwald, After Wreaking Havoc
               In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://i.pinimg.com/originals/6f/4b/9c/6f4b9cc3ead4b750aececfe8cc7e1792.jpg",
      videoUrl: "https://www.youtube.com/watch?v=4I8rVcSQbic",
    },
    {
      title: "tarzan",
      rating: "4.5",
      janres: "Action, Adventure, Fantasy, Drama",
      info: `There Are Growing Dangers In The 
          Wizarding World Of 1926 New York. 
          Something Mysterious Is Leaving A Path
           Of Destruction In The Streets, Threatening
            To Expose The Wizarding Community To The Second Salemers, 
            A Fanatical Faction Of No-Majs (American For Muggles) Bent On
             Eradicating Them. And The Powerful,
              Dark Wizard Gellert Grindelwald, After Wreaking Havoc
               In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl: "https://wallpapercave.com/wp/wp3861842.jpg",
      videoUrl: "https://www.youtube.com/watch?v=oZFJFJia5Ec",
    },
    {
      title: "doctor strange",
      rating: "4.0",
      janres: "Action, Fantasy",
      info: `There Are Growing Dangers In The 
          Wizarding World Of 1926 New York. 
          Something Mysterious Is Leaving A Path
           Of Destruction In The Streets, Threatening
            To Expose The Wizarding Community To The Second Salemers, 
            A Fanatical Faction Of No-Majs (American For Muggles) Bent On
             Eradicating Them. And The Powerful,
              Dark Wizard Gellert Grindelwald, After Wreaking Havoc
               In Europe, Has Slipped Away…And Is Now Nowhere To Be Found.`,
      imgUrl:
        "https://images-na.ssl-images-amazon.com/images/I/91zvCqxl-EL._SL1500_.jpg",
      videoUrl: "https://www.youtube.com/watch?v=W_sgvg1ISjE",
    },
  ],
};

export const filmsReducer = (state, action) => {
  switch (action.type) {
    case "SET_CURRENT_FILM":
      return { ...state, currentFilm: action.film };
    case "SORT_FILMS":
      return {
        ...state,
        sortedFilms: [...state.films.filter( film => {
        return  film.janres.search(action.genre, 0) !== -1
        })],
      };
      case "SORT_BY_RATING":

        let filmsToSort = state.sortedFilms.length ? [...state.sortedFilms] : [...state.films]
        return { ...state, sortedFilms: [...state.films.sort((a, b)=>{
          if(+a.rating > +b.rating){
            return -1
          }
          if(+a.rating < +b.rating){
            return 1
          }
          return 0
        })] }
    case "ADD_TO_FAVORITES":
      let check = false;
      state.favorites.forEach((film) => {
        if (film.title !== action.film.title) {
          return check;
        } else {
          return (check = true);
        }
      });
      return check !== true
        ? { ...state, favorites: [...state.favorites, action.film] }
        : state;
    default:
      return state;
  }
};

export const setCurrentFilm = (film) => ({ type: "SET_CURRENT_FILM", film });
export const addToFavorites = (film) => ({ type: "ADD_TO_FAVORITES", film });
export const sortFilms = (genre) => ({ type: "SORT_FILMS", genre });
export const sortByRating = () => ({ type: "SORT_BY_RATING" });
