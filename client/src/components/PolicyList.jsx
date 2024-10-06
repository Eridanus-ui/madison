import React from "react";
import insurancePolicies from "../utils/data";
import PolicyCard from "./PolicyCard";

export default function PolicyList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {insurancePolicies.map((policy, index) => (
        <PolicyCard key={index} policy={policy} component={policy.component} />
      ))}
    </div>
  );
}
