import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
    return (
        <div className="bg-primary-100 p-5 rounded-lg mt-5">
            <form action={addProduct} className="flex flex-wrap justify-between">
                <input type="text" placeholder="username" name="username" required className="p-8 bg-primary-200 text-black border-2 border-blue-800 rounded-lg mb-8 w-[45%]" />
                <select name="cat" id="cat" className="p-8 bg-primary-200 text-black border-2 border-[#2e374a] rounded-lg mb-8 w-1/2">
                    <option value="general">Choose a Category</option>
                    <option value="kitchen">Kitchen</option>
                    <option value="phone">Phone</option>
                    <option value="computer">Computer</option>
                </select>
                <input type="number" placeholder="price" name="price" required className="p-8 bg-primary-200 text-black border-2 border-[#2e374a] rounded-lg mb-8 w-[45%]" />
                <input type="number" placeholder="stock" name="stock" required className="p-8 bg-primary-200 text-black border-2 border-[#2e374a] rounded-lg mb-8 w-1/2" />
                <input type="text" placeholder="color" name="color" className="p-8 bg-primary-200 text-black border-2 border-[#2e374a] rounded-lg mb-8 w-[45%]" />
                <input type="text" placeholder="size" name="size" className="p-8 bg-primary-200 text-black border-2  border-[#2e374a] rounded-lg mb-8 w-1/2" />
                <textarea
                    required
                    name="desc"
                    id="desc"
                    // rows="16"
                    placeholder="Description"
                    className="p-8 bg-primary-200 text-black border-2 border-blue-800 rounded-lg mb-8 w-full"
                ></textarea>
                <button type="submit" className="w-full p-8 bg-[teal] text-white border-none rounded-lg cursor-pointer">Submit</button>
            </form>
        </div>
    );
};

export default AddProductPage;