import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AddUserPage = () => {
    return (
        <div className={"bg-primary-100 p-5 rounded-xl mt-5"}>
            <form action={addUser} className={"flex flex-wrap justify-between"}>
                <input className=" w-[45%] p-[30px] bg-primary-50 text-[white] border-[2px]  rounded-[5px] mb-[30px] border-[#2e374a]" type="text" placeholder="username" name="username" required />
                <input className="w-[45%] p-[30px] bg-primary-50 text-[white] border-[2px]  rounded-[5px] mb-[30px] border-[#2e374a]" type="email" placeholder="email" name="email" required />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                    className="w-[45%] p-[30px] bg-primary-50 text-[white] border-[2px]  rounded-[5px] mb-[30px] border-[#2e374a]"
                />
                <input type="phone" placeholder="phone" name="phone" className="w-[45%] p-[30px] bg-primary-50 text-[white] border-[2px]  rounded-[5px] mb-[30px] border-[#2e374a]" />
                <select className="w-[45%] p-[30px] bg-primary-50 text-[white] border-[2px]  rounded-[5px] mb-[30px] border-[#2e374a]" name="isAdmin" id="isAdmin">
                    <option value={false}>
                        Is Admin?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select className="w-[45%] p-[30px] bg-primary-50 text-[white] border-[2px]  rounded-[5px] mb-[30px] border-[#2e374a]" name="isActive" id="isActive">
                    <option value={true}>
                        Is Active?
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea
                    className="w-full p-[30px] bg-primary-50 text-[white] border-[2px]  rounded-[5px] mb-[30px] border-[#2e374a]"
                    name="address"
                    id="address"
                    rows="16"
                    placeholder="Address"
                ></textarea>
                <button className="w-full p-[30px] bg-[teal] text-[white] border-none rounded-[5px] cursor-pointer" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AddUserPage;