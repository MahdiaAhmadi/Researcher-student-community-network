import { useHistory, useParams } from "react-router-dom";
import useFetch from "/useFetch";
import { Link } from "react-router-dom";

const Postdetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const {
    data: data,
    error,
    isLoading,
  } = useFetch("http://localhost:8000/post/" + id);
  const handleDelete = () => {
    fetch("http://localhost:8000/post/" + data.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
  const handleBack = () => {
    history.push("/");
  };
  return (
    <div className="blog-details">
      {isLoading && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{data.title}</h2>
          <p>Written by {data.author}</p>
          <p>{data.summary}</p>
        </article>
      )}
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleBack}>Back </button>
    </div>
  );
};

export default Postdetails;
