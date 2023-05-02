import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API } from "./global";
import { useNavigate } from "react-router-dom";
export function AddBook() {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");
  const navigate = useNavigate();
  return (
    <div className="add-book-form">
      <TextField
        label="Name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        label="Poster"
        variant="outlined"
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        label="Rating"
        variant="outlined"
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        label="Summary"
        variant="outlined"
        onChange={(event) => setSummary(event.target.value)}
      />

      <TextField
        label="Trailer"
        variant="outlined"
        onChange={(event) => setTrailer(event.target.value)}
      />
      {/* copy the bookList and newbook */}

      <Button
        variant="contained"
        onClick={() => {
          const newBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          };
          //1. method -POST
          //2. body - data -JSON.stringify
          //3. headers - JSON

          fetch(`${API}/books`, {
            method: "POST",
            body: JSON.stringify(newBook),
            headers: { "Content-Type": "application/json" },
          })
            .then((data) => data.json())
            .then(() => navigate("/books"));
          //currently post and navigate is immediate
          // When post is completed -> navigate=> /books

          // setBookList([...bookList, newBook]);
        }}
      >
        Add Book
      </Button>

      {/* <button
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
                  </button> */}
    </div>
  );
}
