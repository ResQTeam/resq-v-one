interface SidebarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const FaqSideBar: React.FC<SidebarProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="bg-gray-100 md:px-8 md:py-4">
      <h2 className="mb-3 pt-9  text-[1.1rem] font-bold text-resq-dark-400  md:text-3xl">
        Categories
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer px-8 py-4 ${
              activeCategory === category
                ? 'bg-resq-brand-main font-semibold text-white'
                : ''
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FaqSideBar;
