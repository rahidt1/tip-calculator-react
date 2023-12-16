export default function Output({ bill, tip }) {
  return <h2>{`You pay ${bill + tip}($${bill} + $${tip} tip)`}</h2>;
}
