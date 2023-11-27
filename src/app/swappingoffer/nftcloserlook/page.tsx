import dynamic from "next/dynamic";

// import { useWidth } from "@/utils/Resize";
const MobileLayout = dynamic(() => import("../../components/Layout/MobileLayout"));
const SwapNFTCard = dynamic(
  () => import("../../components/Cards/SwapNFT/SwapNFTCard")
);
const SwapNFTCardCloser = dynamic(
  () => import("../../components/Cards/SwapNFT/SwapCardCloser")
);

const SwappingOffer = () => {
  return (
    <>
      <MobileLayout>
        <div className="my-6">
          <SwapNFTCardCloser />
        </div>
      </MobileLayout>
    </>
  );
};

export default SwappingOffer;
