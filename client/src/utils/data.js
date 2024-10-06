import Automotive from "../components/policies/Automotive";
import BusinessLiability from "../components/policies/BusinessLiability";
import HealthInsurance from "../components/policies/HealthInsurance";
import Homeowners from "../components/policies/Homeowners";
import TermLife from "../components/policies/TermLife";


const insurancePolicies = [
    {
        title: "Comprehensive Auto Insurance",
        description: "Full coverage for your vehicle including liability, collision, and comprehensive protection.",
        policyUrl: "https://example.com/auto-insurance-policy.pdf",
        component: Automotive,
    },
    {
        title: "Term Life Insurance",
        description: "Provide financial protection for your loved ones with a 20-year term life policy.",
        policyUrl: "https://example.com/term-life-policy.pdf",
        component: TermLife,
    },
    {
        title: "Homeowners Insurance",
        description: "Protect your home and personal property from damage, theft, and liability claims.",
        policyUrl: "https://example.com/homeowners-policy.pdf",
        component: Homeowners,
    },
    {
        title: "Health Insurance Plan",
        description: "Comprehensive health coverage including preventive care, hospitalization, and prescription drugs.",
        policyUrl: "https://example.com/health-insurance-policy.pdf",
        component: HealthInsurance,
    },
    {
        title: "Business Liability Insurance",
        description: "Protect your business from third-party claims of bodily injury, property damage, and advertising injury.",
        policyUrl: "https://example.com/business-liability-policy.pdf",
        component: BusinessLiability,
    }
];

export default insurancePolicies;
