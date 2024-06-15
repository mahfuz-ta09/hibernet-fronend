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

                {/* <!--Copyright section--> */}
                <div
                    className="p-4 text-center bg-black bg-opacity-20">
                    © 2023 Copyright:
                    <a className="text-white" href="https://tw-elements.com/"
                    >TW Elements</a>
                </div>
            </div>
    )
}

export default Footer