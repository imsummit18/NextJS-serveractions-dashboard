import Image from "next/image";

const Transactions = () => {
    return (
        <div className={"bg-primary-100 p-5 rounded-xl"}>
            <h2 className={"mb-5 font-[200] text-primary-200"}>Latest Transactions</h2>
            <table className={"w-full"}>
                <thead>
                    <tr>
                        <td className="p-[10px]">Name</td>
                        <td className="p-[10px]">Status</td>
                        <td className="p-[10px]">Date</td>
                        <td className="p-[10px]">Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={"flex gap-[10px] items-center "}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={"rounded-[50%]"}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={"rounded-[5px] p-[5px] text-sm text-[white] bg-[#f7cb735]"}>
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={" my-2 flex gap-[10px] items-center"}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={"rounded-[50%]"}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={"rounded-[5px] p-[5px] text-sm text-[white] bg-[$f7cb7375] "}>Done</span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={" mb-2 flex gap-[10px] items-center"}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={"rounded-[50%]"}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`rounded-[5px] p-[5px] text-sm text-[white] bg-[#f7737375] `}>
                                Cancelled
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                    <tr>
                        <td className="">
                            <div className={"flex gap-[10px] items-center"}>
                                <Image
                                    src="/noavatar.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className={"rounded-[50%]"}
                                />
                                John Doe
                            </div>
                        </td>
                        <td>
                            <span className={`rounded-[5px] p-[5px] text-sm text-[white] bg-[#f7cb7375] `}>
                                Pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$3.200</td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
};

export default Transactions;