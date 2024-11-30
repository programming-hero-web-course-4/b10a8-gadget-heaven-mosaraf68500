
const Footer = () => {
    return (
        <div>
        <div className="text-center pt-8">
            <h1 className="text-2xl font-bold text-gray-700">Gadget Heaven</h1>
            <p className="font-semibold text-sm">Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="divider"></div>

        <footer className="footer bg-white  text-gray-500 p-10">
  <nav>
    <h6 className="footer-title">Services </h6>
    <a className="link link-hover">Product Support</a>

    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
 
   



  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
            
        </div>
    );
};

export default Footer;