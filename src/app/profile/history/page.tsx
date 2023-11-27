import dynamic from "next/dynamic";

const History = dynamic(() => import("@/app/components/Profile/history"));
const MobileLayout = dynamic(
  () => import("../../components/Layout/MobileLayout")
);

const HistoryPage = () => {
  return (
    <>
      <MobileLayout>
        <History />
      </MobileLayout>
    </>
  );
};

export default HistoryPage;
