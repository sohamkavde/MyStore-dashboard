
function Page() {
    return (
        <div>
                <ul>
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className="right"><a href="#about">About</a></li>
            </ul>

            <div style={{padding:"0 16px"}}>
                <h2>Responsive Topnav Example</h2>
                <p>This example use media queries to stack the topnav vertically when the screen size is 600px or less.</p>
                <p>You will learn more about media queries and responsive web design later in our CSS Tutorial.</p>
                <h4>Resize the browser window to see the effect.</h4>
            </div>




        </div>
    )
}

export default Page;
