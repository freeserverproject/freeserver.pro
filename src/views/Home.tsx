import { useNavigate } from 'react-router-dom';
import ScrollToSeeMore from '../components/ScrollToSeeMore';
import CanCopyElement from '../components/CanCopyElement';
import HashMatchLink from '../components/HashMatchLink';
import './Home.css';

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <header>
        <div className="title">
          <h1>Welcome to FREESERVER</h1>
        </div>
        <div onClick={() => navigate('/#about')}>
          <ScrollToSeeMore />
        </div>
      </header>
      <div className="card about" id="about">
        <h1>
          <HashMatchLink to={{ pathname: '/', hash: '#about' }}>ABOUT</HashMatchLink>
        </h1>
        <div>
          FREESERVERは実家のような安心感を提供します
          <br />
          ゆるく、安心できる場所をお楽しみください。
          <br />
          <span>
            運営も積極的に参加していますので
            <br />
            わからないことはいつでも聞いてください
          </span>
        </div>
      </div>
      <div className="card feature" id="feature">
        <h1>
          <HashMatchLink to={{ pathname: '/', hash: '#feature' }}>FEATURE</HashMatchLink>
        </h1>
        <div className="inner">
          FREESERVERではメインとなる生活鯖の他に
          <br />
          ミニゲームも定期開催しています。
          <br />
          <span>
            イベント日程等詳細につきましては
            <br />
            Discordにて随時発信しております、是非{' '}
            <a href="https://link.freeserver.pro/discord">公式サーバー</a>へご参加ください
          </span>
        </div>
      </div>
      <div className="card how-to-join" id="how-to-join">
        <h1>
          <HashMatchLink to={{ pathname: '/', hash: '#how-to-join' }}>参加方法</HashMatchLink>
        </h1>
        <div className="inner">
          <h2>参加前に</h2>
          <div className="content">
            ・人の建物を壊さない
            <br />
            ・ユーザー同士でトラブルを起こさない
            <br />
            ・みんなで仲良く
            <br />
          </div>
          <br />
          <CanCopyElement text="play.freeserver.pro" />
          <div className="link">
            <a href="/tos">その他詳細な規約はこちら</a>
          </div>
        </div>
      </div>
    </main>
  );
}
