import React, { useState } from "react";
import "./CommentSection.scss";

const CommentSection = ({
  comments,
  newComment,
  setNewComment,
  handleFormSubmit,
}) => {
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.name || !newComment.comment) {
      const errorMessage = "Please submit both your name and a comment before posting!";
      setError(errorMessage);
      window.alert(errorMessage); // Display alert popup
      return;
    }
    setError("");
    handleFormSubmit(e);
  };

  return (
    <div className="comment__chat">
      <form className="comment__form" onSubmit={handleSubmit}>
        {error && <div className="comment__error">{error}</div>}
        <div className="comment__input-container">
          <label className="comment__label">Name</label>
          <input
            type="text"
            className="comment__input-name"
            value={newComment.name}
            onChange={(e) =>
              setNewComment({ ...newComment, name: e.target.value })
            }
          />
        </div>

        <div className="comment__input-container">
          <label className="comment__label">Comment</label>
          <textarea
            className="comment__input-comment"
            value={newComment.comment}
            onChange={(e) =>
              setNewComment({ ...newComment, comment: e.target.value })
            }
          />
        </div>

        <div className="comment__button-container">
          <button className="comment__button" type="submit">
            Submit
          </button>
        </div>
      </form>

      <div className="comment__comments">
        <div>{comments.length} Comments</div>
        {comments
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
          .map((comment) => (
            <div key={comment.id} className="comment__comment">
              <hr className="comment__hr-line" />
              <div className="comment__namedate">
                <p className="comment__comment-name">{comment.name}</p>
                <time dateTime={comment.timestamp}>
                  {new Date(comment.timestamp).toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </time>
              </div>
              <p className="comment__user-comments">{comment.comment}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentSection;
