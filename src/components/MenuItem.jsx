function MenuItem({ item }) {
  return (
    <div
      key={item.id}
      className="menu-item"
      style={{ backgroundImage: `url(${item.picture})` }}
    >
      {item.name} - ${item.price.toFixed(2)}
    </div>
  )
}

export default MenuItem
