import { IoIosArrowForward } from "react-icons/io";


const Education = () => {
    return (
        <div id="education" className="">
            <h4 className="text-xl text-balance font-bold leading-tight">Education</h4>
            <div className="flex flex-col gap-5 py-4">
                <EducationCard college={"GIFT Univeristy"} timeline={"Present"} description={"Bachelor in Data Science"} />
                <EducationCard college={"KIPS College"} timeline={"2021 - 2023"} description={"Intermedite in Computer Science"} />
            </div>
        </div>
    )
}

export default Education

const EducationCard = ({ college, description, timeline }) => {
    return (
        <div className="flex cursor-pointer w-full flex-row group gap-4">
            <div>
                <div
                    className="size-[50px] text-white/30 bg-cover bg-center flex justify-center items-center rounded-full bg-white/10 border border-white/15">
                    {college[0]}
                </div>
            </div>
            <div className="space-y-2 w-full">
                <div className="flex flex-row justify-between items-start">
                    <div className="space-y-[1px]">
                        <h5 className="text-sm font-bold flex flex-row items-center">{college} <span><IoIosArrowForward className="group-hover:opacity-100  transition-all duration-300 group-hover:translate-x-1 opacity-0" strokeWidth={20} /></span></h5>
                    </div>
                    <div className="opacity-60 text-sm">{timeline}</div>
                </div>
                <div className="opacity-60 text-sm">{description}</div>
            </div>
        </div>
    )
}