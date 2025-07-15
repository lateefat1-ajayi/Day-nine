import { useState } from 'react';




const ShoppingItem = ({ item, onToggle, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(item.name);

  const handleSave = () => {
    if (editedName.trim()) {
      onEdit(item.id, editedName.trim());
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditedName(item.name); // reset to original
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between bg-white shadow rounded px-3 py-2">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggle(item.id)}
        />
        {isEditing ? (
          <input
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="border-b border-gray-300 outline-none px-1 py-0.5"
            autoFocus
          />
        ) : (
          <span className={`${item.checked ? 'line-through text-gray-500' : ''}`}>
            {item.name}
          </span>
        )}
      </div>
      <div className="flex gap-2 text-sm">
        {isEditing ? (
          <>
            <button onClick={handleSave} className="bg-green-500 text-black rounded border p-1 hover:bg-green-700 hover:-translate-y-0.5">
              Save
            </button>
            <button onClick={handleCancel} className="bg-gray-500 text-black rounded border p-1 hover:bg-gray-700 hover:-translate-y-0.5">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-black rounded border p-1 hover:bg-blue-700 hover:-translate-y-0.5">
              Edit
            </button>
            <button onClick={() => onDelete(item.id)} className="text-black rounded border bg-rose-500  p-1 hover:bg-rose-700 hover:-translate-y-0.5">
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingItem;
