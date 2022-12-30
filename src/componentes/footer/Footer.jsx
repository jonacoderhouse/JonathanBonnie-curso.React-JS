
import facebook from "../logo/facebook.png"
import instagram from "../logo/instagram(1).png"
import twiter from "../logo/twitter.png"
import logo from "../logo/mac1.png"


const Footer = () => {

    return (
        <div className="containerFooter text-white bg-primary">
            <div className="d-flex flex-wrap justify-content-space-around align-items-center">
                <img className="logo" src={logo} alt="MACLOGO" />
                <p>REACT JS, CURSO CODERHOUSE AÑO 2022</p>
            </div>

            <div className="LinkFooter ">
                <a href="https://www.facebook.com" target="blanck" className='nav-link btn btn '><img className="img__footer" src={facebook} alt="facebook" /></a>
                <a href="https://www.instagram.com/" target="blanck" className='nav-link btn btn'><img className="img__footer" src={instagram} alt="instagram" /></a>
                <a href="https://twitter.com/" target="blanck" className='nav-link btn btn'><img className="img__footer" src={twiter} alt="twiter" /></a>
            </div>

            <div className="finish"><span>© 2022 Appy.Profesor: Francisco Pugh...</span>
                <span>EN ESE SENTIDO...</span>
            </div>

        </div>
    );
}


export default Footer


