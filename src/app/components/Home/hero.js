import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div
        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
        bis_skin_checked="1"
      >
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium ">
          안녕하세요 이끽끼 입니다 !
          <br className="hidden lg:inline-block" />
          오늘도 빡공?!
        </h1>
        <p className="mb-8 leading-relaxed">
          국정감사 및 조사에 관한 절차 기타 필요한 사항은 법률로 정한다. 군인은
          현역을 면한 후가 아니면 국무총리로 임명될 수 없다.
          군인·군무원·경찰공무원 기타 법률이 정하는 자가 전투·훈련등 직무집행과
          관련하여 받은 손해에 대하여는 법률이 정하는 보상외에 국가 또는
          공공단체에 공무원의 직무상 불법행위로 인한 배상은 청구할 수 없다.
        </p>
        <div className="flex justify-center" bis_skin_checked="1">
          <Link href={"/project"}>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg dark:hover:bg-indigo-700 dark:bg-indigo-800">
              프로젝트 보러가기
            </button>
          </Link>
        </div>
      </div>
      <div
        className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6"
        bis_skin_checked="1"
      >
        <Animation />
      </div>
    </>
  );
}
