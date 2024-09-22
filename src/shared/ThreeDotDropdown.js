
const ThreeDotDropdown = ({DropdownItem}) => {
  return (
    <>
      <div className="dropdown">
        <span
          className="dropdown-toggle"
          id="dropdownMenuButton6"
          data-toggle="dropdown"
        >
          <i className="ri-more-fill" />
        </span>
        <div
          className="dropdown-menu dropdown-menu-right"
          aria-labelledby="dropdownMenuButton6"
        >
            {DropdownItem.map((item) => (
         <a className="dropdown-item" href="#" key={item.id}>
         <i className={`${item.icon} mr-2`} />
        {item.name}
       </a>
            ))}
 
        </div>
      </div>
    </>
  );
};

export default ThreeDotDropdown;
