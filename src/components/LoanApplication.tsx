
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LoanApplication = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the first step of the loan application
    navigate("/loan-application/vat-returns");
  }, [navigate]);

  return null;
};
