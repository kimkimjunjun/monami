import Image from "next/image";
import Logo from "../icons/monami.jpg";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState({
        introduction: false,
        products: false,
        news: false,
        competition: false,
        support: false,
        purchase: false,
    });

    const handleMouseEnter = (key) => {
        setIsOpen((prev) => ({ ...prev, [key]: true }));
    };

    const handleMouseLeave = (key) => {
        setIsOpen((prev) => ({ ...prev, [key]: false }));
    };

    return (
        <div className="w-full h-20 border-b border-[#eaeaea]">
            <div className="flex w-[80%] h-20 mx-auto items-center space-x-20">
                <Image
                    src={Logo}
                    alt="로고"
                    width="180"
                    height="50"
                />
                <div>
                    <span className={`cursor-pointer hover:text-[#c40f39]`} onMouseEnter={() => handleMouseEnter("introduction")} onMouseLeave={() => handleMouseLeave("introduction")}>모나미소개</span>
                    <div className={`${isOpen.introduction ? "block transition-div" : "hidden"} absolute -ml-16 top-20 w-52 flex flex-col px-5 shadow-md text-center space-y-3 bg-white opacity-90`}>
                        <span className="mt-3">CEO 메시지</span>
                        <hr />
                        <span>회사정보</span>
                        <hr />
                        <span>회사연혁</span>
                        <hr />
                        <span>윤리강령</span>
                        <hr />
                        <span>투자정보</span>
                        <hr />
                        <span>CI</span>
                        <hr />
                        <span>채용정보</span>
                        <hr />
                        <span className="pb-4">찾아오시는 길</span>
                    </div>
                </div>
                <div>
                    <span className="cursor-pointer hover:text-[#c40f39]" onMouseEnter={() => handleMouseEnter("products")} onMouseLeave={() => handleMouseLeave("products")}>모나미제품</span>
                    <div className={`${isOpen.products ? "block" : "hidden"} absolute -ml-16 top-20 w-52 flex flex-col px-5 shadow-md text-center space-y-3 bg-white opacity-90`}>
                        <span className="mt-3">펜</span>
                        <hr />
                        <span>마카</span>
                        <hr />
                        <span>형광펜</span>
                        <hr />
                        <span>미술용품</span>
                        <hr />
                        <span>기타</span>
                        <hr />
                        <span className="pb-4">카탈로그</span>
                    </div>
                </div>
                <div>
                    <span className="cursor-pointer hover:text-[#c40f39]" onMouseEnter={() => handleMouseEnter("news")} onMouseLeave={() => handleMouseLeave("news")}>NEWS&VIDEO</span>
                    <div className={`${isOpen.news ? "block" : "hidden"} absolute -ml-16 top-20 w-52 flex flex-col px-5 shadow-md text-center space-y-3 bg-white opacity-90`}>
                        <span className="mt-3">보도자료</span>
                        <hr />
                        <span className="pb-4">동영상자료</span>
                    </div>
                </div>
                <div>
                    <span className="cursor-pointer hover:text-[#c40f39]" onMouseEnter={() => handleMouseEnter("competition")} onMouseLeave={() => handleMouseLeave("competition")}>모나미 미술대회</span>
                    <div className={`${isOpen.competition ? "block" : "hidden"} absolute -ml-16 top-20 w-52 flex flex-col px-5 shadow-md text-center space-y-3 bg-white opacity-90`}>
                        <span className="mt-3">미술대회 소개</span>
                        <hr />
                        <span className="pb-4">수상작 발표</span>
                    </div>
                </div>
                <div>
                    <span className="cursor-pointer hover:text-[#c40f39]" onMouseEnter={() => handleMouseEnter("support")} onMouseLeave={() => handleMouseLeave("support")}>고객지원</span>
                    <div className={`${isOpen.support ? "block" : "hidden"} absolute -ml-16 top-20 w-52 flex flex-col px-5 shadow-md text-center space-y-3 bg-white opacity-90`}>
                        <span className="mt-3">자주묻는질문</span>
                        <hr />
                        <span>문의하기</span>
                        <hr />
                        <span className="pb-4">이벤트</span>
                    </div>
                </div>
                <div>
                    <span className="cursor-pointer hover:text-[#c40f39]" onMouseEnter={() => handleMouseEnter("purchase")} onMouseLeave={() => handleMouseLeave("purchase")}>기업 구매/개발</span>
                    <div className={`${isOpen.purchase ? "block" : "hidden"} absolute -ml-16 top-20 w-52 flex flex-col px-5 shadow-md text-center space-y-3 bg-white opacity-90`}>
                        <span className="mt-3">대량 구매 문의</span>
                        <hr />
                        <span>기업 및 단체 구매</span>
                        <hr />
                        <span className="pb-4">산업용 맞춤 제품개발</span>
                    </div>
                </div>
                <div className="ml-auto">
                    <span className="mx-5 cursor-pointer">검색</span>
                    <span className="mx-5 cursor-pointer">메뉴</span>
                </div>
            </div>

        </div>
    );
}
