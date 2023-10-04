export const validateAffiliateForm = (data) => {
  if (data["terms-agreement"] === "no") {
    return {
      error: {
        message:
          "You must agree to the terms and conditions before signing up as an affiliate!",
      },
    };
  }

  const arePhoneNumbersValid =
    validatePhoneNumber(data["bank-phone-number"]) &&
    validatePhoneNumber(data["phone-number"]);

  if (!arePhoneNumbersValid) {
    return {
      error: {
        message: "Invalid Phone Number! Please enter a valid phone number!",
      },
    };
  }

  return null;
};

const validatePhoneNumber = (phone) => {
  const pattern = /^(?:\+92|0)\d{3}\s?\d{7}$/;
  return pattern.test(phone);
};

