import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="notfound">
      <div className="wrap notfound__inner">
        <p className="notfound__eyebrow">404</p>
        <h1>This page wandered off.</h1>
        <Link to="/">Back to home &rarr;</Link>
      </div>
    </div>
  );
}
