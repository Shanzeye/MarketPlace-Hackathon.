
// components/CategoryNav.tsx
import { useState } from 'react';

interface CategoryNavProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const categories = ['Appetizer', 'Main Course', 'Sandwich', 'Dessert', 'Drink'];

const CategoryNav: React.FC<CategoryNavProps> = ({ selectedCategory, setSelectedCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  return (
    <div className="w-full">
      {/* Mobile Hamburger Menu */}
      <div className="sm:hidden mb-4">
        <button
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰ {/* Hamburger icon */}
        </button>

        {/* Dropdown Menu for Mobile */}
        {isMenuOpen && (
          <div className="mt-2 flex flex-col space-y-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`w-full px-4 py-2 text-left font-semibold text-white rounded-lg transition-all duration-300 hover:bg-orange-500 ${selectedCategory === category ? 'bg-orange-500' : 'bg-gray-500'}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsMenuOpen(false); // Close menu after selection
                }}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Layout (Horizontal categories) */}
      <div className="hidden sm:flex justify-center space-x-6 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 font-semibold text-white rounded-lg transition-all duration-300 hover:bg-orange-500 ${selectedCategory === category ? 'bg-orange-500' : 'bg-gray-500'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
