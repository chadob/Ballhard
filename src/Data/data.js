export const data = {
  imgList: [{src: "two-foot-dunk", placeholder: 'Try "Vertical"'}, {src: "shooting", placeholder: 'Try "Shooting Drill"'}, {src: "crossover", placeholder: 'Try "Crossover"'}],
  factList: ["Did you know that 1 in 10 ppl can't feel the texture on a basketball?", "Did you know that Michael Jordan hates lima beans?", "Over 42% of the world's population has never seen a basketball."],
  users: {
    0: {
      id: 0,
      username: 'guest',
      password: 'password',
      picture: 'primary_bg',
      recentSearches: ["duking one handed", "proper shooting form", "dribbling drills"],
      favoriteVideos: [0],
      ratings: {
        0: 2
      }
    },
  },
  videos: {
    0: {
      id: 0,
      section: "DUNKING",
      title: "When Worlds Collide",
      authorPic: "pink_bg",
      author: "Bob kota",
      views: 18822,
      rating: 4.3,
      description: "Bob kota goes over his idea of what a good player should be able to do.",
      url: "https://www.youtube.com/embed/4X4pwFi7-5U"
    }
  },
  comments: {
    videoId0: {
      order: [2, 1, 0],
      0: {
        author: 'Chad O',
        src: 'sunset_background',
        comment: 'This video rules',
        video: 0,
        date: 'June 4th, 1980',
        id: 0
      },
      1: {
        author: 'Chad O',
        src: 'sunset_background',
        comment: 'I would have watched this, but I much prefer to write inane facts about extinct animals like the Tasmanian Tiger.',
        video: 0,
        date: 'June 4th, 1980',
        id: 1
      },
      2: {
        author: 'Chad O',
        src: 'sunset_background',
        comment: 'Third!',
        video: 0,
        date: 'June 4th, 1980',
        id: 2
      },
    }
  },
  searches: {
    "dunking videos": 4,
    "killer crossover": 7,
    "proper shooting form": 3,
    "jumping off of one foot": 2,
    "one foot jumping": 1,
    "workouts": 10,
    "shooting drills": 1,
    "ball handling drills": 3,
    "leg warmup": 1,
    "how to go behind the back": 1,
    "footwork on shot": 1,
    "in n out": 1,
    "speed up crossover": 1,
    "shooting video": 4,
    "shooting videos": 10,
  },
  topSearches: {
    "shooting videos": 10,
    "workouts": 10,
    "killer crossover": 7,
    "dunking videos": 4,
    "shooting video": 4,
  }
}
