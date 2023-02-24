import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import DeleteIcon from "@mui/icons-material/Delete";
export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div>
      <IconButton
        aria-label="like-btn"
        color="primary"
        onClick={() => setLike(like + 1)}
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>
      <IconButton
        aria-label="dislike-btn"
        color="error"
        onClick={() => setDislike(dislike + 1)}
      >
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
      {/* onClick - camelCase */}
      {/* <button className="btn-like" onClick={() => setLike(like + 1)}>
        👍 {like}
      </button> */}
      {/* create a dislike button */}
      {/* <button className="btn-dislike" onClick={() => setDislike(dislike + 1)}>
        👎 {dislike}
      </button> */}
    </div>
  );
}
