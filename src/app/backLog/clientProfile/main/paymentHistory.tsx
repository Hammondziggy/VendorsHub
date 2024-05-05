"use client";

export const PaymentHistory = () => {
    return (
        <section>
            <h3 className='font-bold mt-10 mb-4'>Payment History</h3>
            <div className="bg-white py-10 w-full text-black rounded-t-md max-h-[420px] overflow-auto"> 
                <table className='w-[100%]'>
                    <thead>
                        <tr>
                            <th className='text-sm md:text-[16px]'>Vendor</th>
                            <th className='text-sm md:text-[16px]'>Amount</th>
                            <th className='text-sm md:text-[16px]'>Status</th>
                            <th className='text-sm md:text-[16px]'>Start Date</th>
                            <th className='text-sm md:text-[16px]'>End Date</th>
                        </tr>
                    </thead>

                    {Array(10)
                        .fill(10)
                        .map((_, index) => (
                            <tbody key={`friend${index}`}>
                                <tr>
                                    <td className='text-sm w-1/5 pt-[30px] text-center md:text-[16px]'>Soji sadiku Ventures</td>
                                    <td className='text-sm w-1/5 pt-[30px] text-center md:text-[16px]'>500,000</td>
                                    <td className='text-sm w-1/5 pt-[30px] text-center md:text-[16px]'>Ongoing</td>
                                    <td className='text-sm w-1/5 pt-[30px] text-center md:text-[16px]'>7/6/2023</td>
                                    <td className='text-sm w-1/5 pt-[30px] text-center md:text-[16px]'>23/7/2023</td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
            </div>
        </section>
    );
};