type MenuItemProps = {
  icon: React.ReactNode;
  title: string;
  open: boolean;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, title, open }) => {
  return (
    <li className="flex items-center space-x-4 hover:bg-gray-700 cursor-pointer p-3 rounded-md">
      <span className="text-lg">{icon}</span>
      <span
        className={`text-sm duration-300 ${open ? 'opacity-100' : 'opacity-0'} lg:opacity-100`}
      >
        {title}
      </span>
    </li>
  );
};

export default MenuItem;
