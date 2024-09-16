import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
    return (
        <div className="w-full mx-auto max-w-7xl px-2 sm:px-7">
            {
                children
            }
        </div>
    );
}

export default Container;