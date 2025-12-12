import "./NavBar.css"
function NavBar() {
    return(
    <nav>
      <h1 className="title">Darwin Hamilton</h1>

      <ul className="links">
         <li><a href="#contact">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
        
    )
}
export default NavBar