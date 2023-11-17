import React from "react";

import resolveConfig from "tailwindcss/resolveConfig";

import { Accordion } from "@/components";

import twconf from "../../../tailwind.config";

const AccordionHelper = () => {
  const conf = resolveConfig(twconf);

  return (
    <Accordion type="single" collapsible={true} defaultValue="item-1" className="mx-auto w-full max-w-2xl">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>
          I’m facing issues with my subscription. Who should I get in touch with?
        </Accordion.Trigger>
        <Accordion.Content>
          For all issues related to subscription, payment or tech, write to{" "}
          <a href="mailto:subscription@newslaundry.com">subscription@newslaundry.com</a>. Our team will get
          back to you as soon as possible.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2" disabled={true}>
        <Accordion.Trigger>How do I renew my subscription?</Accordion.Trigger>
        <Accordion.Content>
          Once your subscription nears expiration, head to subscription and purchase a subscription of your
          choice. You can also click on the Renew button on the top right of the website.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>How do I sign up for a recurring (auto-pay) subscription?</Accordion.Trigger>
        <Accordion.Content>
          <p>
            Step 1: Go to the subscription page, select the plan of your choice, hit the ‘subscribe’ button.
          </p>
          <br />
          <p>Step 2: Select the first payment method.</p>
          <br />
          <p>
            Please note that while all credit cards support recurring payments, only a few select Indian debit
            cards support recurring payments: ICICI Bank India, Citibank India, Canara Bank India and, Kotak
            Mahindra Bank. If you have a credit card, we suggest you use a credit card instead of a debit
            card. In case you choose the first payment option and use a debit card that doesn’t support a
            recurring payment, your subscription is treated as a one time subscription. We accept all major
            international credit and debit cards. If you’re based overseas and want to have a recurring
            subscription in USD, you can use PayPal too.
          </p>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-4">
        <Accordion.Trigger>How can I make a donation to Newslaundry?</Accordion.Trigger>
        <Accordion.Content>
          Newslaundry is a private limited company, not a non-profit or a Section 25 company. Contributions to
          us are in the form of subscriptions, not donations. One can subscribe/Contribute to NL Sena /
          Sponsor a student subscription.
        </Accordion.Content>
      </Accordion.Item>
      {/* <pre>{JSON.stringify(conf, null, 2)}</pre> */}
    </Accordion>
  );
};

export { AccordionHelper };
