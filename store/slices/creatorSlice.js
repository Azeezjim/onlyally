import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

export const creatorSlice = createSlice({
  name: "creators",
  initialState: {
    creators:  [
        {
          username: "testuser",
          image: "https://picsum.photos/id/237/200/200",
        },
        {
          username: "asafasaasc",
          image: "https://picsum.photos/id/236/200/200",
        },
        {
          username: "sadcasca",
          image: "https://picsum.photos/id/238/200/200",
        },
        {
          username: "sdsacasca",
          image: "https://picsum.photos/id/239/200/200",
        },
        {
          username: "xaxxsxa",
          image: "https://picsum.photos/id/227/200/200",
        },
        {
          username: "asd_sksc_s",
          image: "https://picsum.photos/id/229/200/200",
        },
        {
          username: "ascsama",
          image: "https://picsum.photos/id/247/200/200",
        },
        {
          username: "anilsenayyyy",
          image: "https://picsum.photos/id/257/200/200",
        },
        {
          username: "anilsenay1",
          image: "https://picsum.photos/id/256/200/200",
        },
        {
          username: "anilsenay2",
          image: "https://picsum.photos/id/267/200/200",
        },
        {
          username: "anilsenay3",
          image: "https://picsum.photos/id/266/200/200",
        },
        {
          username: "anilsenay4",
          image: "https://picsum.photos/id/261/200/200",
        },
        {
          username: "anilsenay5",
          image: "https://picsum.photos/id/260/200/200",
        },
      ],
      feed: [
        {
          photos: [
            "https://picsum.photos/id/213/600/600",
            "https://picsum.photos/id/247/600/600",
            "https://picsum.photos/id/257/600/600",
            "https://picsum.photos/id/287/600/600",
            "https://picsum.photos/id/267/600/600",
          ],
          user: {
            username: "testuser",
            image: "https://picsum.photos/id/217/600/600",
          },
          likeCount: 6,
          commentCount: 12,
          pid: 516161646546,
          description: "Hello guys there are my new photos",
          popularComments: [
            { username: "tesasca", description: "Nice pic bro!" },
            { username: "ascccxxca", description: "Hello!" },
          ],
          time: "12 hours ago",
        },
        {
          photos: ["https://picsum.photos/id/228/600/600"],
          user: {
            username: "cool_guy",
            image: "https://picsum.photos/id/219/600/600",
          },
          likeCount: 121,
          commentCount: 22,
          pid: 1131235616,
          description: "Hi from Miami!",
          popularComments: [
            { username: "girl_12", description: "You are so handsome!!" },
            { username: "brobean", description: "Hi bro, nice boat" },
          ],
          time: "13 hours ago",
        },
        {
          photos: [
            "https://picsum.photos/id/236/600/600",
            "https://picsum.photos/id/296/600/600",
            "https://picsum.photos/id/256/600/600",
          ],
          user: {
            username: "react_user",
            image: "https://picsum.photos/id/217/600/600",
          },
          likeCount: 13,
          commentCount: 15,
          pid: 61656556161,
          description: "New React update is awesome!",
          popularComments: [
            { username: "react_fanboy", description: "WWOOOWWW!" },
            { username: "frontend-guy223", description: "Good to hear!" },
          ],
          time: "15 hours ago",
        },
        {
          photos: [
            "https://picsum.photos/id/225/600/600",
            "https://picsum.photos/id/241/600/600",
            "https://picsum.photos/id/255/600/600",
            "https://picsum.photos/id/281/600/600",
          ],
          user: {
            username: "spotifyGuy",
            image: "https://picsum.photos/id/217/600/600",
          },
          likeCount: 626,
          commentCount: 152,
          pid: 1616448151,
          description: "My new music is on road!",
          popularComments: [
            { username: "tesasca", description: "Yay!" },
            { username: "ascccxxca", description: "I can not wait!" },
          ],
          time: "16 hours ago",
        },
        {
          photos: [
            "https://picsum.photos/id/222/600/600",
            "https://picsum.photos/id/244/600/600",
          ],
          user: {
            username: "mamas_kitchen",
            image: "https://picsum.photos/id/217/600/600",
          },
          likeCount: 10,
          commentCount: 5,
          pid: 616984333121,
          description: "Here is my new food",
          popularComments: [
            { username: "kjccja", description: "Looks tasty!" },
            { username: "cscaaca", description: "yummm!" },
          ],
          time: "22 hours ago",
        },
      ],
  },

//   reducers: {
//     setUserData: (state, action) => {
//       state.user = action.payload;
//     },
//   },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      // handle client
      state.creators = action.payload.creators.creators;
      state.feed = action.payload.creators.feed;
    },
  },
});

// export const { setUserData } = UserSlice.actions

// export const selectUser = UserSlice.state;

export default creatorSlice.reducer
