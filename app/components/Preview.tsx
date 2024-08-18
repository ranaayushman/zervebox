import Link from "next/link";

interface CardProps {
    imgsrc: string;
    title: string;
    size?: number;
}

const Preview: React.FC<CardProps> = ({
    imgsrc,
    title,
    size = 400,
}) => {
    return (
        <div
            className="relativ w-[260px] h-[220px] sm:w-[300px] sm:h-[260px] px-6 sm:px-0 will-change-transform"
        >
            <div className=" w-full h-full">
                <div className=" w-full h-full p-6 text-center rounded-xl">
                    <div className="flex flex-col h-full">
                        <div className="flex-shrink-0">
                            <Link href="https://play.google.com/store/apps/details?id=com.zervebox.app">
                                <img
                                    src={imgsrc}
                                    alt={title}
                                    width={size}
                                    height={size}
                                    className="mx-auto rounded-md"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Preview;