import { Link } from 'react-router-dom';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <section className="links">
        <Link to="/privacy-policy">プライバシーポリシー</Link>
        <Link to="/tos">Minecraftサーバー利用規約</Link>
        <Link to="/top">Webページ利用規約</Link>
        <Link to="/join-us">運営募集</Link>
      </section>
      <section>
        Minecraft 公式ではありません。 Mojang から承認されておらず、 Mojang とは関係ありません。
        <br />
        Minecraft は Mojang の商標です。
      </section>
      <section className="copyright">&copy;{new Date().getFullYear()} FREESERVER Project</section>
    </footer>
  );
}
