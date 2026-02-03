import svgPaths from "./svg-smcghjdsc0";
import imgAmazon from "@/assets/577a972db39f89db16f9978922a5b92430ba4fdd.png";
import imgMeta from "@/assets/d0eda17d2d587db5ccb44f519a0898b0df025691.png";
import imgShopify from "@/assets/a182ee723ace7e10afb7f54221d71e8ca51255ba.png";
import imgGa4 from "@/assets/2410b0f822ad3c16497f5ea514316385c06b02c3.png";
import imgAd3FinalPng from "@/assets/f8c4b54676b4a4930e553dbdccb75cce33a41e7f.png";
import imgNextAd from "@/assets/5c63c0f840436128dd552d4284b0f79cc9a9c617.png";
import imgAdCreative from "@/assets/b6aaf09e13fe8b31f353557206561cc108fc224d.png";
import { imgContainer } from "./svg-iaprs";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white">
        <p className="css-ew64yg leading-[25.5px]">Manages all your accounts</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-[332.23px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container />
      </div>
    </div>
  );
}

function Amazon() {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="Amazon">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[94.04%] left-[0.01%] max-w-none top-[2.98%] w-[99.98%]" src={imgAmazon} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Amazon />
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return <div className="bg-[#ff4801] h-[28.48px] rounded-[33554400px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0 w-[94.51px]" data-name="Background+Shadow" />;
}

