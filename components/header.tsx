import Image from "next/image";
import Logo from "../icons/monami.jpg";
import { useState } from "react";
import Dropdown from "./dropdown";

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
        // 모든 메뉴를 닫도록 설정
        const newMenuState = {
            introduction: false,
            products: false,
            news: false,
            competition: false,
            support: false,
            purchase: false,
        };
        // 현재 마우스로 선택한 메뉴만 열도록 설정
        newMenuState[key] = true;
        setIsOpen(newMenuState);
    };

    const handleMouseLeave = (key) => {
        setIsOpen((prev) => ({ ...prev, [key]: false }));
    };

    const handleHeaderMouseLeave = () => {
        setIsOpen({
            introduction: false,
            products: false,
            news: false,
            competition: false,
            support: false,
            purchase: false,
        });
    };

    return (
        <div className="w-full h-20 border-b border-[#eaeaea]" onMouseLeave={handleHeaderMouseLeave}>
            <div className="flex w-[80%] h-20 mx-auto justify-center items-center">
                <Image
                    src={Logo}
                    alt="로고"
                    width="180"
                    height="50"
                />
                <div className="mx-10">
                    <span className={`cursor-pointer hover:text-[#c40f39]`} onMouseEnter={() => handleMouseEnter("introduction")}>모나미소개</span>
                    <div className={`${isOpen.introduction ? "slide-fade-in-dropdown" : "hidden"} absolute -ml-16 top-32 w-52 flex flex-col px-5 shadow-md text-center space-y-3 bg-white opacity-90`}>
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
                <div className="mx-10 bg-white z-20">
                    <span className="cursor-pointer hover:text-[#c40f39] z-10 relative bg-white" onMouseEnter={() => handleMouseEnter("products")}>모나미제품</span>
                    <Dropdown visibility={isOpen.products}>
                        <ul className={`absolute -ml-16 top-32 w-52 flex flex-col px-5 shadow-md text-center space-y-3 bg-white opacity-90 z-0`} >
                            <li className="mt-3">펜</li>
                            <hr />
                            <li>마카</li>
                            <hr />
                            <li>형광펜</li>
                            <hr />
                            <li>미술용품</li>
                            <hr />
                            <li>기타</li>
                            <hr />
                            <li className="pb-4">카탈로그</li>
                        </ul>
                    </Dropdown>
                </div>
                <div className="mx-10">
                    <span className="cursor-pointer hover:text-[#c40f39]" onMouseEnter={() => handleMouseEnter("news")}>NEWS&VIDEO</span>
                    <div className={`${isOpen.news ? "block" : "hidden"} absolute -ml-12 top-32 w-52 flex flex-col px-5 shadow-md text-center space-y-3 bg-white opacity-90`}>
                        <span className="mt-3">보도자료</span>
                        <hr />
                        <span className="pb-4">동영상자료</span>
                    </div>
                </div>
                <div className="mx-10">
                    <span className="cursor-pointer hover:text-[#c40f39]" onMouseEnter={() => handleMouseEnter("competition")}>모나미 미술대회</span>
                    <div className={`${isOpen.competition ? "block" : "hidden"} absolute -ml-12 top-32 w-52 flex flex-col px-5 shadow-md text-center space-y-3 bg-white opacity-90`}>
                        <span className="mt-3">미술대회 소개</span>
                        <hr />
                        <span className="pb-4">수상작 발표</span>
                    </div>
                </div>
                <div className="mx-10">
                    <span className="cursor-pointer hover:text-[#c40f39]" onMouseEnter={() => handleMouseEnter("support")}>고객지원</span>
                    <div className={`${isOpen.support ? "block" : "hidden"} absolute -ml-16 top-32 w-52 flex flex-col px-5 shadow-md text-center space-y-3 bg-white opacity-90`}>
                        <span className="mt-3">자주묻는질문</span>
                        <hr />
                        <span>문의하기</span>
                        <hr />
                        <span className="pb-4">이벤트</span>
                    </div>
                </div>
                <div className="mx-10">
                    <span className="cursor-pointer hover:text-[#c40f39]" onMouseEnter={() => handleMouseEnter("purchase")}>기업 구매/개발</span>
                    <div className={`${isOpen.purchase ? "block" : "hidden"} absolute -ml-12 top-32 w-52 flex flex-col px-5 shadow-md text-center space-y-3 bg-white opacity-90`}>
                        <span className="mt-3">대량 구매 문의</span>
                        <hr />
                        <span>기업 및 단체 구매</span>
                        <hr />
                        <span className="pb-4">산업용 맞춤 제품개발</span>
                    </div>
                </div>
                <div className="ml-auto">
                    <span className="mx-5 cursor-pointer">검색</span>
                    <span className="ml-5 cursor-pointer">메뉴</span>
                </div>
            </div>

        </div>
    );
}
