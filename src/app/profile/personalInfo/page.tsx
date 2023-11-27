import dynamic from "next/dynamic";

const MobileLayout = dynamic(
  () => import("../../components/Layout/MobileLayout")
);
const PersonalInformation = dynamic(
  () => import("@/app/components/Profile/personalInformation")
);

const PersonalInfo = () => {
  return (
    <>
      <MobileLayout>
        <PersonalInformation />
      </MobileLayout>
    </>
  );
};

export default PersonalInfo;
