
//alternate syntax for function 
//using fat arrow
//useful for annonymous function
// const Header = () =>   <header className="navbar">This is the header</header>


function Header() {
    const firstName = "Richa"
    const lastName = "Agrawal"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    const styles = {
        color: "#FF8C00",
        backgroundColor: "#FF2D00",
        fontSize: 24
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "#04756F"
      } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
        styles.color = "#8914A3"
      } else {
        timeOfDay = "night"
        styles.color = "#D90000"
      }
    return (
        <div>
            <header className="navbar">This is the header</header>
            <h1 style={styles}>Good  {`${timeOfDay} ${firstName} ${lastName}`}!</h1>
        </div>
    )
}

export default Header;