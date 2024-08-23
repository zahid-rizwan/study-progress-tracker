import { Carousel, progress} from "@material-tailwind/react";
import prg1 from "../assets/prg1.jpg"
import prg2 from "../assets/progress1.jpg"
import prg3 from "../assets/progress2.jpg"
const MyCarousel = () => {
  return (
    <Carousel
    className="rounded-xl"
    style={{height:"90vh"}}
    navigation={({ setActiveIndex, activeIndex, length }) => (
      <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {new Array(length).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    )}
  >
    <img
      src={prg1}
      alt="image 1"
      className="h-full w-full object-cover"
    />
    <img
      src={prg2}
      alt="image 2"
      className="h-full w-full object-cover"
    />
    <img
      src={prg3}
      alt="image 3"
      className="h-full w-full object-cover"
    />
  </Carousel>
  );
};
export default MyCarousel;
