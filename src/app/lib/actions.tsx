import { redirect } from "next/navigation";
import { User } from "./models/userModel"
import { connectToDB } from "./utilis"
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { Product } from "./models/productModel";
import { AnyNsRecord } from "dns";

export const addUser = async (formData: any) => {
    const { username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData)
    try {
        connectToDB()
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        const newUser = await new User({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        })
        await newUser.save()
    }
    catch (err) {
        console.log("failed to create user", err)
        throw new Error("failed to create user")
    }
    revalidatePath("/dashboard/users");
    redirect('/dashboard/users')
}

export const addProduct = async (formData: any) => {
    const { title, desc, price, stock, color, size } =
        Object.fromEntries(formData);

    try {
        connectToDB();

        const newProduct = new Product({
            title,
            desc,
            price,
            stock,
            color,
            size,
        });

        await newProduct.save();
    } catch (err) {
        console.log(err);
        throw new Error("Failed to create product!");
    }

    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};

export const deleteUser = async (formData: any) => {
    const { id } = Object.fromEntries(formData)
    try {
        connectToDB();
        await User.findByIdAndDelete(id)

    } catch (err: any) {
        console.log("cannot delete user", err);
        throw new Error("Cannot delete user", err)
    }
    revalidatePath("/dashboard/products");
}

export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Product.findByIdAndDelete(id);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete product!");
    }

    revalidatePath("/dashboard/products");
};