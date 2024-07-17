import { Carousel } from "@mantine/carousel";
import { Image, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useMemo } from "react";
const data = [
  {
    src: "images/12Factor.png",
    alt: "12Factor",
    link: "https://kodekloud.com/certificate-verification/2D08936F7DDD-2DFAD5F321E1-2D0674CB76B7/",
    
  },
  {
    src: "images/angular_base.png",
    alt: "angular_base",
    link: "https://www.hackerrank.com/certificates/f5f0bd7a8002",
  },
  {
    src: "images/angular_inter.png",
    alt: "angular_inter",
    link: "https://www.hackerrank.com/certificates/51141a6df0d2",
  },
  {
    src: "images/git.png",
    alt: "git",
    link: "https://kodekloud.com/certificate-verification/2D08936F7DDD-2D0674F87D4D-2D0674CB76B7/",
  },
  {
    src: "images/go.png",
    alt: "go",
    link: "https://www.hackerrank.com/certificates/e0c8eadd5781",
  },
  {
    src: "images/java_bas.png",
    alt: "java",
    link: "https://www.hackerrank.com/certificates/33f17a359987",
  },
  {
    src: "images/kubernetes.png",
    alt: "kubernetes",
    link: "https://kodekloud.com/certificate-verification/2D08936F7DDD-2D067507BE60-2D0674CB76B7/",
  },
  {
    src: "images/lens.png",
    alt: "lens",
    link: "https://kodekloud.com/certificate-verification/2D08936F7DDD-2D0AFF62274D-2D0674CB76B7/",
  },
];
export function CVExtCertification() {
  const extCertificate = useMemo(() => data, []);
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
 
  if (
    extCertificate == undefined ||
    extCertificate == null ||
    extCertificate.length == 0
  ){
    return null;}


  return (

    <div className="w-full overflow-hidden sm:w-[50%] md:w-[80%] lg:w-[50%]  mx-auto h-auto">
      <Carousel
        height={180}
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: 0, sm: "xl" }}
        align="center"
        slidesToScroll={mobile ? 1 : 2}
      >
        {extCertificate.map((item, index) => (
          <Carousel.Slide key={index} m={2}>
            <a href={item.link} target="_blank" className="p-0 m-0">
              <Image
                src={item.src}
                alt={item.alt}
                h={180}
                w="auto"
                fit="cover"
                radius="md"
              />
            </a>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}