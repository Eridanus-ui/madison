import { AutoInsuranceComponent } from '../components/policies/Automotive';
import { LifeInsuranceComponent } from '../components/policies/Automotive';;
import { HomeownersInsuranceComponent } from '../components/policies/Automotive';
import { HealthInsuranceComponent } from '../components/policies/Automotive';
import { BusinessLiabilityComponent } from '../components/policies/Automotive';

const insurancePolicies = [
    {
        title: "Comprehensive Auto Insurance",
        description: "Full coverage for your vehicle including liability, collision, and comprehensive protection.",
        policyUrl: "https://example.com/auto-insurance-policy.pdf",
        component: AutoInsuranceComponent,
    },
    {
        title: "Term Life Insurance",
        description: "Provide financial protection for your loved ones with a 20-year term life policy.",
        policyUrl: "https://example.com/term-life-policy.pdf",
        component: LifeInsuranceComponent,
    },
    {
        title: "Homeowners Insurance",
        description: "Protect your home and personal property from damage, theft, and liability claims.",
        policyUrl: "https://example.com/homeowners-policy.pdf",
        component: HomeownersInsuranceComponent,
    },
    {
        title: "Health Insurance Plan",
        description: "Comprehensive health coverage including preventive care, hospitalization, and prescription drugs.",
        policyUrl: "https://example.com/health-insurance-policy.pdf",
        component: HealthInsuranceComponent,
    },
    {
        title: "Business Liability Insurance",
        description: "Protect your business from third-party claims of bodily injury, property damage, and advertising injury.",
        policyUrl: "https://example.com/business-liability-policy.pdf",
        component: BusinessLiabilityComponent,
    }
];

export default insurancePolicies;
