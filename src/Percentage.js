export default function Percentage({ percentage, onSetPercentage, children }) {
  function handlePercentage(p) {
    onSetPercentage(p);
  }

  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => handlePercentage(+e.target.value)}
      >
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Amazing! (20%)</option>
      </select>
    </div>
  );
}
