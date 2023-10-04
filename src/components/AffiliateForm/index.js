import { Form, useNavigation, useActionData } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

const AffiliateForm = () => {
  
  const result = useActionData();

  const navigation = useNavigation();
  const textFields = {
    personalInfo: [
      { label: "Full Name / Legal Business Name", name: "fullname" },
      {
        label: "Business Registration Number (If Signing up as a Business)",
        name: "business-number",
      },
      {
        label:
          "Email Address (Open a daraz Shopping Account with the Same Email)",
        name: "email",
        type: "email",
      },
      {
        label: "National Registration Number / Government Issued ID Number",
        name: "id-number",
      },
    ],
    locationContactInfo: [
      { label: "Province", name: "province" },
      { label: "City", name: "city" },
      { label: "Postal Address", name: "postal-address" },
      {
        label: "Phone Number",
        name: "phone-number",
        type: "number",
        maxLength: 11,
      },
    ],
    taxInfo: [
      { label: "Tax / Legal Information - Tax ID", name: "tax-id" },
      {
        label: "Tax / Legal Information - VAT rate (provide %)",
        name: "tax-vat-rate",
        type: "number",
        max: 100,
        min: 0,
        maxLength: 3,
      },
    ],
    bankInfo: [
      {
        label: "Bank Information - Beneficiary Name",
        name: "bank-account-name",
      },
      { label: "Bank Name", name: "bank-name" },
      {
        label: "Bank Information - Beneficiary Phone Number",
        name: "bank-phone-number",
        type: "number",
        maxLength: 11,
      },
      { label: "Bank Information - Beneficiary Country", name: "bank-country" },
      { label: "Bank Information - Beneficiary Address", name: "bank-address" },
      {
        label: "Bank Information - Bank Account Number",
        name: "bank-account-number",
      },
      { label: "Bank Information - IBAN Number", name: "bank-iban-number" },
      { label: "Bank Information - Branch Code", name: "bank-branch-code" },
      {
        label: "Bank Information - Routing / ABA / Swift Number",
        name: "bank-swift-number",
      },
      {
        label: "Bank Information - Bank Account Country",
        name: "bank-account-country",
      },
    ],
  };

  return (
    <Form
      method="post"
      id="affiliate-signup-form"
      className="flex flex-col gap-14 mt-8"
    >
      <div className="flex flex-col gap-4">
        <p className="text-base text-white font-bold">Account Type</p>
        <Input
          type="radio"
          label="I am signing up as an individual"
          name="account-type"
          value="individual"
          inputId="account-individual"
          required
        />
        <Input
          type="radio"
          label="I am signing up as a company / enterprise"
          inputId="account-company"
          value="enterprise"
          name="account-type"
          required
        />
      </div>

      <div className="flex flex-col gap-4">
        {textFields.personalInfo.map((field, idx) => (
          <Input
            type={field.type ?? "text"}
            label={field.label}
            classes="bg-primary border border-white focus:border-white !text-white rounded-base mt-2"
            inputId={field.name}
            name={field.name}
            required
            key={idx}
            {...field}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="country">Country You Are Based In</label>
        <select
          id="country"
          name="country"
          className="bg-primary text-white border border-white focus:border-white outline-none rounded-md p-1 focus:ring-0"
        >
          <option value="afghanistan">Afghanistan</option>
          <option value="bangladesh">Bangladesh</option>
          <option value="sri lanka">Sri Lanka</option>
          <option value="pakistan">Pakistan</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        {textFields.locationContactInfo.map((field, idx) => (
          <Input
            type={field.type ?? "text"}
            label={field.label}
            classes="bg-primary border border-white !text-white focus:border-white rounded-base mt-2"
            inputId={field.name}
            name={field.name}
            required
            key={idx}
            {...field}
          />
        ))}
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-base text-white font-bold">
          Tell us about your traffic (Please provide links to the Website / App
          / Page where you will promote Daraz)
        </p>
        <textarea
          name="traffic-info"
          id="traffic-info"
          rows={5}
          className="border border-white bg-primary rounded-md outline-none p-2 focus:border-white focus:ring-0"
        />
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="traffic-size">Monthly Traffic Size</label>
        <select
          id="traffic-size"
          name="traffic-size"
          className="bg-primary text-white border border-white outline-none rounded-md p-1 focus:border-white focus:ring-0"
        >
          <option value="less-than-50000">Less than 50000</option>
          <option value="50000-100000">50000-100000</option>
          <option value="100000-200000">100000-200000</option>
          <option value="greater-than-200000">Greater than 250000</option>
        </select>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-base text-white font-bold">Traffic Type</p>
        <Input
          type="radio"
          label="Cashback"
          value="cashback"
          name="traffic-type"
          inputId="cashback"
          required
        />
        <Input
          type="radio"
          label="Price Comparison Site"
          value="price-comparison"
          inputId="price-comparison"
          name="traffic-type"
          required
        />
        <Input
          type="radio"
          label="Coupon Engine"
          value="coupon-engine"
          inputId="coupon-engine"
          name="traffic-type"
          required
        />
        <Input
          type="radio"
          label="Network"
          value="network"
          inputId="network"
          name="traffic-type"
          required
        />
        <Input
          type="radio"
          label="Influencer"
          value="influencer"
          inputId="influencer"
          name="traffic-type"
          required
        />
      </div>

      <div className="flex flex-col gap-4">
        {textFields.taxInfo.map((field, idx) => (
          <Input
            type={field.type ?? "text"}
            label={field.label}
            classes="bg-primary border border-white !text-white rounded-base mt-2 focus:border-white"
            inputId={field.name}
            name={field.name}
            required
            key={idx}
            {...field}
          />
        ))}
        <div className="flex flex-col gap-4">
          <p className="text-base text-white font-bold">
            Tax / Legal Information - VAT Applicable
          </p>
          <Input
            type="radio"
            label="Yes"
            name="tax-vat-applicable"
            inputId="tax-vat-yes"
            value="yes"
            required
          />
          <Input
            type="radio"
            label="No"
            inputId="tax-vat-no"
            value="no"
            name="tax-vat-applicable"
            required
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {textFields.bankInfo.map((field, idx) => (
          <Input
            type={field.type ?? "text"}
            label={field.label}
            classes="bg-primary border border-white !text-white rounded-base mt-2 focus:border-white"
            inputId={field.name}
            name={field.name}
            required
            key={idx}
            {...field}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-base text-white font-bold">
          Do you agree to the Terms and Conditions to become a daraz affiliate?
        </p>
        <Input
          type="radio"
          label="Yes"
          value="yes"
          name="terms-agreement"
          inputId="terms-agreed"
          required
        />
        <Input
          type="radio"
          label="No"
          value="no"
          inputId="terms-disagreed"
          name="terms-agreement"
        />
      </div>

      <div className="self-center flex flex-col gap-3 items-center">
      {result?.error && (
        <p className="text-lg text-center text-red-600 font-sans bg-white p-3 font-semibold rounded-md">
          {result.error.message}
        </p>
      )}

        <Button
          variant="secondary"
          size="large"
          type="submit"
          className="rounded-lg !px-6 !py-3 !transition-none hover:!bg-white hover:!text-primary"
          disabled={navigation.state === "submitting"}
        >
          Submit Form
        </Button>
      </div>
    </Form>
  );
};

export default AffiliateForm;
