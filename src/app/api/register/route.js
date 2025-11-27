import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    await connectDB();

    const exists = await User.findOne({ email });
    if (exists) {
      return Response.json({ error: "Email already registered." }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashed });

    return Response.json({ message: "User registered successfully" });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
