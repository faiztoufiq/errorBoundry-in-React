import { text } from "../common/constants";

const NotFound = () => {
  return (
    <div>
      <h1>{text.notFound}</h1>
      <p>{text.notExist}</p>
    </div>
  );
};

export default NotFound;
