const Confirmations = () => {
    return (
      <div className="text-white my-4">
        <div className="mx-auto w-[58%] h-[28rem] bg-[#0CC6F7] flex flex-col rounded-xl">
          <div className="text-center py-6">
            <img src="/images/coolEmoji.png" alt='emoji' className="mx-auto" />
            <p className="text-xl font-extrabold py-4">Your Payment is Confirmed</p>
            <div className="">
              <p>You will receive a confirmation email with order detail</p>
              <p>You will be redirected to homepage</p>
            </div>
          </div>
        </div>
      </div>
    )
  };
  
  export default Confirmations;
  