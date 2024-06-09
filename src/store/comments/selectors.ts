const selectComments = (state: {comments: {comment: {data: Comment[]}}}) => state.comments.comment.data;

export { selectComments };