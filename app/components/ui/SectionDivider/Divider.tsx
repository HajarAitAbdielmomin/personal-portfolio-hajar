import React from "react";
export const Divider: React.FC = () => {
    return (
        <>
            <div className="flex items-center mb-20">
                <div className="flex-grow border-t-2 border-gray-300"></div>
                <div className="mx-4">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div></div>
                <div className="flex-grow border-t-2 border-gray-300"></div>
            </div>
        </>
    )
}
