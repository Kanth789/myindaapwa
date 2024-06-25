import { Skeleton } from "@mui/material";

const ProductCardSkeleton = () => {
    return (
      <div className="flex flex-col h-full justify-between">
        <div>
          <Skeleton variant="rectangular" width="100%" height={192} />
        </div>
        <div>
          <Skeleton
            variant="text"
            width="75%"
            height={30}
            style={{ marginTop: "1rem" }}
          />
          <Skeleton
            variant="text"
            width="50%"
            height={24}
            style={{ marginTop: "0.5rem" }}
          />
          <Skeleton
            variant="text"
            width="100%"
            height={30}
            style={{ marginTop: "1rem" }}
          />
          <Skeleton
            variant="text"
            width="100%"
            height={24}
            style={{ marginTop: "0.5rem" }}
          />
        </div>
      </div>
    );
  };

  export default ProductCardSkeleton