function Container3() {
  return (
    <div className="h-[28.89px] relative shrink-0 w-[94.51px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <BackgroundShadow />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[9.91px] h-[106.5px] items-center justify-center p-[25px] relative rounded-[16px] shrink-0 w-[113.52px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(255,72,1,0.2)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]" />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[5.08%_0.08%_5.26%_0]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.9559 40.3381">
        <g id="Group">
          <path d={svgPaths.p2e10daf0} fill="var(--fill-0, #FF4801)" id="Vector" />
          <path d={svgPaths.p2191780} fill="var(--fill-0, #4285F4)" id="Vector_2" />
          <path d={svgPaths.p3501f8f0} fill="var(--fill-0, #34A853)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Component() {
  return (
    <div className="overflow-clip relative shrink-0 size-[44.99px]" data-name="Component 1">
      <Group />
    </div>
  );
}

function GoogleAdsSvgFill() {
  return (
    <div className="content-stretch flex flex-col h-[45px] items-center justify-center overflow-clip pb-[0.01px] relative shrink-0 w-[44.99px]" data-name="Google_Ads.svg fill">
      <Component />
    </div>
  );
}

function GoogleAds() {
  return (
    <div className="content-stretch flex flex-col h-[45px] items-start overflow-clip relative shrink-0 w-[44.99px]" data-name="Google Ads">
      <GoogleAdsSvgFill />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <GoogleAds />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ff4801] text-[16.597px]">
        <p className="css-ew64yg leading-[24.895px]">Connect</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[28.89px] relative shrink-0 w-[92.88px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[0.62px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[9.91px] h-[106.5px] items-center justify-center p-[25px] relative rounded-[16px] shrink-0 w-[113.52px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]" />
      <Container4 />
      <Container6 />
    </div>
  );
}

function Meta() {
  return (
    <div className="h-[45px] relative shrink-0 w-[44.99px]" data-name="Meta">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[66.92%] left-0 max-w-none top-[16.54%] w-full" src={imgMeta} />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Meta />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#ff4801] text-[16.597px]">
        <p className="css-ew64yg leading-[24.895px]">Connect</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[28.89px] relative shrink-0 w-[92.88px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pb-[0.62px] relative size-full">
        <Container8 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[9.91px] h-[106.5px] items-center justify-center p-[25px] relative rounded-[16px] shrink-0 w-[113.52px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]" />
      <Container7 />
      <Container9 />
    </div>
  );
}

function Shopify() {
  return (
    <div className="relative shrink-0 size-[45px]" data-name="Shopify">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-[0.01%] max-w-none size-[99.98%] top-[0.01%]" src={imgShopify} />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Shopify />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[28.89px] relative shrink-0 w-[92.88px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="h-[20.43px] shrink-0 w-[55.8px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[9.91px] h-[106.5px] items-center justify-center p-[25px] relative rounded-[16px] shrink-0 w-[113.52px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]" />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Ga() {
  return (
    <div className="h-[45px] relative shrink-0 w-[44.99px]" data-name="GA4">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[99.98%] left-[5.56%] max-w-none top-[0.01%] w-[88.89%]" src={imgGa4} />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <Ga />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[28.89px] relative shrink-0 w-[92.88px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="h-[20.43px] shrink-0 w-[55.81px]" data-name="Rectangle" />
      </div>
    </div>
  );
}

function BackgroundBorderShadow4() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[9.91px] h-[106.5px] items-center justify-center p-[25px] relative rounded-[16px] shrink-0 w-[113.51px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_4px_16px_0px_rgba(0,0,0,0.1)]" />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[14.4px] items-center relative shrink-0" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
      <BackgroundBorderShadow4 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex items-center left-[-83.11px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[12.98%_89.177px] mask-size-[46.18%_125.49px] min-h-[304px] pb-[9.5px] pt-[9.49px] right-[-261.27px] top-[calc(50%+0.08px)] translate-y-[-50%]" data-name="Container" style={{ maskImage: `url('${imgContainer}')` }}>
      <Container14 />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="h-[125.489px] min-h-[125.48907470703125px] relative shrink-0 w-[296px]" data-name="Mask Group">
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[24.768px] py-[4.128px] relative size-full">
          <MaskGroup />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-[175.44px] items-start justify-center relative shrink-0 w-[330.23px]" data-name="Container">
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col inset-px items-start overflow-clip" data-name="Container">
      <Container17 />
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[185.31px] relative rounded-[8px] shrink-0 w-[332.23px]" data-name="Overlay+Border+Shadow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container18 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_15px_0px_rgba(255,255,255,0.15)]" />
    </div>
  );
}

function OverlayBorderOverlayBlur() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[6px] items-start max-w-[354.239990234375px] pb-[11px] pt-[10px] px-[11px] relative rounded-[16px] shrink-0 w-[354.23px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container1 />
      <OverlayBorderShadow />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white">
        <p className="css-ew64yg leading-[25.5px]">Creatives optimization</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="relative shrink-0 w-[332.23px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container19 />
      </div>
    </div>
  );
}

function Ad3FinalPng() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px opacity-80 relative rounded-[8px] w-[258.21px]" data-name="ad3-final.png">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[106.63%] left-0 max-w-none top-[-3.31%] w-full" src={imgAd3FinalPng} />
      </div>
    </div>
  );
}

function BackgroundBorderShadow5() {
  return (
    <div className="absolute bg-white inset-[19.81px_14.21px_-7.94px_14.21px] opacity-30 rounded-[8px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Ad3FinalPng />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(241,245,249,0.5)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function NextAd() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-[272.55px]" data-name="Next Ad">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[106.62%] left-0 max-w-none top-[-3.31%] w-full" src={imgNextAd} />
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="mb-[-0.18px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.823px] pt-[1.647px] relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#62748e] text-[9.9px] tracking-[0.9881px] uppercase">
          <p className="css-ew64yg leading-[9.881px]">ROAS</p>
        </div>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="mb-[-0.18px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.647px] relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#096] text-[8.8px] tracking-[-0.247px]">
          <p className="css-ew64yg leading-[9.881px]">3.2x</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.85)] content-stretch flex flex-col items-center min-w-[52.69882583618164px] pb-[2.65px] pt-[2.47px] px-[10.704px] relative rounded-[8px] shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <Margin />
      <Container21 />
    </div>
  );
}

