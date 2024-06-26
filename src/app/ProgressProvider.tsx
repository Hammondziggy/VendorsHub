'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
type Props = {children?: React.ReactNode;};

const ProgressProvider = ({ children }: Props) => {
    return (
        <>
            {children}
            <ProgressBar
                height="3px"
                color="#00bfff"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default ProgressProvider;