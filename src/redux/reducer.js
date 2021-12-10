import { ADD_POST } from "./actions";

const POSTS = [
    {
        author: "Коля",
        avatar: "https://lurkmore.so/images/thumb/9/93/Severniy-chelovek.jpg/473px-Severniy-chelovek.jpg",
        nickname: "Шаман",
        date: "07.12.2021",
        content: "Полный вперед, однако!",
        photo: "https://lurkmore.so/images/5/50/Chukchanalodke.jpg",
        countLikes: 1,
        countComents: 2,
        countReposts: 3,
    },
    {
        author: "Петя",
        avatar: "https://s.fraza.com/images/2018/07/27/110739_6457567657567.thumb.jpg",
        nickname: "Arnold",
        date: "07.12.2021",
        content: "Спят твои соседи...белые медведи...",
        photo: "https://cs13.pikabu.ru/post_img/2021/01/25/6/1611567522123238962.webp",
        countLikes: 1,
        countComents: 2,
        countReposts: 3,
    },
    {
        author: "Вася",
        avatar: "https://1.bp.blogspot.com/-x5WQ37tfaCg/W9f6GvUmOtI/AAAAAAABGzc/18S0PanTN5IqQ4iae3gBKlZ3lJJcLxlegCLcBGAs/s1600/%25D1%2588%25D0%25B0%25D0%25BC%25D0%25B0%25D0%25BD%2B%25D0%25BA%25D0%25BE%25D0%25BB%25D1%258F.jpg",
        nickname: "Rembo",
        date: "07.12.2021",
        content: "Опять понедельник(",
        photo: "https://www.meme-arsenal.com/memes/1823387b0e6cae381c5566db5552df4d.jpg",
        countLikes: 1,
        countComents: 2,
        countReposts: 3,
    },

];

const initialState = {
    posts: POSTS,
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            return {
                posts: [...state.posts, action.payload],
            }
        default:
            return state;
    }
};