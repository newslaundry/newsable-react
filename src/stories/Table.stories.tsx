import React from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Table, Text, VStack } from "@/components";

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  render: () => (
    <Table className="mx-auto mt-4 max-w-2xl">
      <Table.Header>
        <Table.Row>
          <Table.Head>Order ID</Table.Head>
          <Table.Head>Items</Table.Head>
          <Table.Head>Price</Table.Head>
          <Table.Head>Complementary*</Table.Head>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {storePurchases.map(sp => (
          <Table.Row key={sp.orderId}>
            <Table.Cell>{sp.orderId}</Table.Cell>
            <Table.Cell>
              <ul className="list-inside list-disc">
                {sp.items.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </Table.Cell>
            <Table.Cell>{sp.price}</Table.Cell>
            <Table.Cell>{sp.complementary ? "Yes" : "No"}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      <Table.Caption>
        <VStack className="w-full items-center">
          <Text className="text-base">A list of all your complementary and paid NL Store purchases.</Text>
          <Text>
            *Complementary purchases are merchandise orders generated after successful subscription purchases.
          </Text>
        </VStack>
      </Table.Caption>
    </Table>
  )
};

const storePurchases = [
  {
    orderId: "#NL3444",
    items: ["Fridge Magnets", "Laptop Sticker set"],
    price: 648,
    complementary: true
  },
  {
    orderId: "#NL3443",
    items: ["Fridge Magnets", "Laptop Sticker set"],
    price: 648,
    complementary: true
  },
  {
    orderId: "#NL2850",
    items: ["NL Sena mug"],
    price: 249,
    complementary: false
  },
  {
    orderId: "#NL2507",
    items: ["Mug: Which naxal are you"],
    price: 249,
    complementary: true
  }
];