function Margin1() {
  return (
    <div className="mb-[-0.18px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.823px] pt-[1.647px] relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#62748e] text-[9.9px] tracking-[0.9881px] uppercase">
          <p className="css-ew64yg leading-[9.881px]">CPA</p>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="mb-[-0.18px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.647px] relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172b] text-[9.1px] tracking-[-0.247px]">
          <p className="css-ew64yg leading-[9.881px]">$12</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur1() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.85)] content-stretch flex flex-col items-center min-w-[52.69882583618164px] pb-[2.65px] pl-[14.77px] pr-[14.78px] pt-[2.47px] relative rounded-[8px] shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <Margin1 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bottom-[14.12px] left-[14.18px] opacity-0 right-[14.17px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-end justify-between relative w-full">
        <OverlayBorderShadowOverlayBlur />
        <OverlayBorderShadowOverlayBlur1 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow6() {
  return (
    <div className="absolute bg-white inset-[9.84px_7.04px_-4.04px_7.04px] opacity-60 rounded-[8px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <NextAd />
        <Container23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(241,245,249,0.5)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_8px_30px_0px_rgba(0,0,0,0.04)]" />
    </div>
  );
}

function AdCreative() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Ad Creative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
        <img alt="" className="absolute h-[106.62%] left-0 max-w-none top-[-3.31%] w-full" src={imgAdCreative} />
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="mb-[-0.14px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.867px] pt-[1.734px] relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#62748e] text-[10.4px] tracking-[1.0401px] uppercase">
          <p className="css-ew64yg leading-[10.401px]">ROAS</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="mb-[-0.14px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.734px] relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#e17100] text-[10.4px] tracking-[-0.26px]">
          <p className="css-ew64yg leading-[10.401px]">2.1x</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur2() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.85)] content-stretch flex flex-col items-center min-w-[55.47244644165039px] pb-[2.74px] pt-[2.6px] px-[11.268px] relative rounded-[8px] shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <Margin2 />
      <Container24 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="mb-[-0.14px] relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.867px] pt-[1.734px] relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#62748e] text-[10.4px] tracking-[1.0401px] uppercase">
          <p className="css-ew64yg leading-[10.401px]">CPA</p>
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="mb-[-0.14px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[1.734px] relative">
        <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#0f172b] text-[8.9px] tracking-[-0.26px]">
          <p className="css-ew64yg leading-[10.401px]">$25</p>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadowOverlayBlur3() {
  return (
    <div className="backdrop-blur-[6px] bg-[rgba(255,255,255,0.85)] content-stretch flex flex-col items-center min-w-[55.47244644165039px] pb-[2.74px] pl-[15.55px] pr-[15.56px] pt-[2.6px] relative rounded-[8px] shrink-0" data-name="Overlay+Border+Shadow+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.6)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)]" />
      <Margin3 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bottom-[12.82px] content-stretch flex items-end justify-between left-[13.87px] right-[13.87px]" data-name="Container">
      <OverlayBorderShadowOverlayBlur2 />
      <OverlayBorderShadowOverlayBlur3 />
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[286.9px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-center relative size-full">
        <AdCreative />
        <Container26 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow7() {
  return (
    <div className="absolute bg-white inset-[-0.13px_-0.14px_-0.14px_-0.13px] rounded-[8px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <Container27 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(241,245,249,0.5)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container28() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <BackgroundBorderShadow5 />
      <BackgroundBorderShadow6 />
      <BackgroundBorderShadow7 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white h-[27.74px] relative rounded-[12px] shrink-0 w-[130.44px]" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#62748e] text-[10.4px] text-center tracking-[1.0401px] uppercase">
          <p className="css-ew64yg leading-[15.602px]">Stop</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#0f172b] h-[27.74px] relative rounded-[12px] shrink-0 w-[130.45px]" data-name="Button">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10.4px] text-center text-white tracking-[1.0401px] uppercase">
          <p className="css-ew64yg leading-[15.602px]">Increase Budget</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bottom-0 content-stretch flex items-center justify-between left-0 pl-[27.74px] pr-[27.73px] right-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container30() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Container">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[38.14px] pt-[13.86px] px-[20.8px] relative size-full">
          <Container28 />
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col h-[175.08px] items-start justify-center relative shrink-0 w-[330.23px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col inset-px items-start overflow-clip" data-name="Container">
      <Container31 />
    </div>
  );
}

function OverlayBorderShadow1() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[185.31px] relative rounded-[8px] shrink-0 w-[332.23px]" data-name="Overlay+Border+Shadow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container32 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_15px_0px_rgba(255,255,255,0.15)]" />
    </div>
  );
}

function OverlayBorderOverlayBlur1() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[6px] items-start max-w-[354.239990234375px] pb-[11px] pt-[10px] px-[11px] relative rounded-[16px] shrink-0 w-[354.23px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container20 />
      <OverlayBorderShadow1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-white">
        <p className="css-ew64yg leading-[25.5px]">24/7 ROAS improvements</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="relative shrink-0 w-[332.23px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative w-full">
        <Container33 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2939] text-[9.7px] w-full">
        <p className="css-4hzbpn leading-[15.3px]">Add 85 Negative Keywords</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[9.4px] w-full">
        <p className="css-4hzbpn leading-[15.3px]">{`Block "free", "jobs"`}</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[3.41px] items-start pr-[54.4px] relative w-full">
        <Container36 />
        <Container37 />
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[7.65px] py-[3.905px] relative rounded-[6px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#d0fae5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#096] text-[8.9px]">
        <p className="css-ew64yg leading-[15.3px]">+$4.6k</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[-0.5px] top-0" data-name="Container">
      <BackgroundBorder />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[7.65px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.65 7.65">
        <g id="Component 1">
          <path d={svgPaths.pd1f5f80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.95625" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[7.3px] text-white">
        <p className="css-ew64yg leading-[11.475px]">Applied</p>
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-[#ff4801] content-stretch flex gap-[3.83px] items-center justify-center overflow-clip px-[7.65px] py-[2.55px] relative rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Component1 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[-6.74px] top-[2.77px]" data-name="Container">
      <BackgroundShadow1 />
    </div>
  );
}

function Container42() {
  return (
    <div className="h-[20.41px] relative shrink-0 w-[28.89px]" data-name="Container">
      <Container39 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-[213.35px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container38 />
        <Container42 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow8() {
  return (
    <div className="absolute bg-white h-[86.7px] left-[42.71px] opacity-10 rounded-[12px] top-[63.8px] w-[244.8px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip pl-[13.6px] pr-[17.85px] py-px relative rounded-[inherit] size-full">
        <Container43 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function BackgroundBorderShadow9() {
  return (
    <div className="absolute bg-white h-[91.8px] left-[35.51px] opacity-40 rounded-[12px] top-[51.26px] w-[259.2px]" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2939] text-[11.2px] w-full">
        <p className="css-4hzbpn leading-[17px]">{`Isolate "Project Mgmt"`}</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[10.5px] w-full">
        <p className="css-4hzbpn leading-[17px]">Own ad group, bid down</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[3.79px] items-start pr-[60.8px] relative w-full">
        <Container45 />
        <Container46 />
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex flex-col items-start px-[8.55px] py-[4.3px] relative rounded-[6px] shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#d0fae5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#096] text-[10.2px]">
        <p className="css-ew64yg leading-[17px]">+$5.8k</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[-0.79px] top-0" data-name="Container">
      <BackgroundBorder1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative shrink-0 size-[8.55px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.55 8.55">
        <g id="Component 1">
          <path d={svgPaths.pecbf780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.06875" />
        </g>
      </svg>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[8.2px] text-white">
        <p className="css-ew64yg leading-[12.825px]">Applied</p>
      </div>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-[#ff4801] content-stretch flex gap-[4.28px] items-center justify-center overflow-clip px-[8.55px] py-[2.85px] relative rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Component2 />
      <Container49 />
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[-8.24px] top-[3.08px]" data-name="Container">
      <BackgroundShadow2 />
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[22.79px] relative shrink-0 w-[54.3px]" data-name="Container">
      <Container48 />
      <Container50 />
    </div>
  );
}

function Container52() {
  return (
    <div className="relative shrink-0 w-[238.45px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative w-full">
        <Container47 />
        <Container51 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow10() {
  return (
    <div className="absolute bg-white h-[96.9px] left-[26px] opacity-70 rounded-[12px] top-[37.79px] w-[273.6px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip pl-[15.2px] pr-[19.95px] py-px relative rounded-[inherit] size-full">
        <Container52 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#1e2939] text-[11.8px] w-full">
        <p className="css-4hzbpn leading-[18px]">Split Brand from Non-Brand</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container53 />
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#99a1af] text-[12px] w-full">
        <p className="css-4hzbpn leading-[18px]">ROAS 8.2 vs 1.6</p>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px mr-[-0.003px] relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[3.995px] items-start pr-[64px] relative w-full">
        <Container54 />
        <Container55 />
      </div>
    </div>
  );
}

function ParagraphBackgroundBorder() {
  return (
    <div className="bg-[#f3f4f6] content-stretch flex items-start px-[9px] py-[4.503px] relative rounded-[6px] shrink-0" data-name="Paragraph+Background+Border">
      <div aria-hidden="true" className="absolute border border-[#d0fae5] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#096] text-[10.3px]">
        <p className="css-ew64yg leading-[18px]">+$</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#096] text-[11.1px]">
        <p className="css-ew64yg leading-[18px]">3.7</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#096] text-[12px]">
        <p className="css-ew64yg leading-[18px]">k</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[-0.93px] top-0" data-name="Container">
      <ParagraphBackgroundBorder />
    </div>
  );
}

function Component3() {
  return (
    <div className="relative shrink-0 size-[8.994px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99389 8.99389">
        <g id="Component 1">
          <path d={svgPaths.p381dc2e0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.12424" />
        </g>
      </svg>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[8.7px] text-white">
        <p className="css-ew64yg leading-[13.5px]">Applied</p>
      </div>
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="bg-[#ff4801] content-stretch flex gap-[4.497px] items-center justify-center overflow-clip px-[9px] py-[3px] relative rounded-[33554400px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0" data-name="Background+Shadow">
      <Component3 />
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[-7.98px] top-[3.24px]" data-name="Container">
      <BackgroundShadow3 />
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[24.001px] mr-[-0.003px] relative shrink-0 w-[27.474px]" data-name="Container">
      <Container57 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="relative shrink-0 w-[250.995px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between pr-[0.003px] relative w-full">
        <Container56 />
        <Container60 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow11() {
  return (
    <div className="bg-white h-[102px] opacity-0 relative rounded-[12px] w-[288px]" data-name="Background+Border+Shadow">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip pl-[16.002px] pr-[21.002px] py-px relative rounded-[inherit] size-full">
        <Container61 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute inset-[-3px_0_0_0]" data-name="Container">
      <BackgroundBorderShadow8 />
      <BackgroundBorderShadow9 />
      <BackgroundBorderShadow10 />
      <div className="absolute flex h-[126.713px] items-center justify-center left-[67.21px] top-[-6.2px] w-[295.794px]" style={{ "--transform-inner-width": "172.0625", "--transform-inner-height": "95" } as React.CSSProperties}>
        <div className="flex-none rotate-[5deg]">
          <BackgroundBorderShadow11 />
        </div>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="h-[151.31px] mb-[-3px] relative shrink-0 w-full" data-name="Margin">
      <Container62 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] top-1/2 translate-y-[-50%]" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[11.6px] text-white tracking-[0.3px] uppercase">
        <p className="css-ew64yg leading-[18px]">Monthly Impact</p>
      </div>
    </div>
  );
}

function ParagraphBackground() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[2px] items-baseline leading-[0] left-[226.02px] not-italic px-[12px] py-[4px] rounded-[33554400px] text-[#1e2939] top-[calc(50%-3px)] translate-y-[-50%]" data-name="Paragraph+Background">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[10.1px]">
        <p className="css-ew64yg leading-[18px]">$5,500</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center opacity-70 relative shrink-0 text-[8.3px]">
        <p className="css-ew64yg leading-[13.5px]">/ mo</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[32px] mb-[-3px] relative shrink-0 w-full" data-name="Container">
      <Container63 />
      <ParagraphBackground />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col inset-px items-start overflow-clip pb-[3px]" data-name="Container">
      <Margin4 />
      <Container64 />
    </div>
  );
}

function OverlayBorderShadow2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[185.31px] relative rounded-[8px] shrink-0 w-[332.23px]" data-name="Overlay+Border+Shadow">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container65 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_0px_15px_0px_rgba(255,255,255,0.15)]" />
    </div>
  );
}

function OverlayBorderOverlayBlur2() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[6px] items-start max-w-[354.239990234375px] pb-[11px] pt-[10px] px-[11px] relative rounded-[16px] shrink-0 w-[354.23px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container34 />
      <OverlayBorderShadow2 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[-20px] right-0 top-0" data-name="Container">
      <OverlayBorderOverlayBlur />
      <OverlayBorderOverlayBlur1 />
      <OverlayBorderOverlayBlur2 />
    </div>
  );
}

function Margin5() {
  return (
    <div className="absolute h-[764.44px] left-[-70px] right-[859.34px] top-[15px]" data-name="Margin">
      <Container66 />
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 w-[126px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(255,255,255,0.8)] tracking-[0.85px] uppercase">
          <p className="css-ew64yg leading-[25.5px]">ROAS</p>
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0 w-[126px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white">
          <p className="css-ew64yg leading-[32px]">3.1x</p>
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="h-[24.01px] opacity-80 relative shrink-0 w-[126px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end justify-center relative size-full">
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[4.8px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[7.19px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[6px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[9.59px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[8.39px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[12px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[10.8px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[14.39px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur3() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[7.8px] items-start p-[17px] relative rounded-[16px] shrink-0 w-[160px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container67 />
      <Container68 />
      <Container69 />
    </div>
  );
}

function Container70() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <OverlayBorderOverlayBlur3 />
      <div className="absolute bg-[rgba(255,255,255,0.2)] bottom-[-18.15%] left-[calc(50%+0.5px)] top-[99.92%] translate-x-[-50%] w-px" data-name="Vertical Divider" />
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 w-[126px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(255,255,255,0.8)] tracking-[0.85px] uppercase">
          <p className="css-ew64yg leading-[25.5px]">CPA</p>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="relative shrink-0 w-[126px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white">
          <p className="css-ew64yg leading-[32px]">$23.4</p>
        </div>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="h-[24px] opacity-80 relative shrink-0 w-[126px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-end justify-center relative size-full">
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[14.39px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[12px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[13.19px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[9.59px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[10.8px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[7.19px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[8.39px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
        <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-[4.8px] min-h-px min-w-px rounded-tl-[4px] rounded-tr-[4px]" data-name="Overlay" />
      </div>
    </div>
  );
}

function OverlayBorderOverlayBlur4() {
  return (
    <div className="backdrop-blur-[4px] bg-[rgba(255,255,255,0.1)] content-stretch flex flex-col gap-[7.8px] items-start p-[17px] relative rounded-[16px] shrink-0 w-[160px]" data-name="Overlay+Border+OverlayBlur">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container71 />
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start justify-center left-[384.66px] right-[503.34px] top-[238.72px]" data-name="Container">
      <Container70 />
      <OverlayBorderOverlayBlur4 />
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white tracking-[1.2px] uppercase">
        <p className="css-ew64yg leading-[16px]">Next Gen of Marketing</p>
      </div>
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex gap-[8px] items-center opacity-80 relative shrink-0" data-name="Container">
      <div className="bg-white rounded-[33554400px] shrink-0 size-[6px]" data-name="Background" />
      <Container75 />
    </div>
  );
}

function Margin6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Margin">
      <Container76 />
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[32px] relative shrink-0" data-name="Heading 2:margin">
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[54px] not-italic relative shrink-0 text-[60px] text-white tracking-[-1.5px]">
        <p className="css-ew64yg mb-0">Let AI</p>
        <p className="css-ew64yg mb-0">Run Your</p>
        <p className="css-ew64yg">Ads</p>
      </div>
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#9f9fa9] text-[16px] w-full">
        <p className="css-4hzbpn leading-[normal]">work@email.com</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px mr-[-0.01px] overflow-clip py-[2px] relative" data-name="Input">
      <Container77 />
    </div>
  );
}

function Component4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Component 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Component 1">
          <path d="M4.16667 10H15.8333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66833" />
          <path d={svgPaths.p1ae0b780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66833" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[#1d1169] content-stretch flex items-center justify-center mr-[-0.01px] relative rounded-[33554400px] shrink-0 size-[40px]" data-name="Button">
      <Component4 />
    </div>
  );
}

function Form() {
  return (
    <div className="bg-white relative rounded-[33554400px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Form">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center pl-[24px] pr-[6.02px] py-[6px] relative w-full">
          <Input />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[660.66px] pl-[16px] right-[30.01px] top-[243.22px]" data-name="Container">
      <Margin6 />
      <Heading2Margin />
      <Form />
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[764.44px] max-w-[1152px] relative shrink-0 w-[1152px]" data-name="Container">
      <Margin5 />
      <Container74 />
      <Container78 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[#1d1169] content-stretch flex flex-col gap-[16px] items-center justify-center pb-[178.28px] pt-[186.28px] px-[24px] relative size-full" data-name="Section">
      <div className="absolute inset-[0_-7.15%_-1.45%_-3.58%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2126 1217.34">
          <g id="Component 1" opacity="0.4">
            <path d={svgPaths.p2671fa28} id="Vector" opacity="0.8" stroke="var(--stroke-0, white)" strokeWidth="1.02857" />
            <path d={svgPaths.p3d99f020} id="Vector_2" opacity="0.8" stroke="var(--stroke-0, white)" strokeWidth="1.02857" />
            <path d={svgPaths.p1f448c00} id="Vector_3" opacity="0.6" stroke="var(--stroke-0, white)" strokeDasharray="5.49 5.49" strokeWidth="0.685714" />
            <path d={svgPaths.p3e1f0e00} id="Vector_4" opacity="0.7" stroke="var(--stroke-0, white)" strokeDasharray="10.97 8.23" strokeWidth="0.685714" />
            <path d={svgPaths.p3b748800} id="Vector_5" opacity="0.6" stroke="var(--stroke-0, white)" strokeDasharray="6.86 10.97" strokeWidth="0.822857" />
            <path d={svgPaths.p3df07700} id="Vector_6" opacity="0.5" stroke="var(--stroke-0, white)" strokeWidth="0.685714" />
            <path d={svgPaths.p2c98eb80} id="Vector_7" opacity="0.4" stroke="var(--stroke-0, white)" strokeWidth="0.548571" />
            <path d={svgPaths.p2d1647c0} id="Vector_8" opacity="0.5" stroke="var(--stroke-0, white)" strokeDasharray="4.11 6.86" strokeWidth="0.685714" />
          </g>
        </svg>
      </div>
      <Container79 />
    </div>
  );
}