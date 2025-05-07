import Itxn from "./Itxn.jsx";
import RadicalGlobalCurrent from "./RadicalGlobalCurrent.jsx";
import RadicalGlobalPast from "./RadicalGlobalPast.jsx";

export const tabs = [
    {
        title: "Radical Global",
        value: "Radical Global",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"
            >
                <p>Radical Global</p>
                <RadicalGlobalCurrent />
            </div>
        ),
    },
    {
        title: "Itxn",
        value: "Itxn",
        content: (
            <div
                className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"
            >
                <p>Itxn Platform Pvt. Ltd</p>
                <Itxn />
            </div>
        ),
    },
    {
        title: "RG",
        value: "RG",
        content: (
            <div
                className="w-full overflow-visible relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"
            >
                <p>Radical Global</p>
                <RadicalGlobalPast />
            </div>
        ),
    },
];