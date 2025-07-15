import { useEffect, useState } from 'react';
import ShoppingItem from '../components/ShoppingItem';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/storage';



const ShoppingList = () => {
  const [items, setItems] = useState(() => loadFromLocalStorage());
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    saveToLocalStorage(items);
  }, [items]);

  const addItem = (e) => {
    e.preventDefault();
    if (!newItem.trim()) return;
    const item = {
      id: Date.now(),
      name: newItem.trim(),
      checked: false,
    };
    setItems([item, ...items]);
    setNewItem('');
  };

  const toggleItem = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const editItem = (id, newName) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearAllItems = () => {
    if (window.confirm('Are you sure you want to clear your entire shopping list?')) {
      setItems([]);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-2 text-center">MyCartList📃</h2>
      

      <form onSubmit={addItem} className="flex gap-2 mb-4">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="flex-1 border px-3 py-2 rounded"
          placeholder="Add new item..."
        />
        <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 hover:-translate-y-0.5">
          Add
        </button>
      </form>

      {items.length > 0 && (
        <div className="mb-4 text-right">
          <button
            onClick={clearAllItems}
            className="text-red-600 hover:underline text-sm"
          >
            Clear All
          </button>
        </div>
      )}

      <div className="space-y-2">
        {items.length === 0 ? (
          <p className="text-gray-500">No items added yet.</p>
        ) : (
          items.map((item) => (
            <ShoppingItem
              key={item.id}
              item={item}
              onToggle={toggleItem}
              onEdit={editItem}
              onDelete={deleteItem}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ShoppingList;
