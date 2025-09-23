const myListData = [
  /* ===== TV SHOWS ===== */
  {
    id: 1,
    title: "Stranger Things",
    year: "2016",
    rating: "TV-14",
    duration: "4 Seasons",
    genres: ["Drama", "Fantasy", "Thriller", "TV Show"],
    score: "8.7/10",
    image: "https://images.unsplash.com/photo-1626674610733-fd830a66eae7?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "Breaking Bad",
    year: "2008",
    rating: "TV-MA",
    duration: "5 Seasons",
    genres: ["Crime", "Drama", "Thriller", "TV Show"],
    score: "9.5/10",
    image: "https://images.unsplash.com/photo-1593697825397-53a843b0a7be?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    title: "The Witcher",
    year: "2019",
    rating: "TV-MA",
    duration: "3 Seasons",
    genres: ["Action", "Fantasy", "Adventure", "TV Show"],
    score: "8.2/10",
    image: "https://images.unsplash.com/photo-1509964854504-6782c3c6483b?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    title: "Money Heist",
    year: "2017",
    rating: "TV-MA",
    duration: "5 Parts",
    genres: ["Action", "Crime", "Drama", "TV Show"],
    score: "8.4/10",
    image: "https://images.unsplash.com/photo-1517601649799-8dcf91fca892?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    title: "Game of Thrones",
    year: "2011",
    rating: "TV-MA",
    duration: "8 Seasons",
    genres: ["Drama", "Fantasy", "Adventure", "TV Show"],
    score: "9.3/10",
    image: "https://images.unsplash.com/photo-1448525779984-805a530f2f14?auto=format&fit=crop&w=500&q=60"
  },

  /* ===== MOVIES ===== */
  {
    id: 6,
    title: "Inception",
    year: "2010",
    rating: "PG-13",
    duration: "2h 28m",
    genres: ["Action", "Sci-Fi", "Thriller", "Movie"],
    score: "8.8/10",
    image: "https://images.unsplash.com/photo-1508704019885-1941936f6b65?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 7,
    title: "The Dark Knight",
    year: "2008",
    rating: "PG-13",
    duration: "2h 32m",
    genres: ["Action", "Crime", "Drama", "Movie"],
    score: "9.0/10",
    image: "https://images.unsplash.com/photo-1505245208761-ba872912fac0?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 8,
    title: "Interstellar",
    year: "2014",
    rating: "PG-13",
    duration: "2h 49m",
    genres: ["Adventure", "Drama", "Sci-Fi", "Movie"],
    score: "8.6/10",
    image: "https://images.unsplash.com/photo-1498200561483-6a1f684932f6?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 9,
    title: "Avengers: Endgame",
    year: "2019",
    rating: "PG-13",
    duration: "3h 2m",
    genres: ["Action", "Adventure", "Sci-Fi", "Movie"],
    score: "8.4/10",
    image: "https://images.unsplash.com/photo-1551190827-1b6aa7f0d7a0?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 10,
    title: "Joker",
    year: "2019",
    rating: "R",
    duration: "2h 2m",
    genres: ["Crime", "Drama", "Thriller", "Movie"],
    score: "8.5/10",
    image: "https://images.unsplash.com/photo-1530002370890-08cd587daa81?auto=format&fit=crop&w=500&q=60"
  },

  /* ===== ANIME ===== */
  {
    id: 11,
    title: "Naruto Shippuden",
    year: "2007",
    rating: "TV-14",
    duration: "500 Episodes",
    genres: ["Action", "Adventure", "Anime"],
    score: "8.6/10",
    image: "https://images.unsplash.com/photo-1473187983305-f615310e7db9?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 12,
    title: "Attack on Titan",
    year: "2013",
    rating: "TV-MA",
    duration: "4 Seasons",
    genres: ["Action", "Drama", "Fantasy", "Anime"],
    score: "9.0/10",
    image: "https://images.unsplash.com/photo-1518976024611-488b2c7986e9?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 13,
    title: "One Piece",
    year: "1999",
    rating: "TV-14",
    duration: "1000+ Episodes",
    genres: ["Adventure", "Comedy", "Action", "Anime"],
    score: "9.1/10",
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 14,
    title: "Death Note",
    year: "2006",
    rating: "TV-14",
    duration: "37 Episodes",
    genres: ["Mystery", "Thriller", "Anime"],
    score: "9.0/10",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 15,
    title: "Demon Slayer",
    year: "2019",
    rating: "TV-14",
    duration: "3 Seasons",
    genres: ["Action", "Adventure", "Anime"],
    score: "8.7/10",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd80?auto=format&fit=crop&w=500&q=60"
  },

  /* ===== DOCUMENTARIES ===== */
  {
    id: 16,
    title: "Planet Earth II",
    year: "2016",
    rating: "TV-G",
    duration: "6 Episodes",
    genres: ["Documentary", "Nature"],
    score: "9.5/10",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 17,
    title: "Our Planet",
    year: "2019",
    rating: "TV-G",
    duration: "8 Episodes",
    genres: ["Documentary", "Nature"],
    score: "9.3/10",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 18,
    title: "The Social Dilemma",
    year: "2020",
    rating: "PG-13",
    duration: "1h 34m",
    genres: ["Documentary", "Drama"],
    score: "7.6/10",
    image: "https://images.unsplash.com/photo-1581091215367-ec852c6a2a82?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 19,
    title: "Making a Murderer",
    year: "2015",
    rating: "TV-MA",
    duration: "2 Seasons",
    genres: ["Documentary", "Crime"],
    score: "8.6/10",
    image: "https://images.unsplash.com/photo-1547496502-affa22d388e3?auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 20,
    title: "Cosmos: Possible Worlds",
    year: "2020",
    rating: "TV-PG",
    duration: "13 Episodes",
    genres: ["Documentary", "Science"],
    score: "9.1/10",
    image: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=500&q=60"
  }
];

export default myListData;
