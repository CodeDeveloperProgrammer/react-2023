export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>No items added yet 😯!</em>
      </p>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `Congratulations! You packed everything! ${percentage}%`
          : `🛒 You have ${numItems} items on your list, and you already packed
        ${numPacked} (${percentage}% of the items).`}
      </em>
    </footer>
  );
}
