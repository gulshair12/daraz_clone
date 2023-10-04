import AffiliateForm from "../../components/AffiliateForm";
import { validateAffiliateForm } from "../../utils";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const error = validateAffiliateForm(data);
  return error ? error : null;
};

const AffiliateSignup = () => {
  return (
    <div className="min-h-screen font-serif tracking-wide !overflow-x-hidden">
      <section className="max-lg:mx-4 max-w-5xl mx-auto bg-primary p-4 rounded-2xl max-md:my-5 my-12 text-white">
        <div className="bg-white rounded-xl p-2 flex flex-col gap-3 text-center pt-10 pb-4 px-9">
          <h1 className="text-primary text-3xl">Daraz Affiliates Signup</h1>
          <p className="text-black text-lg">
            Thank you for taking interest in the Daraz affiliate program. Please
            provide the following information to sign-up as an affiliate partner
            with Daraz.
          </p>
        </div>

        <AffiliateForm />
      </section>
    </div>
  );
};

export default AffiliateSignup;
