import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { performFetchComments, performPostComment } from "../store/comments/slice";

interface PropsComents {
  comments: Comment[];
  movie_id: number,
}

const Comments: React.FC<PropsComents> = ({ comments, movie_id }) => {
    const dispatch = useDispatch();
    const [ newComment, setNewComment ] = useState("");

    const hanndleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(newComment.trim() !== "") {
            dispatch(performPostComment({body: newComment, movie_id}))
            setNewComment("");
        }
    }

  return (
    <>
      <div>
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment: Comment) => (
              <li key={comment.id}>
                <p>Kreator: {comment.creator.name}</p>
                <p>Komentar: {comment.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Trenutno nema komentara</p>
        )}
      </div>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          placeholder="Unesti svoj komentar ovde.."
          maxLength={1000}
          value={newComment}
          rows={4}
          cols={50}
          onChange={hanndleCommentChange}
        />
        <button type="submit">Dodaj komentar</button>
      </form>
    </>
  );
};

export default Comments;
