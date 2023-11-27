import dynamic from "next/dynamic";

const Language = dynamic(() => import("@/app/components/Profile/language"));
const MobileLayout = dynamic(
  () => import("../../components/Layout/MobileLayout")
);

const CountryandLanguage = () => {
  return (
    <>
      
        <div className="flex justify-center h-full w-full">
          <Language />
        </div>
  
    </>
  );
};

export default CountryandLanguage;
