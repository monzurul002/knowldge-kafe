import profile from "../../assets/profile.png";
const Header = () => {
  return (
    <header className="flex justify-between p-2 mx-2 border-b-2">
      <h1 className="font-bold text-2xl ">Knowlege Cafe</h1>
      <img src={profile} alt="" />
    </header>
  );
};

export default Header;
