import { Swiper, SwiperSlide } from "swiper/react";
import { EyeIcon } from "../../../../components/icons/EyeIcon";

import "swiper/css";
import { cn } from "../../../../../app/utils/cn";
import { formatCurrency } from "../../../../../app/utils/formatCurrency";
import { Spinner } from "../../../../components/Spinner";
import { AccountCard } from "./AccountCard";
import { SliderNavigation } from "./SliderNavigation";
import { useAccountsController } from "./useAccountsController";

export function Accounts() {
  const {
    setSliderState,
    sliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
  } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8 flex flex-col">
      {isLoading && (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner className="text-teal-950/50 fill-white w-10 h-10" />
        </div>
      )}

      {!isLoading && (
        <>
          <div>
            <span className="tracking-[-0.5px] text-white block">
              Saldo total
            </span>

            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  "text-2xl tracking-[-1px] text-white",
                  !areValuesVisible && "blur-md",
                )}
              >
                {formatCurrency(1000)}
              </strong>
              <button
                className="w-8 h-8 flex items-center justify-center"
                onClick={toggleValuesVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end">
            <div>
              <Swiper
                spaceBetween={16}
                slidesPerView={windowWidth >= 500 ? 2.1 : 1.1}
                onSlideChange={(swiper) => {
                  setSliderState({
                    isBeginning: swiper.isBeginning,
                    isEnd: swiper.isEnd,
                  });
                }}
              >
                <div
                  className="flex items-center justify-between mt-10 md:mt-0"
                  slot="container-start"
                >
                  <strong className="text-white tracking-[-1px] text-lg font-bold">
                    Minhas contas
                  </strong>

                  <SliderNavigation
                    isBeginning={sliderState.isBeginning}
                    isEnd={sliderState.isEnd}
                  />
                </div>

                <SwiperSlide>
                  <AccountCard
                    color="#7950F2"
                    name="Nubank"
                    balance={123.34}
                    type="CASH"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <AccountCard
                    color="#333"
                    name="xp"
                    balance={12.34}
                    type="INVESTMENT"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <AccountCard
                    color="#f2f"
                    name="Carteira"
                    balance={1244.34}
                    type="CHECKING"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
