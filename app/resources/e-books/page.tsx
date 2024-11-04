// pages/about.tsx
import React from "react";
import PageHeader from "@/components/page_header";
import pageheaderdefault from "../../images/pageheaderdefault.png"; // Corrected path for default image
import Image from "next/image";
import FooterNav from "@/components/footer";
import EbookCards from "./e-bool-cards";
import EbookCards2 from "./e-book-cards-2";
import JourneyComponent from "./journey";

const Page: React.FC = () => {
  return (
    <>
      <div className="pb-6">
      <PageHeader
        title="E-Books"
        description="Dive into LinkShield’s extensive library of eBooks, where we offer in-depth knowledge and cutting-edge research on the latest trends and best practices in software development and data privacy. Our eBooks provide valuable insights to help you navigate complex topics, enhance your strategies, and stay ahead in the rapidly evolving tech landscape."
        image={pageheaderdefault}
      />

      </div>
      <div className="bg-[#EFEFEF] h-auto pt-10 px-4 sm:px-8 md:px-16 lg:px-28 xl:px-[140px] ">
        <div className="flex flex-col items-start gap-6 self-stretch ">
          <span className="font-bold text-4xl text-black">
            Advanced Data Privacy Strategies
          </span>
          <span className="font-normal text-lg text-black max-w-prose">
            Our advanced data privacy strategies are designed to safeguard
            sensitive information with the highest level of protection.
          </span>
        </div>
        <div className="mt-6">
          <EbookCards />
        </div>
        <div className="flex flex-col items-start gap-6 self-stretch ">
          <span className="font-bold text-4xl text-black">
            Blog Modern Software Architectures And Development Strategies
            Streamline Your Development Process
          </span>
          <span className="font-normal text-lg text-black max-w-prose">
            Streamline Your Development Process
          </span>
        </div>
        <div className="mt-6">
          <EbookCards2 />
        </div>
        <div className="max-w-[768px] flex flex-col items-center gap-8 mx-auto p-4">
          <div className="w-36 h-14 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="141"
              height="56"
              viewBox="0 0 141 56"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M39.3202 16.75L27.8107 39.25H17L21.8167 29.925H21.6006C17.6269 35.0835 11.6979 38.4794 3.25 39.25V30.0541C3.25 30.0541 8.65431 29.7349 11.8314 26.3947H3.25V16.7502H12.8945V24.6826L13.111 24.6818L17.0521 16.7502H24.346V24.6323L24.5624 24.632L28.6514 16.75H39.3202Z"
                fill="black"
              />
              <path
                d="M102.083 36.7665H105.189V18.9375H102.083V36.7665Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M84.9592 36.5844C85.6342 36.8651 86.3207 37.0054 87.0186 37.0054C88.1714 37.0054 89.2031 36.7248 90.1133 36.1634C91.0234 35.6022 91.7289 34.8286 92.2296 33.8424C92.7302 32.8488 92.9804 31.7223 92.9804 30.4632C92.9804 29.2041 92.7226 28.0777 92.2068 27.084C91.6909 26.0904 90.9742 25.3205 90.0563 24.7744C89.1386 24.2206 88.0956 23.9476 86.9274 23.9552C86.1842 23.9552 85.4712 24.0993 84.7884 24.3875C84.1058 24.6758 83.5369 25.0854 83.0818 25.6163C83.0467 25.6567 83.0126 25.6976 82.9794 25.7388V18.9489H79.8619V36.7666H82.9567L82.9504 35.1021C83.0304 35.2002 83.1161 35.2961 83.2069 35.3898C83.6999 35.8981 84.2841 36.2962 84.9592 36.5844ZM88.1449 33.7059C87.6367 34.0169 87.0564 34.1724 86.4041 34.1724C85.7593 34.1724 85.1677 34.0131 84.6292 33.6946C84.0906 33.3683 83.6621 32.9247 83.3434 32.3633C83.0324 31.8021 82.8769 31.1648 82.8769 30.4518C82.8694 29.7388 83.0211 29.1017 83.3321 28.5404C83.6507 27.9715 84.0792 27.5316 84.6178 27.2206C85.1563 26.902 85.7518 26.7465 86.4041 26.7541C87.0564 26.7465 87.6367 26.8982 88.1449 27.2092C88.6607 27.5126 89.0551 27.9488 89.3282 28.5176C89.6088 29.0789 89.7492 29.7237 89.7492 30.4518C89.7492 31.1801 89.6088 31.8248 89.3282 32.3861C89.0551 32.9474 88.6607 33.3873 88.1449 33.7059Z"
                fill="black"
              />
              <path
                d="M43.8201 20.0184H47.3699L50.5454 31.6154L53.9236 20.0184H56.8818L60.5454 31.3827L63.5947 20.0184H66.8487L62.0473 36.7665H58.9867L55.2612 25.6645L51.8414 36.7665H48.7467L43.8201 20.0184Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M72.0913 37.0623C70.8548 37.0699 69.7398 36.7968 68.7462 36.2431C67.76 35.6818 66.9827 34.9043 66.4137 33.9106C65.8524 32.917 65.5718 31.783 65.5718 30.5086C65.5718 29.2723 65.86 28.1535 66.4365 27.1523C67.0129 26.151 67.7942 25.3697 68.7803 24.8084C69.7664 24.2471 70.8662 23.9665 72.0798 23.9665C73.4452 23.9665 74.6398 24.2699 75.6638 24.8767C76.6954 25.4835 77.4653 26.3444 77.9735 27.4595C78.4893 28.5669 78.6752 29.8374 78.531 31.271H68.7852C68.8124 31.8421 68.9549 32.3618 69.2127 32.8298C69.5009 33.3455 69.9029 33.7475 70.4186 34.0358C70.9345 34.324 71.5109 34.4681 72.1482 34.4681C72.6335 34.4605 73.0849 34.3771 73.502 34.2179C73.9193 34.051 74.2719 33.8273 74.5602 33.5465C74.856 33.2659 75.0647 32.9474 75.186 32.5909H78.44C78.2428 33.4631 77.8484 34.2406 77.2568 34.9233C76.665 35.5984 75.9218 36.1255 75.0266 36.5048C74.1317 36.884 73.1532 37.0699 72.0913 37.0623ZM69.224 28.1421C69.0423 28.4591 68.9163 28.8004 68.8462 29.1661H75.3065C75.2597 28.7041 75.117 28.2832 74.8788 27.9032C74.6057 27.4557 74.234 27.1105 73.7638 26.8678C73.2935 26.6175 72.7625 26.4924 72.1709 26.4924C71.5413 26.4924 70.9687 26.6365 70.4528 26.9247C69.937 27.2129 69.5274 27.6188 69.224 28.1421Z"
                fill="black"
              />
              <path
                d="M95.2678 24.2282C95.2678 23.2118 95.499 22.3092 95.9618 21.5203C96.4244 20.7239 97.073 20.1057 97.9074 19.6657C98.7493 19.2182 99.7316 18.9868 100.854 18.9717V21.7365C100.331 21.7441 99.8833 21.854 99.5116 22.0664C99.1475 22.2712 98.8669 22.5708 98.6696 22.9653C98.4881 23.3284 98.3901 23.7494 98.3758 24.2282H100.786V26.8565H98.3739V36.7665H95.2678V26.8565H93.2653V24.2282H95.2678Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M113.085 37.0395C111.818 37.0395 110.684 36.7626 109.683 36.209C108.689 35.6476 107.908 34.874 107.339 33.8878C106.778 32.8942 106.497 31.7678 106.497 30.5086C106.497 29.242 106.778 28.1117 107.339 27.1181C107.908 26.1168 108.689 25.3393 109.683 24.7856C110.684 24.2319 111.818 23.955 113.085 23.955C114.359 23.955 115.497 24.2319 116.498 24.7856C117.507 25.3393 118.292 26.113 118.853 27.1067C119.415 28.1003 119.699 29.2343 119.707 30.5086C119.699 31.7678 119.415 32.8942 118.853 33.8878C118.3 34.874 117.518 35.6476 116.509 36.209C115.501 36.7626 114.359 37.0395 113.085 37.0395ZM113.085 34.1837C113.752 34.1837 114.344 34.032 114.86 33.7286C115.376 33.4176 115.774 32.9852 116.054 32.4315C116.335 31.8702 116.475 31.2292 116.475 30.5086C116.475 29.7805 116.335 29.1357 116.054 28.5744C115.774 28.0131 115.376 27.5808 114.86 27.2774C114.344 26.9664 113.752 26.8109 113.085 26.8109C112.425 26.8109 111.837 26.9664 111.321 27.2774C110.813 27.5808 110.419 28.0131 110.138 28.5744C109.857 29.1357 109.721 29.7805 109.728 30.5086C109.728 31.2292 109.869 31.8702 110.149 32.4315C110.438 32.9852 110.832 33.4176 111.333 33.7286C111.841 34.032 112.425 34.1837 113.085 34.1837Z"
                fill="black"
              />
              <path
                d="M123.063 24.2282H119.604L123.348 36.7665H126.374L128.836 28.7583L131.494 36.7665H134.475L138.23 24.2282H135.101L132.971 32.0325L130.617 24.2282H127.591L125.249 32.2044L123.063 24.2282Z"
                fill="black"
              />
            </svg>
          </div>
          <span className="font-bold text-2xl text-center text-black">
            The ebooks provided by LinkShield have given us valuable insights
            into cybersecurity best practices. We now feel more confident in
            protecting our business from potential threats.
          </span>
          <div className="w-full max-w-xs flex flex-col items-center gap-4">
            <div className="flex flex-col items-center">
                
              <span className="font-semibold text-lg text-center text-black">
                Name Surname
              </span>
              <span className="font-normal text-lg text-center text-black">
                Position, Company name
              </span>
            </div>
          </div>
        </div>
       <div className="pb-6">
       <JourneyComponent />
       </div>
      </div>
      <div className="mt-6">
        <FooterNav />
      </div>
    </>
  );
};

export default Page;
