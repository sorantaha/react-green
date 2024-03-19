import AccountForm from "src/Pages/Account/AccountForm";

export default function Account() {
  return (
    <AccountForm
      className="w-full h-screen bg-white flex justify-center items-center relative"
      method="post"
      photo="Account-Pic.jpg"
      name="Muhammed Taha Aziz"
      number="07509243202"
      email="Example@example.com"
      placeholder="Name"
    ></AccountForm>
  );
}
