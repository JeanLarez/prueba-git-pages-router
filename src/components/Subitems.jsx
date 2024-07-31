const Subitems = ({ title = [], leave }) => {
  let lista = title.map((elemento) => (
    <li
      key={elemento}
      className=" cursor-pointer hover:text-yellow-600 md:hover:text-white"
    >
      {elemento}
    </li>
  ));
  return (
    <div
      onMouseLeave={leave}
      className="bg-stone-300 md:bg-stone-700 md:text-slate-300"
    >
      <nav>
        <ul className="*:py-6 *:font-normal md:flex md:justify-start md:p-4 *:md:mr-16 *:md:p-0 lg:mx-16 xl:mx-32">
          {lista}
        </ul>
      </nav>
    </div>
  );
};

export default Subitems;
