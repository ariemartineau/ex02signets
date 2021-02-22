import avatar from '../images/avatar.jpg';

export default function Entete() {
  return (
    <header className="Entete">
      <div className="logo">Signets</div>
      <div className="avatar">Ariane Laferrière-Martineau <img src={avatar} alt="Ariane Laferrière-Martineau" /></div>
    </header>
  );
}