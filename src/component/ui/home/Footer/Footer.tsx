import '../../../../css/home/Footer/Footer.css'

const Footer = () => {
    return (
        <div className="footer-container">
                <div className="container-1">
                    <div className="">
                        <span className="sign-inoption">
                            <span className="">Register for free</span>
                            <button
                                type="button"
                                className="inline-block">
                                Sign up!
                            </button>
                        </span>
                    </div>
                </div>


                <div
                    className="container-2">
                    © 2024 Copyright:
                    <a href="/"
                    >Hiber-net edu</a>
                </div>
            </div>
    )
}

export default Footer