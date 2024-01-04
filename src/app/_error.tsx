import Link from 'next/link';

const Custom500 = () => {
    return (
        <div>
            <h1>500 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link href="/">
                <span>Go back to home</span>
            </Link>
        </div>
    );
};

export default Custom500;
