import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/actions';

const AUTHORS = [
  {
    author: "Коля",
    avatar: "https://lurkmore.so/images/thumb/9/93/Severniy-chelovek.jpg/473px-Severniy-chelovek.jpg",
    nickname: "Шаман",
  },

  {
    author: "Петя",
    avatar: "https://s.fraza.com/images/2018/07/27/110739_6457567657567.thumb.jpg",
    nickname: "Arnold",
  },

  {
    author: "Вася",
    avatar: "https://1.bp.blogspot.com/-x5WQ37tfaCg/W9f6GvUmOtI/AAAAAAABGzc/18S0PanTN5IqQ4iae3gBKlZ3lJJcLxlegCLcBGAs/s1600/%25D1%2588%25D0%25B0%25D0%25BC%25D0%25B0%25D0%25BD%2B%25D0%25BA%25D0%25BE%25D0%25BB%25D1%258F.jpg",
    nickname: "Rembo",
  }
]

export default function CreatePost() {
  const [author, setAuthor] = useState("Коля");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");

  const currentDate = () => {
    let date = new Date();
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = date.getFullYear();
    date = dd + '.' + mm + '.' + yyyy;
    return date;
  }

  const dispatch = useDispatch();

  const onCreatePost = (event) => {
    event.preventDefault();
    const date = currentDate();
    const countLikes = 0, countComents = 0, countReposts = 0;
    const selectedAuthor = AUTHORS.find((item) => item.author === author);
    dispatch(addPost({ author: selectedAuthor.author, avatar: selectedAuthor.avatar, nickname: selectedAuthor.nickname, date, content, photo, countLikes, countComents, countReposts }));
    setAuthor("Коля");
    setContent("");
    setPhoto("");
  };

  return (
    <form className="post-new" onSubmit={onCreatePost}>
      <select onChange={(e) => setAuthor(e.target.value)}>
        {AUTHORS.map((item, index) => (
          <option value={item.author} key={index}>{item.author}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <input
        type="text"
        placeholder="Photo"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />

      <button type="submit" onClick={onCreatePost}>
        Create
      </button>
    </form>
  );
}
