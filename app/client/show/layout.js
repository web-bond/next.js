import "./style.css";

export const metadata = {
    title: "Show Title",
    description: "Show description",
};

export default function ShowLayout({ children }) {
    return (
        <div className="show-layout">
            {/* Например, здесь можно разместить общий Header, Sidebar и т.д. */}
            {children}
        </div>
    );
}
