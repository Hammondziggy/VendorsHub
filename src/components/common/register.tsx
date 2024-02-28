// Homepage Register Section

const Register = () => {
    return (
        <div className="w-full bg-white center py-16">
            <div className="w-[90%] center flex-col md:flex-row md:gap-32 gap-10">
                <div className="flex flex-col w-full ">
                    <p className="text-[1.5rem] text-center md:text-left">
                        At Vendorshub, every vendor gets a chance to 
                    </p>
                    <p className="text-[1.5rem] text-center md:text-left">
                        shine while providing protection against payment <br/>issues.
                    </p>
                </div>
                <a href="https://docs.google.com/forms/d/1diP-bM8dIQaQngA4dmq4E1laLlVLltujahS6osRTjpM/edit?usp=sharing_eil_se_dm&ts=64abcbfc" target="_blank" className="py-2 px-16 text-[1.5rem] bg-yellow text-black hover:scale-95 transition duration-300">Register</a>
            </div>
        </div>
    );
}
 
export default Register;