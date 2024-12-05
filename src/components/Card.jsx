function Card({children}) {
  return(
      <div className="shadow-lg rounded-lg overflow-hidden w-5/6 md:w-[20%] lg:w-[14%] group hover:bg-[#393939] relative hover:cursor-pointer flex flex-col h-[350px]">
          <div className="p-[3px] bg-gradient-to-r from-red-600 to-red-500 rounded-lg flex-grow">
              <div className="bg-black rounded-lg h-full flex flex-col">{children}</div>
          </div>
      </div>
  );
}

function Title({children}) {
  return(
      <h1 className="font-semibold text-xl pt-6 pb-2 px-6 border-b-2 border-slate-100">{children}</h1>
  );
}

function Body({children}) {
  return (
      <div className="flex-grow p-6">{children}</div>
  );
}

function Footer({children}) {
  return(
    <div className="py-1 px-2">{children}</div>
  );
}

Card.Title = Title;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
