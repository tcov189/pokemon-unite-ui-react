import { BarLoader } from "react-spinners";

function UniteLoader({ loading }) {
    return (
        <div className="flex flex-col items-center">
            <p className="text-lg">Loading...</p>
            <BarLoader css={'display: block;'} loading={loading} height={8} />
        </div>
    )
}

export default UniteLoader
