
const WithLayout = (Component) => {
  const Wrapper = (props) => {
    const sayHello = () => {
      alert('HELLO')
    }
    return(
      <div className="bg-red">
          <div className="left-side">Left Side</div>
          <div className="right-side">
              <Component sayHello={sayHello} {...props} />
          </div>
      </div>
    )
  }
  return Wrapper
}

export default WithLayout;