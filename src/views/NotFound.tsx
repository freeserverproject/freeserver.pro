import Article from './Article';
import './NotFound.scss';

export default function NotFound() {
  return (
    <Article noRouter>
      <div className="not-found">
        <h2>すみません！ページが見当たりませんでした！</h2>
        <img src="https://http.cat/404" alt="404 cat" />
      </div>
    </Article>
  );
}
