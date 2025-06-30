function MenuItem(props) {
  const {icon: Icon, text, ...restProps} = props
  return (
    <button className="btn bg-amber-50/0 border-none shadow-none justify-start gap-5 hover:opacity-50 w-full">
      <Icon {...restProps} />
      {text}
    </button>
  )
}
export default MenuItem