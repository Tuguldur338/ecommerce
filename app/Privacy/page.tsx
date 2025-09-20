"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start bg-gray-100 p-8 max-w-screen w-[95%] mx-auto my-[50px] rounded-[30px]">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how we
        collect, use, and protect your personal information when you use our
        website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
      <p className="mb-4">
        We may collect information such as your name, email address, IP address,
        and browsing behavior to improve your experience and provide relevant
        content.
      </p>

      <h2 className="text-2xl font-semibold mb-2">
        How We Use Your Information
      </h2>
      <p className="mb-4">
        The information we collect is used to personalize your experience,
        improve our website, communicate important updates, and comply with
        legal requirements. We never sell your personal information to third
        parties.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Cookies</h2>
      <p className="mb-4">
        We use cookies and similar technologies to enhance your browsing
        experience, analyze website traffic, and understand user preferences.
        You can manage cookie settings in your browser at any time.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect your data from
        unauthorized access, disclosure, or alteration. However, no online
        system is completely secure, and we cannot guarantee absolute
        protection.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Your Rights</h2>
      <p className="mb-4">
        You have the right to access, correct, or request deletion of your
        personal information. To exercise these rights, please contact us via
        the contact information provided on our website.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page with the effective date updated.
      </p>

      <p className="mb-4">
        By using our website, you consent to the practices described in this
        Privacy Policy.
      </p>
    </div>
  );
}
