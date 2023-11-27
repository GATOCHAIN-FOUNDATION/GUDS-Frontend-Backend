import dynamic from "next/dynamic";

const MobileLayout = dynamic(
  () => import("../../components/Layout/MobileLayout")
);
const OrderInformation = dynamic(
  () => import("@/app/components/Profile/order")
);

const Order = () => {
  return (
    <>
      <MobileLayout>
        <OrderInformation />
      </MobileLayout>
    </>
  );
};

export default Order;
