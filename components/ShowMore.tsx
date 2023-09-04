"use client";
import { useRouter } from "next/navigation";
// Types
import { ShowMoreProps } from "@/types";
// Components
import { Button } from ".";
// Utils
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  // router
  const router = useRouter();

  const handleNavigation = () => {
    // calculate page limit
    const newLimit = `${(pageNumber + 1) * 10}`;
    // set path name
    const newPathName = updateSearchParams("limit", newLimit);
    // push to new path name
    router.push(newPathName);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {/* check if it's not last page then show see more btn */}
      {!isNext && (
        <Button
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          onClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
