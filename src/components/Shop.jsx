export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Elegan Clothing For Everyone</h2>
      <ul id="products">{children}</ul>
    </section>
  );
}
