import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { performDeleteComment, performFetchComments, performPostComment } from "../store/comments/slice";

interface PropsComents {
  comments: Comment[];
  movie_id: number,
  userId: number;
}

const Comments: React.FC<PropsComents> = ({ comments, movie_id , userId}) => {
    const dispatch = useDispatch();
    const [ newComment, setNewComment ] = useState("");


    useEffect(()=> {
      dispatch(performFetchComments(movie_id))
    }, [dispatch ,movie_id, comments])

    

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

    const handleDeleteComment = (commentId: number) => {
      const confirmDelete = window.confirm("Da li ste sigurni da zelite da obrisete komentar");
      if(confirmDelete) {
        dispatch(performDeleteComment(commentId));
      };
    };

  return (
    <><div className="movie-comments">
        {comments.length > 0 ? (
          <ul>
            {comments.map((comment: Comment) => (
              <li key={comment.id}>
                <p>Kreator: {comment.creator.name}</p>
                <p>Komentar: {comment.body}</p>
                {comment.creator.id === userId && (
                  <button onClick={() =>handleDeleteComment(comment.id)}>Obrisi komentar</button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>Trenutno nema komentara</p>
        )}
      
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
      </div>
    </>
  );
};

export default Comments;
