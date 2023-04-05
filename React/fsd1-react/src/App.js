import "./App.css";
import { useState } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import { Counter } from "./Counter";
import { AddColor } from "./AddColor";
import { DisplayData } from "./DisplayData";
const INITIAL_BOOK_LIST = [
  {
    name: "Charlotte's web",
    poster:
      "https://cdn.britannica.com/64/103064-050-295C6879/Charlottes-Web-EB-Garth-Williams.jpg",
    rating: 7.8,
    summary:
      "The novel tells the story of Link livestock pig named Wilbur and his friendship with Link barn spider named Charlotte. When Wilbur is in danger of being slaughtered by the farmer, Charlotte writes messages praising Wilbur in her web in order to persuade the farmer to let him live.",
  },
  {
    name: "The power of your subconscious mind",
    poster:
      "https://kbimages1-Link.akamaihd.net/6f3cf06c-4811-42d4-bd63-564c8264bc2d/1200/1200/False/the-power-of-your-subconscious-mind-57.jpg",
    rating: 7,
    summary:
      "Your subconscious mind is Link powerful force to be reckoned with. It makes up around 95% of your brain power and handles everything your body needs to function properly, from eating and breathing to digesting and making memories",
  },
  {
    name: "Attitude is everything ",
    poster: "https://miro.medium.com/max/1400/1*ItFOYfi8Dyy0yj9n1SE8uQ.jpeg",
    rating: 8,
    summary:
      "Attitude, In psychology, Link mental position with regard to Link fact or state. Attitudes reflect Link tendency to classify objects and events and to react to them with some consistency. Attitudes are not directly observable but rather are inferred from the objective, evaluative responses Link person makes.",
  },
  {
    name: "The Secret",
    poster: "https://m.media-amazon.com/images/I/81fdQIY6ykL.jpg",
    summary:
      "There's no secret to The Secret. The book and movie simply state that your thoughts control the universe. Through this “law of attraction” you “manifest” your desires. “It is exactly like placing an order from Link catalogue",
    rating: 8.8,
  },
  {
    name: "Discover Your Destiny",
    rating: 6,
    summary:
      "'Discover Your Destiny' is Link story about enlightenment of Dar Sanderson, who is an incredibly ambitious executive. The book throws light on the fact that 'happiness and harmony can never be achieved and assured by SUCCESS'. Dar is an achiever in almost every aspect of life, yet he is void from the inside.",
    poster: "https://m.media-amazon.com/images/I/61t18yWH5qL.jpg",
  },
  {
    name: "The 5 AM Club",
    poster: "https://m.media-amazon.com/images/I/71zytzrg6lL.jpg",
    rating: 8.6,
    summary:
      "In The 5 AM Club: Own Your Morning. Elevate Your Life, he uses Link fictitious story about Link billionaire mentor teaching Link struggling artist and an entrepreneur about the importance of waking up early to show how revolutionary it is for success.",
  },
  {
    name: "Atomic Habits",
    poster: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    rating: 6.9,
    summary:
      "Atomic Habits is the definitive guide to breaking bad behaviors and adopting good ones in four steps, showing you how small, incremental, everyday routines compound into massive, positive change over time.",
  },
  {
    name: "I Can Do It",
    poster: "https://images-na.ssl-images-amazon.com/images/I/81T3L1yTJwL.jpg",
    rating: 9,
    summary:
      "Hay shows you that you “can do it”—that is, change and improve virtually every aspect of your life—by understanding and using affirmations correctly. Louise explains that every thought you think and every word you speak is an affirmation. Even your self-talk, your internal dialogue, is Link stream of affirmations.",
  },
];

export default function App() {
  //console.log(nameList);

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {/* Link change page without refresh */}
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">BookList</Link>
          </li>
          <li>
            <Link to="/game">AddColor</Link>
          </li>
          <li>
            <Link to="/data">DisplayData</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:bookid" element={<BookDetail />} />
        <Route path="/game" element={<AddColor />} />
        <Route path="/data" element={<DisplayData />} />
      </Routes>
    </div>
  );
  //JSX ends
}

function BookDetail() {
  const { bookid } = useParams();
  return <h1>Book Detail Page - {bookid}</h1>;
}

function Home() {
  return <h1>Welcome to Book App🥳🥳🥳</h1>;
}

function BookList() {
  //const bookList = INITIAL_BOOK_LIST;
  const [bookList, setBookList] = useState(INITIAL_BOOK_LIST);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div>
      <div className="add-book-form">
        <input
          value={name}
          type="text"
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter name"
        />
        <input
          type="text"
          onChange={(event) => setPoster(event.target.value)}
          placeholder="Enter poster"
        />
        <input
          type="text"
          onChange={(event) => setRating(event.target.value)}
          placeholder="Enter rating"
        />
        <input
          type="text"
          onChange={(event) => setSummary(event.target.value)}
          placeholder="Enter summary"
        />
        {/* copy the bookList and newbook */}
        <button
          onClick={() => {
            const newBook = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            setBookList([...bookList, newBook]);
          }}
        >
          Add Book
        </button>
      </div>

      <div className="book-list">
        {bookList.map((bk, index) => (
          <Book key={index} book={bk} id={index} />
        ))}
      </div>
    </div>
  );
}

function Book({ book, id }) {
  const [show, setShow] = useState(true);
  //conditional styling
  const styles = {
    color: book.rating > 8 ? "green" : "red",
  };
  const summaryStyle = {
    display: show ? "block" : "none",
  };
  const navigate = useNavigate();
  // true - visible - block;
  // false - hide - none;
  return (
    <div>
      <div className="book-container">
        <img className="book-poster" src={book.poster} alt={book.name} />
        <div className="book-spec">
          <h2 className="book-name">
            {book.name}-{id}
          </h2>
          <p style={styles} className="book-rating">
            ⭐{book.rating}
          </p>
        </div>
        <button onClick={() => setShow(!show)}>Toggle description</button>
        <button onClick={() => navigate("/books/" + id)}>Info</button>
        {/* <p style={summaryStyle} className="book-summary">
          {book.summary}
        </p> */}
        {show ? <p className="book-summary">{book.summary}</p> : ""}
        <Counter />
      </div>
    </div>
  );
}

// Task - 15mins
// Add Book - 4 input box(name, poster, rating,summary)
// Add Book button
