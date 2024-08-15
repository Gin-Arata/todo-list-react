import { Link } from "react-router-dom";

const NavbarLayoutsMobile = (props) => {
  return (
    <div className="w-full h-12 bg-bgcolorcardnavbar-500 flex justify-center items-center gap-x-10">
      <Link to="/">
        <i className="fa fa-home fa-xl"></i>
      </Link>
      <div className="relative mb-5 mx-5">
        <div className="w-16 h-16 bg-bgcolorcardnavbar-500 rounded-full flex justify-center items-center absolute -top-8 left-1/2 transform -translate-x-1/2">
          <Link to="#">
            <i className="fa fa-circle-plus fa-3x"></i>
          </Link>
        </div>
      </div>
      <Link to="/todolist">
        <i className="fa fa-calendar-days fa-xl"></i>
      </Link>
    </div>
  );
};

export default NavbarLayoutsMobile;
