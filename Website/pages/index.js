export default function Home() {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                    className="w-full"
                    src="https://tailwindcss.com/img/card-top.jpg"
                    alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Starzam</div>
                    <p className="text-grey-darker text-base">Oh hi.</p>
                </div>
            </div>
        </div>
    );
}
