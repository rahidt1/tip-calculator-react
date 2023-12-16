export default function BillInput({ bill, onSetBill }) {
  function handleBill(bill) {
    if (bill || bill === 0) onSetBill(bill);
  }

  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => handleBill(+e.target.value)}
      />
    </div>
  );
}
