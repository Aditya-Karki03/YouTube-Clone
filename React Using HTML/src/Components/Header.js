 const Header=()=>(
    <div className='header-container'>
        <img src='./logo.png' alt='Logo'/>
        <div className='input'>
        <input type='text' placeholder='search'/>
        <input type='submit'/>
        </div>
        <div className='links-container'>
            <ul className='links-container'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)
export default Header;