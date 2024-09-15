import React from "react";

interface ContainerProps {
    children: React.ReactNode;
}

function Container({ children }: ContainerProps) {
    return (
        <div className="w-full mx-auto">
            {
                children
            }
        </div>
    );
}

export default Container;