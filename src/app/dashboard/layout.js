import SideBar from "./components/SideBar";

export default function layout({ children }) {
    return (
        <div className="grid grid-cols-12">
            <aside className="col-span-3">
                <SideBar />
            </aside>
            <main className="col-span-9">
                {children}
            </main>
        </div>
    )
}
